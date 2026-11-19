import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';

const COLORS = {
  background: '#F3F8FC',
  white: '#FFFFFF',
  navy: '#062D47',
  text: '#173A50',
  textSecondary: '#596771',
  border: '#E8EEF3',
  input: '#EAF4FC',
  blueSoft: '#DCEFFC',
  blueIcon: '#2B6B8E',
  greyLight: '#8A9BA7',
  greyLabel: '#7B8790',
  navyDark: '#073650',
  buttonNavy: '#123F5A',
  green: '#38A169',
};

export default function RegistrasiKlienScreen({navigation}: any) {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);

const handleRegister = () => {
  if (!nama.trim()) {
    return;
  }

  if (!email.trim()) {
    return;
  }

  if (!password.trim()) {
    return;
  }

  if (!agree) {
    return;
  }

  navigation.navigate('VerifikasiOTPRegistrasiKlien', {
    email: email.trim(),
  });
};

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <View style={styles.backArrowWrapper}>
              <View style={styles.backArrowLine} />
              <View style={styles.backArrowTop} />
              <View style={styles.backArrowBottom} />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Daftar Akun</Text>

          <View style={styles.clientBadge}>
            <View style={styles.clientDot} />
            <Text style={styles.clientBadgeText}>POLAR Client</Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}>

          <View style={styles.content}>

            {/* ROLE BADGE */}
            <View style={styles.roleBadge}>
              <View style={styles.briefcaseIcon}>
                <View style={styles.bcHandle} />
                <View style={styles.bcBody} />
              </View>
              <Text style={styles.roleText}>Klien / Pemberi Proyek</Text>
            </View>

            {/* TITLE */}
            <Text style={styles.title}>Daftar Akun Klien</Text>
            <Text style={styles.subtitle}>
              Rekrut talenta mahasiswa dan kelola proyek freelance.
            </Text>

            {/* GOOGLE BUTTON */}
            <TouchableOpacity style={styles.googleButton} activeOpacity={0.8}>
              <View style={styles.googleLogo}>
                <Text style={styles.googleG}>G</Text>
              </View>
              <Text style={styles.googleText}>Daftar Cepat dengan Google</Text>
            </TouchableOpacity>

            {/* DIVIDER */}
            <View style={styles.dividerContainer}>
              <View style={styles.dividerLine} />
              <Text style={styles.dividerText}>ATAU VIA EMAIL</Text>
              <View style={styles.dividerLine} />
            </View>

            {/* INPUT NAMA */}
            <View style={styles.inputSection}>
              <Text style={styles.label}>
                Nama Lengkap / Nama Bisnis <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputWrapper}>
                <View style={styles.inputIconContainer}>
                  <View style={styles.shopIcon}>
                    <View style={styles.shopRoof} />
                    <View style={styles.shopDoor} />
                  </View>
                </View>
                <TextInput
                  value={nama}
                  onChangeText={setNama}
                  placeholder="Nama lengkap atau bisnis"
                  placeholderTextColor="#A4B3C4"
                  style={styles.input}
                />
              </View>
            </View>

            {/* INPUT EMAIL */}
            <View style={styles.inputSection}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>
                  Email <Text style={styles.required}>*</Text>
                </Text>
                <Text style={styles.labelHint}>Gmail / Email pribadi</Text>
              </View>
              <View style={styles.inputWrapper}>
                <View style={styles.inputIconContainer}>
                  <View style={styles.mailIcon}>
                    <View style={styles.mailBody} />
                    <View style={styles.mailTriangle} />
                  </View>
                </View>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="nama@email.com"
                  placeholderTextColor="#A4B3C4"
                  style={styles.input}
                  keyboardType="email-address"
                />
              </View>
            </View>

            {/* INPUT PASSWORD */}
            <View style={styles.inputSection}>
              <Text style={styles.label}>
                Kata Sandi <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.inputWrapper}>
                <View style={styles.inputIconContainer}>
                  <View style={styles.lockIcon}>
                    <View style={styles.lockShackle} />
                    <View style={styles.lockBody} />
                  </View>
                </View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Minimal 8 karakter"
                  placeholderTextColor="#A4B3C4"
                  style={styles.input}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeButton}>
                  <View style={styles.eyeIconContainer}>
                    <View style={styles.eyeOuter} />
                    <View style={styles.eyeInner} />
                    {!showPassword && <View style={styles.eyeSlash} />}
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* AGREEMENT */}
            <TouchableOpacity
              style={styles.agreementRow}
              activeOpacity={0.8}
              onPress={() => setAgree(!agree)}>
              <View style={[styles.checkbox, agree && styles.checkboxActive]}>
                {agree && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.agreementText}>
                Saya menyetujui <Text style={styles.agreementLink}>Ketentuan Layanan</Text> & <Text style={styles.agreementLink}>Kebijakan Privasi</Text> POLAR.
              </Text>
            </TouchableOpacity>

            {/* REGISTER BUTTON */}
            <TouchableOpacity
              style={[styles.registerButton, !agree && {opacity: 0.8}]}
              activeOpacity={0.85}
              onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Daftarkan Akun</Text>
              <View style={styles.btnArrowIcon}>
                <View style={styles.btnArrowLine} />
                <View style={styles.btnArrowHead} />
              </View>
            </TouchableOpacity>

            {/* LOGIN LINK */}
            <View style={styles.loginRow}>
              <Text style={styles.loginQuestion}>Sudah punya akun? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('LoginKlien')}>
                <Text style={styles.loginLink}>Masuk di sini</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F3F8FC',
  },
  keyboard: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  /* ================= HEADER ================= */
  header: {
    height: 110,
    paddingTop: 45,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backArrowWrapper: {
    width: 22,
    height: 22,
    position: 'relative',
  },
  backArrowLine: {
    position: 'absolute',
    left: 2,
    top: 10,
    width: 18,
    height: 2,
    backgroundColor: '#062D47',
    borderRadius: 1,
  },
  backArrowTop: {
    position: 'absolute',
    left: 2,
    top: 5,
    width: 10,
    height: 2,
    backgroundColor: '#062D47',
    borderRadius: 1,
    transform: [{rotate: '-45deg'}],
  },
  backArrowBottom: {
    position: 'absolute',
    left: 2,
    top: 15,
    width: 10,
    height: 2,
    backgroundColor: '#062D47',
    borderRadius: 1,
    transform: [{rotate: '45deg'}],
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#062D47',
    marginLeft: 5,
  },
  clientBadge: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  clientDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#38A169',
    marginRight: 6,
  },
  clientBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#4A5568',
  },

  /* ================= CONTENT ================= */
  content: {
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  roleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EAF4FE',
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    marginBottom: 15,
  },
  briefcaseIcon: {
    width: 16,
    height: 14,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bcHandle: {
    width: 8,
    height: 4,
    borderWidth: 1.5,
    borderColor: '#2B6B8E',
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  bcBody: {
    width: 16,
    height: 10,
    borderWidth: 1.5,
    borderColor: '#2B6B8E',
    borderRadius: 2,
    marginTop: -1.5,
  },
  roleText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2B6B8E',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#062D47',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 25,
  },

  /* ================= GOOGLE ================= */
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  googleLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  googleG: {
    fontSize: 16,
    fontWeight: '900',
    color: '#4285F4',
  },
  googleText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4A5568',
  },

  /* ================= DIVIDER ================= */
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },
  dividerText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A0AEC0',
    marginHorizontal: 15,
  },

  /* ================= INPUTS ================= */
  inputSection: {
    marginBottom: 15,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#4A5568',
    marginBottom: 8,
  },
  required: {
    color: '#E53E3E',
  },
  labelHint: {
    fontSize: 11,
    color: '#A0AEC0',
  },
  inputWrapper: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  inputIconContainer: {
    width: 20,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shopIcon: {
    width: 18,
    height: 14,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
    borderRadius: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  shopRoof: {
    width: 18,
    height: 2,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
    top: 2,
  },
  shopDoor: {
    width: 4,
    height: 6,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
    borderBottomWidth: 0,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  mailIcon: {
    width: 20,
    height: 15,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mailBody: {
    flex: 1,
  },
  mailTriangle: {
    position: 'absolute',
    top: 0,
    left: 2,
    width: 14,
    height: 10,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: '#A0AEC0',
    transform: [{rotate: '-180deg'}],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  lockIcon: {
    width: 14,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockShackle: {
    width: 10,
    height: 8,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  lockBody: {
    width: 14,
    height: 10,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
    borderRadius: 2,
    marginTop: -1,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '500',
  },
  eyeButton: {
    padding: 5,
  },
  eyeIconContainer: {
    width: 20,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeOuter: {
    width: 20,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: '#A0AEC0',
  },
  eyeInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
  },
  eyeSlash: {
    position: 'absolute',
    width: 22,
    height: 1.5,
    backgroundColor: '#A0AEC0',
    transform: [{rotate: '45deg'}],
  },

  /* ================= AGREEMENT ================= */
  agreementRow: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 25,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxActive: {
    backgroundColor: '#123F5A',
    borderColor: '#123F5A',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '900',
  },
  agreementText: {
    flex: 1,
    fontSize: 12,
    color: '#718096',
    lineHeight: 18,
  },
  agreementLink: {
    color: '#2B6B8E',
    fontWeight: '700',
  },

  /* ================= BUTTON ================= */
  registerButton: {
    width: '100%',
    height: 52,
    backgroundColor: '#123F5A',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },
  btnArrowIcon: {
    marginLeft: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  btnArrowLine: {
    width: 14,
    height: 2,
    backgroundColor: '#FFFFFF',
    borderRadius: 1,
  },
  btnArrowHead: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: '#FFFFFF',
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    right: 0,
  },

  /* ================= LOGIN LINK ================= */
  loginRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginQuestion: {
    fontSize: 13,
    color: '#718096',
  },
  loginLink: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2B6B8E',
  },
});