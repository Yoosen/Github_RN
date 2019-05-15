/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";
import PopularPage from '../page/PopularPage';
import TrendingPage from '../page/TrendingPage';
import FavoritePage from '../page/FavoritePage';
import MyPage from '../page/MyPage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavigationUtil from '../navigator/NavigationUtil';
import {
  BottomTabBar
} from 'react-navigation-tabs';

const TABS = {
  PopularPage: {
    screen: PopularPage,
    navigationOptions: {
      tabBarLabel: "首页",
      tabBarIcon: ({
        tintColor,
        focused
      }) => ( <
        AntDesign name = {
          'home'
        }
        size = {
          26
        }
        style = {
          {
            color: tintColor
          }
        }
        />
      ),
    }
  },
  TrendingPage: {
    screen: TrendingPage,
    navigationOptions: {
      tabBarLabel: "问医生",
      tabBarIcon: ({
        tintColor,
        focused
      }) => ( <
        MaterialCommunityIcons name = {
          'doctor'
        }
        size = {
          26
        }
        style = {
          {
            color: tintColor
          }
        }
        />
      ),
    }
  },
  FavoritePage: {
    screen: FavoritePage,
    navigationOptions: {
      tabBarLabel: "家人",
      tabBarIcon: ({
        tintColor,
        focused
      }) => ( <
        AntDesign name = {
          'addusergroup'
        }
        size = {
          26
        }
        style = {
          {
            color: tintColor
          }
        }
        />
      ),
    }
  },
  MyPage: {
    screen: MyPage,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({
        tintColor,
        focused
      }) => ( <
        MaterialCommunityIcons name = {
          'face-profile'
        }
        size = {
          26
        }
        style = {
          {
            color: tintColor
          }
        }
        />
      ),
    }
  }
}

type Props = {};
export default class DynamicTabNavigator extends Component < Props > {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
  }
  _tabNavigator() {
    const {
      PopularPage,
      TrendingPage,
      FavoritePage,
      MyPage
    } = TABS;
    const tabs = {
      PopularPage,
      TrendingPage,
      FavoritePage,
      MyPage
    }; //根据需要定制显示的tab
    PopularPage.navigationOptions.tabBarLabel = '首页'; //动态配置页面属性
    return createAppContainer(createBottomTabNavigator(tabs, {
      tabBarComponent: TabBarComponent
    }));
  }
  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    return <Tab / >
  }
}

class TabBarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.theme = {
      tintColor: props.activeTintColor,
      updateTime: new Date().getTime(),
    }
  }
  render() {
    return <BottomTabBar {
        ...this.props
    }
    activeTintColor = {
      this.theme.tintColor || this.props.activeTintColor
    }
    />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});