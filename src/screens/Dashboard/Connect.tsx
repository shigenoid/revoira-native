import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { LinearGradient } from 'expo-linear-gradient';

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

const size = 250;
const borderLength = 30;
const borderWidth = 4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameContainer: {
    width: size,
    height: size,
    position: 'relative',
  },
  corner: {
    width: borderLength,
    height: borderLength,
    borderColor: 'white',
    position: 'absolute',
    borderRadius: 4,
  },
  tl: {
    top: 0,
    left: 0,
    borderTopWidth: borderWidth,
    borderLeftWidth: borderWidth,
  },
  tr: {
    top: 0,
    right: 0,
    borderTopWidth: borderWidth,
    borderRightWidth: borderWidth,
  },
  bl: {
    bottom: 0,
    left: 0,
    borderBottomWidth: borderWidth,
    borderLeftWidth: borderWidth,
  },
  br: {
    bottom: 0,
    right: 0,
    borderBottomWidth: borderWidth,
    borderRightWidth: borderWidth,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    height: 200,
    width: Dimensions.get('window').width,
  },
  rescanText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
});
