import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import NavigationContainer from './route';



const AppContainer = () => (<MenuProvider><NavigationContainer /></MenuProvider>);

export default AppContainer;