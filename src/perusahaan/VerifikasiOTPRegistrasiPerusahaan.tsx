import React, {useRef, useState} from 'react';
import {
  Alert,
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
  route: any;
};

// Recognizable Bold Arrow Component
const BoldArrow = ({ direction = 'left', color = '#062D47', size = 20 }: { direction?: 'left' | 'right', color?: string, size?: number }) => {
  const isRight = direction === 'right';
  return (
    <View style={[styles.arrowContainer, { width: size, height: size }, isRight && { transform: [{ rotate: '180deg' }] }]}>
      <View style={[styles.arrowLine, { backgroundColor: color, width: size * 0.8, height: size * 0.15 }]} />
      <View style={[styles.arrowHeadTop, { borderColor: color, borderTopWidth: size * 0.15, borderLeftWidth: size * 0.15, width: size * 0.4, height: size * 0.4, top: size * 0.28, left: size * 0.08 }]} />
      <View style={[styles.arrowHeadBottom, { borderColor: color, borderBottomWidth: size * 0.15, borderLeftWidth: size * 0.15, width: size * 0.35, height: size * 0.35, bottom: size * 0.3, left: size * 0.1 }]} />
    </View>
  );
};

const VerifikasiOTPRegistrasiPerusahaan = ({
  navigation,
  route,
}: Props) => {
  const email = route?.params?.email || 'rafi@perusahaan.ac.id';

  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const inputRefs = useRef<Array<TextInput | null>>([]);

  const handleChange = (value: string, index: number) => {
    const cleanValue = value.replace(/[^0-9]/g, '');

    const newOtp = [...otp];
    newOtp[index] = cleanValue.slice(-1);

    setOtp(newOtp);

    if (cleanValue && index < 5) {
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

  const handleVerifikasi = () => {
    const kode = otp.join('');

    if (kode.length !== 6) {
      Alert.alert(
        'Kode OTP Belum Lengkap',
        'Silakan masukkan 6 digit kode OTP.',
      );
      return;
    }

    navigation.navigate('LengkapiProfilPerusahaan');
  };

  const handleKirimUlang = () => {
    Alert.alert(
      'Kode OTP Dikirim',
      `Kode OTP baru telah dikirim ke ${email}.`,
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <View style={styles.header}>
          <View style={styles.headerContent}>

            {/* PANAH KEMBALI */}

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>

              <BoldArrow direction="left" color="#062D47" size={24} />

            </TouchableOpacity>


            {/* LOGO POLAR */}

            <View style={styles.logoRow}>

              <View style={styles.logoBox}>
                <Text style={styles.logoP}>P</Text>
              </View>

              <Text style={styles.logoText}>POLAR</Text>

            </View>

          </View>
        </View>


        {/* =====================================================
            CONTENT
        ===================================================== */}

        <View style={styles.content}>

          {/* ICON EMAIL */}

          <View style={styles.emailIconContainer}>

            <View style={styles.emailIcon}>

              <View style={styles.emailLineLeft} />

              <View style={styles.emailLineRight} />

              <View style={styles.emailDot} />

            </View>

          </View>


          {/* TITLE */}

          <Text style={styles.title}>
            Verifikasi Email Perusahaan
          </Text>


          {/* DESCRIPTION */}

          <Text style={styles.description}>
            Masukkan 6 digit kode OTP yang kami kirimkan ke:
          </Text>


          {/* EMAIL */}

          <View style={styles.emailPill}>

            <View style={styles.smallMail}>

              <View style={styles.smallMailLeft} />

              <View style={styles.smallMailRight} />

            </View>

            <Text
              style={styles.emailText}
              numberOfLines={1}
              ellipsizeMode="middle">

              {email}

            </Text>

            <View style={styles.emailDivider} />

            <Text style={styles.timer}>
              04:45
            </Text>

          </View>


          {/* =====================================================
              OTP INPUT
          ===================================================== */}

          <View style={styles.otpContainer}>

            {otp.map((value, index) => (
              <TextInput
                key={index}
                ref={ref => {
                  inputRefs.current[index] = ref;
                }}
                style={styles.otpInput}
                value={value}
                onChangeText={text =>
                  handleChange(text, index)
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


          {/* =====================================================
              VERIFY BUTTON
          ===================================================== */}

          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleVerifikasi}
            activeOpacity={0.8}>

            <Text style={styles.verifyButtonText}>
              Verifikasi &amp; Lanjutkan
            </Text>

            <View style={styles.buttonArrowContainer}>
              <BoldArrow direction="right" color="#FFFFFF" size={18} />
            </View>

          </TouchableOpacity>


          {/* =====================================================
              RESEND
          ===================================================== */}

          <View style={styles.resendRow}>

            <Text style={styles.resendText}>
              Belum menerima kode?
            </Text>

            <TouchableOpacity
              onPress={handleKirimUlang}
              activeOpacity={0.7}>

              <Text style={styles.resendLink}>
                {' '}Kirim Ulang
              </Text>

            </TouchableOpacity>

            <Text style={styles.resendTimer}>
              {' '}(45s)
            </Text>

          </View>


          {/* =====================================================
              BACK TO REGISTRATION
          ===================================================== */}

          <TouchableOpacity
            style={styles.backRegistration}
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>

            <View style={styles.backRegistrationArrowContainer}>
              <BoldArrow direction="left" color="#727A81" size={16} />
            </View>

            <Text style={styles.backRegistrationText}>
              Kembali ke pendaftaran
            </Text>

          </TouchableOpacity>


          {/* =====================================================
              HELP
          ===================================================== */}

          <View style={styles.helpSection}>

            <Text style={styles.helpText}>
              Butuh bantuan verifikasi?
            </Text>

            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Bantuan',
                  'Silakan hubungi Customer Service POLAR.',
                )
              }
              activeOpacity={0.7}>

              <Text style={styles.csText}>
                Hubungi CS
              </Text>

            </TouchableOpacity>

          </View>


          {/* =====================================================
              SECURITY
          ===================================================== */}

          <View style={styles.securityRow}>

            <Text style={styles.lockIconSymbol}>
              ♙
            </Text>

            <Text style={styles.securityText}>
              Enkripsi SSL 256-Bit • Mitra Industri Polinela
            </Text>

          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};


/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({

  /* ===========================================================
     SCREEN
  =========================================================== */

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F8FC',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#F5F8FC',
  },

  container: {
    flexGrow: 1,
    backgroundColor: '#F5F8FC',
    paddingBottom: 45,
  },


  /* ===========================================================
     HEADER
  =========================================================== */

  header: {
    height: 108,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DCE4EC',
    justifyContent: 'flex-end',
    paddingHorizontal: 27,
    paddingBottom: 17,
  },

  headerContent: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },



  /* ===========================================================
     HEADER BACK
  =========================================================== */

  backButton: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },


  /* ===========================================================
     LOGO
  =========================================================== */

  logoRow: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 35,
    height: 35,
    borderRadius: 9,
    backgroundColor: '#123D59',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  logoP: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '900',
    lineHeight: 23,
    includeFontPadding: false,
  },

  logoText: {
    color: '#062D47',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: 0.2,
    includeFontPadding: false,
  },


  /* ===========================================================
     CONTENT
  =========================================================== */

  content: {
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 34,
  },


  /* ===========================================================
     EMAIL ICON
  =========================================================== */

  emailIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 18,
    backgroundColor: '#DDEFFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 19,
  },

  emailIcon: {
    width: 30,
    height: 22,
    borderWidth: 2.3,
    borderColor: '#062D47',
    borderRadius: 3,
    position: 'relative',
  },

  emailLineLeft: {
    position: 'absolute',
    width: 19,
    height: 2,
    backgroundColor: '#062D47',
    top: 5,
    left: -2,
    transform: [
      {
        rotate: '30deg',
      },
    ],
  },

  emailLineRight: {
    position: 'absolute',
    width: 19,
    height: 2,
    backgroundColor: '#062D47',
    top: 5,
    right: -2,
    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },

  emailDot: {
    position: 'absolute',
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#062D47',
    right: -6,
    top: -8,
  },


  /* ===========================================================
     TITLE
  =========================================================== */

  title: {
    fontSize: 25,
    lineHeight: 31,
    fontWeight: '800',
    color: '#062D47',
    textAlign: 'center',
    marginBottom: 9,
    includeFontPadding: false,
  },

  description: {
    fontSize: 15,
    lineHeight: 21,
    color: '#4E5964',
    textAlign: 'center',
    includeFontPadding: false,
  },


  /* ===========================================================
     EMAIL PILL
  =========================================================== */

  emailPill: {
    height: 39,
    paddingHorizontal: 14,
    borderRadius: 21,
    backgroundColor: '#EAF3FC',
    borderWidth: 1,
    borderColor: '#D8E5F0',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 11,
  },

  smallMail: {
    width: 15,
    height: 11,
    borderWidth: 1.3,
    borderColor: '#155271',
    borderRadius: 1,
    marginRight: 6,
    position: 'relative',
  },

  smallMailLeft: {
    position: 'absolute',
    width: 9,
    height: 1,
    backgroundColor: '#155271',
    left: -1,
    top: 2,
    transform: [
      {
        rotate: '30deg',
      },
    ],
  },

  smallMailRight: {
    position: 'absolute',
    width: 9,
    height: 1,
    backgroundColor: '#155271',
    right: -1,
    top: 2,
    transform: [
      {
        rotate: '-30deg',
      },
    ],
  },

  emailText: {
    fontSize: 13,
    color: '#062D47',
    fontWeight: '700',
    includeFontPadding: false,
  },

  emailDivider: {
    width: 1,
    height: 16,
    backgroundColor: '#B7C8D6',
    marginHorizontal: 9,
  },

  timer: {
    fontSize: 13,
    color: '#27617D',
    fontWeight: '700',
    includeFontPadding: false,
  },


  /* ===========================================================
     OTP
  =========================================================== */

  otpContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginTop: 28,
  },

  otpInput: {
    width: 46,
    height: 37,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E8EC',
    fontSize: 21,
    fontWeight: '800',
    color: '#062D47',
    padding: 0,
    includeFontPadding: false,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,

    elevation: 1,
  },


  /* ===========================================================
     VERIFY BUTTON
  =========================================================== */

  verifyButton: {
    width: '88%',
    height: 53,
    backgroundColor: '#003B59',
    borderRadius: 11,
    marginTop: 28,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.16,
    shadowRadius: 4,

    elevation: 3,
  },

  verifyButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 20,
    includeFontPadding: false,
  },

  buttonArrowContainer: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },


  /* ===========================================================
     RESEND
  =========================================================== */

  resendRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  resendText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#4E5964',
    includeFontPadding: false,
  },

  resendLink: {
    fontSize: 13,
    lineHeight: 18,
    color: '#27617D',
    fontWeight: '700',
    includeFontPadding: false,
  },

  resendTimer: {
    fontSize: 13,
    lineHeight: 18,
    color: '#27617D',
    fontWeight: '700',
    includeFontPadding: false,
  },


  /* ===========================================================
     BACK TO REGISTRATION
  =========================================================== */

  backRegistration: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    height: 28,
  },

  backRegistrationArrowContainer: {
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },

  backRegistrationText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#727A81',
    fontWeight: '600',
    includeFontPadding: false,
  },


  /* ===========================================================
     HELP
  =========================================================== */

  helpSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 31,
  },

  helpText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#4E5964',
    includeFontPadding: false,
  },

  csText: {
    fontSize: 13,
    lineHeight: 18,
    color: '#27617D',
    fontWeight: '700',
    marginLeft: 5,
    includeFontPadding: false,
  },


  /* ===========================================================
     SECURITY
  =========================================================== */

  securityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  lockIconSymbol: {
    fontSize: 15,
    color: '#747D84',
    marginRight: 5,
  },

  securityText: {
    fontSize: 11,
    color: '#747D84',
    fontWeight: '600',
    includeFontPadding: false,
  },

  /* ===========================================================
     CUSTOM ARROW COMPONENT STYLES
  =========================================================== */

  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLine: {
    borderRadius: 1.5,
  },
  arrowHeadTop: {
    position: 'absolute',
    transform: [{ rotate: '-45deg' }],
    borderTopLeftRadius: 1,
  },
  arrowHeadBottom: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    borderBottomLeftRadius: 1,
  },

});

export default VerifikasiOTPRegistrasiPerusahaan;