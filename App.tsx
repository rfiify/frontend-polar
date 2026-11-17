import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ===============================
// ROLE SELECTION
// ===============================
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';

// ===============================
// MAHASISWA
// ===============================
import LoginMahasiswaScreen from './src/mahasiswa/LoginMahasiswaScreen';
import RegisterMahasiswaScreen from './src/mahasiswa/RegisterMahasiswaScreen';
import LupaPasswordMahasiswa from './src/mahasiswa/LupaPasswordMahasiswa';
import VerifikasiOTPMahasiswa from './src/mahasiswa/VerifikasiOTPMahasiswa';
import VerifikasiOTPLupaPasswordMahasiswa from './src/mahasiswa/VerifikasiOTPLupaPasswordMahasiswa';
import ResetPasswordMahasiswa from './src/mahasiswa/ResetPasswordMahasiswa';

// ===============================
// PERUSAHAAN
// ===============================
import LoginPerusahaanScreen from './src/perusahaan/LoginPerusahaanScreen';
import LupaPasswordPerusahaan from './src/perusahaan/LupaPasswordPerusahaan';
import VerifikasiOTPPerusahaan from './src/perusahaan/VerifikasiOTPPerusahaan';
import ResetPasswordPerusahaan from './src/perusahaan/ResetPasswordPerusahaan';
import RegistrasiPerusahaanScreen from './src/perusahaan/RegistrasiPerusahaanScreen';
import VerifikasiOTPRegistrasiPerusahaan from './src/perusahaan/VerifikasiOTPRegistrasiPerusahaan';
import LengkapiProfilPerusahaan from './src/perusahaan/LengkapiProfilPerusahaan';


// ===============================
// KLIEN
// ===============================
import LoginKlienScreen from './src/klien/LoginKlienScreen';
import ResetPasswordKlien from './src/klien/ResetPasswordKlien';
import LupaPasswordKlien from './src/klien/LupaPasswordKlien';
import VerifikasiOTPLupaPasswordKlien from './src/klien/VerifikasiOTPLupaPasswordKlien';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="RoleSelection"
        screenOptions={{
          headerShown: false,
        }}>

        {/* =========================
            ROLE SELECTION
        ========================= */}
        <Stack.Screen
          name="RoleSelection"
          component={RoleSelectionScreen}
        />

        {/* =========================
            MAHASISWA
        ========================= */}
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

        {/* =========================
            PERUSAHAAN
        ========================= */}
        <Stack.Screen
          name="LoginPerusahaan"
          component={LoginPerusahaanScreen}
        />

        <Stack.Screen
          name="LupaPasswordPerusahaan"
          component={LupaPasswordPerusahaan}
        />

        {/* OTP UNTUK LUPA PASSWORD */}
        <Stack.Screen
          name="VerifikasiOTPPerusahaan"
          component={VerifikasiOTPPerusahaan}
        />

        <Stack.Screen
          name="ResetPasswordPerusahaan"
          component={ResetPasswordPerusahaan}
        />

        {/* REGISTRASI PERUSAHAAN */}
        <Stack.Screen
          name="RegistrasiPerusahaan"
          component={RegistrasiPerusahaanScreen}
        />

        {/* OTP KHUSUS REGISTRASI PERUSAHAAN */}
        <Stack.Screen
          name="VerifikasiOTPRegistrasiPerusahaan"
          component={VerifikasiOTPRegistrasiPerusahaan}
        />

        {/* LENGKAPI PROFIL PERUSAHAAN */}
        <Stack.Screen
          name="LengkapiProfilPerusahaan"
          component={LengkapiProfilPerusahaan}
        />

        {/* =========================
            KLIEN
        ========================= */}
        <Stack.Screen
          name="LoginKlien"
          component={LoginKlienScreen}
        />

        <Stack.Screen
          name="LupaPasswordKlien"
          component={LupaPasswordKlien}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerifikasiOTPLupaPasswordKlien"
          component={VerifikasiOTPLupaPasswordKlien}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ResetPasswordKlien"
          component={ResetPasswordKlien}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}