import * as React from 'react';
import * as Location from "expo-location"
import {Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2E6E1',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    justifyContent: 'center',
    padding: 8,
  }
});

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSION.LOCATION,
            {
                title: 'Location Permission Request',
                message: 'Allow The App To Have Access To Your Location To Display The Weather.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        };
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location Granted');
        } else {
            console.log('Permission Denied');
            return;
        }
    } catch (err) {
        return;
    }
};
