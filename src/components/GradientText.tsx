import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface GradientTextProps {
  children: React.ReactNode;
  style?: any;
}

// Simple gradient text using color (fallback approach)
// For true gradient text, you would need @react-native-masked-view/masked-view
const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  style 
}) => {
  return (
    <Text style={[styles.text, { color: '#5DADE2' }, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
  },
});

export default GradientText;
