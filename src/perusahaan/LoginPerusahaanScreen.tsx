import React, {useEffect, useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  navigation: any;
};

const SAVED_ACCOUNT_KEY = '@polar_company_account';

const LoginPerusahaanScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [savedAccount, setSavedAccount] = useState<{
    email: string;
    password: string;
  } | null>(null);

  useEffect(() => {
    loadSavedAccount();
  }, []);

  const loadSavedAccount = async () => {
    try {
      const saved = await AsyncStorage.getItem(SAVED_ACCOUNT_KEY);

      if (saved) {
        const account = JSON.parse(saved);

        if (account?.email && account?.password) {
          setSavedAccount(account);
        }
      }
    } catch (error) {
      console.log('Gagal membaca akun tersimpan:', error);
    }
  };

  const handleLogin = async () => {
    if (!email.trim()) {
      Alert.alert(
        'Email Kosong',
        'Silakan masukkan email perusahaan.',
      );
      return;
    }

    if (!password) {
      Alert.alert(
        'Password Kosong',
        'Silakan masukkan kata sandi.',
      );
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        'http://10.0.2.2:5000/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        Alert.alert(
          'Login Gagal',
          data?.message || 'Email atau kata sandi salah.',
        );
        return;
      }

      if (rememberMe) {
        await AsyncStorage.setItem(
          SAVED_ACCOUNT_KEY,
          JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        );

        setSavedAccount({
          email: email.trim(),
          password: password,
        });
      } else {
        await AsyncStorage.removeItem(SAVED_ACCOUNT_KEY);
        setSavedAccount(null);
      }

      Alert.alert(
        'Login Berhasil',
        'Selamat datang kembali di POLAR.',
      );
    } catch (error) {
      Alert.alert(
        'Koneksi Gagal',
        'Tidak dapat terhubung ke server.',
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // NAVIGASI KE REGISTRASI PERUSAHAAN
  // ==========================================
  const handleRegister = () => {
    navigation.navigate('RegistrasiPerusahaan');
  };

  // ==========================================
  // NAVIGASI KE LUPA PASSWORD
  // ==========================================
  const handleForgotPassword = () => {
    navigation.navigate('LupaPasswordPerusahaan');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* ================= HEADER ================= */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerIconBtn}
              activeOpacity={0.7}>
              <Text style={styles.headerIconText}>←</Text>
            </TouchableOpacity>

            <View style={styles.logoRow}>
              <View style={styles.briefcaseIcon}>
                <View style={styles.briefcaseHandle} />
                <View style={styles.briefcaseBody} />
              </View>

              <Text style={styles.logoText}>POLAR</Text>
            </View>

            <View style={styles.headerRight}>
              <TouchableOpacity
                style={styles.helpIcon}
                activeOpacity={0.7}>
                <Text style={styles.helpText}>?</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.profileIcon}
                activeOpacity={0.7}>
                <View style={styles.profileHead} />
                <View style={styles.profileBody} />
              </TouchableOpacity>
            </View>
          </View>

          {/* ================= CONTENT ================= */}
          <View style={styles.content}>

            {/* BADGE */}
            <View style={styles.badge}>
              <Text style={styles.badgeIconText}>🏢</Text>

              <Text style={styles.badgeText}>
                Mitra Perusahaan / Instansi
              </Text>
            </View>

            {/* TITLE */}
            <Text style={styles.title}>
              Login Perusahaan
            </Text>

            <Text style={styles.subtitle}>
              Selamat datang kembali! Masuk untuk mengelola
              lowongan magang, rekrutmen kerja, dan kolaborasi
              talenta vokasi POLAR.
            </Text>

            {/* ================= LOGIN CARD ================= */}
            <View style={styles.loginCard}>

              {/* EMAIL */}
              <Text style={styles.label}>
                Email Perusahaan
              </Text>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputIcon}>✉</Text>

                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="nama@perusahaan.com"
                  placeholderTextColor="#8A9BAA"
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* HELPER EMAIL */}
              <View style={styles.helperRow}>
                <Text style={styles.helperIcon}>ⓘ</Text>

                <Text style={styles.helperText}>
                  Gunakan email perusahaan resmi yang telah
                  terdaftar.
                </Text>
              </View>

              {/* PASSWORD */}
              <Text
                style={[
                  styles.label,
                  {
                    marginTop: 10,
                  },
                ]}>
                Kata Sandi
              </Text>

              <View style={styles.inputWrapper}>

                {/* LOCK ICON */}
                <View style={styles.lockIconContainer}>
                  <View style={styles.lockShackle} />
                  <View style={styles.lockBase} />
                </View>

                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Masukkan kata sandi"
                  placeholderTextColor="#8A9BAA"
                  secureTextEntry={!showPassword}
                />

                {/* EYE BUTTON */}
                <TouchableOpacity
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }
                  style={styles.eyeBtn}
                  activeOpacity={0.7}>

                  <View style={styles.eyeContainer}>
                    <View style={styles.eyeOuter}>
                      <View style={styles.eyeInner} />
                    </View>

                    {!showPassword && (
                      <View style={styles.eyeSlash} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>

              {/* OPTIONS */}
              <View style={styles.optionsRow}>

                {/* REMEMBER ME */}
                <TouchableOpacity
                  style={styles.rememberRow}
                  onPress={() =>
                    setRememberMe(!rememberMe)
                  }
                  activeOpacity={0.7}>

                  <View
                    style={[
                      styles.checkbox,
                      rememberMe &&
                        styles.checkboxChecked,
                    ]}>
                    {rememberMe && (
                      <Text style={styles.checkMark}>
                        ✓
                      </Text>
                    )}
                  </View>

                  <Text style={styles.rememberText}>
                    Ingat saya
                  </Text>
                </TouchableOpacity>

                {/* FORGOT PASSWORD */}
                <TouchableOpacity
                  onPress={handleForgotPassword}
                  activeOpacity={0.7}>
                  <Text style={styles.forgotText}>
                    Lupa kata sandi?
                  </Text>
                </TouchableOpacity>
              </View>

              {/* LOGIN BUTTON */}
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={handleLogin}
                disabled={loading}
                activeOpacity={0.8}>

                <View style={styles.loginBtnInner}>
                  <Text style={styles.loginBtnText}>
                    {loading
                      ? 'Memproses...'
                      : 'Masuk'}
                  </Text>

                  {!loading && (
                    <Text style={styles.btnArrow}>
                      →
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            </View>

            {/* ================= REGISTER ================= */}
            <View style={styles.registerRow}>
              <Text style={styles.registerText}>
                Belum punya akun mitra?{' '}
              </Text>

              <TouchableOpacity
                onPress={handleRegister}
                activeOpacity={0.7}>
                <Text style={styles.registerLink}>
                  Daftar sekarang
                </Text>
              </TouchableOpacity>
            </View>

            {/* ================= FOOTER CARD ================= */}
            <View style={styles.footerCard}>

              <View style={styles.shieldIconContainer}>
                <View style={styles.shieldOuter}>
                  <Text style={styles.shieldCheck}>
                    ✓
                  </Text>
                </View>
              </View>

              <View style={styles.footerContent}>
                <Text style={styles.footerTitle}>
                  Portal Kemitraan Resmi
                </Text>

                <Text style={styles.footerText}>
                  Dikelola dan diverifikasi oleh Bagian
                  Kerjasama & Pusat Karier Politeknik Negeri
                  Lampung (POLINELA).
                </Text>
              </View>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  keyboard: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 10,
  },

  /* ================= HEADER ================= */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  headerIconBtn: {
    padding: 5,
  },

  headerIconText: {
    fontSize: 36,
    color: '#062D47',
    fontWeight: '200',
    lineHeight: 40,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#062D47',
    letterSpacing: 1.2,
    marginLeft: 8,
  },

  briefcaseIcon: {
    width: 22,
    height: 18,
    alignItems: 'center',
  },

  briefcaseHandle: {
    width: 10,
    height: 4,
    borderWidth: 2,
    borderColor: '#062D47',
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },

  briefcaseBody: {
    width: 22,
    height: 14,
    backgroundColor: '#062D47',
    borderRadius: 2,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  helpIcon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1.5,
    borderColor: '#8A9BAA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  helpText: {
    color: '#8A9BAA',
    fontSize: 14,
    fontWeight: 'bold',
  },

  profileIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#062D47',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  profileHead: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    marginBottom: 1,
  },

  profileBody: {
    width: 18,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },

  /* ================= CONTENT ================= */

  content: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },

  badgeIconText: {
    fontSize: 14,
    marginRight: 6,
  },

  badgeText: {
    fontSize: 12,
    color: '#286184',
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#062D47',
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: '#596771',
    lineHeight: 20,
    marginBottom: 15,
  },

  /* ================= LOGIN CARD ================= */

  loginCard: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#062D47',
    marginBottom: 8,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 50,
  },

  inputIcon: {
    fontSize: 20,
    color: '#8A9BAA',
    marginRight: 12,
  },

  input: {
    flex: 1,
    fontSize: 15,
    color: '#062D47',
  },

  /* ================= LOCK ================= */

  lockIconContainer: {
    width: 20,
    height: 20,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lockShackle: {
    width: 10,
    height: 8,
    borderWidth: 1.8,
    borderColor: '#8A9BAA',
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: -1,
  },

  lockBase: {
    width: 16,
    height: 11,
    backgroundColor: '#8A9BAA',
    borderRadius: 2,
  },

  /* ================= EYE ================= */

  eyeBtn: {
    padding: 5,
  },

  eyeContainer: {
    width: 28,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  eyeOuter: {
    width: 20,
    height: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#8A9BAA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  eyeInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8A9BAA',
  },

  eyeSlash: {
    position: 'absolute',
    width: 2,
    height: 22,
    backgroundColor: '#8A9BAA',
    transform: [
      {
        rotate: '45deg',
      },
    ],
  },

  /* ================= HELPER ================= */

  helperRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  helperIcon: {
    fontSize: 14,
    color: '#8A9BAA',
    marginRight: 6,
  },

  helperText: {
    fontSize: 11,
    color: '#8A9BAA',
    flex: 1,
    lineHeight: 16,
  },

  /* ================= OPTIONS ================= */

  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },

  rememberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#8A9BAA',
    borderRadius: 5,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#062D47',
    borderColor: '#062D47',
  },

  checkMark: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: 'bold',
  },

  rememberText: {
    fontSize: 14,
    color: '#596771',
  },

  forgotText: {
    fontSize: 14,
    color: '#286184',
    fontWeight: 'bold',
  },

  /* ================= LOGIN BUTTON ================= */

  loginBtn: {
    backgroundColor: '#062D47',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },

  loginBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginBtnText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  btnArrow: {
    color: '#FFF',
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
    marginTop: -2,
  },

  /* ================= REGISTER ================= */

  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  registerText: {
    fontSize: 15,
    color: '#596771',
  },

  registerLink: {
    fontSize: 15,
    color: '#062D47',
    fontWeight: 'bold',
  },

  /* ================= FOOTER ================= */

  footerCard: {
    flexDirection: 'row',
    backgroundColor: '#EBF4FA',
    borderRadius: 18,
    padding: 15,
    alignItems: 'center',
  },

  shieldIconContainer: {
    marginRight: 15,
  },

  shieldOuter: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#D0E2F0',
  },

  shieldCheck: {
    color: '#062D47',
    fontWeight: 'bold',
    fontSize: 20,
  },

  footerContent: {
    flex: 1,
  },

  footerTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#062D47',
    marginBottom: 4,
  },

  footerText: {
    fontSize: 12,
    color: '#596771',
    lineHeight: 18,
  },
});

export default LoginPerusahaanScreen;