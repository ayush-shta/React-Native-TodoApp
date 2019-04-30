import { createStackNavigator, createAppContainer } from "react-navigation";
import { useScreens } from 'react-native-screens';

import TodoList from './screens/TodoList'
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


export default NavigationContainer;
