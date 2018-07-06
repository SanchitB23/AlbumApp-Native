/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * https://rallycoding.com/blog/troubleshooting-react-native-startup/
 * @flow
 */

import React, { } from 'react';
import
{
  View,
} from 'react-native';

import Header from './src/components/Header.js';
import AlbumList from './src/components/AlbumList.js';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);
export default App;
