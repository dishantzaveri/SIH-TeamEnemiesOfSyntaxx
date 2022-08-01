/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import VideoCall from './src/components/App/VideoCall';
import Router from './src/Router';

AppRegistry.registerComponent(appName, () =>Router);
