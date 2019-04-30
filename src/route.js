import { createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from 'react-native-screens';

import TodoList from './screens/TodoList'
import Detail from './screens/Detail'
import Color from './constants/Color'

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
                backgroundColor: Color.APP_THEME,
            },
            headerTintColor: Color.WHITE,
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    },

);

const NavigationContainer = createAppContainer(AppNavigator);


export default NavigationContainer;
