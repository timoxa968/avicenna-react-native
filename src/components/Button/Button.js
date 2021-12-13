import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Button({onPress, value}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

export default Button;
