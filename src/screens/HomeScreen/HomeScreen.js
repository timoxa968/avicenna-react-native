import * as React from 'react';
import {View, Text, Button} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home asd123Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Auth')}
      />
    </View>
  );
}
export default HomeScreen;
