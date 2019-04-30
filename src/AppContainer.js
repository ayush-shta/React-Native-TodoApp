import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from 'react-native-screens';
import { MenuProvider } from 'react-native-popup-menu';

import TodoList from './components/TodoList'
import Detail from './components/Detail'

useScreens();

const AppNavigator = createStackNavigator({
    Home: {
        screen: TodoList
    },
    Detail: {
        screen: Detail
    }
},
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#03A9F4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },

);

const NavigationContainer = createAppContainer(AppNavigator);

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