import React, {useEffect, useRef, useState} from 'react';

import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';

type Props = {
  navigation: any;
  route: any;
};

export default function VerifikasiOTPRegistrasiKlien({
  navigation,
  route,
}: Props) {
  const email =
    route?.params?.email || 'klien@bisnis.com';

  const [otp, setOtp] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const [seconds, setSeconds] = useState(299);

  const [showSuccess, setShowSuccess] =
    useState(false);

  const inputRefs =
    useRef<Array<TextInput | null>>([]);

  /* ============================================================
     TIMER
  ============================================================ */

  useEffect(() => {
    if (seconds <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(
      2,
      '0',
    )}:${String(remainingSeconds).padStart(
      2,
      '0',
    )}`;
  };

  /* ============================================================
     OTP INPUT
  ============================================================ */

  const handleOtpChange = (
    value: string,
    index: number,
  ) => {
    const cleanValue = value.replace(
      /[^0-9]/g,
      '',
    );

    const newOtp = [...otp];

    if (cleanValue.length > 1) {
      const digits = cleanValue
        .slice(0, 6 - index)
        .split('');

      digits.forEach((digit, i) => {
        newOtp[index + i] = digit;
      });

      setOtp(newOtp);

      const nextIndex = Math.min(
        index + digits.length,
        5,
      );

      inputRefs.current[nextIndex]?.focus();

      return;
    }

    newOtp[index] = cleanValue;

    setOtp(newOtp);

    if (
      cleanValue.length > 0 &&
      index < 5
    ) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  /* ============================================================
     BACKSPACE
  ============================================================ */

  const handleKeyPress = (
    event: any,
    index: number,
  ) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  /* ============================================================
     VERIFY OTP
  ============================================================ */

  const handleVerify = () => {
    const code = otp.join('');

    if (code.length !== 6) {
      return;
    }

    // Sementara UI flow.
    // Nanti tinggal sambungkan ke endpoint backend.
    setShowSuccess(true);
  };

  /* ============================================================
     RESEND OTP
  ============================================================ */

  const handleResend = () => {
    if (seconds > 0) {
      return;
    }

    setOtp([
      '',
      '',
      '',
      '',
      '',
      '',
    ]);

    setSeconds(299);

    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={
          styles.scrollContent
        }>

        {/* ====================================================
            HEADER
        ==================================================== */}

        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() =>
              navigation.goBack()
            }>

            <Text style={styles.backArrow}>
              ←
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Verifikasi Akun
          </Text>

          <View
            style={styles.headerClientBadge}>

            <View
              style={styles.headerClientIcon}>
              <Text
                style={
                  styles.headerClientIconText
                }>
                ▣
              </Text>
            </View>

            <Text
              style={styles.headerClientText}>
              Klien POLAR
            </Text>

          </View>

        </View>

        {/* ====================================================
            CONTENT
        ==================================================== */}

        <View style={styles.content}>

          {/* ==================================================
              TOP BADGE
          ================================================== */}

          <View style={styles.topBadge}>

            <View style={styles.topBadgeDot} />

            <Text style={styles.topBadgeText}>
              VERIFIKASI KODE OTP
            </Text>

            <Text
              style={styles.topBadgeSeparator}>
              •
            </Text>

            <Text style={styles.topBadgeText}>
              KLIEN / PEMBERI PROYEK
            </Text>

          </View>

          {/* ==================================================
              MAIN ICON
          ================================================== */}

          <View style={styles.mainIconArea}>

            <View style={styles.mainIconGlow}>

              <View style={styles.envelopeIcon}>

                <View
                  style={
                    styles.envelopeDiagonalLeft
                  }
                />

                <View
                  style={
                    styles.envelopeDiagonalRight
                  }
                />

                <View
                  style={
                    styles.envelopeCheckContainer
                  }>

                  <Text
                    style={
                      styles.envelopeCheck
                    }>
                    ✓
                  </Text>

                </View>

              </View>

            </View>

            {/* SHIELD */}

            <View style={styles.shieldBadge}>

              <Text
                style={styles.shieldSymbol}>
                ♢
              </Text>

              <Text
                style={styles.shieldCheck}>
                ✓
              </Text>

            </View>

          </View>

          {/* ==================================================
              TITLE
          ================================================== */}

          <Text style={styles.title}>
            Verifikasi Kode OTP
          </Text>

          <Text style={styles.description}>
            Masukkan 6 digit kode keamanan yang telah
            {'\n'}
            dikirimkan ke email pendaftaran Klien Anda.
          </Text>

          {/* ==================================================
              EMAIL CARD
          ================================================== */}

          <View style={styles.emailCard}>

            <View style={styles.emailIconBox}>

              <Text style={styles.emailIcon}>
                ▤
              </Text>

            </View>

            <View style={styles.emailInfo}>

              <Text style={styles.emailLabel}>
                Email Terdaftar
              </Text>

              <Text
                style={styles.emailValue}
                numberOfLines={1}>
                {email}
              </Text>

            </View>

            <View style={styles.timerBadge}>

              <Text style={styles.timerIcon}>
                ◷
              </Text>

              <Text style={styles.timerText}>
                {formatTime()}
              </Text>

            </View>

          </View>

          {/* ==================================================
              OTP
          ================================================== */}

          <View style={styles.otpRow}>

            {otp.map((value, index) => {

              const firstEmptyIndex =
                otp.findIndex(
                  item => item === '',
                );

              const isActive =
                index ===
                (
                  firstEmptyIndex === -1
                    ? 5
                    : firstEmptyIndex
                );

              return (
                <View
                  key={index}
                  style={[
                    styles.otpBox,
                    value !== '' &&
                      styles.otpBoxFilled,
                    isActive &&
                      styles.otpBoxActive,
                  ]}>

                  <TextInput
                    ref={ref => {
                      inputRefs.current[index] =
                        ref;
                    }}
                    value={value}
                    onChangeText={text =>
                      handleOtpChange(
                        text,
                        index,
                      )
                    }
                    onKeyPress={event =>
                      handleKeyPress(
                        event,
                        index,
                      )
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    selectTextOnFocus
                    style={styles.otpInput}
                    placeholder={
                      index >= 4
                        ? '•'
                        : ''
                    }
                    placeholderTextColor="#AAB4BF"
                  />

                </View>
              );
            })}

          </View>

          {/* ==================================================
              SECURITY
          ================================================== */}

          <View style={styles.securityRow}>

            <Text style={styles.securityIcon}>
              ♢
            </Text>

            <Text style={styles.securityText}>
              Jangan bagikan kode verifikasi ini
              kepada siapapun.
            </Text>

          </View>

          {/* ==================================================
              VERIFY BUTTON
          ================================================== */}

          <TouchableOpacity
            style={styles.verifyButton}
            activeOpacity={0.85}
            onPress={handleVerify}>

            <Text
              style={styles.verifyButtonText}>
              Verifikasi & Selesai
            </Text>

            <Text
              style={styles.verifyButtonArrow}>
              →
            </Text>

          </TouchableOpacity>

          {/* ==================================================
              STEP
          ================================================== */}

          <Text style={styles.stepText}>
            Langkah 2 dari 2: Verifikasi Akun Klien POLAR
          </Text>

          {/* ==================================================
              RESEND
          ================================================== */}

          <View style={styles.resendArea}>

            <Text style={styles.resendLabel}>
              Belum menerima kode?
            </Text>

            <TouchableOpacity
              activeOpacity={0.7}
              disabled={seconds > 0}
              onPress={handleResend}>

              <Text
                style={[
                  styles.resendLink,
                  seconds > 0 &&
                    styles.resendDisabled,
                ]}>
                Kirim Ulang Sekarang
              </Text>

            </TouchableOpacity>

          </View>

          {/* ==================================================
              FOOTER
          ================================================== */}

          <View style={styles.footer}>

            <Text style={styles.footerText}>
              Data terenkripsi & transaksi terlindungi Escrow POLAR •
            </Text>

            <Text style={styles.footerText}>
              Polinela
            </Text>

          </View>

        </View>

      </ScrollView>

      {/* ======================================================
          SUCCESS POPUP
      ====================================================== */}

      <Modal
        visible={showSuccess}
        transparent
        animationType="fade"
        onRequestClose={() =>
          setShowSuccess(false)
        }>

        <View style={styles.modalOverlay}>

          <View style={styles.successModal}>

            {/* SUCCESS ICON */}

            <View
              style={styles.successIconArea}>

              <View
                style={
                  styles.successIconCircle
                }>

                <View
                  style={
                    styles.successInnerCircle
                  }>

                  <Text
                    style={
                      styles.successCheck
                    }>
                    ✓
                  </Text>

                </View>

              </View>

              <View
                style={
                  styles.successClientBadge
                }>

                <Text
                  style={
                    styles.successClientIcon
                  }>
                  ▣
                </Text>

              </View>

            </View>

            {/* TITLE */}

            <Text style={styles.successTitle}>
              Akun Berhasil Dibuat!
            </Text>

            {/* DESCRIPTION */}

            <Text
              style={
                styles.successDescription
              }>
              Pendaftaran akun Klien POLAR Anda telah
              {'\n'}
              berhasil diverifikasi. Lanjutkan ke halaman
              {'\n'}
              login untuk mulai mencari talenta dan
              {'\n'}
              memposting proyek.
            </Text>

            {/* LOGIN BUTTON */}

            <TouchableOpacity
              style={styles.successButton}
              activeOpacity={0.85}
              onPress={() => {
                setShowSuccess(false);

                navigation.navigate(
                  'LoginKlien',
                );
              }}>

              <Text
                style={
                  styles.successButtonText
                }>
                Lanjutkan ke Halaman Login
              </Text>

              <Text
                style={
                  styles.successButtonArrow
                }>
                →
              </Text>

            </TouchableOpacity>

            {/* FOOTER */}

            <View
              style={styles.successFooter}>

              <Text
                style={
                  styles.successFooterIcon
                }>
                ♙
              </Text>

              <Text
                style={
                  styles.successFooterText
                }>
                Sesi Terenkripsi & Terlindungi Escrow POLAR
              </Text>

            </View>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  );
}

/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

  /* ==========================================================
     SCREEN
  ========================================================== */

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F9FF',
  },

  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  /* ==========================================================
     HEADER
  ========================================================== */

  header: {
    height: 108,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5ECF2',

    flexDirection: 'row',
    alignItems: 'flex-end',

    paddingHorizontal: 17,

    /*
      Header diturunkan agar tidak terlalu dekat
      dengan jam/status bar.
    */
    paddingTop:
      Platform.OS === 'android'
        ? 25
        : 12,

    paddingBottom: 14,
  },

  /* PANAH KEMBALI */

  backButton: {
    width: 46,
    height: 42,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 1,
  },

  backArrow: {
    color: '#102E43',

    /*
      Dibesarkan + ditebalkan
      sesuai permintaan.
    */
    fontSize: 34,
    fontWeight: '900',

    lineHeight: 38,

    includeFontPadding: false,
  },

  headerTitle: {
    color: '#102D40',

    /*
      Sedikit lebih besar
      dari sebelumnya.
    */
    fontSize: 20,
    fontWeight: '900',

    marginLeft: 2,
    marginBottom: 3,
  },

  headerClientBadge: {
    marginLeft: 'auto',

    height: 34,

    paddingHorizontal: 11,

    borderRadius: 18,

    backgroundColor: '#EAF3FA',

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 1,
  },

  headerClientIcon: {
    width: 18,
    height: 18,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 5,
  },

  headerClientIconText: {
    color: '#39728F',
    fontSize: 14,
    fontWeight: '900',
  },

  headerClientText: {
    color: '#39728F',
    fontSize: 12,
    fontWeight: '900',
  },

  /* ==========================================================
     CONTENT
  ========================================================== */

  content: {
    paddingHorizontal: 41,
    alignItems: 'center',
  },

  /* ==========================================================
     TOP BADGE
  ========================================================== */

  topBadge: {
    minHeight: 29,

    marginTop: 19,

    paddingHorizontal: 13,

    borderRadius: 15,

    backgroundColor: '#DDEFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  topBadgeDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#2C6B8B',

    marginRight: 6,
  },

  topBadgeText: {
    color: '#326C8B',

    fontSize: 11,

    fontWeight: '900',
  },

  topBadgeSeparator: {
    color: '#326C8B',

    fontSize: 12,

    marginHorizontal: 6,

    fontWeight: '900',
  },

  /* ==========================================================
     MAIN ICON
  ========================================================== */

  mainIconArea: {
    width: 108,
    height: 108,

    marginTop: 8,

    alignItems: 'center',
    justifyContent: 'center',
  },

  mainIconGlow: {
    width: 83,
    height: 83,

    borderRadius: 26,

    backgroundColor: '#EAF5FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  envelopeIcon: {
    width: 37,
    height: 29,

    borderWidth: 3,

    borderColor: '#153F5B',

    borderRadius: 4,

    position: 'relative',
  },

  envelopeDiagonalLeft: {
    position: 'absolute',

    left: 1,
    top: 4,

    width: 21,
    height: 3,

    backgroundColor: '#153F5B',

    transform: [
      {
        rotate: '30deg',
      },
    ],
  },

  envelopeDiagonalRight: {
    position: 'absolute',

    right: 1,
    top: 4,

    width: 21,
    height: 3,

    backgroundColor: '#153F5B',

    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },

  envelopeCheckContainer: {
    position: 'absolute',

    right: -9,
    bottom: -10,

    width: 23,
    height: 23,

    borderRadius: 12,

    backgroundColor: '#EAF5FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  envelopeCheck: {
    color: '#153F5B',

    fontSize: 20,

    fontWeight: '900',
  },

  shieldBadge: {
    position: 'absolute',

    right: 0,
    bottom: 4,

    width: 36,
    height: 36,

    borderRadius: 18,

    backgroundColor: '#062F4A',

    borderWidth: 2,
    borderColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  shieldSymbol: {
    color: '#FFFFFF',

    fontSize: 14,

    position: 'absolute',
  },

  shieldCheck: {
    color: '#FFFFFF',

    fontSize: 8,

    fontWeight: '900',

    marginTop: 1,
  },

  /* ==========================================================
     TITLE
  ========================================================== */

  title: {
    color: '#08283D',

    /*
      Sedikit diperbesar.
    */
    fontSize: 31,

    fontWeight: '900',

    letterSpacing: -0.8,

    textAlign: 'center',

    marginTop: 0,
  },

  description: {
    color: '#5B626A',

    /*
      Diperbesar sedikit.
    */
    fontSize: 16,

    lineHeight: 22,

    textAlign: 'center',

    marginTop: 5,
  },

  /* ==========================================================
     EMAIL CARD
  ========================================================== */

  emailCard: {
    width: '100%',

    minHeight: 72,

    marginTop: 17,

    paddingHorizontal: 12,

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    borderWidth: 1,
    borderColor: '#EDF1F5',

    flexDirection: 'row',

    alignItems: 'center',
  },

  emailIconBox: {
    width: 45,
    height: 45,

    borderRadius: 9,

    backgroundColor: '#EAF5FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  emailIcon: {
    color: '#19445F',

    fontSize: 24,

    fontWeight: '900',
  },

  emailInfo: {
    flex: 1,

    marginLeft: 9,
  },

  emailLabel: {
    color: '#616970',

    fontSize: 12,

    fontWeight: '800',
  },

  emailValue: {
    color: '#142F43',

    fontSize: 16,

    fontWeight: '900',

    marginTop: 1,
  },

  timerBadge: {
    height: 32,

    paddingHorizontal: 9,

    borderRadius: 9,

    backgroundColor: '#EAF4FC',

    flexDirection: 'row',

    alignItems: 'center',
  },

  timerIcon: {
    color: '#39718F',

    fontSize: 17,

    marginRight: 4,
  },

  timerText: {
    color: '#39718F',

    fontSize: 14,

    fontWeight: '900',
  },

  /* ==========================================================
     OTP
  ========================================================== */

  otpRow: {
    width: '100%',

    marginTop: 17,

    flexDirection: 'row',

    justifyContent: 'space-between',
  },

  otpBox: {
    width: 48,
    height: 59,

    borderRadius: 12,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,

    borderColor: '#F0F3F7',

    alignItems: 'center',
    justifyContent: 'center',
  },

  otpBoxFilled: {
    backgroundColor: '#FFFFFF',
  },

  otpBoxActive: {
    borderColor: '#173F5A',

    borderWidth: 2,
  },

  otpInput: {
    width: '100%',
    height: '100%',

    padding: 0,

    color: '#102F43',

    fontSize: 27,

    fontWeight: '900',

    textAlign: 'center',
  },

  /* ==========================================================
     SECURITY
  ========================================================== */

  securityRow: {
    width: '100%',

    marginTop: 11,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  securityIcon: {
    color: '#2B6B8A',

    fontSize: 16,

    marginRight: 4,
  },

  securityText: {
    color: '#555D65',

    fontSize: 13,

    fontWeight: '600',
  },

  /* ==========================================================
     VERIFY BUTTON
  ========================================================== */

  verifyButton: {
    width: '100%',

    height: 56,

    marginTop: 16,

    borderRadius: 12,

    backgroundColor: '#194665',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 3,

    shadowColor: '#0A2E47',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.16,

    shadowRadius: 3,
  },

  verifyButtonText: {
    color: '#FFFFFF',

    fontSize: 16,

    fontWeight: '900',
  },

  verifyButtonArrow: {
    color: '#FFFFFF',

    fontSize: 25,

    marginLeft: 8,

    marginTop: -2,

    fontWeight: '800',
  },

  /* ==========================================================
     STEP
  ========================================================== */

  stepText: {
    color: '#555D66',

    fontSize: 13,

    fontWeight: '700',

    marginTop: 16,

    textAlign: 'center',
  },

  /* ==========================================================
     RESEND
  ========================================================== */

  resendArea: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 20,
  },

  resendLabel: {
    color: '#6B7077',

    fontSize: 14,
  },

  resendLink: {
    color: '#173E5A',

    fontSize: 14,

    fontWeight: '900',

    marginLeft: 6,
  },

  resendDisabled: {
    opacity: 0.55,
  },

  /* ==========================================================
     FOOTER
  ========================================================== */

  footer: {
    width: '100%',

    alignItems: 'center',

    marginTop: 39,

    paddingBottom: 15,
  },

  footerText: {
    color: '#737B84',

    fontSize: 12,

    lineHeight: 17,

    textAlign: 'center',
  },

  /* ==========================================================
     MODAL
  ========================================================== */

  modalOverlay: {
    flex: 1,

    backgroundColor:
      'rgba(22, 48, 65, 0.48)',

    justifyContent: 'center',

    alignItems: 'center',

    paddingHorizontal: 24,
  },

  successModal: {
    width: '100%',

    borderRadius: 25,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 24,

    paddingTop: 24,

    paddingBottom: 20,

    alignItems: 'center',
  },

  successIconArea: {
    width: 88,
    height: 88,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 10,
  },

  successIconCircle: {
    width: 80,
    height: 80,

    borderRadius: 40,

    backgroundColor: '#DDF2FF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  successInnerCircle: {
    width: 36,
    height: 36,

    borderRadius: 18,

    backgroundColor: '#052F4A',

    alignItems: 'center',
    justifyContent: 'center',
  },

  successCheck: {
    color: '#FFFFFF',

    fontSize: 24,

    lineHeight: 27,

    fontWeight: '900',
  },

  successClientBadge: {
    position: 'absolute',

    right: 0,
    bottom: 0,

    width: 31,
    height: 31,

    borderRadius: 16,

    backgroundColor: '#052F4A',

    borderWidth: 2,

    borderColor: '#FFFFFF',

    alignItems: 'center',

    justifyContent: 'center',
  },

  successClientIcon: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '900',
  },

  successTitle: {
    color: '#08283D',

    fontSize: 23,

    fontWeight: '900',

    textAlign: 'center',

    marginTop: 3,
  },

  successDescription: {
    color: '#555D66',

    fontSize: 15,

    lineHeight: 23,

    textAlign: 'center',

    marginTop: 7,
  },

  successButton: {
    width: '100%',

    height: 50,

    borderRadius: 11,

    backgroundColor: '#194665',

    marginTop: 18,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    elevation: 3,

    shadowColor: '#092D46',

    shadowOffset: {
      width: 0,
      height: 3,
    },

    shadowOpacity: 0.18,

    shadowRadius: 4,
  },

  successButtonText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '900',
  },

  successButtonArrow: {
    color: '#FFFFFF',

    fontSize: 22,

    marginLeft: 8,

    marginTop: -2,

    fontWeight: '800',
  },

  successFooter: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 14,
  },

  successFooterIcon: {
    color: '#54809A',

    fontSize: 13,

    marginRight: 5,
  },

  successFooterText: {
    color: '#7A858E',

    fontSize: 10,

    fontWeight: '600',
  },
});