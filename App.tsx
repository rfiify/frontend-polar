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
import LoginPerusahaanScreen from './src/perusahaan/LoginPerusahaanScreen';
import LupaPasswordPerusahaan from './src/perusahaan/LupaPasswordPerusahaan';
import VerifikasiOTPPerusahaan from './src/perusahaan/VerifikasiOTPPerusahaan';
import ResetPasswordPerusahaan from './src/perusahaan/ResetPasswordPerusahaan';
import RegistrasiPerusahaanScreen from './src/perusahaan/RegistrasiPerusahaanScreen';
import VerifikasiOTPRegistrasiPerusahaan from './src/perusahaan/VerifikasiOTPRegistrasiPerusahaan';
import LengkapiProfilPerusahaan from './src/perusahaan/LengkapiProfilPerusahaan';

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

        <Stack.Screen
          name="LoginPerusahaan"
          component={LoginPerusahaanScreen}
        />

        <Stack.Screen
          name="LupaPasswordPerusahaan"
          component={LupaPasswordPerusahaan}
        />

        <Stack.Screen
          name="VerifikasiOTPPerusahaan"
          component={VerifikasiOTPPerusahaan}
        />

        <Stack.Screen
          name="ResetPasswordPerusahaan"
          component={ResetPasswordPerusahaan}
        />

        <Stack.Screen
          name="RegistrasiPerusahaan"
          component={RegistrasiPerusahaanScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="VerifikasiOTPRegistrasiPerusahaan"
          component={VerifikasiOTPRegistrasiPerusahaan}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LengkapiProfilPerusahaan"
          component={LengkapiProfilPerusahaan}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}