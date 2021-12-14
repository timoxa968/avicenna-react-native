import * as React from 'react';
import {View, Text} from 'react-native';
import Button from '../../components/Button/Button';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      loading: false,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Главная страница</Text>
        <Button
          style={{margin: 50}}
          value="Авторизация"
          onPress={() => navigation.navigate('Auth')}
        />
      </View>
    );
  }
}

export default HomeScreen;
