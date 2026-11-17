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
  cyan: '#DFF5F7',
  greyLight: '#8A9BA7',
  greyLabel: '#7B8790',
  navyDark: '#073650',
  buttonNavy: '#173F5A',
};

export default function LupaPasswordKlien({navigation}: any) {
  const [email, setEmail] = useState('');

  const handleKirim = () => {
    const emailTrimmed = email.trim();

    if (!emailTrimmed) {
      Alert.alert(
        'Email Belum Diisi',
        'Silakan masukkan email yang terdaftar pada akun Klien.',
      );
      return;
    }

    navigation.navigate('VerifikasiOTPLupaPasswordKlien', {
      email: emailTrimmed,
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* ================= HEADER ================= */}
        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>

            <View style={styles.backArrow}>
              <View style={styles.backArrowLine} />
              <View style={styles.backArrowTop} />
              <View style={styles.backArrowBottom} />
            </View>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Lupa Kata Sandi
          </Text>

          <View style={styles.headerProfile}>
            <View style={styles.profileCircle}>
              <View style={styles.profileHead} />
              <View style={styles.profileBody} />
            </View>
          </View>

        </View>

        {/* ================= CONTENT ================= */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">

          <View style={styles.content}>

            {/* ================= BADGE ================= */}
            <View style={styles.badge}>

              <View style={styles.badgeIcon}>
                <View style={styles.storeRoof} />

                <View style={styles.storeBody}>
                  <View style={styles.storeDoor} />
                </View>
              </View>

              <Text style={styles.badgeText}>
                PEMULIHAN AKUN KLIEN
              </Text>

            </View>

            {/* ================= RECOVERY ICON ================= */}
            <View style={styles.recoveryArea}>

              <View style={styles.recoveryOuter}>

                <View style={styles.recoveryMiddle}>

                  <View style={styles.recoveryInner}>

                    {/* Circular Arrow */}
                    <View style={styles.circularArrow} />
                    <View style={styles.arrowHead} />

                    {/* Lock */}
                    <View style={styles.lockContainer}>

                      <View style={styles.lockShackle} />

                      <View style={styles.lockBody}>
                        <View style={styles.lockHole} />
                      </View>

                    </View>

                  </View>

                </View>

              </View>

              {/* Small Shield */}
              <View style={styles.shieldBadge}>

                <View style={styles.shieldShape}>
                  <View style={styles.shieldCheck} />
                </View>

              </View>

            </View>

            {/* ================= TITLE ================= */}
            <Text style={styles.mainTitle}>
              Lupa Kata Sandi?
            </Text>

            {/* ================= DESCRIPTION ================= */}
            <Text style={styles.description}>
              Masukkan email terdaftar akun Klien Anda. Kami akan mengirimkan
              instruksi dan tautan verifikasi untuk membuat kata sandi baru.
            </Text>

            {/* ================= FORM CARD ================= */}
            <View style={styles.formCard}>

              <View style={styles.labelRow}>

                <Text style={styles.inputLabel}>
                  Email Terdaftar
                </Text>

                <Text style={styles.accountType}>
                  UMKM / Mitra
                </Text>

              </View>

              {/* EMAIL INPUT */}
              <View style={styles.inputWrapper}>

                <View style={styles.emailIcon}>
                  <View style={styles.envelope}>
                    <View style={styles.envelopeTriangle} />
                  </View>
                </View>

                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="contoh: nama@perusahaan.com"
                  placeholderTextColor={COLORS.greyLight}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />

              </View>

              {/* HELPER */}
              <Text style={styles.helperText}>
                Tautan atau kode pemulihan akan dikirimkan ke email terdaftar
                Anda.
              </Text>

              {/* ================= SEND BUTTON ================= */}
              <TouchableOpacity
                style={styles.sendButton}
                activeOpacity={0.85}
                onPress={handleKirim}>

                <Text style={styles.sendButtonText}>
                  Kirim Tautan Pemulihan
                </Text>

                <View style={styles.buttonArrow}>
                  <View style={styles.buttonArrowLine} />
                  <View style={styles.buttonArrowHead} />
                </View>

              </TouchableOpacity>

            </View>

            {/* ================= BACK LOGIN ================= */}
            <View style={styles.backLoginArea}>

              <Text style={styles.backLoginText}>
                Sudah ingat kata sandi akun?
              </Text>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}>

                <Text style={styles.backLoginLink}>
                  ‹ Masuk Kembali
                </Text>

              </TouchableOpacity>

            </View>

            {/* ================= SECURITY FOOTER ================= */}
            <View style={styles.securityBadge}>

              <View style={styles.securityIcon}>

                <View style={styles.securityShield}>
                  <View style={styles.securityCheck} />
                </View>

              </View>

              <Text style={styles.securityText}>
                Data Terlindungi • Rekening Bersama (Escrow) POLAR •{'\n'}
                Enkripsi SSL
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

  /* ================= HEADER ================= */

  header: {
    height: 100,
    paddingTop: 35,
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
    backgroundColor: COLORS.navyDark,
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

  /* ================= CONTENT ================= */

  content: {
    alignItems: 'center',
    paddingHorizontal: 25,
  },

  /* ================= BADGE ================= */

  badge: {
    marginTop: 20,
    backgroundColor: COLORS.blueSoft,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },

  badgeIcon: {
    width: 14,
    height: 14,
    marginRight: 6,
    justifyContent: 'center',
  },

  storeRoof: {
    width: 12,
    height: 2,
    backgroundColor: COLORS.blueIcon,
    marginBottom: 1,
  },

  storeBody: {
    width: 10,
    height: 7,
    borderWidth: 1.2,
    borderColor: COLORS.blueIcon,
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  storeDoor: {
    width: 3,
    height: 3,
    backgroundColor: COLORS.blueIcon,
  },

  badgeText: {
    fontSize: 10,
    fontWeight: '800',
    color: COLORS.blueIcon,
    letterSpacing: 0.5,
  },

  /* ================= RECOVERY ICON ================= */

  recoveryArea: {
    marginTop: 25,
    marginBottom: 15,
    position: 'relative',
  },

  recoveryOuter: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: '#EBF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recoveryMiddle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#D6E9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  recoveryInner: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },

  circularArrow: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2.5,
    borderColor: COLORS.navy,
    borderTopColor: 'transparent',
    transform: [{rotate: '45deg'}],
  },

  arrowHead: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderBottomWidth: 7,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: COLORS.navy,
    position: 'absolute',
    top: 4,
    right: 4,
    transform: [{rotate: '135deg'}],
  },

  lockContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 14,
  },

  lockShackle: {
    width: 10,
    height: 8,
    borderWidth: 2,
    borderColor: COLORS.navy,
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },

  lockBody: {
    width: 14,
    height: 10,
    backgroundColor: COLORS.navy,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockHole: {
    width: 2.5,
    height: 2.5,
    borderRadius: 1.25,
    backgroundColor: COLORS.white,
  },

  shieldBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.navyDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },

  shieldShape: {
    width: 10,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shieldCheck: {
    width: 6,
    height: 4,
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: COLORS.white,
    transform: [{rotate: '-45deg'}],
    marginTop: -1,
  },

  /* ================= TITLE ================= */

  mainTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: COLORS.navy,
    textAlign: 'center',
  },

  description: {
    fontSize: 14,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 20,
    paddingHorizontal: 15,
  },

  /* ================= FORM CARD ================= */

  formCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginTop: 25,
    borderWidth: 1,
    borderColor: '#EDF1F5',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  inputLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.navy,
  },

  accountType: {
    fontSize: 11,
    color: COLORS.greyLabel,
    fontWeight: '700',
  },

  inputWrapper: {
    height: 48,
    backgroundColor: COLORS.input,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  emailIcon: {
    marginRight: 10,
    width: 20,
    height: 14,
    borderWidth: 1.5,
    borderColor: COLORS.blueIcon,
    borderRadius: 2,
    overflow: 'hidden',
  },

  envelope: {
    width: 20,
    height: 14,
    justifyContent: 'center',
  },

  envelopeTriangle: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: COLORS.blueIcon,
    transform: [{rotate: '45deg'}],
    marginTop: -12,
    marginLeft: -1,
  },

  input: {
    flex: 1,
    fontSize: 13,
    color: COLORS.navy,
    fontWeight: '500',
  },

  helperText: {
    fontSize: 11,
    color: COLORS.textSecondary,
    marginTop: 8,
    lineHeight: 16,
  },

  sendButton: {
    height: 48,
    backgroundColor: COLORS.buttonNavy,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },

  sendButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },

  buttonArrow: {
    marginLeft: 10,
    width: 16,
    height: 16,
    justifyContent: 'center',
  },

  buttonArrowLine: {
    width: 14,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },

  buttonArrowHead: {
    width: 8,
    height: 8,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.white,
    transform: [{rotate: '45deg'}],
    position: 'absolute',
    right: 0,
  },

  /* ================= FOOTER ================= */

  backLoginArea: {
    marginTop: 25,
    alignItems: 'center',
  },

  backLoginText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },

  backLoginLink: {
    fontSize: 14,
    fontWeight: '800',
    color: COLORS.blueIcon,
    marginTop: 5,
  },

  securityBadge: {
    marginTop: 40,
    backgroundColor: COLORS.blueSoft,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },

  securityIcon: {
    marginRight: 10,
  },

  securityShield: {
    width: 14,
    height: 16,
    borderWidth: 1.5,
    borderColor: COLORS.blueIcon,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },

  securityCheck: {
    width: 6,
    height: 4,
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderColor: COLORS.blueIcon,
    transform: [{rotate: '-45deg'}],
    marginTop: -2,
  },

  securityText: {
    fontSize: 10,
    color: COLORS.text,
    lineHeight: 15,
    textAlign: 'left',
  },

});