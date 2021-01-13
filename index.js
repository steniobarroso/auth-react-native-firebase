/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import auth from '@react-native-firebase/auth';

AppRegistry.registerComponent(appName, () => App);
