import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  StatusBar,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Insight from './TabScreens/Insight';
import Client from './TabScreens/Client';
import Teams from './TabScreens/Teams';
const TopTab = createMaterialTopTabNavigator();
export default function Profile({props}) {
  const navigation = () => {};
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <View
          style={{
            // flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={[
              {
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                // backgroundColor: 'red',
                height: 100,
                width: 100,
                padding: 10,
                borderColor: '#fff',
                borderWidth: 1,
              },
            ]}>
            <Image
              source={require('../../src/Images/img.jpg')}
              style={{
                resizeMode: 'contain',
                height: 95,
                width: 95,
                borderRadius: 47.5,
              }}></Image>
          </View>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Users Name </Text>
          <View
            style={{
              width: 100,
              height: 2,
              backgroundColor: '#00ffff',
              marginTop: 10,
            }}></View>
          <Text style={{fontSize: 15, fontWeight: '300'}}>Location </Text>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Pressable
              style={[styles.editButton]}
              //   onPress={() => props.navigation.navigate('edit')}
            ></Pressable>
          </View>
        </View>
      </View>
      <View style={{flex: 1}}>
        <NavigationContainer independent={true}>
          <TopTab.Navigator
            initialRouteName={'Insight'}
            tabBarOptions={{
              activeTintColor: 'black',
              inactiveTintColor: 'gray',
              labelStyle: styles.tabText,
              style: {backgroundColor: '#00ffff'},
              indicatorStyle: {backgroundColor: '#7fffd4'},
            }}
            backBehavior="none">
            <TopTab.Screen
              name="Insight"
              children={() => (
                //  alert("progress")
                <Insight navigation={navigation} />
              )}
              options={{tabBarLabel: 'Insight'}}
            />
            <TopTab.Screen
              name="Client"
              component={Client}
              options={{tabBarLabel: 'Client'}}
            />
            <TopTab.Screen
              name="Teams"
              children={() => (
                // alert("hi")
                <Teams navigation={navigation} />
              )}
              options={{tabBarLabel: 'Teams'}}
            />
          </TopTab.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 200,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 12,
    // backgroundColor: 'red',
    backgroundColor: '#add8e6',
  },
  tabText: {
    //   fontFamily: "SFProText-Medium",
    fontSize: 14,
    textTransform: 'none',
  },
  editButton: {
    //   backgroundColor: global.COLOR.BACKGROUND,
    position: 'absolute',
    right: 1,
  },
});
