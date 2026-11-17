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
  StatusBar,
  SafeAreaView,
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

// Simple Arrow Component
const BoldArrow = ({ direction = 'right', color = '#FFFFFF', size = 20 }) => {
  return (
    <View style={[styles.arrowContainer, { width: size, height: size }]}>
      <View style={[styles.arrowLine, { backgroundColor: color, width: size * 0.8 }]} />
      <View style={[styles.arrowHeadTop, { borderColor: color, width: size * 0.35, height: size * 0.35, top: size * 0.28, left: size * 0.08 }]} />
      <View style={[styles.arrowHeadBottom, { borderColor: color, width: size * 0.35, height: size * 0.35, bottom: size * 0.28, left: size * 0.1 }]} />
    </View>
  );
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
    if (!nama.trim() || !nim.trim() || !email.trim() || !password) {
      Alert.alert('Data belum lengkap', 'Silakan lengkapi semua data.');
      return;
    }

    if (!agree) {
      Alert.alert('Persetujuan diperlukan', 'Silakan menyetujui Ketentuan Layanan & Kebijakan Privasi.');
      return;
    }

    try {
      setLoading(true);

      // Simulate registration success or call actual API
      // If you want to bypass backend check for UI testing:
      // setSuccessModal(true);
      // return;

      const response = await fetch('http://10.0.2.2:5000/auth/register', {
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
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        Alert.alert('Registrasi gagal', result.message || 'Terjadi kesalahan.');
        return;
      }

      setSuccessModal(true);
  
    } catch (error) {
      // In case of connection error, you can still show the modal for UI review
      // setSuccessModal(true);
      Alert.alert('Tidak dapat terhubung', 'Periksa koneksi internet atau server.');
    } finally {
      setLoading(false);
    }
  };

  const handleMasukSekarang = () => {
    setSuccessModal(false);
    navigation.navigate('LoginMahasiswa');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Daftar Akun</Text>
          <View style={{width: 32}} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          <View style={styles.content}>
            <Text style={styles.title}>Daftar Mahasiswa</Text>
            <Text style={styles.subtitle}>
              Buat akun POLAR untuk akses magang dan proyek kampus Polinela.
            </Text>

            <View style={styles.divider} />

            {/* NAMA LENGKAP */}
            <Text style={styles.label}>Nama Lengkap</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconContainer}>
                <View style={styles.personHead} />
                <View style={styles.personBody} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Nama sesuai KTM"
                placeholderTextColor="#8A9BAA"
                value={nama}
                onChangeText={setNama}
              />
            </View>

            {/* NIM */}
            <Text style={styles.label}>Nomor Induk Mahasiswa (NIM)</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.iconContainer}>
                <View style={styles.nimCard}>
                  <View style={styles.nimPhoto} />
                  <View style={styles.nimLines} />
                </View>
              </View>
              <TextInput
                style={styles.input}
                placeholder="Contoh: 21753045"
                placeholderTextColor="#8A9BAA"
                value={nim}
                onChangeText={setNim}
                keyboardType="numeric"
              />
            </View>

            {/* EMAIL */}
            <Text style={styles.label}>Email Kampus Polinela</Text>
            <View style={styles.inputWrapper}>
              <Text style={styles.inputIconText}>✉</Text>
              <TextInput
                style={styles.input}
                placeholder="nama@polinela.ac.id"
                placeholderTextColor="#8A9BAA"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* KATA SANDI */}
            <Text style={styles.label}>Kata Sandi</Text>
            <View style={styles.inputWrapper}>
              <View style={styles.lockIconContainer}>
                <View style={styles.lockShackle} />
                <View style={styles.lockBase} />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Minimal 8 karakter"
                placeholderTextColor="#8A9BAA"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <View style={styles.eyeIconContainer}>
                   <View style={styles.eyeOuter}>
                      <View style={styles.eyeInner} />
                   </View>
                   {!showPassword && <View style={styles.eyeSlash} />}
                </View>
              </TouchableOpacity>
            </View>

            {/* CHECKBOX */}
            <TouchableOpacity
              style={styles.checkboxRow}
              activeOpacity={0.7}
              onPress={() => setAgree(!agree)}>
              <View style={[styles.checkbox, agree && styles.checkboxChecked]}>
                {agree && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.checkboxText}>
                Saya menyetujui <Text style={styles.boldText}>Ketentuan Layanan</Text> & <Text style={styles.boldText}>Kebijakan Privasi</Text> POLAR
              </Text>
            </TouchableOpacity>

            {/* SUBMIT BUTTON */}
            <TouchableOpacity
              style={[styles.submitButton, loading && {opacity: 0.7}]}
              activeOpacity={0.8}
              onPress={handleRegister}
              disabled={loading}>
              <View style={styles.buttonInner}>
                <Text style={styles.submitButtonText}>
                  {loading ? 'Memproses...' : 'Daftar Sekarang'}
                </Text>
                {!loading && <Text style={styles.arrowIcon}>→</Text>}
              </View>
            </TouchableOpacity>

            {/* FOOTER */}
            <View style={styles.footer}>
              <View style={styles.lockIconMini}>
                <View style={styles.miniShackle} />
                <View style={styles.miniBase} />
              </View>
              <Text style={styles.footerText}>
                Data terenkripsi & terhubung aman SSO Polinela
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* SUCCESS MODAL */}
      <Modal
        visible={successModal}
        transparent
        animationType="fade"
        onRequestClose={() => setSuccessModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.successCard}>
            <View style={styles.successIconOuter}>
              <View style={styles.successIconCircle}>
                <Text style={styles.successCheck}>✓</Text>
              </View>
            </View>

            <Text style={styles.successTitle}>Akun anda berhasil dibuat</Text>

            <Text style={styles.successDescription}>
              Akun mahasiswa POLAR Anda telah aktif. Silakan masuk untuk mulai mengeksplorasi lowongan dan proyek kampus.
            </Text>

            <TouchableOpacity
              style={styles.loginNowButton}
              activeOpacity={0.8}
              onPress={handleMasukSekarang}>
              <View style={styles.loginNowContent}>
                <Text style={styles.loginNowText}>Masuk Sekarang</Text>
                <View style={{ marginLeft: 10 }}>
                   <BoldArrow direction="right" color="#FFFFFF" size={18} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContent: {
    flexGrow: 1,
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
  backButton: {
    width: 32,
    height: 40,
    justifyContent: 'center',
  },
  backText: {
    fontSize: 28,
    color: '#062D47',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#062D47',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#062D47',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: '#596771',
    marginBottom: 32,
  },
  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#062D47',
    marginBottom: 8,
  },
  inputWrapper: {
    height: 56,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  iconContainer: {
    width: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  personHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#8A9BAA',
  },
  personBody: {
    width: 14,
    height: 7,
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
    borderWidth: 1.5,
    borderColor: '#8A9BAA',
    marginTop: 1,
  },
  nimCard: {
    width: 16,
    height: 14,
    borderWidth: 1.5,
    borderColor: '#8A9BAA',
    borderRadius: 2,
    padding: 2,
  },
  nimPhoto: {
    width: 4,
    height: 4,
    backgroundColor: '#8A9BAA',
  },
  nimLines: {
    width: 6,
    height: 1,
    backgroundColor: '#8A9BAA',
    position: 'absolute',
    right: 2,
    top: 4,
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
    color: '#062D47',
    fontSize: 15,
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
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
    marginBottom: 32,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 4,
    marginRight: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    borderColor: COLORS.navy,
  },
  checkmark: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: 'bold',
  },
  checkboxText: {
    flex: 1,
    fontSize: 14,
    color: '#596771',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#062D47',
  },
  submitButton: {
    height: 56,
    backgroundColor: COLORS.navy,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrowIcon: {
    color: COLORS.white,
    fontSize: 24,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  lockIconMini: {
    marginRight: 8,
    alignItems: 'center',
  },
  miniShackle: {
    width: 8,
    height: 6,
    borderWidth: 1.5,
    borderColor: '#94A3B8',
    borderBottomWidth: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: -1,
  },
  miniBase: {
    width: 12,
    height: 8,
    backgroundColor: '#94A3B8',
    borderRadius: 1,
  },
  footerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(5, 32, 48, 0.7)',
  },
  successCard: {
    width: '85%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  successIconOuter: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#EBF4FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  successIconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.navy,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCheck: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  successTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.navy,
    textAlign: 'center',
    marginBottom: 12,
  },
  successDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  loginNowButton: {
    width: '100%',
    height: 56,
    backgroundColor: COLORS.navy,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginNowContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginNowText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Arrow styles
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLine: {
    height: 3,
    borderRadius: 1.5,
  },
  arrowHeadTop: {
    borderTopWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    borderTopLeftRadius: 2,
  },
  arrowHeadBottom: {
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    borderBottomLeftRadius: 2,
  },
});
