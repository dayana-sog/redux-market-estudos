import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Feather } from '@expo/vector-icons';
import { withBadge, Icon } from 'react-native-elements';

import { useSelector } from 'react-redux';

import HomeScreen from '../../pages/Home';
import CartScreen from '../../pages/Cart';

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: AntDesign,
    name: 'home'
  },

  Cart: {
    lib: AntDesign,
    name: 'shoppingcart'
  },

  Favorites: {
    lib: AntDesign,
    name: 'heart'
  },

  Idea: {
    lib: Feather,
    name: 'bell'
  },

  User: {
    lib: AntDesign,
    name: 'user'
  }

};

const BottomTabNav = () => {
  const cartSize = useSelector(state => state.cart.length);
  const Badge = withBadge(cartSize)(Icon);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {

          const { lib: Icon, name } = icons[route.name];

          if (name === 'shoppingcart' && cartSize !== 0) {
            return <Badge type="ionicon" color={color} name="md-cart" size={24} />
          }

          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, .4)'
        },
        activeTintColor: '#ed4d17',
        inactiveTintColor: '#92929c',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Favorites" component={CartScreen} />
      <Tab.Screen name="Idea" component={CartScreen} />
      <Tab.Screen name="User" component={CartScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNav;