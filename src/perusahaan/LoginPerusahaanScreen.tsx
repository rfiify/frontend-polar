import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  navigation: any;
};

const LoginPerusahaanScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  // ============================================================
  // LOGIN BACKEND
  // ============================================================

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

      const result = await response.json();

      if (!response.ok || !result.success) {
        Alert.alert(
          'Login Gagal',
          result.message || 'Email atau password salah.',
        );
        return;
      }

      // Pastikan akun yang login adalah akun perusahaan
      if (result.data?.user?.role !== 'company') {
        Alert.alert(
          'Akses Ditolak',
          'Akun ini bukan akun perusahaan.',
        );
        return;
      }

      // Login berhasil
      navigation.navigate('DashboardPerusahaan');
    } catch (error) {
      console.log('LOGIN ERROR:', error);

      Alert.alert(
        'Koneksi Gagal',
        'Tidak dapat terhubung ke server POLAR. Pastikan backend sedang berjalan.',
      );
    } finally {
      setLoading(false);
    }
  };

  // ============================================================
  // LUPA PASSWORD
  // ============================================================

  const handleForgotPassword = () => {
    navigation.navigate('LupaPasswordPerusahaan');
  };

  // ============================================================
  // REGISTER
  // ============================================================

  const handleRegister = () => {
    navigation.navigate('RegistrasiPerusahaan');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.container}>

          {/* ==================================================
              HEADER
          ================================================== */}

          <View style={styles.header}>

            {/* BACK */}

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              activeOpacity={0.7}>
              <Text style={styles.backText}>
                ‹
              </Text>
            </TouchableOpacity>


            {/* LOGO POLAR */}

            <View style={styles.logoRow}>

              <View style={styles.logoBox}>
                <Text style={styles.logoP}>
                  P
                </Text>
              </View>

              <Text style={styles.logoText}>
                POLAR
              </Text>

            </View>


            {/* HEADER RIGHT */}

            <View style={styles.headerRight}>

              <TouchableOpacity
                style={styles.helpCircle}
                activeOpacity={0.7}>
                <Text style={styles.helpText}>
                  ?
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.profileCircle}
                activeOpacity={0.7}>
                <View style={styles.profileHead} />

                <View style={styles.profileBody} />
              </TouchableOpacity>

            </View>

          </View>


          {/* ==================================================
              CONTENT
          ================================================== */}

          <View style={styles.content}>

            {/* BADGE */}

            <View style={styles.badge}>

              <Text style={styles.badgeIcon}>
                🏢
              </Text>

              <Text style={styles.badgeText}>
                Mitra Perusahaan / Instansi
              </Text>

            </View>


            {/* TITLE */}

            <Text style={styles.title}>
              Login Perusahaan
            </Text>


            {/* SUBTITLE */}

            <Text style={styles.subtitle}>
              Selamat datang kembali! Masuk untuk
              mengelola lowongan magang, rekrutmen
              kerja, dan kolaborasi talenta vokasi
              POLAR.
            </Text>


            {/* ==================================================
                LOGIN CARD
            ================================================== */}

            <View style={styles.loginCard}>

              {/* EMAIL */}

              <Text style={styles.label}>
                Email Perusahaan
              </Text>

              <View style={styles.inputWrapper}>

                <Text style={styles.inputIcon}>
                  ✉
                </Text>

                <TextInput
                  style={styles.input}
                  value={email}
                  onChangeText={setEmail}
                  placeholder="nama@perusahaan.com"
                  placeholderTextColor="#8A9BAA"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />

              </View>


              {/* EMAIL INFO */}

              <View style={styles.helperRow}>

                <Text style={styles.helperIcon}>
                  ⓘ
                </Text>

                <Text style={styles.helperText}>
                  Gunakan email perusahaan resmi
                  yang telah terdaftar.
                </Text>

              </View>


              {/* PASSWORD */}

              <Text
                style={[
                  styles.label,
                  {
                    marginTop: 12,
                  },
                ]}>
                Kata Sandi
              </Text>

              <View style={styles.inputWrapper}>

                {/* LOCK */}

                <View style={styles.lockContainer}>

                  <View style={styles.lockShackle} />

                  <View style={styles.lockBody} />

                </View>


                <TextInput
                  style={styles.input}
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Masukkan kata sandi"
                  placeholderTextColor="#8A9BAA"
                  secureTextEntry={!showPassword}
                />


                {/* EYE */}

                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }
                  activeOpacity={0.7}>

                  <View style={styles.eye}>

                    <View style={styles.eyeOuter}>

                      <View style={styles.eyeInner} />

                    </View>

                    {!showPassword && (
                      <View style={styles.eyeSlash} />
                    )}

                  </View>

                </TouchableOpacity>

              </View>


              {/* ==================================================
                  OPTIONS
              ================================================== */}

              <View style={styles.optionsRow}>

                {/* INGAT SAYA */}

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


                {/* LUPA PASSWORD */}

                <TouchableOpacity
                  onPress={handleForgotPassword}
                  activeOpacity={0.7}>

                  <Text style={styles.forgotText}>
                    Lupa kata sandi?
                  </Text>

                </TouchableOpacity>

              </View>


              {/* ==================================================
                  LOGIN BUTTON
              ================================================== */}

              <TouchableOpacity
                style={[
                  styles.loginButton,
                  loading &&
                    styles.loginButtonDisabled,
                ]}
                onPress={handleLogin}
                disabled={loading}
                activeOpacity={0.8}>

                <Text style={styles.loginButtonText}>
                  {loading
                    ? 'Memproses...'
                    : 'Masuk'}
                </Text>

                {!loading && (
                  <Text style={styles.loginArrow}>
                    →
                  </Text>
                )}

              </TouchableOpacity>

            </View>


            {/* ==================================================
                REGISTER
            ================================================== */}

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


            {/* ==================================================
                FOOTER
            ================================================== */}

            <View style={styles.footerCard}>

              <View style={styles.footerIcon}>

                <Text style={styles.footerCheck}>
                  ✓
                </Text>

              </View>

              <View style={styles.footerContent}>

                <Text style={styles.footerTitle}>
                  Portal Kemitraan Resmi
                </Text>

                <Text style={styles.footerText}>
                  Dikelola dan diverifikasi oleh
                  Bagian Kerjasama & Pusat Karier
                  Politeknik Negeri Lampung
                  (POLINELA).
                </Text>

              </View>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};


/* ================================================================
  STYLES
================================================================ */

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
    paddingBottom: 25,
  },


  /* ==============================================================
     HEADER
  ============================================================== */

  header: {
    height: 102,

    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 12,

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E7EDF2',
  },

  backButton: {
    width: 42,
    height: 38,

    justifyContent: 'center',
    alignItems: 'flex-start',

    marginBottom: 1,
  },

  backText: {
    color: '#062D47',

    fontSize: 40,
    lineHeight: 42,

    fontWeight: '300',
  },

  logoRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 2,
  },

  logoBox: {
    width: 30,
    height: 30,

    borderRadius: 8,

    backgroundColor: '#062D47',

    justifyContent: 'center',
    alignItems: 'center',
  },

  logoP: {
    color: '#FFFFFF',

    fontSize: 19,

    fontWeight: '900',
  },

  logoText: {
    marginLeft: 7,

    color: '#062D47',

    fontSize: 20,

    fontWeight: '900',

    letterSpacing: 0.4,
  },

  headerRight: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 1,
  },

  helpCircle: {
    width: 27,
    height: 27,

    borderRadius: 14,

    borderWidth: 1.5,
    borderColor: '#8A9BAA',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 10,
  },

  helpText: {
    color: '#687B89',

    fontSize: 15,

    fontWeight: '800',
  },

  profileCircle: {
    width: 35,
    height: 35,

    borderRadius: 18,

    backgroundColor: '#062D47',

    justifyContent: 'center',
    alignItems: 'center',

    overflow: 'hidden',
  },

  profileHead: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: '#FFFFFF',

    marginBottom: 2,
  },

  profileBody: {
    width: 17,
    height: 9,

    borderRadius: 6,

    backgroundColor: '#FFFFFF',
  },


  /* ==============================================================
     CONTENT
  ============================================================== */

  content: {
    paddingHorizontal: 20,

    paddingTop: 18,
  },

  badge: {
    alignSelf: 'flex-start',

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#E5F3FC',

    borderRadius: 18,

    paddingHorizontal: 11,
    paddingVertical: 6,

    marginBottom: 12,
  },

  badgeIcon: {
    fontSize: 13,

    marginRight: 6,
  },

  badgeText: {
    color: '#286184',

    fontSize: 11,

    fontWeight: '700',
  },

  title: {
    color: '#062D47',

    fontSize: 25,

    fontWeight: '900',

    marginBottom: 6,
  },

  subtitle: {
    color: '#596771',

    fontSize: 13,

    lineHeight: 19,

    marginBottom: 17,
  },


  /* ==============================================================
     LOGIN CARD
  ============================================================== */

  loginCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    padding: 18,

    borderWidth: 1,

    borderColor: '#E4EBF1',
  },

  label: {
    color: '#062D47',

    fontSize: 14,

    fontWeight: '800',

    marginBottom: 8,
  },

  inputWrapper: {
    height: 51,

    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F4F8FC',

    borderWidth: 1,

    borderColor: '#E2EAF0',

    borderRadius: 11,

    paddingHorizontal: 13,
  },

  inputIcon: {
    color: '#7B8D9A',

    fontSize: 18,

    width: 25,

    marginRight: 7,
  },

  input: {
    flex: 1,

    height: 50,

    color: '#062D47',

    fontSize: 14,
  },


  /* ==============================================================
     HELPER
  ============================================================== */

  helperRow: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginTop: 7,
  },

  helperIcon: {
    color: '#8A9BAA',

    fontSize: 13,

    marginRight: 5,
  },

  helperText: {
    flex: 1,

    color: '#8A9BAA',

    fontSize: 10.5,

    lineHeight: 15,
  },


  /* ==============================================================
     LOCK
  ============================================================== */

  lockContainer: {
    width: 22,
    height: 22,

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 6,
  },

  lockShackle: {
    width: 10,
    height: 8,

    borderWidth: 1.8,

    borderColor: '#7B8D9A',

    borderBottomWidth: 0,

    borderTopLeftRadius: 5,

    borderTopRightRadius: 5,
  },

  lockBody: {
    width: 16,
    height: 11,

    backgroundColor: '#7B8D9A',

    borderRadius: 2,
  },


  /* ==============================================================
     EYE
  ============================================================== */

  eyeButton: {
    padding: 5,
  },

  eye: {
    width: 25,
    height: 19,

    justifyContent: 'center',

    alignItems: 'center',
  },

  eyeOuter: {
    width: 20,
    height: 12,

    borderWidth: 1.8,

    borderColor: '#7B8D9A',

    borderRadius: 10,

    justifyContent: 'center',

    alignItems: 'center',
  },

  eyeInner: {
    width: 5,
    height: 5,

    borderRadius: 3,

    backgroundColor: '#7B8D9A',
  },

  eyeSlash: {
    position: 'absolute',

    width: 2,
    height: 22,

    backgroundColor: '#7B8D9A',

    transform: [
      {
        rotate: '45deg',
      },
    ],
  },


  /* ==============================================================
     OPTIONS
  ============================================================== */

  optionsRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginTop: 15,

    marginBottom: 16,
  },

  rememberRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  checkbox: {
    width: 19,
    height: 19,

    borderRadius: 5,

    borderWidth: 1.5,

    borderColor: '#8A9BAA',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 8,
  },

  checkboxChecked: {
    backgroundColor: '#062D47',

    borderColor: '#062D47',
  },

  checkMark: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '900',
  },

  rememberText: {
    color: '#596771',

    fontSize: 12,
  },

  forgotText: {
    color: '#286184',

    fontSize: 12,

    fontWeight: '800',
  },


  /* ==============================================================
     LOGIN BUTTON
  ============================================================== */

  loginButton: {
    height: 51,

    borderRadius: 11,

    backgroundColor: '#062D47',

    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',
  },

  loginButtonDisabled: {
    opacity: 0.65,
  },

  loginButtonText: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '800',
  },

  loginArrow: {
    color: '#FFFFFF',

    fontSize: 22,

    fontWeight: '900',

    marginLeft: 9,
  },


  /* ==============================================================
     REGISTER
  ============================================================== */

  registerRow: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 17,

    marginBottom: 17,
  },

  registerText: {
    color: '#596771',

    fontSize: 12,
  },

  registerLink: {
    color: '#062D47',

    fontSize: 12,

    fontWeight: '900',
  },


  /* ==============================================================
     FOOTER
  ============================================================== */

  footerCard: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#EBF4FA',

    borderRadius: 16,

    padding: 14,
  },

  footerIcon: {
    width: 42,
    height: 42,

    borderRadius: 21,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#D2E4F0',

    justifyContent: 'center',

    alignItems: 'center',

    marginRight: 12,
  },

  footerCheck: {
    color: '#062D47',

    fontSize: 19,

    fontWeight: '900',
  },

  footerContent: {
    flex: 1,
  },

  footerTitle: {
    color: '#062D47',

    fontSize: 13,

    fontWeight: '900',

    marginBottom: 3,
  },

  footerText: {
    color: '#596771',

    fontSize: 10.5,

    lineHeight: 15,
  },

});

export default LoginPerusahaanScreen;