import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import NavigationContainer from './route';

class AppContainer extends Component {
    render() {
        return (
            <MenuProvider >
                <NavigationContainer />
            </MenuProvider >
        );
    }
}

export default AppContainer;