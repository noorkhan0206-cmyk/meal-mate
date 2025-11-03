import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Defs, LinearGradient, Stop, Path, Rect } from 'react-native-svg';

interface MealMateLogoProps {
  size?: number;
  showText?: boolean;
}

const MealMateLogo: React.FC<MealMateLogoProps> = ({ size = 100, showText = true }) => {
  const iconSize = size;
  const textSize = size * 0.35;

  return (
    <View style={styles.container}>
      {/* Logo Icon with gradient */}
      <Svg width={iconSize} height={iconSize} viewBox="0 0 100 100">
        <Defs>
          <LinearGradient id="yellowBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#B4C7BE" stopOpacity="1" />
            <Stop offset="50%" stopColor="#7FA89A" stopOpacity="1" />
            <Stop offset="100%" stopColor="#4A7C7E" stopOpacity="1" />
          </LinearGradient>
        </Defs>
        
        {/* Rounded square background */}
        <Rect
          x="10"
          y="10"
          width="80"
          height="80"
          rx="20"
          fill="url(#yellowBlueGradient)"
        />
        
        {/* Fork */}
        <Path
          d="M 30 25 L 30 50 Q 30 55 35 55 L 35 75 Q 35 78 38 78 Q 41 78 41 75 L 41 55 Q 46 55 46 50 L 46 25 M 32 25 L 32 45 M 38 25 L 38 45 M 44 25 L 44 45"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Spoon */}
        <Path
          d="M 60 25 Q 60 32 65 35 Q 70 32 70 25 L 70 25 Q 70 20 65 20 Q 60 20 60 25 M 65 35 L 65 75 Q 65 78 68 78 Q 71 78 71 75 L 71 35"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>

      {/* Text Logo */}
      {showText && (
        <Text style={[styles.logoText, { fontSize: textSize }]}>
          <Text style={styles.gradientText}>Mealmate.</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontWeight: '800',
    marginTop: 16,
    letterSpacing: -0.5,
  },
  gradientText: {
    color: '#4A7C7E', // Fallback color (will be gradient in actual implementation)
  },
});

export default MealMateLogo;
