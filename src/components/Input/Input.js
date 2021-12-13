import * as React from 'react';
import {StyleSheet, TextInput} from 'react-native';

function Input({value, placeholder}) {
  const [text, onChangeText] = React.useState('Заголовок');
  return (
    <TextInput
      style={styles.input}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
