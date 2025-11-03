import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface InfoRowProps {
  label: string;
  value: string;
  labelColor?: string;
  valueColor?: string;
}

export const InfoRow: React.FC<InfoRowProps> = ({
  label,
  value,
  labelColor = '#2C3E50',
  valueColor = '#7F8C8D',
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      <Text style={[styles.value, { color: valueColor }]}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    width: 100,
    letterSpacing: 0.2,
  },
  value: {
    fontSize: 16,
    flex: 1,
    fontWeight: '400',
  },
});
