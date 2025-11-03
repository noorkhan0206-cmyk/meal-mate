import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  required?: boolean;
  helperText?: string;
  labelColor?: string;
  inputBackgroundColor?: string;
  inputTextColor?: string;
  helperTextColor?: string;
  error?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  required = false,
  helperText,
  labelColor = '#2C3E50',
  inputBackgroundColor = '#F8F9FA',
  inputTextColor = '#2C3E50',
  helperTextColor = '#7F8C8D',
  error,
  ...textInputProps
}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, { color: labelColor }]}>
        {label}
        {required && <Text style={styles.required}> *</Text>}
      </Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: inputBackgroundColor,
            color: inputTextColor,
          },
          error && styles.inputError,
        ]}
        value={value}
        onChangeText={onChangeText}
        {...textInputProps}
      />
      {helperText && (
        <Text style={[styles.helperText, { color: helperTextColor }]}>
          {helperText}
        </Text>
      )}
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
    letterSpacing: 0.2,
  },
  required: {
    color: '#FF5C58',
  },
  input: {
    borderRadius: 16,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
    fontWeight: '400',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  inputError: {
    borderColor: '#FF5C58',
  },
  helperText: {
    fontSize: 13,
    marginTop: 6,
    fontWeight: '400',
  },
  errorText: {
    fontSize: 13,
    marginTop: 6,
    color: '#FF5C58',
    fontWeight: '500',
  },
});
