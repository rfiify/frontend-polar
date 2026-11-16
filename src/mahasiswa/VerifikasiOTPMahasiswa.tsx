import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

type Props = {
  navigation: any;
  route: any;
};

export default function VerifikasiOTPMahasiswa({
  navigation,
  route,
}: Props) {
  const email = route?.params?.email || '';
  const otpPreview = route?.params?.otpPreview || '';

  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const handleVerify = async () => {
    if (!otp.trim()) {
      Alert.alert(
        'Kode OTP belum diisi',
        'Silakan masukkan kode OTP terlebih dahulu.',
      );
      return;
    }

    if (otp.trim().length !== 6) {
      Alert.alert(
        'Kode OTP tidak valid',
        'Kode OTP harus terdiri dari 6 digit.',
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        'http://10.0.2.2:5000/auth/verify-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
            otp: otp.trim(),
          }),
        },
      );

      const result = await response.json();

      console.log('VERIFY OTP:', result);

      if (!response.ok || !result.success) {
        Alert.alert(
          'Verifikasi gagal',
          result.message ||
            'Kode OTP tidak valid atau sudah kedaluwarsa.',
        );
        return;
      }

      Alert.alert(
        'Verifikasi berhasil',
        'Email Anda berhasil diverifikasi. Silakan masuk ke akun POLAR.',
        [
          {
            text: 'Masuk Sekarang',
            onPress: () => {
              navigation.navigate('LoginMahasiswa', {
                email: email,
              });
            },
          },
        ],
      );
    } catch (error) {
      console.error('VERIFY OTP ERROR:', error);

      Alert.alert(
        'Tidak dapat terhubung',
        'Periksa apakah backend POLAR sedang berjalan.',
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    try {
      setResending(true);

      const response = await fetch(
        'http://10.0.2.2:5000/auth/resend-otp',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.trim(),
          }),
        },
      );

      const result = await response.json();

      console.log('RESEND OTP:', result);

      if (!response.ok || !result.success) {
        Alert.alert(
          'Gagal mengirim OTP',
          result.message ||
            'OTP tidak dapat dikirim ulang.',
        );
        return;
      }

      Alert.alert(
        'OTP berhasil dikirim',
        `Kode OTP baru berhasil dibuat.\n\nKode testing: ${
          result.otp_preview || '-'
        }`,
      );
    } catch (error) {
      console.error('RESEND OTP ERROR:', error);

      Alert.alert(
        'Tidak dapat terhubung',
        'Periksa apakah backend POLAR sedang berjalan.',
      );
    } finally {
      setResending(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }>

        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>

          {/* HEADER */}

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
              Verifikasi Akun
            </Text>

            <View style={styles.headerSpacer} />
          </View>

          {/* CONTENT */}

          <View style={styles.content}>

            <Text style={styles.title}>
              Verifikasi Email
            </Text>

            <Text style={styles.description}>
              Masukkan kode OTP 6 digit yang diberikan
              {'\n'}
              untuk memverifikasi akun mahasiswa POLAR.
            </Text>

            <View style={styles.divider} />

            <Text style={styles.emailLabel}>
              Kode dikirim untuk
            </Text>

            <Text style={styles.emailText}>
              {email}
            </Text>

            {/* OTP */}

            <Text style={styles.label}>
              Kode OTP
            </Text>

            <TextInput
              style={styles.otpInput}
              value={otp}
              onChangeText={text =>
                setOtp(text.replace(/[^0-9]/g, ''))
              }
              keyboardType="number-pad"
              maxLength={6}
              placeholder="000000"
              placeholderTextColor="#A5B5C4"
              textAlign="center"
              autoFocus
            />

            {/* OTP TESTING */}

            {otpPreview ? (
              <View style={styles.previewBox}>
                <Text style={styles.previewTitle}>
                  OTP TESTING
                </Text>

                <Text style={styles.previewCode}>
                  {otpPreview}
                </Text>

                <Text style={styles.previewInfo}>
                  Gunakan kode ini untuk pengujian.
                </Text>
              </View>
            ) : null}

            {/* VERIFY */}

            <TouchableOpacity
              style={[
                styles.verifyButton,
                loading && styles.buttonDisabled,
              ]}
              activeOpacity={0.8}
              onPress={handleVerify}
              disabled={loading}>

              <Text style={styles.verifyButtonText}>
                {loading
                  ? 'Memverifikasi...'
                  : 'Verifikasi'}
              </Text>

              {!loading && (
                <Text style={styles.arrow}>
                  →
                </Text>
              )}
            </TouchableOpacity>

            {/* RESEND */}

            <View style={styles.resendContainer}>
              <Text style={styles.resendText}>
                Tidak menerima kode?
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleResendOTP}
                disabled={resending}>

                <Text style={styles.resendButton}>
                  {resending
                    ? 'Mengirim...'
                    : 'Kirim ulang OTP'}
                </Text>
              </TouchableOpacity>
            </View>

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
    paddingBottom: 30,
  },

  /* HEADER */

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

  /* CONTENT */

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
    marginTop: 30,
    marginBottom: 24,
  },

  emailLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#74879B',
    marginBottom: 5,
  },

  emailText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#173C58',
    marginBottom: 25,
  },

  /* OTP */

  label: {
    fontSize: 12,
    fontWeight: '700',
    color: '#162B3D',
    marginBottom: 8,
  },

  otpInput: {
    height: 54,

    borderWidth: 1,
    borderColor: '#D8E2EB',
    borderRadius: 10,

    backgroundColor: '#FFFFFF',

    fontSize: 23,
    fontWeight: '700',
    letterSpacing: 9,

    color: '#173F5B',

    paddingHorizontal: 15,
  },

  /* OTP PREVIEW */

  previewBox: {
    marginTop: 15,
    paddingVertical: 12,
    paddingHorizontal: 15,

    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C8DCEB',

    backgroundColor: '#EDF6FC',

    alignItems: 'center',
  },

  previewTitle: {
    fontSize: 9,
    fontWeight: '800',
    color: '#71879B',
    letterSpacing: 1,
    marginBottom: 4,
  },

  previewCode: {
    fontSize: 22,
    fontWeight: '800',
    color: '#173F5B',
    letterSpacing: 5,
  },

  previewInfo: {
    fontSize: 9,
    color: '#8296A8',
    marginTop: 3,
  },

  /* BUTTON */

  verifyButton: {
    height: 44,
    marginTop: 22,

    borderRadius: 9,

    backgroundColor: '#173F5B',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonDisabled: {
    opacity: 0.65,
  },

  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 17,
    marginLeft: 8,
  },

  /* RESEND */

  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 22,
  },

  resendText: {
    fontSize: 10.5,
    color: '#71859A',
  },

  resendButton: {
    fontSize: 10.5,
    fontWeight: '700',
    color: '#173F5B',
    marginLeft: 5,
  },

  /* FOOTER */

  footer: {
    marginTop: 50,

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
});