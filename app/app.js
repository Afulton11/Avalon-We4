import React from 'react';
import {
  Easing,
  Animated,
} from 'react-native';
import {
  DrawerNavigator,
  StackNavigator
} from 'react-navigation';
import {withRkTheme} from 'react-native-ui-kitten';
import {NavBar} from './components/index';
import transition from './config/navigation/transitions';
import * as Screens from './screens';
import track from './config/analytics';
import {bootstrap} from './config/bootstrap';
import {data} from './data'

bootstrap();
data.populateRealm();

function getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
}

let ThemedNavigationBar = withRkTheme(NavBar);

const KittenApp = StackNavigator({
  First: {
    screen: Screens.SplashScreen,
    navigationOptions: {
      header: () => null
    },
  },
  CharacterList: {
    screen: Screens.CharacterList
  },
  Character: {
    screen: Screens.Character
  }

}, {
  initialRouteName: 'CharacterList',
  cardStyle: {backgroundColor: 'transparent'},
  headerMode: 'float',
  transitionConfig: () => ({
    transitionSpec: {
      duration: 150,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const height = layout.initHeight;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [height, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
  // cardStyle: {backgroundColor: 'transparent'},
  // transitionConfig: transition,
  // navigationOptions: ({navigation, screenProps}) => ({
  //   gesturesEnabled: true,
  //   header: (headerProps) => {
  //     return <ThemedNavigationBar navigation={navigation} headerProps={headerProps}/>
  //   }
  // })
});


export default () => (
  <KittenApp
    onNavigationStateChange={(prevState, currentState) => {
      const currentScreen = getCurrentRouteName(currentState);
      const prevScreen = getCurrentRouteName(prevState);

      if (prevScreen !== currentScreen) {
        track(currentScreen);
      }
    }}
  />
);
