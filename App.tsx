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
import DashboardPerusahaan from './src/perusahaan/DashboardPerusahaan';
import TambahLowonganScreen from './src/perusahaan/TambahLowonganScreen';
import LowonganBerhasilDitambahkanScreen from './src/perusahaan/LowonganBerhasilDitambahkanScreen';
import LowonganPerusahaanScreen from './src/perusahaan/LowonganPerusahaanScreen';
import DetailLowonganScreen from './src/perusahaan/DetailLowonganScreen';
import ReviewPelamarScreen from './src/perusahaan/ReviewPelamarScreen';
import VerifikasiPelamarScreen from './src/perusahaan/VerifikasiPelamarScreen';
import VerifikasiAkademikScreen from './src/perusahaan/VerifikasiAkademikScreen';
import KelolaLowonganScreen from './src/perusahaan/KelolaLowonganScreen';
import ChatScreen from './src/perusahaan/ChatScreen';
import NotifikasiPerusahaanScreen from './src/perusahaan/NotifikasiPerusahaanScreen';
import ProfilPerusahaan from './src/perusahaan/ProfilePerusahaan';
import ChatDetailScreen from './src/perusahaan/ChatDetailScreen';
import DetailPelamarScreen from './src/perusahaan/DetailPelamarScreen';
import DetailPelamarDiterimaScreen from './src/perusahaan/DetailPelamarDiterimaScreen';
import Talenta from './src/perusahaan/Talenta';

// ===============================
// KLIEN
// ===============================
import LoginKlienScreen from './src/klien/LoginKlienScreen';
import ResetPasswordKlien from './src/klien/ResetPasswordKlien';
import LupaPasswordKlien from './src/klien/LupaPasswordKlien';
import VerifikasiOTPLupaPasswordKlien from './src/klien/VerifikasiOTPLupaPasswordKlien';
import RegistrasiKlienScreen from './src/klien/RegistrasiKlienScreen';
import VerifikasiOTPRegistrasiKlien from './src/klien/VerifikasiOTPRegistrasiKlien';

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

        <Stack.Screen
          name="DashboardPerusahaan"
          component={DashboardPerusahaan}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TambahLowongan"
          component={TambahLowonganScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LowonganBerhasil"
          component={LowonganBerhasilDitambahkanScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="LowonganPerusahaan"
          component={LowonganPerusahaanScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailLowongan"
          component={DetailLowonganScreen}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ReviewPelamar"
          component={ReviewPelamarScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerifikasiPelamar"
          component={VerifikasiPelamarScreen}
        />

        <Stack.Screen
          name="VerifikasiAkademik"
          component={VerifikasiAkademikScreen}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{headerShown: false}}
        />

        {/* NOTIFIKASI PERUSAHAAN */}
        <Stack.Screen
          name="NotifikasiPerusahaan"
          component={NotifikasiPerusahaanScreen}
          options={{headerShown: false}}
        />

        {/* PROFIL PERUSAHAAN */}
        <Stack.Screen
          name="ProfilPerusahaan"
          component={ProfilPerusahaan}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ChatDetail"
          component={ChatDetailScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailPelamar"
          component={DetailPelamarScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="DetailPelamarDiterima"
          component={DetailPelamarDiterimaScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Talenta"
          component={Talenta}
          options={{headerShown: false}}
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

        <Stack.Screen
          name="RegistrasiKlien"
          component={RegistrasiKlienScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="VerifikasiOTPRegistrasiKlien"
          component={VerifikasiOTPRegistrasiKlien}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}