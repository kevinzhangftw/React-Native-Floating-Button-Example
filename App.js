import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

const actions = [{
  text: 'Accessibility',
  icon: require('./images/close-round.png'),
  name: 'bt_accessibility',
  position: 1
}];

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <FloatingAction
          actions={actions}
          overrideWithAction
          color={'white'}
          iconWidth={20}
          iconHeight={20}
          onPressItem={
            (name) => {
              Alert.alert('Icon pressed', `the icon ${name} was pressed`);
            }
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
