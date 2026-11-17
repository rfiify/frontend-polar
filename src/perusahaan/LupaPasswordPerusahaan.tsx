import React, { useState } from 'react';
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
  StatusBar,
} from 'react-native';

type Props = {
  navigation: any;
};

// Component for clear, recognizable bold arrows
const BoldArrow = ({ direction = 'left', color = '#062D47', size = 20 }: { direction?: 'left' | 'right', color?: string, size?: number }) => {
  const isRight = direction === 'right';
  return (
    <View style={[styles.arrowContainer, { width: size, height: size }, isRight && { transform: [{ rotate: '180deg' }] }]}>
      <View style={[styles.arrowLine, { backgroundColor: color, width: size * 0.8, height: size * 0.12 }]} />
      <View style={[styles.arrowHeadTop, { borderColor: color, borderTopWidth: size * 0.12, borderLeftWidth: size * 0.12, width: size * 0.35, height: size * 0.35, top: size * 0.28, left: size * 0.08 }]} />
      <View style={[styles.arrowHeadBottom, { borderColor: color, borderBottomWidth: size * 0.12, borderLeftWidth: size * 0.12, width: size * 0.35, height: size * 0.35, bottom: size * 0.3, left: size * 0.1 }]} />
    </View>
  );
};

export default function LupaPasswordPerusahaan({ navigation }: Props) {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (!email.trim()) {
      return;
    }

    navigation.navigate('VerifikasiOTPPerusahaan', {
      email: email.trim(),
    });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity
              style={styles.backButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>
              <BoldArrow direction="left" color="#062D47" size={26} />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Lupa Kata Sandi</Text>
          </View>

          <TouchableOpacity style={styles.profileIconCircle}>
            <View style={styles.profileIconInner}>
              <View style={styles.profileHead} />
              <View style={styles.profileBody} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled">

          <View style={styles.content}>
            {/* BADGE PEMULIHAN */}
            <View style={styles.topBadge}>
              <Text style={styles.topBadgeIcon}>🏢</Text>
              <Text style={styles.topBadgeText}>PEMULIHAN AKUN PERUSAHAAN</Text>
            </View>

            {/* ILLUSTRATION (Custom Reset Lock) */}
            <View style={styles.illustrationContainer}>
              <View style={styles.circleOuterest}>
                <View style={styles.circleOuter}>
                  <View style={styles.circleInner}>
                    <View style={styles.lockIllustration}>
                      {/* Circular Reset Arrow Arc */}
                      <View style={styles.resetCircle}>
                        <View style={styles.resetArrowHead} />
                      </View>
                      {/* Central Lock Icon */}
                      <View style={styles.lockIconBox}>
                        <View style={styles.lockShackleSmall} />
                        <View style={styles.lockBaseSmall} />
                      </View>
                    </View>
                  </View>
                  {/* Shield Check Badge */}
                  <View style={styles.shieldBadgeOuter}>
                    <View style={styles.shieldIconBox}>
                      <View style={styles.shieldShape} />
                      <Text style={styles.shieldCheckText}>✓</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* TEXT TITLES */}
            <Text style={styles.title}>Lupa Kata Sandi?</Text>
            <Text style={styles.subtitle}>
              Masukkan email resmi perusahaan yang terdaftar. Kami akan mengirimkan instruksi dan kode verifikasi pemulihan sandi.
            </Text>

            {/* FORM CARD */}
            <View style={styles.card}>
              <View style={styles.labelRow}>
                <Text style={styles.label}>Email Resmi Perusahaan</Text>
                <TouchableOpacity>
                  <Text style={styles.domainText}>Domain Resmi</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.inputWrapper}>
                <Text style={styles.inputIconText}>✉</Text>
                <TextInput
                  style={styles.input}
                  placeholder="hrd@perusahaan.co.id"
                  placeholderTextColor="#8A9BAA"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                />
              </View>

              <View style={styles.helperRow}>
                <View style={styles.infoIconCircle}>
                   <Text style={styles.infoText}>i</Text>
                </View>
                <Text style={styles.helperText}>
                  Kode OTP atau tautan pemulihan akan dikirimkan ke email resmi terdaftar.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.submitBtn}
                activeOpacity={0.8}
                onPress={handleContinue}>
                <View style={styles.submitBtnInner}>
                  <Text style={styles.submitBtnText}>Kirim Kode Verifikasi</Text>
                  <View style={{ marginLeft: 10 }}>
                    <BoldArrow direction="right" color="#FFFFFF" size={18} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* FOOTER ACTIONS */}
            <View style={styles.footerActions}>
              <Text style={styles.rememberText}>Sudah ingat kata sandi akun?</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.backLoginRow}
                onPress={() => navigation.goBack()}>
                <BoldArrow direction="left" color="#286184" size={18} />
                <Text style={styles.backLoginText}>Masuk Kembali</Text>
              </TouchableOpacity>
            </View>

            {/* SECURITY BADGE */}
            <View style={styles.securityBadge}>
               <Text style={styles.securityBadgeText}>
                 🏢 Mitra Industri Polinela • Enkripsi SSL 256-Bit
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
    backgroundColor: '#FFFFFF',
  },
  keyboard: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 40,
    backgroundColor: '#F8FAFC',
  },
  header: {
    height: Platform.OS === 'android' ? 70 + (StatusBar.currentHeight || 0) : 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 40,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
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
    borderTopLeftRadius: 2,
  },
  arrowHeadBottom: {
    position: 'absolute',
    transform: [{ rotate: '45deg' }],
    borderBottomLeftRadius: 2,
  },
  headerTitle: {
    color: '#062D47',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  profileIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#062D47',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileIconInner: {
    alignItems: 'center',
    marginTop: 4,
  },
  profileHead: {
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: '#FFF',
  },
  profileBody: {
    width: 22,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFF',
    marginTop: 1,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center',
  },
  topBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1EEF6',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 20,
  },
  topBadgeIcon: {
    fontSize: 12,
    marginRight: 6,
    color: '#286184',
  },
  topBadgeText: {
    color: '#286184',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  illustrationContainer: {
    marginBottom: 30,
    marginTop: 10,
  },
  circleOuterest: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#F1F8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleOuter: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#EBF4FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleInner: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: '#D1E8F7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIllustration: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resetCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 3.5,
    borderColor: '#062D47',
    borderTopColor: 'transparent',
    transform: [{ rotate: '45deg' }],
  },
  resetArrowHead: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#062D47',
    position: 'absolute',
    top: -4,
    left: 4,
    transform: [{ rotate: '-135deg' }],
  },
  lockIconBox: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockShackleSmall: {
    width: 11,
    height: 10,
    borderWidth: 2,
    borderColor: '#062D47',
    borderBottomWidth: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginBottom: -1,
  },
  lockBaseSmall: {
    width: 17,
    height: 12,
    backgroundColor: '#062D47',
    borderRadius: 2,
  },
  shieldBadgeOuter: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#062D47',
    borderWidth: 3.5,
    borderColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shieldIconBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shieldShape: {
    width: 16,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#FFF',
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    position: 'absolute',
  },
  shieldCheckText: {
    color: '#FFF',
    fontSize: 11,
    fontWeight: 'bold',
  },
  title: {
    color: '#062D47',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    color: '#596771',
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    color: '#062D47',
    fontSize: 14,
    fontWeight: 'bold',
  },
  domainText: {
    color: '#286184',
    fontSize: 12,
    fontWeight: 'bold',
  },
  inputWrapper: {
    height: 56,
    backgroundColor: '#EDF4FB',
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIconText: {
    color: '#8A9BAA',
    fontSize: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#062D47',
    fontSize: 15,
  },
  helperRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 12,
    marginBottom: 24,
  },
  infoIconCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1.2,
    borderColor: '#062D47',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginTop: 2,
  },
  infoText: {
    fontSize: 10,
    color: '#062D47',
    fontWeight: 'bold',
  },
  helperText: {
    flex: 1,
    color: '#596771',
    fontSize: 12,
    lineHeight: 18,
  },
  submitBtn: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#062D47',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerActions: {
    alignItems: 'center',
    marginTop: 32,
  },
  rememberText: {
    color: '#596771',
    fontSize: 14,
    marginBottom: 10,
  },
  backLoginRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backLoginText: {
    color: '#286184',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  securityBadge: {
    backgroundColor: '#EBF4FA',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 32,
  },
  securityBadgeText: {
    color: '#596771',
    fontSize: 11,
    fontWeight: '600',
  },
});
