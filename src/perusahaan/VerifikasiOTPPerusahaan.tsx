import React, { useRef, useState } from 'react';

import {
  Image,
  Keyboard,
  Modal,
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
  route?: any;
};

const OTP_LOGO = require('../assets/logo2.png');

export default function VerifikasiOTPPerusahaan({
  navigation,
  route,
}: Props) {
  // ============================================================
  // DATA
  // ============================================================

  const email =
    route?.params?.email || 'hrd@perusahaan.co.id';

  // ============================================================
  // STATE
  // ============================================================

  const [otp, setOtp] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const inputRef = useRef<TextInput>(null);

  // ============================================================
  // INPUT OTP
  // ============================================================

  const handleOTPChange = (value: string) => {
    const cleanValue = value
      .replace(/[^0-9]/g, '')
      .slice(0, 6);

    setOtp(cleanValue);
  };

  // ============================================================
  // VERIFIKASI
  // UI SAJA
  // BACKEND BELUM DIHUBUNGKAN
  // ============================================================

  const handleVerify = () => {
    Keyboard.dismiss();

    if (otp.length !== 6) {
      return;
    }

    // Sementara hanya UI.
    // Nanti bagian ini tinggal disambungkan
    // ke endpoint backend teman lu.

    setShowSuccessModal(true);
  };

  // ============================================================
  // KIRIM ULANG OTP
  // UI SAJA
  // ============================================================

  const handleResend = () => {
    // Belum menggunakan backend.
    console.log('Kirim ulang OTP');
  };

  // ============================================================
  // LANJUT KE RESET PASSWORD
  // ============================================================

  const handleCreateNewPassword = () => {
    setShowSuccessModal(false);

    navigation.navigate(
      'ResetPasswordPerusahaan',
      {
        email: email,
      },
    );
  };

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F4F8FC"
        translucent={false}
      />

      <View style={styles.mainContainer}>

        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
        >

          {/* =====================================================
              HEADER
          ===================================================== */}

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
                Verifikasi Akun
              </Text>

            </View>

            <View style={styles.headerIconCircle}>
              <Text style={styles.headerIcon}>
                ▦
              </Text>
            </View>

          </View>


          {/* =====================================================
              CONTENT
          ===================================================== */}

          <View style={styles.content}>

            {/* BADGE */}

            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>
                • VERIFIKASI KODE OTP • PERUSAHAAN MITRA
              </Text>
            </View>


            {/* LOGO */}

            <View style={styles.logoWrapper}>

              <Image
                source={OTP_LOGO}
                style={styles.otpLogo}
                resizeMode="contain"
              />

            </View>


            {/* TITLE */}

            <Text style={styles.title}>
              Verifikasi Kode OTP
            </Text>


            {/* SUBTITLE */}

            <Text style={styles.subtitle}>
              Masukkan 6 digit kode keamanan yang telah
              {'\n'}
              dikirimkan ke email resmi perusahaan:
            </Text>


            {/* EMAIL CARD */}

            <View style={styles.emailCard}>

              <View style={styles.emailIconBox}>
                <Text style={styles.emailIcon}>
                  ✉
                </Text>
              </View>

              <View style={styles.emailContent}>

                <Text style={styles.emailLabel}>
                  Email Terdaftar
                </Text>

                <Text
                  style={styles.emailText}
                  numberOfLines={1}
                >
                  {email}
                </Text>

              </View>

              <View style={styles.timerBadge}>

                <Text style={styles.timerIcon}>
                  ◷
                </Text>

                <Text style={styles.timerText}>
                  04:45
                </Text>

              </View>

            </View>


            {/* OTP BOX */}

            <TouchableOpacity
              activeOpacity={1}
              style={styles.otpRow}
              onPress={() => inputRef.current?.focus()}
            >

              {[0, 1, 2, 3, 4, 5].map(index => {

                const value = otp[index] || '';

                return (
                  <View
                    key={index}
                    style={[
                      styles.otpBox,
                      value !== '' && styles.otpBoxFilled,
                    ]}
                  >

                    <Text
                      style={[
                        styles.otpText,
                        value === '' &&
                          styles.otpPlaceholder,
                      ]}
                    >
                      {value || '•'}
                    </Text>

                  </View>
                );
              })}

            </TouchableOpacity>


            {/* HIDDEN INPUT */}

            <TextInput
              ref={inputRef}
              value={otp}
              onChangeText={handleOTPChange}
              keyboardType="number-pad"
              maxLength={6}
              style={styles.hiddenInput}
              caretHidden
            />


            {/* WARNING */}

            <View style={styles.warningRow}>

              <Text style={styles.warningIcon}>
                ♢
              </Text>

              <Text style={styles.warningText}>
                Jangan bagikan kode verifikasi ini kepada siapapun.
              </Text>

            </View>


            {/* VERIFY BUTTON */}

            <TouchableOpacity
              style={[
                styles.verifyButton,
                otp.length !== 6 &&
                  styles.verifyButtonDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleVerify}
            >

              <Text style={styles.verifyButtonText}>
                Verifikasi
              </Text>

              <Text style={styles.verifyArrow}>
                →
              </Text>

            </TouchableOpacity>


            {/* STEP */}

            <Text style={styles.stepText}>
              Langkah 2 dari 3: Pemulihan Kredensial Perusahaan
            </Text>


            {/* RESEND */}

            <View style={styles.resendRow}>

              <Text style={styles.resendText}>
                Belum menerima kode?
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleResend}
              >
                <Text style={styles.resendLink}>
                  Kirim Ulang Sekarang
                </Text>
              </TouchableOpacity>

            </View>


            {/* BACK */}

            <TouchableOpacity
              style={styles.backForgotButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}
            >

              <Text style={styles.backForgotText}>
                ← Kembali ke Lupa Kata Sandi
              </Text>

            </TouchableOpacity>


            {/* HELP CARD */}

            <View style={styles.helpCard}>

              <Text style={styles.helpIcon}>
                ♧
              </Text>

              <Text style={styles.helpTitle}>
                Kendala akun?
              </Text>

              <Text style={styles.helpLink}>
                Hubungi CS Mitra Polinela
              </Text>

            </View>


            {/* SECURITY */}

            <View style={styles.securityFooter}>

              <Text style={styles.securityFooterIcon}>
                ♢
              </Text>

              <Text style={styles.securityFooterText}>
                Enkripsi SSL 256-Bit • Portal Industri Resmi POLINELA
              </Text>

            </View>

          </View>

        </ScrollView>


        {/* =======================================================
            SUCCESS MODAL
        ======================================================= */}

        <Modal
          visible={showSuccessModal}
          transparent
          animationType="fade"
          onRequestClose={() =>
            setShowSuccessModal(false)
          }
        >

          <View style={styles.modalOverlay}>

            <View style={styles.successModal}>

              {/* SUCCESS ICON */}

              <View style={styles.successIconOuter}>

                <View style={styles.successIconInner}>

                  <Text style={styles.checkIcon}>
                    ✓
                  </Text>

                </View>

                <View style={styles.successSmallBadge}>
                  <Text style={styles.smallBadgeIcon}>
                    ⚙
                  </Text>
                </View>

              </View>


              {/* TITLE */}

              <Text style={styles.successTitle}>
                Verifikasi Berhasil!
              </Text>


              {/* DESCRIPTION */}

              <Text style={styles.successDescription}>
                Kode keamanan OTP resmi perusahaan
                {'\n'}
                telah berhasil diverifikasi. Silakan lanjutkan
                {'\n'}
                untuk membuat kata sandi baru akun Anda.
              </Text>


              {/* BUTTON */}

              <TouchableOpacity
                style={styles.successButton}
                activeOpacity={0.85}
                onPress={handleCreateNewPassword}
              >

                <Text style={styles.successButtonText}>
                  Buat Sandi Baru
                </Text>

                <Text style={styles.successButtonArrow}>
                  →
                </Text>

              </TouchableOpacity>


              {/* SECURITY */}

              <View style={styles.modalSecurityRow}>

                <Text style={styles.modalSecurityIcon}>
                  ♢
                </Text>

                <Text style={styles.modalSecurityText}>
                  Sesi Aman Terenkripsi POLINELA
                </Text>

              </View>

            </View>

          </View>

        </Modal>

      </View>

    </SafeAreaView>
  );
}


/* ================================================================
   STYLES
================================================================ */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 45,
  },


  /* ============================================================
     HEADER
  ============================================================ */

  header: {
    height: 108,

    paddingHorizontal: 18,
    paddingTop: 32,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: '#F4F8FC',

    borderBottomWidth: 1,
    borderBottomColor: '#E4EBF1',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,

    marginTop: 10,
  },

  backButton: {
    width: 44,
    height: 48,

    alignItems: 'flex-start',
    justifyContent: 'center',

    marginRight: 8,
  },

  backText: {
    color: '#062D47',

    fontSize: 40,
    lineHeight: 44,

    fontWeight: '300',
  },

  headerTitle: {
    color: '#062D47',

    fontSize: 22,

    fontWeight: '800',

    marginTop: 1,
  },

  headerIconCircle: {
    width: 44,
    height: 44,

    borderRadius: 22,

    backgroundColor: '#063452',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 10,
  },

  headerIcon: {
    color: '#FFFFFF',

    fontSize: 21,

    fontWeight: '700',
  },


  /* ============================================================
     CONTENT
  ============================================================ */

  content: {
    paddingHorizontal: 18,
    paddingTop: 22,
  },


  /* ============================================================
     BADGE
  ============================================================ */

  badgeContainer: {
    alignItems: 'center',

    marginBottom: 22,
  },

  badge: {
    backgroundColor: '#DCEEFF',

    color: '#286184',

    fontSize: 12,

    fontWeight: '800',

    borderRadius: 18,

    paddingHorizontal: 15,
    paddingVertical: 8,

    overflow: 'hidden',

    letterSpacing: 0.2,
  },


  /* ============================================================
     LOGO
  ============================================================ */

  logoWrapper: {
    width: 125,
    height: 125,

    alignSelf: 'center',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 8,
  },

  otpLogo: {
    width: 125,
    height: 125,
  },


  /* ============================================================
     TITLE
  ============================================================ */

  title: {
    color: '#062D47',

    // DIBESARKAN
    fontSize: 36,

    lineHeight: 43,

    fontWeight: '800',

    textAlign: 'center',

    marginBottom: 10,
  },


  /* ============================================================
     SUBTITLE
  ============================================================ */

  subtitle: {
    color: '#596771',

    fontSize: 17,

    lineHeight: 25,

    textAlign: 'center',

    marginBottom: 20,
  },


  /* ============================================================
     EMAIL CARD
  ============================================================ */

  emailCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 14,

    paddingHorizontal: 11,
    paddingVertical: 11,

    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#E7EDF2',

    marginBottom: 17,
  },

  emailIconBox: {
    width: 46,
    height: 46,

    borderRadius: 11,

    backgroundColor: '#E3F1FD',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  emailIcon: {
    color: '#286184',

    fontSize: 23,

    fontWeight: '700',
  },

  emailContent: {
    flex: 1,
  },

  emailLabel: {
    color: '#6A747C',

    fontSize: 12,

    fontWeight: '600',

    marginBottom: 3,
  },

  emailText: {
    color: '#173247',

    fontSize: 15,

    fontWeight: '700',
  },

  timerBadge: {
    backgroundColor: '#DCEEFF',

    borderRadius: 13,

    paddingHorizontal: 9,
    paddingVertical: 7,

    flexDirection: 'row',
    alignItems: 'center',
  },

  timerIcon: {
    color: '#286184',

    fontSize: 16,

    marginRight: 3,
  },

  timerText: {
    color: '#286184',

    fontSize: 12,

    fontWeight: '800',
  },


  /* ============================================================
     OTP
  ============================================================ */

  otpRow: {
    flexDirection: 'row',

    justifyContent: 'space-between',

    alignItems: 'center',

    marginBottom: 12,
  },

  otpBox: {
    width: 50,
    height: 57,

    backgroundColor: '#FFFFFF',

    borderRadius: 11,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1.2,
    borderColor: '#286184',
  },

  otpBoxFilled: {
    borderColor: '#063452',

    backgroundColor: '#F4FAFF',
  },

  otpText: {
    color: '#062D47',

    fontSize: 31,

    fontWeight: '800',

    textAlign: 'center',
  },

  otpPlaceholder: {
    color: '#C8D4DE',

    fontSize: 25,
  },

  hiddenInput: {
    position: 'absolute',

    width: 1,
    height: 1,

    opacity: 0,

    left: -100,
  },


  /* ============================================================
     WARNING
  ============================================================ */

  warningRow: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 18,
  },

  warningIcon: {
    color: '#687780',

    fontSize: 16,

    marginRight: 6,
  },

  warningText: {
    color: '#737E86',

    fontSize: 12.5,

    lineHeight: 18,
  },


  /* ============================================================
     VERIFY BUTTON
  ============================================================ */

  verifyButton: {
    height: 54,

    borderRadius: 11,

    backgroundColor: '#063452',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    elevation: 2,

    marginBottom: 13,
  },

  verifyButtonDisabled: {
    opacity: 0.65,
  },

  verifyButtonText: {
    color: '#FFFFFF',

    fontSize: 15,

    fontWeight: '800',
  },

  verifyArrow: {
    color: '#FFFFFF',

    fontSize: 23,

    marginLeft: 8,

    fontWeight: '500',
  },


  /* ============================================================
     STEP
  ============================================================ */

  stepText: {
    color: '#89939A',

    fontSize: 11,

    textAlign: 'center',

    marginBottom: 13,
  },


  /* ============================================================
     RESEND
  ============================================================ */

  resendRow: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 15,
  },

  resendText: {
    color: '#69757D',

    fontSize: 13,
  },

  resendLink: {
    color: '#286184',

    fontSize: 13,

    fontWeight: '800',

    marginLeft: 5,
  },


  /* ============================================================
     BACK
  ============================================================ */

  backForgotButton: {
    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 23,
  },

  backForgotText: {
    color: '#286184',

    fontSize: 13,

    fontWeight: '700',
  },


  /* ============================================================
     HELP
  ============================================================ */

  helpCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 14,

    minHeight: 54,

    paddingHorizontal: 12,
    paddingVertical: 11,

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: '#E8EDF1',

    marginBottom: 13,
  },

  helpIcon: {
    color: '#286184',

    fontSize: 20,

    marginRight: 7,
  },

  helpTitle: {
    color: '#596771',

    fontSize: 12.5,

    fontWeight: '600',

    marginRight: 5,
  },

  helpLink: {
    color: '#286184',

    fontSize: 12.5,

    fontWeight: '800',
  },


  /* ============================================================
     SECURITY FOOTER
  ============================================================ */

  securityFooter: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  securityFooterIcon: {
    color: '#A4ADB4',

    fontSize: 13,

    marginRight: 4,
  },

  securityFooterText: {
    color: '#A0A8AE',

    fontSize: 10.5,

    fontWeight: '500',
  },


  /* ============================================================
     MODAL OVERLAY
  ============================================================ */

  modalOverlay: {
    flex: 1,

    backgroundColor: 'rgba(6, 45, 71, 0.38)',

    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 34,
  },

  successModal: {
    width: '100%',

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 17,

    alignItems: 'center',

    elevation: 10,

    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 6,
    },
  },


  /* ============================================================
     SUCCESS ICON
  ============================================================ */

  successIconOuter: {
    width: 62,
    height: 62,

    borderRadius: 31,

    backgroundColor: '#E5F2FC',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 12,

    position: 'relative',
  },

  successIconInner: {
    width: 48,
    height: 48,

    borderRadius: 24,

    backgroundColor: '#063452',

    alignItems: 'center',
    justifyContent: 'center',
  },

  checkIcon: {
    color: '#FFFFFF',

    fontSize: 28,

    fontWeight: '400',
  },

  successSmallBadge: {
    position: 'absolute',

    right: -2,
    bottom: -2,

    width: 22,
    height: 22,

    borderRadius: 11,

    backgroundColor: '#286184',

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  smallBadgeIcon: {
    color: '#FFFFFF',

    fontSize: 10,
  },


  /* ============================================================
     SUCCESS TITLE
  ============================================================ */

  successTitle: {
    color: '#062D47',

    fontSize: 20,

    lineHeight: 25,

    fontWeight: '800',

    textAlign: 'center',

    marginBottom: 7,
  },


  /* ============================================================
     SUCCESS DESCRIPTION
  ============================================================ */

  successDescription: {
    color: '#596771',

    fontSize: 12.5,

    lineHeight: 20,

    textAlign: 'center',

    marginBottom: 15,
  },


  /* ============================================================
     SUCCESS BUTTON
  ============================================================ */

  successButton: {
    width: '100%',

    height: 47,

    borderRadius: 10,

    backgroundColor: '#063452',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 9,
  },

  successButtonText: {
    color: '#FFFFFF',

    fontSize: 12.5,

    fontWeight: '800',
  },

  successButtonArrow: {
    color: '#FFFFFF',

    fontSize: 20,

    marginLeft: 8,
  },


  /* ============================================================
     MODAL SECURITY
  ============================================================ */

  modalSecurityRow: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  modalSecurityIcon: {
    color: '#A4ADB4',

    fontSize: 10,

    marginRight: 4,
  },

  modalSecurityText: {
    color: '#A0A8AE',

    fontSize: 8.5,

    fontWeight: '500',

    textAlign: 'center',
  },

});