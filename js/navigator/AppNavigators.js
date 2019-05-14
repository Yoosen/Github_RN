import {createStackNavigator, createMaterialTopTabNavigator, createBottomTabNavigator, createSwitchNavigator, createAppContainer} from "react-navigation";

import WelcomePage from '../page/WelcomePage';
import HomePage from '../page/HomePage';
import DetailPage from '../page/DetailPage';

const InitNavigator = createStackNavigator({
    WelcomePage:{
        screen: WelcomePage,
        navigationOptions:{
            header: null, //将header设置为null，禁用createStackNavigator的Navigation Bar，全                    屏显示
        }
    }
});

const MainNavigator = createStackNavigator({
    HomePage:{
        screen: HomePage,
        navigationOptions:{
            header: null, //将header设置为null，禁用createStackNavigator的Navigation Bar，全                    屏显示
        }
    },
    DetailPage:{
        screen: DetailPage,
        navigationOptions:{
            // header: null, //将header设置为null，禁用createStackNavigator的Navigation Bar，全                    屏显示
        }
    }
});

const switchNavigator =  createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
},{
    navigationOptions:{
        header: null, //将header设置为null，禁用createStackNavigator的Navigation Bar，全                    屏显示
    }
});

export default createAppContainer(switchNavigator);