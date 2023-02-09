/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text } from 'react-native';
import Config from 'react-native-config';

function App(): JSX.Element {
  return <Text>{'\n' + Config.API_URL}</Text>;
}

export default App;
