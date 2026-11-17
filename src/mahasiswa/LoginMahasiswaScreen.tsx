import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  StatusBar,
} from 'react-native';

const COLORS = {
  background: '#F8FAFC',
  white: '#FFFFFF',
  navy: '#062D47',
  text: '#062D47',
  textSecondary: '#596771',
  border: '#F0F4F8',
  blueSoft: '#EBF4FA',
  accentBlue: '#286184',
};

type Props = {
  navigation: any;
};

export default function LoginMahasiswaScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Login Gagal', 'Email dan kata sandi wajib diisi.');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch('http://10.0.2.2:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim() + '@polinela.ac.id',
          password: password,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        Alert.alert('Login Gagal', data.message || 'Email atau kata sandi salah.');
        return;
      }

      Alert.alert('Login Berhasil', 'Selamat datang kembali di POLAR!');
    } catch (error) {
      Alert.alert('Koneksi Gagal', 'Tidak dapat terhubung ke server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
              activeOpacity={0.7}>
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <View style={styles.logoContainer}>
              <View style={styles.logoBox}>
                <Text style={styles.logoP}>P</Text>
              </View>
              <Text style={styles.logoText}>POLAR</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.profileCircle} activeOpacity={0.8}>
            <View style={styles.profileIconInner}>
              <View style={styles.profileHead} />
              <View style={styles.profileBody} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* TITLE SECTION */}
          <View style={styles.titleContainer}>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>🎓 Mahasiswa Polinela</Text>
            </View>

            <Text style={styles.title}>Login Mahasiswa</Text>
            <Text style={styles.subtitle}>
              Selamat datang kembali! Masuk untuk melanjutkan perjalananmu bersama POLAR.
            </Text>
          </View>

          {/* LOGIN CARD */}
          <View style={styles.card}>
            {/* EMAIL */}
            <View style={styles.labelRow}>
              <Text style={styles.label}>Email Kampus</Text>
              <Text style={styles.domainText}>@polinela.ac.id</Text>
            </View>

            <View style={styles.inputWrapper}>
              <Text style={styles.inputIconText}>✉</Text>
              <TextInput
                style={styles.input}
                placeholder="Masukkan email kampus"
                placeholderTextColor="#8A9BAA"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <View style={styles.infoRow}>
              <View style={styles.infoCircle}>
                <Text style={styles.infoI}>i</Text>
              </View>
              <Text style={styles.helperText}>
                Gunakan alamat email resmi institusi kampus Anda.
              </Text>
            </View>

            {/* PASSWORD */}
            <Text style={[styles.label, {marginTop: 15}]}>Kata Sandi</Text>
            <View style={styles.inputWrapper}>
              {/* Monochrome Lock Icon */}
              <View style={styles.lockIconContainer}>
                <View style={styles.lockShackle} />
                <View style={styles.lockBase} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Masukkan kata sandi"
                placeholderTextColor="#8A9BAA"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                <View style={styles.eyeIconContainer}>
                   <View style={styles.eyeOuter}>
                      <View style={styles.eyeInner} />
                   </View>
                   {!showPassword && <View style={styles.eyeSlash} />}
                </View>
              </TouchableOpacity>
            </View>

            {/* REMEMBER + FORGOT */}
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={styles.rememberContainer}
                onPress={() => setRememberMe(!rememberMe)}
                activeOpacity={0.7}
              >
                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                  {rememberMe && <Text style={styles.checkMark}>✓</Text>}
                </View>
                <Text style={styles.rememberText}>Ingat saya</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('LupaPasswordMahasiswa')}>
                <Text style={styles.forgotText}>Lupa kata sandi?</Text>
              </TouchableOpacity>
            </View>

            {/* LOGIN BUTTON */}
            <TouchableOpacity
              style={[styles.loginButton, loading && styles.loginButtonDisabled]}
              activeOpacity={0.8}
              onPress={handleLogin}
              disabled={loading}>
              <View style={styles.buttonContent}>
                <Text style={styles.loginButtonText}>
                  {loading ? 'Memproses...' : 'Masuk'}
                </Text>
                {!loading && <Text style={styles.loginArrow}>→</Text>}
              </View>
            </TouchableOpacity>
          </View>

          {/* REGISTER */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Belum punya akun?</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('RegisterMahasiswa')}>
              <Text style={styles.registerLink}>Daftar sekarang</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    paddingBottom: 40,
    backgroundColor: COLORS.background,
  },
  header: {
    height: Platform.OS === 'android' ? 64 + (StatusBar.currentHeight || 0) : 100,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  backText: {
    fontSize: 36,
    color: '#062D47',
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: COLORS.navy,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoP: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoText: {
    color: COLORS.navy,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  profileCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.navy,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  profileIconInner: {
    alignItems: 'center',
    marginTop: 4,
  },
  profileHead: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: '#FFF',
  },
  profileBody: {
    width: 22,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginTop: 1,
  },
  titleContainer: {
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },
  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBF4FA',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  badgeText: {
    color: '#286184',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    color: COLORS.navy,
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 15,
    lineHeight: 22,
  },
  card: {
    marginHorizontal: 24,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: 'bold',
  },
  domainText: {
    color: '#286184',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputWrapper: {
    height: 56,
    backgroundColor: '#EDF4FB',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  inputIconText: {
    fontSize: 20,
    color: '#8A9BAA',
    marginRight: 12,
  },
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
    borderWidth: 2,
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
  input: {
    flex: 1,
    color: COLORS.navy,
    fontSize: 15,
  },
  eyeBtn: {
    padding: 5,
  },
  eyeIconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeOuter: {
    width: 20,
    height: 12,
    borderRadius: 10,
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
    height: 20,
    backgroundColor: '#8A9BAA',
    transform: [{rotate: '45deg'}],
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  infoCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8A9BAA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  infoI: {
    fontSize: 10,
    color: '#8A9BAA',
    fontWeight: 'bold',
  },
  helperText: {
    color: '#8A9BAA',
    fontSize: 12,
    flex: 1,
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 24,
  },
  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#CBD5E1',
    borderRadius: 4,
    marginRight: 10,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: COLORS.navy,
  },
  checkMark: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: 'bold',
  },
  rememberText: {
    color: COLORS.textSecondary,
    fontSize: 14,
  },
  forgotText: {
    color: '#286184',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loginButton: {
    height: 56,
    borderRadius: 12,
    backgroundColor: COLORS.navy,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonDisabled: {
    opacity: 0.7,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  loginArrow: {
    color: COLORS.white,
    fontSize: 26,
    marginLeft: 10,
    fontWeight: 'bold',
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  registerContainer: {
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerText: {
    color: COLORS.textSecondary,
    fontSize: 15,
  },
  registerLink: {
    color: COLORS.navy,
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    textDecorationLine: 'underline',
  },
});
