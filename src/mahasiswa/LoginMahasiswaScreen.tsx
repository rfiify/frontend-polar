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
} from 'react-native';

type Props = {
  navigation: any;
};

export default function LoginMahasiswaScreen({navigation}: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // ================= LOGIN KE BACKEND =================

  const handleLogin = async () => {
    // Validasi input
    if (!email.trim() || !password.trim()) {
      Alert.alert(
        'Login Gagal',
        'Email dan kata sandi wajib diisi.',
      );
      return;
    }

    try {
      setLoading(true);

      console.log('Mencoba login...');
      console.log('Email:', email.trim());

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

      console.log('LOGIN RESPONSE:', data);

      // Kalau backend mengembalikan error
      if (!response.ok) {
        Alert.alert(
          'Login Gagal',
          data.message || 'Email atau kata sandi salah.',
        );
        return;
      }

      // Login berhasil
      console.log('LOGIN BERHASIL:', data);

      Alert.alert(
        'Login Berhasil',
        'Selamat datang kembali di POLAR!',
      );
    } catch (error) {
      console.error('LOGIN ERROR:', error);

      Alert.alert(
        'Koneksi Gagal',
        'Tidak dapat terhubung ke server. Pastikan backend sedang berjalan di port 5000.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* ================= HEADER ================= */}

          <View style={styles.header}>

            {/* KIRI: BACK + LOGO POLAR */}
            <View style={styles.headerLeft}>

              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
                activeOpacity={0.7}>
                <Text style={styles.backText}>‹</Text>
              </TouchableOpacity>

              <View style={styles.logoContainer}>
                <View style={styles.logoBox}>
                  <Text style={styles.logoP}>P</Text>
                </View>

                <Text style={styles.logoText}>POLAR</Text>
              </View>

            </View>

            {/* KANAN: PROFILE */}
            <View style={styles.profileCircle}>
              <Text style={styles.profileIcon}>♙</Text>
            </View>

          </View>

          {/* ================= TITLE ================= */}

          <View style={styles.titleContainer}>

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                🎓 Mahasiswa Polinela
              </Text>
            </View>

            <Text style={styles.title}>
              Login Mahasiswa
            </Text>

            <Text style={styles.subtitle}>
              Selamat datang kembali! Masuk untuk melanjutkan
              {'\n'}
              perjalananmu bersama POLAR.
            </Text>

          </View>

          {/* ================= LOGIN CARD ================= */}

          <View style={styles.card}>

            {/* EMAIL */}

            <Text style={styles.label}>
              Email Kampus
            </Text>

            <View style={styles.inputWrapper}>

              <Text style={styles.inputIcon}>
                ✉
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Masukkan email kampus"
                placeholderTextColor="#8A9AAA"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <Text style={styles.domain}>
                @polinela.ac.id
              </Text>

            </View>

            <Text style={styles.helperText}>
              ⓘ Gunakan alamat email resmi institusi kampus Anda.
            </Text>

            {/* PASSWORD */}

            <Text style={styles.label}>
              Kata Sandi
            </Text>

            <View style={styles.inputWrapper}>

              <Text style={styles.inputIcon}>
                ♙
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Masukkan kata sandi"
                placeholderTextColor="#8A9AAA"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              <Text style={styles.eye}>
                ◉
              </Text>

            </View>

            {/* REMEMBER + FORGOT */}

            <View style={styles.optionsRow}>

              <View style={styles.rememberContainer}>

                <View style={styles.checkbox} />

                <Text style={styles.rememberText}>
                  Ingat saya
                </Text>

              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('LupaPasswordMahasiswa')
                }>
                <Text style={styles.forgotText}>
                  Lupa kata sandi?
                </Text>
              </TouchableOpacity>

            </View>

            {/* LOGIN BUTTON */}

            <TouchableOpacity
              style={[
                styles.loginButton,
                loading && styles.loginButtonDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleLogin}
              disabled={loading}>

              <Text style={styles.loginButtonText}>
                {loading ? 'Memproses...' : 'Masuk'}
              </Text>

              <Text style={styles.loginArrow}>
                →
              </Text>

            </TouchableOpacity>

          </View>

          {/* ================= REGISTER ================= */}

          <View style={styles.registerContainer}>

            <Text style={styles.registerText}>
              Belum punya akun?
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('RegisterMahasiswa')
              }>
              <Text style={styles.registerLink}>
                Daftar sekarang
              </Text>
            </TouchableOpacity>

          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({

  /* ================= SAFE AREA ================= */

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  container: {
    flexGrow: 1,
    paddingBottom: 40,
  },

  /* ================= HEADER ================= */

  header: {
    height: 92,

    paddingHorizontal: 18,

    // Diturunkan agar tidak bertabrakan dengan
    // jam / status bar emulator
    paddingTop: 27,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#F4F8FC',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* ================= BACK BUTTON ================= */

  backButton: {
    width: 38,
    height: 38,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 7,
  },

  backText: {
    fontSize: 35,
    color: '#062D47',
    fontWeight: '300',

    marginTop: -5,
  },

  /* ================= LOGO ================= */

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 30,
    height: 30,

    borderRadius: 7,

    backgroundColor: '#063452',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 7,
  },

  logoP: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },

  logoText: {
    color: '#063452',
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  /* ================= PROFILE ================= */

  profileCircle: {
    width: 34,
    height: 34,

    borderRadius: 17,

    backgroundColor: '#063452',

    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    color: '#FFFFFF',
    fontSize: 19,
  },

  /* ================= TITLE ================= */

  titleContainer: {
    paddingHorizontal: 18,

    paddingTop: 14,
    paddingBottom: 16,
  },

  badge: {
    alignSelf: 'flex-start',

    backgroundColor: '#E3F1FC',

    borderRadius: 12,

    paddingHorizontal: 10,
    paddingVertical: 5,

    marginBottom: 8,
  },

  badgeText: {
    color: '#285C7C',
    fontSize: 10,
    fontWeight: '700',
  },

  title: {
    color: '#062D47',

    fontSize: 27,
    fontWeight: '800',

    marginBottom: 6,
  },

  subtitle: {
    color: '#53616E',

    fontSize: 14,
    lineHeight: 20,
  },

  /* ================= CARD ================= */

  card: {
    marginHorizontal: 18,

    backgroundColor: '#FFFFFF',

    borderRadius: 12,

    paddingHorizontal: 14,
    paddingVertical: 18,

    borderWidth: 1,
    borderColor: '#E2EAF1',
  },

  label: {
    color: '#172F42',

    fontSize: 13,
    fontWeight: '700',

    marginBottom: 7,
  },

  /* ================= INPUT ================= */

  inputWrapper: {
    height: 52,

    backgroundColor: '#EAF4FF',

    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 11,

    marginBottom: 7,
  },

  inputIcon: {
    fontSize: 18,

    color: '#657B8D',

    width: 28,
  },

  input: {
    flex: 1,

    color: '#172F42',

    fontSize: 13,

    paddingVertical: 0,
  },

  domain: {
    color: '#356A91',

    fontSize: 10,

    fontWeight: '600',
  },

  eye: {
    color: '#526A7A',

    fontSize: 16,
  },

  helperText: {
    color: '#647583',

    fontSize: 10,

    marginBottom: 18,
  },

  /* ================= OPTIONS ================= */

  optionsRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    marginTop: 5,
    marginBottom: 18,
  },

  rememberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 15,
    height: 15,

    borderWidth: 1,
    borderColor: '#8997A2',

    borderRadius: 2,

    marginRight: 6,

    backgroundColor: '#FFFFFF',
  },

  rememberText: {
    color: '#53616E',

    fontSize: 12,
  },

  forgotText: {
    color: '#15577E',

    fontSize: 12,

    fontWeight: '700',
  },

  /* ================= LOGIN BUTTON ================= */

  loginButton: {
    height: 48,

    borderRadius: 9,

    backgroundColor: '#00314D',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonDisabled: {
    opacity: 0.6,
  },

  loginButtonText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '800',
  },

  loginArrow: {
    color: '#FFFFFF',

    fontSize: 20,

    marginLeft: 7,

    marginTop: -2,
  },

  /* ================= REGISTER ================= */

  registerContainer: {
    marginTop: 26,

    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
  },

  registerText: {
    color: '#53616E',

    fontSize: 13,

    marginRight: 5,
  },

  registerLink: {
    color: '#0D4568',

    fontSize: 13,

    fontWeight: '800',

    textDecorationLine: 'underline',
  },

});