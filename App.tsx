import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import RoleSelectionScreen from './src/screens/RoleSelectionScreen';

import LoginMahasiswaScreen from './src/mahasiswa/LoginMahasiswaScreen';
import RegisterMahasiswaScreen from './src/mahasiswa/RegisterMahasiswaScreen';
import LupaPasswordMahasiswa from './src/mahasiswa/LupaPasswordMahasiswa';
import VerifikasiOTPMahasiswa from './src/mahasiswa/VerifikasiOTPMahasiswa';
import VerifikasiOTPLupaPasswordMahasiswa from './src/mahasiswa/VerifikasiOTPLupaPasswordMahasiswa';
import ResetPasswordMahasiswa from './src/mahasiswa/ResetPasswordMahasiswa';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false,
        }}>

        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
        />

        <Stack.Screen
          name="LoginMahasiswa"
          component={LoginMahasiswaScreen}
        />

        <Stack.Screen
          name="RegisterMahasiswa"
          component={RegisterMahasiswaScreen}
        />

        <Stack.Screen
          name="LupaPasswordMahasiswa"
          component={LupaPasswordMahasiswa}
        />

        <Stack.Screen
          name="VerifikasiOTPMahasiswa"
          component={VerifikasiOTPMahasiswa}
        />

        <Stack.Screen
          name="VerifikasiOTPLupaPasswordMahasiswa"
          component={VerifikasiOTPLupaPasswordMahasiswa}
        />

        <Stack.Screen
          name="ResetPasswordMahasiswa"
          component={ResetPasswordMahasiswa}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}