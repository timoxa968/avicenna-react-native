import axios from 'axios';
import * as React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import aituBridge from '@btsd/aitu-bridge';

async function getData() {
  try {
    const result = aituBridge.supports('openSettings');
    console.log(result);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
}

function Auth() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth Screen</Text>
      <Input placeholder={'Введите ИИН'} />
      <Button value={'Текст кнопки'} onPress={getData} />
    </View>
  );
}
export default Auth;
