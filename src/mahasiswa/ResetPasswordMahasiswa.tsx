import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
} from 'react-native';

type Props = {
  navigation: any;
};

export default function ResetPasswordMahasiswa({navigation}: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  /* ================= PASSWORD CHECK ================= */

  const hasMinLength = password.length >= 8;
  const hasUpperLower =
    /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const strength =
    Number(hasMinLength) +
    Number(hasUpperLower) +
    Number(hasNumber) +
    Number(hasSymbol);

  const passwordsMatch =
    confirmPassword.length > 0 &&
    password === confirmPassword;

  const passwordValid =
    hasMinLength &&
    hasUpperLower &&
    hasNumber;

  /* ================= SAVE ================= */

  const handleSave = () => {
    if (!passwordValid || !passwordsMatch) {
      return;
    }

    // Sementara UI saja.
    // Nanti disambungkan ke API reset password.
    setShowSuccess(true);
  };

  /* ================= LOGIN ================= */

  const handleLogin = () => {
    setShowSuccess(false);
    navigation.navigate('LoginMahasiswa');
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>

          {/* =====================================================
              HEADER
          ===================================================== */}

          <View style={styles.header}>

            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>

              <Text style={styles.backText}>
                ‹
              </Text>

            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Buat Kata Sandi Baru
            </Text>

            <View style={styles.profileCircle}>
              <Text style={styles.profileIcon}>
                ♙
              </Text>
            </View>

          </View>

          {/* =====================================================
              CONTENT
          ===================================================== */}

          <View style={styles.content}>

            {/* ================= ICON ================= */}

            <View style={styles.iconContainer}>

              <View style={styles.iconCircle}>

                <Text style={styles.resetIcon}>
                  ↻
                </Text>

                <View style={styles.miniShield}>
                  <Text style={styles.miniShieldText}>
                    ✓
                  </Text>
                </View>

              </View>

            </View>

            {/* ================= TITLE ================= */}

            <Text style={styles.title}>
              Buat Kata Sandi Baru
            </Text>

            <Text style={styles.subtitle}>
              Silakan buat kata sandi baru yang kuat dan
              {'\n'}
              aman untuk akun POLAR Mahasiswa Anda.
            </Text>

            {/* =====================================================
                PASSWORD BARU
            ===================================================== */}

            <View style={styles.section}>

              <Text style={styles.label}>
                Kata Sandi Baru
              </Text>

              <View style={styles.inputWrapper}>

                <Text style={styles.inputIcon}>
                  ⚿
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Gunakan kata sandi yang kuat..."
                  placeholderTextColor="#7D8B96"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }>

                  <Text style={styles.eyeIcon}>
                    ◉
                  </Text>

                </TouchableOpacity>

              </View>

              {/* ================= STRENGTH ================= */}

              <View style={styles.strengthHeader}>

                <Text style={styles.strengthLabel}>
                  Tingkat Kekuatan
                </Text>

                <Text style={styles.strengthValue}>
                  Kuat (3/4)
                </Text>

              </View>

              <View style={styles.strengthBars}>

                {[0, 1, 2, 3].map(index => (
                  <View
                    key={index}
                    style={[
                      styles.strengthBar,
                      index < strength &&
                        styles.strengthBarActive,
                    ]}
                  />
                ))}

              </View>

              {/* ================= CRITERIA ================= */}

              <View style={styles.criteriaBox}>

                <Text style={styles.criteriaTitle}>
                  KRITERIA KEAMANAN
                </Text>

                <View style={styles.criteriaRow}>

                  <View
                    style={[
                      styles.criteriaCircle,
                      !hasMinLength &&
                        styles.criteriaCircleInactive,
                    ]}>

                    <Text style={styles.criteriaCheck}>
                      ✓
                    </Text>

                  </View>

                  <Text style={styles.criteriaText}>
                    Min. 8 karakter
                  </Text>

                </View>

                <View style={styles.criteriaRow}>

                  <View
                    style={[
                      styles.criteriaCircle,
                      !hasUpperLower &&
                        styles.criteriaCircleInactive,
                    ]}>

                    <Text style={styles.criteriaCheck}>
                      ✓
                    </Text>

                  </View>

                  <Text style={styles.criteriaText}>
                    Huruf besar & kecil
                  </Text>

                </View>

                <View style={styles.criteriaRow}>

                  <View
                    style={[
                      styles.criteriaCircle,
                      !hasNumber &&
                        styles.criteriaCircleInactive,
                    ]}>

                    <Text style={styles.criteriaCheck}>
                      ✓
                    </Text>

                  </View>

                  <Text style={styles.criteriaText}>
                    Mengandung angka (0-9)
                  </Text>

                </View>

                <View style={styles.criteriaRow}>

                  <View
                    style={[
                      styles.criteriaCircle,
                      !hasSymbol &&
                        styles.criteriaCircleInactive,
                    ]}>

                    <Text style={styles.criteriaCheck}>
                      ✓
                    </Text>

                  </View>

                  <Text
                    style={[
                      styles.criteriaText,
                      !hasSymbol &&
                        styles.criteriaTextInactive,
                    ]}>
                    Simbol khusus (@#$%^&*)
                  </Text>

                </View>

              </View>

            </View>

            {/* =====================================================
                KONFIRMASI PASSWORD
            ===================================================== */}

            <View style={styles.confirmSection}>

              <Text style={styles.label}>
                Konfirmasi Kata Sandi Baru
              </Text>

              <View style={styles.inputWrapper}>

                <Text style={styles.inputIcon}>
                  ▢
                </Text>

                <TextInput
                  style={styles.input}
                  placeholder="Konfirmasi kata sandi anda"
                  placeholderTextColor="#7D8B96"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword,
                    )
                  }>

                  <Text style={styles.eyeIcon}>
                    ◉
                  </Text>

                </TouchableOpacity>

              </View>

              {/* PASSWORD MATCH */}

              <View style={styles.matchRow}>

                <View style={styles.matchCircle}>
                  <Text style={styles.matchCheck}>
                    ✓
                  </Text>
                </View>

                <Text style={styles.matchText}>
                  Kata sandi cocok
                </Text>

              </View>

            </View>

            {/* =====================================================
                SAVE BUTTON
            ===================================================== */}

            <TouchableOpacity
              style={[
                styles.saveButton,
                (!passwordValid || !passwordsMatch) &&
                  styles.saveButtonDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleSave}>

              <Text style={styles.saveButtonText}>
                Simpan Kata Sandi & Masuk
              </Text>

              <Text style={styles.saveArrow}>
                →
              </Text>

            </TouchableOpacity>

            {/* =====================================================
                BACK LOGIN
            ===================================================== */}

            <View style={styles.backLogin}>

              <Text style={styles.backLoginText}>
                Ingat kata sandi lama Anda?
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() =>
                  navigation.navigate('LoginMahasiswa')
                }>

                <Text style={styles.backLoginButton}>
                  Masuk Kembali
                </Text>

              </TouchableOpacity>

            </View>

            {/* =====================================================
                SECURITY FOOTER
            ===================================================== */}

            <View style={styles.securityFooter}>

              <Text style={styles.securityIcon}>
                ♢
              </Text>

              <Text style={styles.securityText}>
                Terenkripsi aman dengan standar keamanan UPA TIK
                {'\n'}
                Polinela
              </Text>

            </View>

          </View>
        </ScrollView>

      </KeyboardAvoidingView>

      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccess(false)}>

        <View style={styles.modalOverlay}>

          <View style={styles.successModal}>

            <View style={styles.successIconCircle}>

              <Text style={styles.successCheck}>
                ✓
              </Text>

            </View>

            <Text style={styles.successTitle}>
              Kata sandi anda berhasil di ubah
            </Text>

            <Text style={styles.successDescription}>
              Kata sandi baru Anda telah aktif. Silakan masuk
              {'\n'}
              kembali menggunakan kredensial baru Anda.
            </Text>

            <TouchableOpacity
              style={styles.loginButton}
              activeOpacity={0.8}
              onPress={handleLogin}>

              <Text style={styles.loginButtonText}>
                Silakan Masuk
              </Text>

              <Text style={styles.loginArrow}>
                →
              </Text>

            </TouchableOpacity>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  );
}

/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  keyboard: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 22,
  },

  /* ================= HEADER ================= */

/* ================= HEADER ================= */

header: {
  height: 88,
  paddingHorizontal: 18,
  paddingTop: 16,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#F4F8FC',
  borderBottomWidth: 1,
  borderBottomColor: '#E8EFF4',
},

backButton: {
  width: 40,
  height: 40,
  justifyContent: 'center',
  alignItems: 'flex-start',
  transform: [{translateY: 7}],
},

backText: {
  color: '#062D47',
  fontSize: 36,
  lineHeight: 40,
  fontWeight: '300',
},

headerTitle: {
  color: '#062D47',
  fontSize: 16,
  fontWeight: '800',
  transform: [{translateY: 7}],
},

profileCircle: {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: '#063452',
  justifyContent: 'center',
  alignItems: 'center',
  transform: [{translateY: 7}],
},

  profileIcon: {
    color: '#FFFFFF',
    fontSize: 19,
  },

  /* ================= CONTENT ================= */

  content: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },

  /* ================= ICON ================= */

  iconContainer: {
    alignItems: 'center',
    marginBottom: 14,
  },

  iconCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#DCEEFF',
    borderWidth: 1,
    borderColor: '#C8E2F5',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  resetIcon: {
    color: '#164B6A',
    fontSize: 34,
    fontWeight: '700',
  },

  miniShield: {
    position: 'absolute',
    right: -3,
    bottom: -3,
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#6D9CB4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  miniShieldText: {
    color: '#075C67',
    fontSize: 11,
    fontWeight: '900',
  },

  /* ================= TITLE ================= */

  title: {
    color: '#062D47',
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 7,
  },

  subtitle: {
    color: '#53616E',
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 24,
  },

  /* ================= FIELD ================= */

  section: {
    marginBottom: 16,
  },

  confirmSection: {
    marginBottom: 15,
  },

  label: {
    color: '#172F42',
    fontSize: 12,
    fontWeight: '800',
    marginBottom: 7,
  },

  inputWrapper: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DCE5EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
  },

  inputIcon: {
    width: 29,
    color: '#70818E',
    fontSize: 18,
    textAlign: 'center',
    marginRight: 5,
  },

  input: {
    flex: 1,
    height: 46,
    color: '#172F42',
    fontSize: 13,
    paddingVertical: 0,
  },

  eyeButton: {
    width: 31,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eyeIcon: {
    color: '#70818E',
    fontSize: 17,
  },

  /* ================= STRENGTH ================= */

  strengthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 7,
    marginBottom: 5,
  },

  strengthLabel: {
    color: '#596A76',
    fontSize: 10,
    fontWeight: '700',
  },

  strengthValue: {
    color: '#286584',
    fontSize: 10,
    fontWeight: '700',
  },

  strengthBars: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 11,
  },

  strengthBar: {
    flex: 1,
    height: 6,
    borderRadius: 6,
    backgroundColor: '#CDE1ED',
  },

  strengthBarActive: {
    backgroundColor: '#2A6987',
  },

  /* ================= CRITERIA ================= */

  criteriaBox: {
    backgroundColor: '#E7F2FC',
    borderRadius: 12,
    paddingHorizontal: 13,
    paddingVertical: 12,
  },

  criteriaTitle: {
    color: '#657580',
    fontSize: 9,
    fontWeight: '800',
    marginBottom: 7,
  },

  criteriaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },

  criteriaCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#075C5B',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  criteriaCircleInactive: {
    backgroundColor: '#C5D9E5',
  },

  criteriaCheck: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '900',
  },

  criteriaText: {
    color: '#294A5E',
    fontSize: 10,
  },

  criteriaTextInactive: {
    color: '#738492',
  },

  /* ================= MATCH ================= */

  matchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  matchCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#286B83',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 6,
  },

  matchCheck: {
    color: '#286B83',
    fontSize: 9,
    fontWeight: '900',
  },

  matchText: {
    color: '#286B83',
    fontSize: 10,
    fontWeight: '600',
  },

  /* ================= SAVE ================= */

  saveButton: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#073A58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  saveButtonDisabled: {
    opacity: 0.55,
  },

  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  saveArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 8,
  },

  /* ================= BACK LOGIN ================= */

  backLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  backLoginText: {
    color: '#66747F',
    fontSize: 10,
    marginRight: 5,
  },

  backLoginButton: {
    color: '#286B83',
    fontSize: 11,
    fontWeight: '800',
  },

  /* ================= SECURITY ================= */

  securityFooter: {
    backgroundColor: '#E7F2FC',
    borderRadius: 15,
    minHeight: 45,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  securityIcon: {
    color: '#286B83',
    fontSize: 15,
    marginRight: 7,
  },

  securityText: {
    color: '#637787',
    fontSize: 9,
    lineHeight: 12,
    textAlign: 'center',
  },

  /* ================= MODAL ================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(25, 38, 52, 0.48)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  successModal: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 21,
    alignItems: 'center',
  },

  successIconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#DCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },

  successCheck: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#174766',
    color: '#FFFFFF',
    fontSize: 19,
    lineHeight: 30,
    textAlign: 'center',
    fontWeight: '900',
  },

  successTitle: {
    color: '#173D59',
    fontSize: 16,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },

  successDescription: {
    color: '#65737D',
    fontSize: 10,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 18,
  },

  loginButton: {
    width: '100%',
    height: 46,
    borderRadius: 10,
    backgroundColor: '#073A58',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  loginArrow: {
    color: '#FFFFFF',
    fontSize: 19,
    marginLeft: 8,
  },

});