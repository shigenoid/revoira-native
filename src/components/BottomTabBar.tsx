import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles/BottomTabBar';

interface BottomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const scaleValues = useRef(state.routes.map(() => new Animated.Value(1))).current;
  const opacityValues = useRef(state.routes.map(() => new Animated.Value(0.5))).current;
  const translateYValues = useRef(state.routes.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    state.routes.forEach((route: any, index: number) => {
      const isFocused = state.index === index;

      Animated.spring(scaleValues[index], {
        toValue: isFocused ? 1.1 : 1,
        useNativeDriver: true,
        bounciness: 0,
      }).start();

      Animated.spring(opacityValues[index], {
        toValue: isFocused ? 1 : 0.5,
        useNativeDriver: true,
        bounciness: 0,
      }).start();

      if (route.name === 'Connect') {
        Animated.spring(translateYValues[index], {
          toValue: isFocused ? -25 : -10,
          useNativeDriver: true,
          bounciness: 6,
        }).start();
      }
    });
  }, [state.index]);

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        let iconName: string;
        if (route.name === 'Home') iconName = 'home';
        else if (route.name === 'Connect') iconName = 'qrcode';
        else iconName = 'user';

        const isConnect = route.name === 'Connect';

        const animatedStyle = {
          transform: [{ translateY: isConnect ? translateYValues[index] : new Animated.Value(0) }],
        };

        const buttonStyle = [
          styles.tabButton,
          isConnect && styles.connectButton,
        ];

        return (
          <Animated.View key={route.key} style={animatedStyle}>
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={buttonStyle}
              activeOpacity={0.7}
            >
              <Animated.View style={{
                transform: [{ scale: scaleValues[index] }],
                opacity: opacityValues[index],
                alignItems: 'center',
              }}>
                <FontAwesome name={iconName} size={24} color="#fff" style={styles.icon} />
                <Animated.Text style={[
                  styles.label,
                  {
                    opacity: opacityValues[index],
                    transform: [{ scale: scaleValues[index] }],
                  },
                ]}>
                  {route.name}
                </Animated.Text>
              </Animated.View>

              {/* Always-visible green full-width bottom border */}
              {isConnect && (
                <View style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  backgroundColor: '#64FF60',
                  borderBottomLeftRadius: 30,
                  borderBottomRightRadius: 30,
                }} />
              )}
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
