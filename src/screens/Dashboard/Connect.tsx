import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles/Connect';

const API_BASE_URL = "https://revoira.vercel.app"; // Replace with your actual API URL

export default function ConnectScreen() {
  const [facing, setFacing] = useState<'front' | 'back'>('back'); // ✅ FIXED
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    requestPermission();
  }, []);

  const checkSessionStatus = async (): Promise<boolean | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/session-status`);
      const data = await response.json();
      return data.turnOn;
    } catch (error) {
      console.error("Error checking session:", error);
      return null;
    }
  };

  const handleValidScan = async () => {
    const isSessionActive = await checkSessionStatus();

    if (isSessionActive === null) {
      alert("Failed to check session status.");
      return;
    }

    if (isSessionActive) {
      alert("A session is already running. Please wait before scanning again.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/start-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (data.success) {
        alert("Connected with Revoira!");
        setTimeout(checkSessionStatus, 1000);
      } else {
        alert("Failed to start session.");
      }
    } catch (error) {
      console.error("Error starting session:", error);
      alert("Failed to start session. Try again.");
    }
  };

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    if (data === "FreeMyBoyBuckley") {
      handleValidScan();
    }
  };

  if (!permission?.granted) {
    return (
      <View style={styles.container}>
        <Text>We need your permission to show the camera</Text>
      </View>
    );
  }

  const cornerStyles: Record<'tl' | 'tr' | 'bl' | 'br', any> = {
    tl: styles.tl,
    tr: styles.tr,
    bl: styles.bl,
    br: styles.br,
  };

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFill}
        facing={facing} // ✅ This will now work with 'back'
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
      >
        <View style={styles.overlay}>
          <View style={styles.frameContainer}>
            {(['tl', 'tr', 'bl', 'br'] as const).map((corner) => (
              <View key={corner} style={[styles.corner, cornerStyles[corner]]} />
            ))}
          </View>

          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.6)']}
            style={styles.gradient}
          />

          {scanned && (
            <TouchableOpacity onPress={() => setScanned(false)}>
              <Text style={styles.rescanText}>Tap to Scan Again</Text>
            </TouchableOpacity>
          )}
        </View>
      </CameraView>
    </View>
  );
}
