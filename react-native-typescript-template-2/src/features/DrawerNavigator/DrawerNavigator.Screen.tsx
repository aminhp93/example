import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ProfileScreen from '../Profile/Profile.Screen';
import FollowerScreen from '../Follower/Follower.Screen';
import MessageScreen from '../Message/Message.Screen';
import UsersScreen from '../Users/Users.Screen';
import LoginScreen from '../Login/Login.Screen';
import {useDispatch, useSelector} from 'react-redux';
import LogoutScreen from '../Logout/Logout.Screen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const authUser = useSelector((state: any) => state.authUser);

  const isLoggedIn = authUser.username && authUser.password;

  return (
    <Drawer.Navigator>
      {isLoggedIn ? (
        <>
          <Drawer.Screen name="Profile" component={ProfileScreen} />
          <Drawer.Screen name="Follower" component={FollowerScreen} />
          <Drawer.Screen name="Message" component={MessageScreen} />
          <Drawer.Screen name="Users" component={UsersScreen} />
          <Drawer.Screen name="Logout" component={LogoutScreen} />
        </>
      ) : (
        <Drawer.Screen name="Login" component={LoginScreen} />
      )}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
