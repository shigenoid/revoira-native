import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Modal, 
  PanResponder,
  Animated,
  TextInput,
  Easing,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { styles } from './styles/RedeemModal';

type RedeemModalProps = {
  visible: boolean;
  onClose: () => void;
};

const RedeemModal: React.FC<RedeemModalProps> = ({ visible, onClose }) => {
    const [code, setCode] = useState('');
    const slideAnim = useRef(new Animated.Value(500)).current;
    const panY = useRef(new Animated.Value(0)).current;
    
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        panY.setValue(gestureState.dy > 0 ? gestureState.dy : 0);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 50) {
          handleClose();
        } else {
          Animated.spring(panY, {
            toValue: 0,
            useNativeDriver: true
          }).start();
        }
      }
    });

    const handleClose = () => {
      Animated.timing(slideAnim, {
        toValue: 500,
        duration: 300,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }).start(onClose);
    };

    useEffect(() => {
      if (visible) {
        panY.setValue(0);
        slideAnim.setValue(500);
        
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 300,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }).start();
      }
    }, [visible]);
      
    const combinedTranslateY = Animated.add(
      panY,
      slideAnim
    ).interpolate({
      inputRange: [-500, 0, 500],
      outputRange: [-500, 0, 500],
      extrapolate: 'clamp',
    });

    const handleVerify = () => {
        Alert.alert(
            "Success",
            "Code redeemed successfully!",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
        );
    };

    return (
      <Modal
        transparent={true}
        visible={visible}
        animationType="none"
        onRequestClose={handleClose}
      >
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={handleClose}>
            <View style={styles.overlayTouchArea} />
          </TouchableWithoutFeedback>
          
          <Animated.View
            style={[
              styles.modalContainer,
              { transform: [{ translateY: combinedTranslateY }] }
            ]}
            {...panResponder.panHandlers}
          >
            <View style={styles.dragHandle} />
            <FontAwesome 
              name="gift" 
              size={85} 
              color="white" 
              style={styles.redeemIcon}
            />

            <Text style={styles.title}>Redeem the code you received here!</Text>

            <TextInput
              style={styles.input}
              placeholder="eg. PB59129"
              placeholderTextColor="rgba(255,255,255,0.2)"
              value={code}
              onChangeText={setCode}
            />

            <TouchableOpacity>
              <Text style={styles.helpText}>How do I get a redeem code?</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity 
                style={styles.verifyButton}
                onPress={handleVerify}
            >
              <FontAwesome 
                name="check-circle" 
                size={20} 
                color="white" 
                style={styles.buttonIcon}
              />
              <Text style={styles.verifyText}>Verify Code</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    );
};

export default RedeemModal;