import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Modal,
  Image,
} from 'react-native';

import logo from '../assets/logo.png';

type Props = {
  navigation: any;
};

/* ============================================================
   ICON LOCK
   Gembok hitam putih untuk label
============================================================ */

const LockIcon = () => {
  return (
    <View style={styles.lockIcon}>
      <View style={styles.lockShackle} />
      <View style={styles.lockBody}>
        <View style={styles.lockKeyhole} />
      </View>
    </View>
  );
};

/* ============================================================
   ICON EYE
   Mata untuk show / hide password
============================================================ */

const EyeIcon = ({visible}: {visible: boolean}) => {
  return (
    <View style={styles.eyeIcon}>
      <View style={styles.eyeShape}>
        <View style={styles.eyePupil} />
      </View>

      {!visible && <View style={styles.eyeSlash} />}
    </View>
  );
};

export default function ResetPasswordPerusahaan({
  navigation,
}: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  /* ============================================================
     PASSWORD VALIDATION
  ============================================================ */

  const hasMinLength = password.length >= 8;

  const hasUppercase = /[A-Z]/.test(password);

  const hasLowercase = /[a-z]/.test(password);

  const hasNumber = /[0-9]/.test(password);

  const hasSymbol = /[^A-Za-z0-9]/.test(password);

  const passwordStrong =
    hasMinLength &&
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSymbol;

  const passwordMatch =
    password.length > 0 &&
    confirmPassword.length > 0 &&
    password === confirmPassword;

  /* ============================================================
     PASSWORD STRENGTH
  ============================================================ */

  const strengthLevel = passwordStrong
    ? 3
    : password.length >= 4
    ? 2
    : password.length >= 1
    ? 1
    : 0;

  /* ============================================================
     SAVE PASSWORD
     UI ONLY - BELUM TERHUBUNG BACKEND
  ============================================================ */

  const handleSave = () => {
    if (!password || !confirmPassword) {
      return;
    }

    if (!passwordStrong) {
      return;
    }

    if (!passwordMatch) {
      return;
    }

    setShowSuccess(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F8FC"
        translucent={false}
      />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* ==================================================
              HEADER
          ================================================== */}

          <View style={styles.header}>

            <View style={styles.headerLeft}>

              <TouchableOpacity
                style={styles.backButton}
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backText}>
                  ‹
                </Text>
              </TouchableOpacity>

              <Text style={styles.headerTitle}>
                Buat Kata Sandi Baru
              </Text>

            </View>

            <View style={styles.headerIcon}>
              <Text style={styles.headerIconText}>
                ▦
              </Text>
            </View>

          </View>


          {/* ==================================================
              CONTENT
          ================================================== */}

          <View style={styles.content}>

            {/* ==================================================
                BADGE
            ================================================== */}

            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                ▦ PEMULIHAN KREDENSIAL PERUSAHAAN
              </Text>
            </View>


            {/* ==================================================
                LOGO ATAS
            ================================================== */}

            <View style={styles.passwordLogoContainer}>

              <Image
                source={logo}
                style={styles.passwordLogo}
                resizeMode="contain"
              />

            </View>


            {/* ==================================================
                TITLE
            ================================================== */}

            <Text style={styles.title}>
              Buat Kata Sandi Baru
            </Text>


            {/* ==================================================
                SUBTITLE
            ================================================== */}

            <Text style={styles.subtitle}>
              Buat kata sandi baru yang kuat untuk melindungi akun
              {'\n'}
              dan akses data kemitraan industri perusahaan Anda.
            </Text>


            {/* ==================================================
                FORM CARD
            ================================================== */}

            <View style={styles.card}>

              {/* ==================================================
                  KATA SANDI BARU
              ================================================== */}

              <View style={styles.labelRow}>

                {/* Gembok hanya di sini */}
                <LockIcon />

                <Text style={styles.label}>
                  Kata Sandi Baru
                </Text>

              </View>


              {/* ==================================================
                  INPUT PASSWORD
              ================================================== */}

              <View style={styles.inputWrapper}>

                <TextInput
                  style={styles.input}
                  placeholder="Masukkan kata sandi baru"
                  placeholderTextColor="#8A9AAA"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                {/* Tombol mata */}
                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  <EyeIcon visible={showPassword} />
                </TouchableOpacity>

              </View>


              {/* ==================================================
                  STRENGTH HEADER
              ================================================== */}

              <View style={styles.strengthHeader}>

                <Text style={styles.strengthLabel}>
                  Tingkat Kekuatan
                </Text>

                <Text
                  style={[
                    styles.strengthValue,
                    passwordStrong
                      ? styles.strong
                      : styles.weak,
                  ]}
                >
                  ●{' '}
                  {passwordStrong
                    ? 'Sangat Kuat'
                    : 'Belum Kuat'}
                </Text>

              </View>


              {/* ==================================================
                  STRENGTH BARS
              ================================================== */}

              <View style={styles.strengthBars}>

                <View
                  style={[
                    styles.strengthBar,
                    strengthLevel >= 1 &&
                      styles.strengthActive,
                  ]}
                />

                <View
                  style={[
                    styles.strengthBar,
                    strengthLevel >= 2 &&
                      styles.strengthActive,
                  ]}
                />

                <View
                  style={[
                    styles.strengthBar,
                    strengthLevel >= 3 &&
                      styles.strengthActive,
                  ]}
                />

              </View>


              {/* ==================================================
                  PASSWORD REQUIREMENTS
              ================================================== */}

              <View style={styles.requirements}>

                <Text
                  style={[
                    styles.requirement,
                    hasMinLength &&
                      styles.requirementPassed,
                  ]}
                >
                  {hasMinLength ? '●' : '○'} Minimal 8 karakter
                </Text>

                <Text
                  style={[
                    styles.requirement,
                    hasUppercase &&
                      hasLowercase &&
                      hasNumber &&
                      styles.requirementPassed,
                  ]}
                >
                  {hasUppercase &&
                  hasLowercase &&
                  hasNumber
                    ? '●'
                    : '○'}{' '}
                  Kombinasi huruf kapital, huruf kecil & angka
                </Text>

                <Text
                  style={[
                    styles.requirement,
                    hasSymbol &&
                      styles.requirementPassed,
                  ]}
                >
                  {hasSymbol ? '●' : '○'} Mengandung minimal 1 simbol
                  khusus (!@#$%^&*)
                </Text>

              </View>


              {/* ==================================================
                  KONFIRMASI PASSWORD
              ================================================== */}

              <View style={styles.labelRow}>

                <LockIcon />

                <Text style={styles.label}>
                  Konfirmasi Kata Sandi Baru
                </Text>

              </View>


              {/* ==================================================
                  INPUT CONFIRM PASSWORD
              ================================================== */}

              <View style={styles.inputWrapper}>

                <TextInput
                  style={styles.input}
                  placeholder="Masukkan kembali kata sandi"
                  placeholderTextColor="#8A9AAA"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  autoCapitalize="none"
                  autoCorrect={false}
                />

                {/* Tombol mata */}
                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword,
                    )
                  }
                >
                  <EyeIcon
                    visible={showConfirmPassword}
                  />
                </TouchableOpacity>

              </View>


              {/* ==================================================
                  CONFIRM INFO
              ================================================== */}

              <Text
                style={[
                  styles.confirmInfo,
                  passwordMatch &&
                    styles.confirmSuccess,
                ]}
              >
                ⓘ Pastikan kedua kata sandi terisi dengan benar dan
                {' '}
                sama persis.
              </Text>

            </View>


            {/* ==================================================
                SAVE BUTTON
            ================================================== */}

            <TouchableOpacity
              style={[
                styles.saveButton,
                (!password ||
                  !confirmPassword ||
                  !passwordStrong ||
                  !passwordMatch) &&
                  styles.saveDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleSave}
            >

              <Text style={styles.saveText}>
                Simpan Kata Sandi Baru
              </Text>

              <Text style={styles.saveArrow}>
                →
              </Text>

            </TouchableOpacity>


            {/* ==================================================
                CANCEL
            ================================================== */}

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate(
                  'LoginPerusahaan',
                )
              }
              style={styles.cancelButton}
            >

              <Text style={styles.cancelText}>
                ← Batal & Kembali ke Login
              </Text>

            </TouchableOpacity>


            {/* ==================================================
                FOOTER
            ================================================== */}

            <View style={styles.footerBadge}>

              <Text style={styles.footerText}>
                ✿ Enkripsi SSL 256-Bit • Portal Industri Resmi
                POLINELA
              </Text>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>


      {/* ========================================================
          SUCCESS MODAL
      ======================================================== */}

      <Modal
        transparent
        visible={showSuccess}
        animationType="fade"
        onRequestClose={() =>
          setShowSuccess(false)
        }
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalCard}>

            {/* SUCCESS ICON */}

            <View style={styles.successIconWrapper}>

              <View style={styles.successCircle}>

                <Text style={styles.successCheck}>
                  ✓
                </Text>

              </View>

              <View style={styles.successBadge}>

                <Text style={styles.successBadgeText}>
                  ✓
                </Text>

              </View>

            </View>


            {/* TITLE */}

            <Text style={styles.modalTitle}>
              Kata Sandi Berhasil
              {'\n'}
              Disimpan!
            </Text>


            {/* DESCRIPTION */}

            <Text style={styles.modalDescription}>
              Kata sandi akun perusahaan Anda telah
              {'\n'}
              berhasil diperbarui. Silakan gunakan kata
              {'\n'}
              sandi baru untuk masuk ke portal
              {'\n'}
              industri POLAR.
            </Text>


            {/* LOGIN BUTTON */}

            <TouchableOpacity
              style={styles.modalButton}
              activeOpacity={0.8}
              onPress={() => {

                setShowSuccess(false);

                navigation.navigate(
                  'LoginPerusahaan',
                );

              }}
            >

              <Text style={styles.modalButtonText}>
                Masuk ke Akun Perusahaan
              </Text>

              <Text style={styles.modalArrow}>
                →
              </Text>

            </TouchableOpacity>


            {/* MODAL FOOTER */}

            <Text style={styles.modalFooter}>
              ♧ Sesi Masuk Terenkripsi SSL 256-Bit • POLINELA
            </Text>

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

  /* ============================================================
     SAFE AREA
  ============================================================ */

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  keyboard: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 35,
  },


  /* ============================================================
     HEADER
  ============================================================ */

  header: {
    height: 102,

    paddingHorizontal: 18,
    paddingTop: 28,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor: '#E4EBF1',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',

    transform: [
      {
        translateY: 7,
      },
    ],
  },

  backButton: {
    width: 40,
    height: 42,

    justifyContent: 'center',
    alignItems: 'flex-start',

    marginRight: 5,
  },

  backText: {
    color: '#062D47',

    fontSize: 38,
    lineHeight: 42,

    fontWeight: '300',

    marginTop: -3,
  },

  headerTitle: {
    color: '#062D47',

    fontSize: 18,
    fontWeight: '800',
  },

  headerIcon: {
    width: 38,
    height: 38,

    borderRadius: 9,

    backgroundColor: '#DCEEFF',

    justifyContent: 'center',
    alignItems: 'center',

    transform: [
      {
        translateY: 7,
      },
    ],
  },

  headerIconText: {
    color: '#286083',

    fontSize: 20,
    fontWeight: '800',
  },


  /* ============================================================
     CONTENT
  ============================================================ */

  content: {
    paddingHorizontal: 18,
    paddingTop: 19,

    alignItems: 'center',
  },


  /* ============================================================
     BADGE
  ============================================================ */

  badge: {
    backgroundColor: '#DDEEFF',

    borderRadius: 17,

    paddingHorizontal: 13,
    paddingVertical: 7,

    marginBottom: 15,
  },

  badgeText: {
    color: '#286083',

    fontSize: 10,

    fontWeight: '800',

    letterSpacing: 0.15,
  },


  /* ============================================================
     PASSWORD LOGO ATAS
  ============================================================ */

  passwordLogoContainer: {
    width: 92,
    height: 92,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 12,
  },

  passwordLogo: {
    width: 92,
    height: 92,
  },


  /* ============================================================
     TITLE
  ============================================================ */

  title: {
    color: '#062D47',

    fontSize: 27,

    fontWeight: '800',

    textAlign: 'center',

    marginBottom: 6,
  },

  subtitle: {
    color: '#5F6F7D',

    fontSize: 12,

    lineHeight: 18,

    textAlign: 'center',

    marginBottom: 17,
  },


  /* ============================================================
     FORM CARD
  ============================================================ */

  card: {
    width: '100%',

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    paddingHorizontal: 14,
    paddingVertical: 15,

    borderWidth: 1,
    borderColor: '#E4EBF1',
  },


  /* ============================================================
     LABEL + LOCK
  ============================================================ */

  labelRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 7,
  },

  label: {
    color: '#173247',

    fontSize: 13,

    fontWeight: '800',

    marginLeft: 7,
  },


  /* ============================================================
     LOCK ICON
     Hitam putih, hanya di samping label
  ============================================================ */

  lockIcon: {
    width: 16,
    height: 18,

    alignItems: 'center',
    justifyContent: 'flex-end',

    position: 'relative',
  },

  lockShackle: {
    position: 'absolute',

    top: 0,

    width: 9,
    height: 9,

    borderWidth: 2,
    borderColor: '#062D47',

    borderBottomWidth: 0,

    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  lockBody: {
    width: 14,
    height: 11,

    backgroundColor: '#062D47',

    borderRadius: 2,

    alignItems: 'center',
    justifyContent: 'center',
  },

  lockKeyhole: {
    width: 3,
    height: 5,

    borderRadius: 2,

    backgroundColor: '#FFFFFF',
  },


  /* ============================================================
     INPUT
  ============================================================ */

  inputWrapper: {
    height: 46,

    borderRadius: 9,

    backgroundColor: '#E6F1FF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingLeft: 11,
    paddingRight: 4,

    marginBottom: 10,
  },

  input: {
    flex: 1,

    color: '#173247',

    fontSize: 13,

    fontWeight: '500',

    paddingVertical: 0,
  },


  /* ============================================================
     EYE BUTTON
  ============================================================ */

  eyeButton: {
    width: 38,
    height: 38,

    alignItems: 'center',
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 23,
    height: 18,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },

  eyeShape: {
    width: 21,
    height: 13,

    borderWidth: 1.8,
    borderColor: '#6E7D88',

    borderRadius: 14,

    alignItems: 'center',
    justifyContent: 'center',
  },

  eyePupil: {
    width: 5,
    height: 5,

    borderRadius: 3,

    backgroundColor: '#6E7D88',
  },

  eyeSlash: {
    position: 'absolute',

    width: 25,
    height: 2,

    backgroundColor: '#6E7D88',

    transform: [
      {
        rotate: '-40deg',
      },
    ],
  },


  /* ============================================================
     STRENGTH
  ============================================================ */

  strengthHeader: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 6,
  },

  strengthLabel: {
    color: '#53616E',

    fontSize: 10,

    fontWeight: '600',
  },

  strengthValue: {
    fontSize: 10,

    fontWeight: '800',
  },

  strong: {
    color: '#008C82',
  },

  weak: {
    color: '#8A9AAA',
  },

  strengthBars: {
    flexDirection: 'row',

    marginBottom: 8,
  },

  strengthBar: {
    flex: 1,

    height: 5,

    borderRadius: 3,

    backgroundColor: '#D9E3EA',

    marginHorizontal: 2,
  },

  strengthActive: {
    backgroundColor: '#286A8F',
  },


  /* ============================================================
     REQUIREMENTS
  ============================================================ */

  requirements: {
    backgroundColor: '#E8F3FF',

    borderRadius: 8,

    paddingHorizontal: 9,
    paddingVertical: 8,

    marginBottom: 15,
  },

  requirement: {
    color: '#173247',

    fontSize: 10,

    lineHeight: 19,
  },

  requirementPassed: {
    color: '#173247',
  },


  /* ============================================================
     CONFIRM INFO
  ============================================================ */

  confirmInfo: {
    color: '#6E7A83',

    fontSize: 10,

    lineHeight: 15,

    marginTop: 1,
  },

  confirmSuccess: {
    color: '#286A8F',
  },


  /* ============================================================
     SAVE BUTTON
  ============================================================ */

  saveButton: {
    width: '100%',

    height: 49,

    borderRadius: 10,

    backgroundColor: '#063452',

    marginTop: 14,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 3,
  },

  saveDisabled: {
    opacity: 0.55,
  },

  saveText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',
  },

  saveArrow: {
    color: '#FFFFFF',

    fontSize: 20,

    marginLeft: 8,
  },


  /* ============================================================
     CANCEL
  ============================================================ */

  cancelButton: {
    marginTop: 14,

    marginBottom: 15,
  },

  cancelText: {
    color: '#286A8F',

    fontSize: 12,

    fontWeight: '700',
  },


  /* ============================================================
     FOOTER
  ============================================================ */

  footerBadge: {
    backgroundColor: '#E1F0FC',

    borderRadius: 16,

    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  footerText: {
    color: '#60727E',

    fontSize: 9,

    fontWeight: '600',
  },


  /* ============================================================
     SUCCESS MODAL
  ============================================================ */

  modalOverlay: {
    flex: 1,

    backgroundColor: 'rgba(6, 45, 71, 0.45)',

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 22,
  },

  modalCard: {
    width: '100%',

    maxWidth: 335,

    backgroundColor: '#FFFFFF',

    borderRadius: 18,

    paddingHorizontal: 20,
    paddingVertical: 24,

    alignItems: 'center',
  },

  successIconWrapper: {
    width: 68,
    height: 68,

    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    marginBottom: 12,
  },

  successCircle: {
    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: '#DCEEFF',

    justifyContent: 'center',
    alignItems: 'center',
  },

  successCheck: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#063452',

    color: '#FFFFFF',

    textAlign: 'center',

    lineHeight: 48,

    fontSize: 26,

    fontWeight: '800',
  },

  successBadge: {
    position: 'absolute',

    right: 0,
    bottom: 0,

    width: 21,
    height: 21,

    borderRadius: 11,

    backgroundColor: '#286A8F',

    borderWidth: 2,

    borderColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  successBadgeText: {
    color: '#FFFFFF',

    fontSize: 10,

    fontWeight: '800',
  },

  modalTitle: {
    color: '#062D47',

    fontSize: 22,

    lineHeight: 27,

    fontWeight: '800',

    textAlign: 'center',

    marginBottom: 10,
  },

  modalDescription: {
    color: '#5F6F7D',

    fontSize: 12,

    lineHeight: 19,

    textAlign: 'center',

    marginBottom: 18,
  },

  modalButton: {
    width: '100%',

    height: 49,

    borderRadius: 10,

    backgroundColor: '#063452',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  modalButtonText: {
    color: '#FFFFFF',

    fontSize: 12,

    fontWeight: '800',
  },

  modalArrow: {
    color: '#FFFFFF',

    fontSize: 19,

    marginLeft: 7,
  },

  modalFooter: {
    color: '#8A969E',

    fontSize: 8.5,

    marginTop: 12,

    textAlign: 'center',
  },

});