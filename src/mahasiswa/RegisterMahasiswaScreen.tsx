import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  Pressable,
  Alert,
} from 'react-native';

type Props = {
  navigation: any;
};

export default function RegisterMahasiswaScreen({navigation}: Props) {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const handleRegister = async () => {
    if (!nama.trim()) {
      Alert.alert(
        'Data belum lengkap',
        'Silakan masukkan nama lengkap.',
      );
      return;
    }

    if (!nim.trim()) {
      Alert.alert(
        'Data belum lengkap',
        'Silakan masukkan Nomor Induk Mahasiswa (NIM).',
      );
      return;
    }

    if (!email.trim()) {
      Alert.alert(
        'Data belum lengkap',
        'Silakan masukkan email kampus Polinela.',
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      Alert.alert(
        'Email tidak valid',
        'Silakan masukkan alamat email yang benar.',
      );
      return;
    }

    if (!password) {
      Alert.alert(
        'Data belum lengkap',
        'Silakan masukkan kata sandi.',
      );
      return;
    }

    if (password.length < 8) {
      Alert.alert(
        'Kata sandi terlalu pendek',
        'Kata sandi minimal 8 karakter.',
      );
      return;
    }

    if (!agree) {
      Alert.alert(
        'Persetujuan diperlukan',
        'Silakan menyetujui Ketentuan Layanan & Kebijakan Privasi POLAR.',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        'http://10.0.2.2:5000/auth/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            password: password,
            role: 'student',
            name: nama.trim(),
            student_number: nim.trim(),
          }),
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        Alert.alert(
          'Registrasi gagal',
          result.message ||
            'Terjadi kesalahan saat membuat akun.',
        );
        return;
      }

      console.log('REGISTER BERHASIL:', result);

      navigation.navigate('VerifikasiOTPMahasiswa', {
        email: email.trim(),
        otpPreview: result.otp_preview || '',
      });
  
    } catch (error) {
      console.error('REGISTER ERROR:', error);

      Alert.alert(
        'Tidak dapat terhubung',
        'Periksa apakah backend POLAR sedang berjalan.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleMasukSekarang = () => {
    setSuccessModal(false);
    navigation.navigate('LoginMahasiswa');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          {/* ================= HEADER ================= */}

          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>

              <Text style={styles.backIcon}>
                ‹
              </Text>
            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Daftar Akun
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          {/* ================= CONTENT ================= */}

          <View style={styles.content}>
            <Text style={styles.title}>
              Daftar Mahasiswa
            </Text>

            <Text style={styles.description}>
              Buat akun POLAR untuk akses magang dan{'\n'}
              proyek{'\n'}
              kampus Polinela.
            </Text>

            <View style={styles.divider} />

            {/* ================= NAMA ================= */}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Nama Lengkap
              </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>
                  ♙
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Nama sesuai KTM"
                  placeholderTextColor="#94A3B8"
                  value={nama}
                  onChangeText={setNama}
                  autoCapitalize="words"
                />
              </View>
            </View>

            {/* ================= NIM ================= */}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Nomor Induk Mahasiswa (NIM)
              </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>
                  ▣
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Contoh: 21753045"
                  placeholderTextColor="#94A3B8"
                  value={nim}
                  onChangeText={setNim}
                  keyboardType="numeric"
                  maxLength={20}
                />
              </View>
            </View>

            {/* ================= EMAIL ================= */}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Email Kampus Polinela
              </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>
                  ✉
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="nama@polinela.ac.id"
                  placeholderTextColor="#94A3B8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>
            </View>

            {/* ================= PASSWORD ================= */}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>
                Kata Sandi
              </Text>

              <View style={styles.inputContainer}>
                <Text style={styles.inputIcon}>
                  ♙
                </Text>

                <TextInput
                  style={styles.inputPassword}
                  placeholder="Minimal 8 karakter"
                  placeholderTextColor="#94A3B8"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }>

                  <Text style={styles.eyeIcon}>
                    {showPassword ? '◉' : '◌'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* ================= CHECKBOX ================= */}

            <TouchableOpacity
              style={styles.checkboxRow}
              activeOpacity={0.7}
              onPress={() => setAgree(!agree)}>

              <View
                style={[
                  styles.checkbox,
                  agree && styles.checkboxChecked,
                ]}>

                {agree && (
                  <Text style={styles.checkmark}>
                    ✓
                  </Text>
                )}
              </View>

              <Text style={styles.checkboxText}>
                Saya menyetujui{' '}
                <Text style={styles.boldText}>
                  Ketentuan Layanan
                </Text>{' '}
                &{' '}
                <Text style={styles.boldText}>
                  Kebijakan{'\n'}
                  Privasi
                </Text>{' '}
                POLAR
              </Text>
            </TouchableOpacity>

            {/* ================= REGISTER BUTTON ================= */}

            <TouchableOpacity
              style={[
                styles.registerButton,
                loading &&
                  styles.registerButtonDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleRegister}
              disabled={loading}>

              <Text style={styles.registerButtonText}>
                {loading
                  ? 'Memproses...'
                  : 'Daftar Sekarang'}
              </Text>

              {!loading && (
                <Text style={styles.arrow}>
                  →
                </Text>
              )}
            </TouchableOpacity>

            {/* ================= FOOTER ================= */}

            <View style={styles.footer}>
              <Text style={styles.lockIcon}>
                ♙
              </Text>

              <Text style={styles.footerText}>
                Data terenkripsi & terhubung aman SSO Polinela
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ================= MODAL SUCCESS ================= */}

      <Modal
        visible={successModal}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setSuccessModal(false)
        }>

        <View style={styles.modalOverlay}>
          <Pressable
            style={styles.modalBackground}
            onPress={() =>
              setSuccessModal(false)
            }
          />

          <View style={styles.successCard}>
            <View style={styles.successIconOuter}>
              <View style={styles.successIconCircle}>
                <Text style={styles.successCheck}>
                  ✓
                </Text>
              </View>
            </View>

            <Text style={styles.successTitle}>
              Akun anda berhasil dibuat
            </Text>

            <Text style={styles.successDescription}>
              Akun mahasiswa POLAR Anda telah aktif.{'\n'}
              Silakan masuk untuk mulai mengeksplorasi{'\n'}
              lowongan dan proyek kampus.
            </Text>

            <TouchableOpacity
              style={styles.loginNowButton}
              activeOpacity={0.8}
              onPress={handleMasukSekarang}>

              <Text style={styles.loginNowText}>
                Masuk Sekarang
              </Text>

              <Text style={styles.loginNowArrow}>
                →
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

scrollContent: {
  flexGrow: 1,
  paddingTop: 24,
  paddingBottom: 24,
},

  /* ================= HEADER ================= */

header: {
  height: 94,
  paddingHorizontal: 20,

  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  borderBottomWidth: 1,
  borderBottomColor: '#E5EDF4',
},

backButton: {
  width: 42,
  height: 42,

  justifyContent: 'center',
  alignItems: 'flex-start',
},

backIcon: {
  fontSize: 40,
  lineHeight: 42,
  color: '#102F46',
  fontWeight: '300',
},

headerTitle: {
  fontSize: 16,
  fontWeight: '700',
  color: '#172B3A',
},

headerSpacer: {
  width: 42,
},

  /* ================= CONTENT ================= */

content: {
  paddingHorizontal: 33,
  paddingTop: 30,
},

  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0E3048',
    marginBottom: 8,
  },

  description: {
    fontSize: 13,
    lineHeight: 19,
    color: '#74879B',
  },

  divider: {
    height: 1,
    backgroundColor: '#DCE5ED',
    marginTop: 36,
    marginBottom: 20,
  },

  /* ================= INPUT ================= */

  inputGroup: {
    marginBottom: 15,
  },

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#162B3D',
    marginBottom: 7,
  },

  inputContainer: {
    height: 39,

    borderWidth: 1,
    borderColor: '#D8E2EB',
    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  inputIcon: {
    width: 25,
    fontSize: 17,
    color: '#91A6BB',
    textAlign: 'left',
  },

  input: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#263B4D',
    paddingVertical: 0,
  },

  inputPassword: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#263B4D',
    paddingVertical: 0,
  },

  eyeButton: {
    width: 30,
    height: 36,

    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  eyeIcon: {
    fontSize: 18,
    color: '#8297AB',
  },

  /* ================= CHECKBOX ================= */

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',

    marginTop: 2,
    marginBottom: 21,
  },

  checkbox: {
    width: 14,
    height: 14,

    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#D5E0E9',

    backgroundColor: '#FFFFFF',

    marginTop: 2,
    marginRight: 9,

    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#193F5A',
    borderColor: '#193F5A',
  },

  checkmark: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '800',
  },

  checkboxText: {
    flex: 1,
    fontSize: 10.5,
    lineHeight: 17,
    color: '#71859A',
  },

  boldText: {
    color: '#173C58',
    fontWeight: '700',
  },

  /* ================= BUTTON ================= */

  registerButton: {
    height: 39,
    borderRadius: 9,

    backgroundColor: '#173F5B',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 18,
  },

  registerButtonDisabled: {
    opacity: 0.65,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 8,
    marginTop: -1,
  },

  /* ================= FOOTER ================= */

  footer: {
    marginTop: 49,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockIcon: {
    fontSize: 12,
    color: '#9BAFC1',
    marginRight: 5,
  },

  footerText: {
    fontSize: 9,
    color: '#9BAFC1',
  },

  /* ================= MODAL ================= */

  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,

    backgroundColor: 'rgba(20, 28, 36, 0.62)',
  },

  successCard: {
    width: '83%',
    backgroundColor: '#FFFFFF',

    borderRadius: 23,

    paddingHorizontal: 21,
    paddingTop: 20,
    paddingBottom: 21,

    alignItems: 'center',

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.18,
    shadowRadius: 15,

    elevation: 12,
  },

  successIconOuter: {
    width: 54,
    height: 54,

    borderRadius: 27,

    backgroundColor: '#EEF7FD',

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 16,
  },

  successIconCircle: {
    width: 29,
    height: 29,

    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#193F5A',

    justifyContent: 'center',
    alignItems: 'center',
  },

  successCheck: {
    fontSize: 13,
    color: '#193F5A',
    fontWeight: '900',
    marginTop: -1,
  },

  successTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#21435E',

    textAlign: 'center',

    marginBottom: 9,
  },

  successDescription: {
    fontSize: 11,
    lineHeight: 18,
    color: '#71859A',

    textAlign: 'center',

    marginBottom: 20,
  },

  loginNowButton: {
    width: '100%',
    height: 40,

    borderRadius: 9,

    backgroundColor: '#173F5B',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginNowText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  loginNowArrow: {
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 8,
  },
});