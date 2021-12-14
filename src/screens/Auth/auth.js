import axios from 'axios';
import React, {useState} from 'react';
import {View, Image, Modal, StyleSheet} from 'react-native';
import Logo from '../../assets/Images/Auth-logo.png';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {WebView} from 'react-native-webview';
// import aituBridge from '@btsd/aitu-bridge';

// async function getData() {
//   try {
//     // invoke method
//     const data = await aituBridge.getMe();
//     // handle data
//   } catch (e) {
//     // handle error
//     console.log(e);
//   }
// }

function Auth() {
  const [modalVisible, setModalVisible] = useState(false);
  const auth =
    'https://passport.aitu.io/oauth2/auth?response_type=code&client_id=453c31f3-15ed-45e2-a8de-5f2d832112bd&scope=openid%20phone%20id_card_manual&redirect_uri=https://test.avicenna.online/login.xhtml&state=12345678';
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={styles.logo} source={Logo} />
      <Input placeholder={'Введите ИИН'} />
      <Button
        value={'Войти через AITU'}
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flex: 1}}>
          <WebView
            onNavigationStateChange={WebViewState =>
              this._onNavigationStateChange(WebViewState)
            }
            source={{
              uri: auth,
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    maxWidth: 350,
    maxHeight: 320,
  },
});

export default Auth;
