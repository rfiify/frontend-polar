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
import BerandaMahasiswaScreen from './src/mahasiswa/BerandaMahasiswaScreen';

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
import LowonganMahasiswaScreen from './src/mahasiswa/LowonganMahasiswaScreen';
import ProyekMahasiswaScreen from './src/mahasiswa/ProyekMahasiswaScreen';
import PesanMahasiswaScreen from './src/mahasiswa/PesanMahasiswaScreen';
import MenuAkunMahasiswaScreen from './src/mahasiswa/MenuAkunMahasiswaScreen';
import DetailLowonganMahasiswaScreen from './src/mahasiswa/DetailLowonganMahasiswaScreen';
import LamarLowonganMahasiswaScreen from './src/mahasiswa/LamarLowonganMahasiswaScreen';
import DetailProyekMahasiswaScreen from './src/mahasiswa/DetailProyekMahasiswaScreen';
import ChatProyekMahasiswaScreen from './src/mahasiswa/ChatProyekMahasiswaScreen';
import KirimHasilKerjaMahasiswaScreen from './src/mahasiswa/KirimHasilKerjaMahasiswaScreen';
import DetailProyekSelesaiMahasiswaScreen from './src/mahasiswa/DetailProyekSelesaiMahasiswaScreen';
import DetailChatMahasiswaScreen from './src/mahasiswa/DetailChatMahasiswaScreen';
import MulaiChatMahasiswaScreen from './src/mahasiswa/MulaiChatMahasiswaScreen';
import StatusLamaranMahasiswaScreen from './src/mahasiswa/StatusLamaranMahasiswaScreen';
import DetailLamaranMahasiswaScreen from './src/mahasiswa/DetailLamaranMahasiswaScreen';

// Di dalam <Stack.Navigator>:

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
          name="BerandaMahasiswa"
          component={BerandaMahasiswaScreen}
          options={{ headerShown: false }}
        />



        <Stack.Screen
          name="LowonganMahasiswa"
          component={LowonganMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProyekMahasiswa"
          component={ProyekMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="PesanMahasiswa"
          component={PesanMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="MenuAkunMahasiswa"
          component={MenuAkunMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailLowonganMahasiswa"
          component={DetailLowonganMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="LamarLowonganMahasiswa"
          component={LamarLowonganMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailProyekMahasiswa"
          component={DetailProyekMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="KirimHasilKerjaMahasiswa"
          component={KirimHasilKerjaMahasiswaScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="ChatProyekMahasiswa"
          component={ChatProyekMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailProyekSelesaiMahasiswa"
          component={DetailProyekSelesaiMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailChatMahasiswa"
          component={DetailChatMahasiswaScreen}
          options={{ headerShown: false }}
        />


        <Stack.Screen
          name="MulaiChatMahasiswa"
          component={MulaiChatMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StatusLamaranMahasiswa"
          component={StatusLamaranMahasiswaScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="DetailLamaranMahasiswa"
          component={DetailLamaranMahasiswaScreen}
          options={{ headerShown: false }}
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