import React, {useRef, useState} from 'react';
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
} from 'react-native';

type Props = {
  navigation: any;
  route: any;
};

export default function VerifikasiOTPLupaPasswordMahasiswa({
  navigation,
  route,
}: Props) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const method = route?.params?.method || 'email';
  const email = route?.params?.email || '';
  const whatsapp = route?.params?.whatsapp || '';

  const isWhatsApp = method === 'whatsapp';

  const destination = isWhatsApp ? whatsapp : email;

  const handleOtpChange = (value: string, index: number) => {
    const numericValue = value.replace(/[^0-9]/g, '');

    const newOtp = [...otp];
    newOtp[index] = numericValue.slice(-1);

    setOtp(newOtp);

    if (numericValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    if (
      event.nativeEvent.key === 'Backspace' &&
      otp[index] === '' &&
      index > 0
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');

    if (enteredOtp.length !== 6) {
      console.log('OTP belum lengkap');
      return;
    }

    console.log('OTP Reset Password:', enteredOtp);

    navigation.navigate('ResetPasswordMahasiswa');
  };

  const handleResend = () => {
    console.log('Kirim ulang OTP');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}>

          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.backButton}
                activeOpacity={0.7}
              >
                <Text style={styles.backText}>‹</Text>
              </TouchableOpacity>

              <Text style={styles.headerTitle}>Verifikasi Akun</Text>
            </View>

            <View style={styles.profileCircle}>
              <Text style={styles.profileIcon}>♙</Text>
            </View>
          </View>

          {/* CONTENT */}
          <View style={styles.content}>

            {/* ICON */}
            <View style={styles.iconContainer}>
              <View style={styles.iconCircle}>
                <Text style={styles.lockIcon}>✉</Text>
              </View>
            </View>

            {/* BADGE */}
            <View style={styles.badgeContainer}>
              <Text style={styles.badge}>
                ♙ Verifikasi Pemulihan Akun
              </Text>
            </View>

            {/* TITLE */}
            <Text style={styles.title}>
              Masukkan Kode OTP
            </Text>

            {/* SUBTITLE */}
<Text style={styles.subtitle}>
  Kami telah mengirimkan kode verifikasi 6 digit
  {'\n'}
  {isWhatsApp
    ? 'ke nomor WhatsApp Anda.'
    : 'ke email kampus Anda.'}
</Text>

{destination ? (
  <Text style={styles.emailText}>
    {destination}
  </Text>
) : (
  <Text style={styles.emailText}>
    {isWhatsApp
      ? 'Nomor WhatsApp Terdaftar'
      : 'Email Kampus Polinela'}
  </Text>
)}

            {/* OTP CARD */}
            <View style={styles.card}>

              <Text style={styles.otpLabel}>
                Kode Verifikasi
              </Text>

              {/* OTP INPUT */}
              <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                  <TextInput
                    key={index}
                    ref={ref => {
                      inputRefs.current[index] = ref;
                    }}
                    style={[
                      styles.otpInput,
                      digit !== '' && styles.otpInputActive,
                    ]}
                    value={digit}
                    onChangeText={value =>
                      handleOtpChange(value, index)
                    }
                    onKeyPress={event =>
                      handleKeyPress(event, index)
                    }
                    keyboardType="number-pad"
                    maxLength={1}
                    textAlign="center"
                    selectTextOnFocus
                  />
                ))}
              </View>

              {/* INFO */}
              <View style={styles.infoBox}>
                <Text style={styles.infoIcon}>ⓘ</Text>

            <Text style={styles.infoText}>
              Masukkan kode OTP 6 digit yang telah
              dikirimkan ke{' '}
              {isWhatsApp ? 'WhatsApp Anda.' : 'email Anda.'}
            </Text>
              </View>

              {/* VERIFY BUTTON */}
              <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handleVerify}>
                <Text style={styles.buttonText}>
                  Verifikasi Kode
                </Text>

                <Text style={styles.arrow}>
                  →
                </Text>
              </TouchableOpacity>

              {/* RESEND */}
              <View style={styles.resendContainer}>
                <Text style={styles.resendText}>
                  Tidak menerima kode?
                </Text>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={handleResend}>
                  <Text style={styles.resendButton}>
                    Kirim Ulang
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* BACK TO LOGIN */}
            <TouchableOpacity
              style={styles.backLogin}
              activeOpacity={0.7}
              onPress={() =>
                navigation.navigate('LoginMahasiswa')
              }>
              <Text style={styles.backLoginText}>
                Kembali ke{' '}
                <Text style={styles.loginBold}>
                  Halaman Masuk
                </Text>
              </Text>
            </TouchableOpacity>

            {/* SECURITY */}
            <View style={styles.securityBadge}>
              <Text style={styles.securityText}>
                🔒 Sistem Terintegrasi SSO Polinela • Enkripsi SSL
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
    backgroundColor: '#F4F8FC',
  },

  keyboard: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  /* HEADER */

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

headerLeft: {
  flexDirection: 'row',
  alignItems: 'center',
},

backButton: {
  width: 38,
  height: 40,
  justifyContent: 'center',
  alignItems: 'flex-start',
  marginRight: 4,
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
  marginLeft: 2,
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
    fontSize: 18,
  },

  /* CONTENT */

  content: {
    paddingHorizontal: 18,
    paddingTop: 34,
  },

  /* ICON */

  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 20,
  },

  iconCircle: {
    width: 108,
    height: 108,
    borderRadius: 54,
    backgroundColor: '#E8F3FA',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D2E6F2',
  },

  lockIcon: {
    fontSize: 45,
    color: '#0B5A80',
  },

  /* BADGE */

  badgeContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },

  badge: {
    color: '#0B648D',
    backgroundColor: '#E5F3FA',
    paddingHorizontal: 13,
    paddingVertical: 7,
    borderRadius: 20,
    fontSize: 11,
    fontWeight: '700',
    overflow: 'hidden',
  },

  /* TITLE */

  title: {
    color: '#062D47',
    fontSize: 29,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    color: '#53616E',
    fontSize: 13,
    lineHeight: 19,
    textAlign: 'center',
    marginBottom: 6,
  },

  emailText: {
    color: '#0B5A80',
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 23,
  },

  /* CARD */

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 20,

    shadowColor: '#062D47',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 3,
  },

  otpLabel: {
    color: '#062D47',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 13,
  },

  /* OTP */

  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  otpInput: {
    width: 43,
    height: 52,
    borderWidth: 1.5,
    borderColor: '#D5E0E8',
    borderRadius: 10,
    backgroundColor: '#F9FBFD',

    color: '#062D47',
    fontSize: 21,
    fontWeight: '800',
  },

  otpInputActive: {
    borderColor: '#0B648D',
    backgroundColor: '#F1F8FC',
  },

  /* INFO */

  infoBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F1F7FA',
    borderRadius: 10,
    paddingHorizontal: 11,
    paddingVertical: 10,
    marginBottom: 18,
  },

  infoIcon: {
    color: '#0B648D',
    fontSize: 15,
    marginRight: 7,
  },

  infoText: {
    flex: 1,
    color: '#60717E',
    fontSize: 11,
    lineHeight: 16,
  },

  /* BUTTON */

  button: {
    height: 50,
    borderRadius: 11,
    backgroundColor: '#063452',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

  arrow: {
    position: 'absolute',
    right: 17,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '300',
  },

  /* RESEND */

  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  resendText: {
    color: '#71808C',
    fontSize: 12,
    marginRight: 5,
  },

  resendButton: {
    color: '#0B648D',
    fontSize: 12,
    fontWeight: '800',
  },

  /* BACK LOGIN */

  backLogin: {
    alignItems: 'center',
    marginTop: 21,
  },

  backLoginText: {
    color: '#6B7883',
    fontSize: 12,
  },

  loginBold: {
    color: '#0B648D',
    fontWeight: '800',
  },

  /* SECURITY */

  securityBadge: {
    alignItems: 'center',
    marginTop: 22,
  },

  securityText: {
    color: '#8A98A3',
    fontSize: 9.5,
    textAlign: 'center',
  },
});