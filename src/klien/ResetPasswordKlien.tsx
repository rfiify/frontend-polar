import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  Modal,
} from 'react-native';

const COLORS = {
  background: '#F3F8FC',
  white: '#FFFFFF',
  navy: '#062D47',
  navyDark: '#123F5A',
  text: '#173A50',
  textSecondary: '#596771',
  border: '#E8EEF3',
  inputBg: '#EAF4FC',
  blueSoft: '#DCEFFC',
  blue: '#2B6B8E',
  red: '#E53E3E',
  green: '#38A169',
  greyPlaceholder: '#858F98',
};

export default function ResetPasswordKlien({navigation}: any) {
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);

  // POPUP SUCCESS
  const [showSuccess, setShowSuccess] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasUpperLower = /[a-z]/.test(password) && /[A-Z]/.test(password);
  const hasNumberOrSymbol = /[0-9!@#$%^&*(),.?":{}|<>_\-+=]/.test(password);

  const handleUpdate = () => {
    if (!password || !konfirmasiPassword) return;
    if (!hasMinLength || !hasUpperLower || !hasNumberOrSymbol) return;
    if (password !== konfirmasiPassword) {
      // Show error or handle mismatch
      return;
    }
    setShowSuccess(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <View style={styles.backArrow}>
              <View style={styles.backArrowLine} />
              <View style={styles.backArrowTop} />
              <View style={styles.backArrowBottom} />
            </View>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Reset Kata Sandi</Text>

          <View style={styles.headerProfile}>
            <View style={styles.profileCircle}>
              <View style={styles.profileHead} />
              <View style={styles.profileBody} />
            </View>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">

          <View style={styles.content}>

            {/* BADGE */}
            <View style={styles.badge}>
              <View style={styles.badgeDots}>
                <View style={styles.badgeDot} />
                <View style={styles.badgeDotSmall} />
              </View>
              <Text style={styles.badgeText}>PEMBARUAN KATA SANDI • POLAR KLIEN</Text>
            </View>

            {/* KEY ILLUSTRATION */}
            <View style={styles.illustrationArea}>
              <View style={styles.circleBg}>
                <View style={styles.keyIcon}>
                  <View style={styles.keyRing} />
                  <View style={styles.keyStem} />
                  <View style={styles.keyTooth1} />
                  <View style={styles.keyTooth2} />
                </View>
              </View>
              <View style={styles.smallBadge}>
                <View style={styles.starIcon}>
                   <View style={styles.starH} />
                   <View style={styles.starV} />
                </View>
              </View>
            </View>

            {/* TITLE & DESCRIPTION */}
            <Text style={styles.mainTitle}>Buat Kata Sandi Baru</Text>
            <Text style={styles.description}>
              Buat kombinasi kata sandi baru yang kuat untuk menjaga keamanan akun bisnis, proyek, dan dana escrow Anda.
            </Text>

            {/* FORM CARD */}
            <View style={styles.formCard}>
              <View style={styles.fieldHeader}>
                <Text style={styles.fieldLabel}>Kata Sandi Baru</Text>
                {password.length > 0 && (
                  <Text style={styles.checkingText}>Memeriksa...</Text>
                )}
              </View>

              {/* PASSWORD INPUT */}
              <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                  <View style={styles.lockShackle} />
                  <View style={styles.lockBody} />
                </View>
                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Minimal 8 karakter unik"
                  placeholderTextColor={COLORS.greyPlaceholder}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  style={styles.textInput}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  <View style={styles.eyeIcon}>
                    <View style={styles.eyeOuter} />
                    <View style={styles.eyeInner} />
                  </View>
                </TouchableOpacity>
              </View>

              {/* STRENGTH INDICATOR */}
              <View style={styles.strengthContainer}>
                <View style={[
                  styles.strengthBar,
                  {
                    width: password.length === 0 ? '0%' : (hasMinLength && hasUpperLower && hasNumberOrSymbol ? '100%' : '50%'),
                    backgroundColor: password.length === 0 ? 'transparent' : (hasMinLength && hasUpperLower && hasNumberOrSymbol ? COLORS.green : COLORS.red)
                  }
                ]} />
              </View>

              {/* REQUIREMENTS */}
              <View style={styles.requirements}>
                <Requirement text="Minimal 8 karakter" valid={hasMinLength} />
                <Requirement text="Kombinasi huruf besar & kecil (A-Z)" valid={hasUpperLower} />
                <Requirement text="Memuat angka (0-9) atau simbol unik (@$!#)" valid={hasNumberOrSymbol} />
              </View>

              <Text style={styles.confirmLabel}>Konfirmasi Kata Sandi Baru</Text>

              {/* CONFIRM INPUT */}
              <View style={styles.inputWrapper}>
                <View style={styles.inputIcon}>
                  <View style={styles.repeatCircle} />
                  <View style={styles.repeatArrow} />
                </View>
                <TextInput
                  value={konfirmasiPassword}
                  onChangeText={setKonfirmasiPassword}
                  placeholder="Ulangi kata sandi baru"
                  placeholderTextColor={COLORS.greyPlaceholder}
                  secureTextEntry={!showKonfirmasi}
                  autoCapitalize="none"
                  style={styles.textInput}
                />
                <TouchableOpacity onPress={() => setShowKonfirmasi(!showKonfirmasi)}>
                  <View style={styles.eyeIcon}>
                    <View style={styles.eyeOuter} />
                    <View style={styles.eyeInner} />
                  </View>
                </TouchableOpacity>
              </View>

              {/* INFO BOX */}
              <View style={styles.infoBox}>
                <View style={styles.infoCircle}>
                   <Text style={styles.infoChar}>i</Text>
                </View>
                <Text style={styles.infoText}>
                  Pastikan kata sandi baru berbeda dari kata sandi sebelumnya untuk keamanan optimal seluruh kontrak proyek POLAR Anda.
                </Text>
              </View>

              {/* PRIMARY BUTTON */}
              <TouchableOpacity
                style={[
                  styles.primaryButton,
                  (!password || !konfirmasiPassword) && {opacity: 0.7}
                ]}
                onPress={handleUpdate}
              >
                <Text style={styles.primaryButtonText}>Perbarui Kata Sandi</Text>
                <View style={styles.arrowIcon}>
                  <View style={styles.arrowLine} />
                  <View style={styles.arrowHead} />
                </View>
              </TouchableOpacity>

            </View>

          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* ================= SUCCESS MODAL ================= */}
      <Modal transparent visible={showSuccess} animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <View style={styles.successIconCircle}>
              <Text style={styles.checkText}>✓</Text>
            </View>
            <Text style={styles.modalTitle}>Kata Sandi Berhasil Diperbarui</Text>
            <Text style={styles.modalDescription}>
              Kata sandi akun Klien Anda telah aktif. Silakan masuk kembali menggunakan kredensial baru Anda untuk melanjutkan pengelolaan proyek & escrow.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setShowSuccess(false);
                navigation.navigate('LoginKlien');
              }}
            >
              <Text style={styles.modalButtonText}>Masuk ke Akun Klien</Text>
              <View style={styles.arrowIconSmall}>
                <View style={styles.arrowLineSmall} />
                <View style={styles.arrowHeadSmall} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}

function Requirement({text, valid}: {text: string, valid: boolean}) {
  return (
    <View style={styles.reqRow}>
      <View style={[styles.reqDot, valid && styles.reqDotValid]}>
        {valid && <Text style={styles.checkTiny}>✓</Text>}
      </View>
      <Text style={[styles.reqText, valid && styles.reqTextValid]}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flex: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  header: {
    height: 110, // Increased height to lower it
    paddingTop: 45, // More padding to avoid status bar clock
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backArrow: {
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  backArrowLine: {
    width: 18,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
  },
  backArrowTop: {
    width: 10,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
    position: 'absolute',
    top: 5,
    left: 0,
    transform: [{rotate: '-45deg'}],
  },
  backArrowBottom: {
    width: 10,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
    position: 'absolute',
    bottom: 5,
    left: 0,
    transform: [{rotate: '45deg'}],
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
  },
  headerProfile: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  profileCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.navy,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileHead: {
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: COLORS.white,
    marginTop: 4,
  },
  profileBody: {
    width: 16,
    height: 10,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: COLORS.white,
    marginTop: 1,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 15,
  },
  badge: {
    backgroundColor: '#E7F2FC',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  badgeDots: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },
  badgeDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#2D6B8E',
    marginRight: 3,
  },
  badgeDotSmall: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2D6B8E',
    opacity: 0.6,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#2D6B8E',
    letterSpacing: 0.5,
  },
  illustrationArea: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  circleBg: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyIcon: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyRing: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLORS.blue,
  },
  keyStem: {
    width: 3,
    height: 20,
    backgroundColor: COLORS.blue,
    marginTop: -2,
  },
  keyTooth1: {
    width: 8,
    height: 3,
    backgroundColor: COLORS.blue,
    position: 'absolute',
    right: 8,
    bottom: 8,
  },
  keyTooth2: {
    width: 8,
    height: 3,
    backgroundColor: COLORS.blue,
    position: 'absolute',
    right: 8,
    bottom: 2,
  },
  smallBadge: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.navyDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  starIcon: {
    width: 12,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  starH: {
    width: 12,
    height: 2,
    backgroundColor: COLORS.white,
    position: 'absolute',
  },
  starV: {
    width: 2,
    height: 12,
    backgroundColor: COLORS.white,
    position: 'absolute',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.navy,
    textAlign: 'center',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  formCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: '#EDF1F5',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.03,
    shadowRadius: 15,
    elevation: 3,
  },
  fieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.navy,
  },
  checkingText: {
    fontSize: 11,
    fontWeight: '600',
    color: COLORS.blue,
  },
  inputWrapper: {
    height: 50,
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 12,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockShackle: {
    width: 10,
    height: 8,
    borderWidth: 2,
    borderColor: COLORS.blue,
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  lockBody: {
    width: 14,
    height: 10,
    backgroundColor: COLORS.blue,
    borderRadius: 2,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: COLORS.navy,
    fontWeight: '600',
  },
  eyeIcon: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeOuter: {
    width: 18,
    height: 10,
    borderWidth: 2,
    borderColor: '#A0AEC0',
    borderRadius: 5,
  },
  eyeInner: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#A0AEC0',
    position: 'absolute',
  },
  strengthContainer: {
    height: 4,
    backgroundColor: '#E2E8F0',
    borderRadius: 2,
    marginBottom: 15,
    overflow: 'hidden',
  },
  strengthBar: {
    height: '100%',
    borderRadius: 2,
  },
  requirements: {
    marginBottom: 20,
  },
  reqRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reqDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#E2E8F0',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reqDotValid: {
    backgroundColor: COLORS.green,
  },
  checkTiny: {
    color: COLORS.white,
    fontSize: 9,
    fontWeight: '900',
  },
  reqText: {
    fontSize: 12,
    color: '#718096',
    fontWeight: '500',
  },
  reqTextValid: {
    color: COLORS.navy,
    fontWeight: '600',
  },
  confirmLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.navy,
    marginBottom: 10,
  },
  repeatCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
  },
  repeatArrow: {
    width: 6,
    height: 6,
    borderTopWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: COLORS.blue,
    position: 'absolute',
    top: 2,
    right: 2,
    transform: [{rotate: '45deg'}],
  },
  infoBox: {
    backgroundColor: '#F7FAFC',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    marginBottom: 25,
  },
  infoCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#CBD5E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 2,
  },
  infoChar: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '800',
  },
  infoText: {
    flex: 1,
    fontSize: 11,
    color: '#718096',
    lineHeight: 16,
  },
  primaryButton: {
    width: '100%',
    height: 54,
    backgroundColor: COLORS.navyDark,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
  arrowIcon: {
    marginLeft: 12,
    width: 20,
    height: 20,
    justifyContent: 'center',
  },
  arrowLine: {
    width: 16,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },
  arrowHead: {
    width: 10,
    height: 10,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.white,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    right: 0,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  modalCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 24,
    padding: 30,
    alignItems: 'center',
  },
  successIconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E6FFFA',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkText: {
    fontSize: 35,
    color: COLORS.green,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.navy,
    textAlign: 'center',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 25,
  },
  modalButton: {
    width: '100%',
    height: 54,
    backgroundColor: COLORS.navyDark,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: COLORS.white,
  },
  arrowIconSmall: {
    marginLeft: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
  },
  arrowLineSmall: {
    width: 12,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },
  arrowHeadSmall: {
    width: 7,
    height: 7,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.white,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    right: 0,
  },
});
