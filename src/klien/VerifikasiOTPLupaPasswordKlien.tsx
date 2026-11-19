import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ScrollView,
} from 'react-native';

const COLORS = {
  background: '#F3F8FC',
  white: '#FFFFFF',
  navy: '#062D47',
  navyDark: '#123F5A',
  blue: '#2B6B8E',
  blueSoft: '#DCEFFC',
  blueVerySoft: '#EAF4FC',
  text: '#173A50',
  secondary: '#596771',
  border: '#E8EEF3',
  muted: '#AAB7C1',
  red: '#C93030',
  otpPlaceholder: '#CBD5E0',
  greyIcon: '#4A5568',
};

export default function VerifikasiOTPLupaPasswordKlien({
  navigation,
  route,
}: any) {
  const email = route?.params?.email || 'mitra.umkm@bisnis.co.id';

  const [otp, setOtp] = useState(['8', '4', '0', '', '', '']);
  const [seconds, setSeconds] = useState(55);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const handleOtpChange = (value: string, index: number) => {
    const cleanValue = value.replace(/[^0-9]/g, '').slice(-1);
    const newOtp = [...otp];
    newOtp[index] = cleanValue;
    setOtp(newOtp);

    if (cleanValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (event.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const otpCode = otp.join('');
    if (otpCode.length !== 6) {
      Alert.alert('Gagal', 'Masukkan 6 digit kode verifikasi.');
      return;
    }
    navigation.navigate('ResetPasswordKlien', { email });
  };

  const handleResend = () => {
    if (seconds > 0) return;
    setSeconds(55);
    Alert.alert('OTP Dikirim', 'Kode OTP baru telah dikirim ke email Anda.');
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

          <Text style={styles.headerTitle}>Verifikasi Akun</Text>

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
              <Text style={styles.badgeText}>VERIFIKASI KODE OTP • POLAR KLIEN</Text>
            </View>

            {/* ILLUSTRATION */}
            <View style={styles.illustrationArea}>
              <View style={styles.circleBg}>
                <View style={styles.envelopeIcon}>
                  <View style={styles.envelopeBody} />
                  <View style={styles.envelopeTriangle} />
                  <View style={styles.checkIcon}>
                    <View style={styles.checkLine1} />
                    <View style={styles.checkLine2} />
                  </View>
                </View>
              </View>

              <View style={styles.badgeOverlap}>
                <View style={styles.refreshIconInner}>
                   <View style={styles.refreshCircle} />
                   <View style={styles.refreshArrowHead} />
                   <View style={styles.lockIconInside}>
                      <View style={styles.lockTopInside} />
                      <View style={styles.lockBodyInside} />
                   </View>
                </View>
              </View>
            </View>

            {/* TITLE */}
            <Text style={styles.mainTitle}>Verifikasi Kode OTP</Text>
            <Text style={styles.description}>
              Masukkan 6 digit kode verifikasi yang telah dikirimkan ke email Klien/Mitra Anda:
            </Text>

            {/* EMAIL INFO CARD */}
            <View style={styles.infoCard}>
              <View style={styles.emailRow}>
                <View style={styles.emailIconSmall}>
                  <View style={styles.envSmall} />
                  <View style={styles.envTriSmall} />
                </View>
                <Text style={styles.emailText}>{email}</Text>
              </View>
              <View style={styles.expiredRow}>
                <View style={styles.hourglassIcon}>
                  <View style={styles.hgTop} />
                  <View style={styles.hgBottom} />
                  <View style={styles.hgMiddle} />
                </View>
                <Text style={styles.expiredText}>
                  Kode kedaluwarsa dalam <Text style={styles.boldText}>5 menit</Text>
                </Text>
              </View>
            </View>

            {/* OTP CARD */}
            <View style={styles.otpCard}>
              <View style={styles.otpHeader}>
                <Text style={styles.otpLabel}>KODE VERIFIKASI 6-DIGIT</Text>
                <View style={styles.autoBadge}>
                  <Text style={styles.autoText}>Otomatis</Text>
                </View>
              </View>

              <View style={styles.otpInputRow}>
                {otp.map((value, index) => {
                    const firstEmptyIndex = otp.findIndex(v => v === '');
                    const isActive = index === firstEmptyIndex || (otp.every(v => v !== '') && index === 5);
                    return (
                        <View
                            key={index}
                            style={[
                                styles.otpBox,
                                value !== '' && styles.otpBoxFilled,
                                isActive && styles.otpBoxActive
                            ]}
                        >
                            <TextInput
                                ref={ref => (inputRefs.current[index] = ref)}
                                value={value}
                                onChangeText={text => handleOtpChange(text, index)}
                                onKeyPress={event => handleKeyPress(event, index)}
                                keyboardType="number-pad"
                                maxLength={1}
                                style={styles.textInput}
                                placeholder={index >= 4 ? "-" : ""}
                                placeholderTextColor={COLORS.otpPlaceholder}
                            />
                        </View>
                    );
                })}
              </View>

              <Text style={styles.securityNote}>
                Pastikan tidak membagikan kode OTP kepada siapapun termasuk pihak POLAR.
              </Text>
            </View>

            {/* PRIMARY BUTTON */}
            <TouchableOpacity style={styles.primaryButton} onPress={handleVerify}>
              <Text style={styles.primaryButtonText}>Lanjutkan Buat Sandi Baru</Text>
              <View style={styles.arrowIcon}>
                <View style={styles.arrowLine} />
                <View style={styles.arrowHead} />
              </View>
            </TouchableOpacity>

            {/* RESEND SECTION */}
            <View style={styles.resendArea}>
              <Text style={styles.resendLabel}>Tidak menerima kode?</Text>
              <TouchableOpacity
                style={styles.resendButton}
                disabled={seconds > 0}
                onPress={handleResend}
              >
                <View style={styles.resendIconContainer}>
                   <View style={styles.resLineSmall} />
                   <View style={styles.resHeadSmall} />
                </View>
                <Text style={styles.resendLink}>
                  Kirim Ulang OTP <Text style={styles.timerText}>(Tunggu {seconds}s)</Text>
                </Text>
              </TouchableOpacity>
            </View>

            {/* SECONDARY BUTTON */}
            <TouchableOpacity
              style={styles.backToLoginButton}
              onPress={() => navigation.navigate('LoginKlien')}
            >
              <View style={styles.backIconArea}>
                <View style={styles.backLine} />
                <View style={styles.backHead} />
              </View>
              <Text style={styles.backToLoginText}>Kembali ke Login Klien</Text>
            </TouchableOpacity>

            {/* FOOTER */}
            <View style={styles.footer}>
              <View style={styles.footerBadge}>
                <View style={styles.shieldIcon}>
                  <View style={styles.shieldShape} />
                  <View style={styles.shieldTick} />
                </View>
                <Text style={styles.footerBadgeText}>
                  Enkripsi SSL 256-Bit • Rekening Bersama POLAR
                </Text>
              </View>
              <Text style={styles.copyrightText}>
                Politeknik Negeri Lampung © 2025 Mitra Industri
              </Text>
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
    height: 120, // Lowered header
    paddingTop: 55, // More padding to avoid status bar clock
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
    opacity: 0.5,
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
  envelopeIcon: {
    width: 36,
    height: 26,
    position: 'relative',
  },
  envelopeBody: {
    width: 36,
    height: 26,
    borderWidth: 2.5,
    borderColor: COLORS.blue,
    borderRadius: 4,
  },
  envelopeTriangle: {
    position: 'absolute',
    top: 2,
    left: 2,
    width: 31,
    height: 16,
    borderBottomWidth: 2.5,
    borderLeftWidth: 2.5,
    borderRightWidth: 2.5,
    borderColor: COLORS.blue,
    transform: [{rotate: '-180deg'}],
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  checkIcon: {
    position: 'absolute',
    bottom: -3,
    right: -3,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkLine1: {
    width: 6,
    height: 2.5,
    backgroundColor: COLORS.blue,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    left: 1,
    bottom: 4,
    borderRadius: 1,
  },
  checkLine2: {
    width: 10,
    height: 2.5,
    backgroundColor: COLORS.blue,
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    right: 0,
    bottom: 6,
    borderRadius: 1,
  },
  badgeOverlap: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.navyDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: COLORS.background,
  },
  refreshIconInner: {
    width: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  refreshCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: COLORS.white,
    borderTopColor: 'transparent',
  },
  refreshArrowHead: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 3.5,
    borderRightWidth: 3.5,
    borderBottomWidth: 5,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.white,
    transform: [{rotate: '45deg'}],
  },
  lockIconInside: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockTopInside: {
    width: 6,
    height: 5,
    borderWidth: 1.2,
    borderColor: COLORS.white,
    borderBottomWidth: 0,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  lockBodyInside: {
    width: 8,
    height: 6,
    backgroundColor: COLORS.white,
    borderRadius: 1,
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
    color: COLORS.secondary,
    textAlign: 'center',
    paddingHorizontal: 10,
    lineHeight: 20,
    marginBottom: 20,
  },
  infoCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F5',
    marginBottom: 20,
  },
  emailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  emailIconSmall: {
    width: 20,
    height: 15,
    marginRight: 10,
    position: 'relative',
  },
  envSmall: {
    width: 20,
    height: 15,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
    borderRadius: 2,
  },
  envTriSmall: {
    position: 'absolute',
    top: 0,
    left: 2,
    width: 16,
    height: 10,
    borderBottomWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: COLORS.blue,
    transform: [{rotate: '-180deg'}],
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  emailText: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.navy,
  },
  expiredRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hourglassIcon: {
    width: 12,
    height: 16,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  hgTop: {
    width: 10,
    height: 7,
    borderTopWidth: 2,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: COLORS.greyIcon,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
  },
  hgBottom: {
    width: 10,
    height: 7,
    borderBottomWidth: 2,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    borderColor: COLORS.greyIcon,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    marginTop: 1,
  },
  hgMiddle: {
    position: 'absolute',
    width: 4,
    height: 2,
    backgroundColor: COLORS.greyIcon,
    top: 7,
  },
  expiredText: {
    fontSize: 12,
    color: COLORS.secondary,
    fontWeight: '500',
  },
  boldText: {
    fontWeight: '800',
    color: COLORS.text,
  },
  otpCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#EDF1F5',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.03,
    shadowRadius: 15,
  },
  otpHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  otpLabel: {
    fontSize: 11,
    fontWeight: '800',
    color: '#4A5568',
    letterSpacing: 0.5,
  },
  autoBadge: {
    backgroundColor: '#E6F3FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  autoText: {
    fontSize: 10,
    fontWeight: '700',
    color: COLORS.blue,
  },
  otpInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  otpBox: {
    width: 46,
    height: 56,
    backgroundColor: '#F7FAFC',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  otpBoxFilled: {
    borderColor: '#123F5A',
    backgroundColor: COLORS.white,
  },
  otpBoxActive: {
    borderColor: '#123F5A',
    backgroundColor: COLORS.white,
  },
  textInput: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.navy,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  securityNote: {
    fontSize: 11,
    color: COLORS.secondary,
    textAlign: 'center',
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
    marginBottom: 15,
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
  resendArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resendLabel: {
    fontSize: 13,
    color: COLORS.secondary,
    marginBottom: 6,
  },
  resendButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resendIconContainer: {
    width: 16,
    height: 16,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  resLineSmall: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
    borderTopColor: 'transparent',
  },
  resHeadSmall: {
    position: 'absolute',
    top: 1,
    right: 1,
    width: 0,
    height: 0,
    borderLeftWidth: 3,
    borderRightWidth: 3,
    borderBottomWidth: 4,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.blue,
    transform: [{rotate: '45deg'}],
  },
  resendLink: {
    fontSize: 13,
    fontWeight: '800',
    color: COLORS.blue,
  },
  timerText: {
    color: COLORS.secondary,
    fontWeight: '600',
  },
  backToLoginButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#F0F7FF',
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  backIconArea: {
    width: 20,
    height: 20,
    marginRight: 10,
    justifyContent: 'center',
  },
  backLine: {
    width: 14,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
  },
  backHead: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: COLORS.navy,
    transform: [{rotate: '-45deg'}],
    position: 'absolute',
    left: 0,
  },
  backToLoginText: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.navy,
  },
  footer: {
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  footerBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E7F2FC',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 25,
    marginBottom: 10,
  },
  shieldIcon: {
    width: 16,
    height: 18,
    marginRight: 10,
    position: 'relative',
  },
  shieldShape: {
    width: 16,
    height: 18,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
  },
  shieldTick: {
    position: 'absolute',
    top: 5,
    left: 4.5,
    width: 6,
    height: 4,
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: COLORS.blue,
    transform: [{rotate: '-45deg'}],
  },
  footerBadgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#526D7D',
  },
  copyrightText: {
    fontSize: 11,
    color: '#A0AEC0',
    textAlign: 'center',
    fontWeight: '500',
  },
});