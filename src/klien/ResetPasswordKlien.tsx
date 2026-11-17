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
  navyButton: '#173F5A',
  text: '#263E4D',
  textSecondary: '#596771',
  grey: '#7B8790',
  input: '#F3F7FB',
  border: '#E8EEF3',
  blueSoft: '#DCEFFC',
  blue: '#2B6B8E',
  cyan: '#DFF5F7',
};

export default function ResetPasswordKlien({navigation}: any) {
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasi, setShowKonfirmasi] = useState(false);

  // POPUP SUCCESS
  const [showSuccess, setShowSuccess] = useState(false);

  const hasMinLength = password.length >= 8;

  const hasUpperLower =
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password);

  const hasNumberOrSymbol =
    /[0-9!@#$%^&*(),.?":{}|<>_\-+=]/.test(password);

  const handleUpdate = () => {
    if (!password) {
      return;
    }

    if (!hasMinLength || !hasUpperLower || !hasNumberOrSymbol) {
      return;
    }

    if (!konfirmasiPassword) {
      return;
    }

    if (password !== konfirmasiPassword) {
      return;
    }

    /*
      UI ONLY

      Nanti bagian ini bisa disambungkan
      ke endpoint reset password backend.
    */

    setShowSuccess(true);
  };

  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
        translucent={false}
      />

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled">

          {/* =====================================================
              HEADER
          ===================================================== */}

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
              Verifikasi Akun
            </Text>

            {/* PROFILE ICON */}

            <View style={styles.profileCircle}>

              <View style={styles.profileHead} />

              <View style={styles.profileBody} />

            </View>

          </View>


          {/* =====================================================
              CONTENT
          ===================================================== */}

          <View style={styles.content}>

            {/* BADGE */}

            <View style={styles.badge}>

              <View style={styles.badgeIcon}>

                <View style={styles.badgeKeyTop} />

                <View style={styles.badgeKeyBody} />

              </View>

              <Text style={styles.badgeText}>
                PEMBARUAN KATA SANDI • POLAR KLIEN
              </Text>

            </View>


            {/* =================================================
                KEY ICON
            ================================================= */}

            <View style={styles.keyIconArea}>

              <View style={styles.keyOuterCircle}>

                <View style={styles.keyCircle}>

                  <View style={styles.keyRing}>

                    <View style={styles.keyHole} />

                  </View>

                  <View style={styles.keyStem} />

                  <View style={styles.keyToothOne} />

                  <View style={styles.keyToothTwo} />

                </View>

              </View>


              {/* SECURITY BADGE */}

              <View style={styles.securityMiniBadge}>

                <View style={styles.miniStar}>

                  <View
                    style={styles.miniStarHorizontal}
                  />

                  <View
                    style={styles.miniStarVertical}
                  />

                </View>

              </View>

            </View>


            {/* =================================================
                TITLE
            ================================================= */}

            <Text style={styles.mainTitle}>
              Buat Kata Sandi Baru
            </Text>


            <Text style={styles.description}>
              Buat kombinasi kata sandi baru yang kuat untuk
              menjaga keamanan akun bisnis, proyek, dan
              dana escrow Anda.
            </Text>


            {/* =================================================
                FORM CARD
            ================================================= */}

            <View style={styles.formCard}>

              {/* PASSWORD */}

              <View style={styles.fieldHeader}>

                <Text style={styles.fieldLabel}>
                  Kata Sandi Baru
                </Text>

                <Text style={styles.checkingText}>
                  {password.length > 0
                    ? 'Memeriksa...'
                    : ''}
                </Text>

              </View>


              {/* PASSWORD INPUT */}

              <View style={styles.inputWrapper}>

                <View style={styles.lockIcon}>

                  <View style={styles.lockShackle} />

                  <View style={styles.lockBody}>

                    <View style={styles.lockHole} />

                  </View>

                </View>


                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Minimal 8 karakter unik"
                  placeholderTextColor="#858F98"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  style={styles.passwordInput}
                />


                {/* EYE */}

                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowPassword(!showPassword)
                  }>

                  <View style={styles.eyeOuter}>

                    <View style={styles.eyeInner} />

                  </View>

                </TouchableOpacity>

              </View>


              {/* PASSWORD STRENGTH */}

              <View style={styles.strengthTrack}>

                <View
                  style={[
                    styles.strengthFill,
                    {
                      width:
                        password.length === 0
                          ? '0%'
                          : hasMinLength &&
                            hasUpperLower &&
                            hasNumberOrSymbol
                          ? '100%'
                          : password.length >= 5
                          ? '60%'
                          : '30%',
                    },
                  ]}
                />

              </View>


              {/* REQUIREMENTS */}

              <View style={styles.requirements}>

                <Requirement
                  text="Minimal 8 karakter"
                  valid={hasMinLength}
                />

                <Requirement
                  text="Kombinasi huruf besar & kecil (A-Z)"
                  valid={hasUpperLower}
                />

                <Requirement
                  text="Memuat angka (0-9) atau simbol unik (@$!#)"
                  valid={hasNumberOrSymbol}
                />

              </View>


              {/* CONFIRM PASSWORD */}

              <Text style={styles.confirmLabel}>
                Konfirmasi Kata Sandi Baru
              </Text>


              <View style={styles.inputWrapper}>

                <View style={styles.repeatIcon}>

                  <View style={styles.repeatCircle} />

                  <View style={styles.repeatArrow} />

                </View>


                <TextInput
                  value={konfirmasiPassword}
                  onChangeText={setKonfirmasiPassword}
                  placeholder="Ulangi kata sandi baru"
                  placeholderTextColor="#858F98"
                  secureTextEntry={!showKonfirmasi}
                  autoCapitalize="none"
                  style={styles.passwordInput}
                />


                {/* EYE */}

                <TouchableOpacity
                  style={styles.eyeButton}
                  activeOpacity={0.7}
                  onPress={() =>
                    setShowKonfirmasi(!showKonfirmasi)
                  }>

                  <View style={styles.eyeOuter}>

                    <View style={styles.eyeInner} />

                  </View>

                </TouchableOpacity>

              </View>


              {/* INFO */}

              <View style={styles.infoBox}>

                <View style={styles.infoCircle}>

                  <Text style={styles.infoText}>
                    i
                  </Text>

                </View>


                <Text style={styles.infoDescription}>
                  Pastikan kata sandi baru berbeda dari kata
                  sandi sebelumnya untuk keamanan optimal
                  seluruh kontrak proyek POLAR Anda.
                </Text>

              </View>


              {/* UPDATE BUTTON */}

              <TouchableOpacity
                style={styles.updateButton}
                activeOpacity={0.85}
                onPress={handleUpdate}>

                <Text style={styles.updateButtonText}>
                  Perbarui Kata Sandi
                </Text>

                <View style={styles.buttonArrow}>

                  <View
                    style={styles.buttonArrowLine}
                  />

                  <View
                    style={styles.buttonArrowHead}
                  />

                </View>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>

      </KeyboardAvoidingView>


      {/* ========================================================
          SUCCESS POPUP
      ======================================================== */}

      <Modal
        transparent
        visible={showSuccess}
        animationType="fade"
        onRequestClose={() =>
          setShowSuccess(false)
        }>

        <View style={styles.modalOverlay}>

          <View style={styles.modalCard}>

            {/* SUCCESS ICON */}

            <View style={styles.successIconCircle}>

              <Text style={styles.successCheck}>
                ✓
              </Text>

            </View>


            {/* TITLE */}

            <Text style={styles.modalTitle}>
              Kata Sandi Berhasil Diperbarui
            </Text>


            {/* DESCRIPTION */}

            <Text style={styles.modalDescription}>
              Kata sandi akun Klien Anda telah aktif.
              Silakan masuk kembali menggunakan kredensial
              baru Anda untuk melanjutkan pengelolaan proyek
              & escrow.
            </Text>


            {/* LOGIN BUTTON */}

            <TouchableOpacity
              style={styles.modalButton}
              activeOpacity={0.85}
              onPress={() => {

                setShowSuccess(false);

                navigation.navigate(
                  'LoginKlien',
                );

              }}>

              <Text style={styles.modalButtonText}>
                Masuk ke Akun Klien
              </Text>

              <Text style={styles.modalArrow}>
                →
              </Text>

            </TouchableOpacity>


            {/* FOOTER */}

            <Text style={styles.modalFooter}>
              ♢ Enkripsi SSL 256-Bit • Rekening Escrow Terlindungi
            </Text>

          </View>

        </View>

      </Modal>

    </SafeAreaView>
  );
}


/* =========================================================
   REQUIREMENT COMPONENT
========================================================= */

function Requirement({
  text,
  valid,
}: {
  text: string;
  valid: boolean;
}) {
  return (
    <View style={styles.requirementRow}>

      <View
        style={[
          styles.requirementCircle,
          valid &&
            styles.requirementCircleValid,
        ]}>

        <View
          style={[
            styles.requirementCheck,
            valid &&
              styles.requirementCheckValid,
          ]}
        />

      </View>


      <Text
        style={[
          styles.requirementText,
          valid &&
            styles.requirementTextValid,
        ]}>

        {text}

      </Text>

    </View>
  );
}


/* =========================================================
   STYLES
========================================================= */

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
    paddingBottom: 35,
  },

  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },


  /* =====================================================
     HEADER
  ===================================================== */

  header: {
    height: 100,
    paddingTop: 32,
    paddingHorizontal: 18,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#E7EDF2',
  },

  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },

  backArrow: {
    width: 22,
    height: 22,
    justifyContent: 'center',
  },

  backArrowLine: {
    width: 19,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
    marginLeft: 2,
  },

  backArrowTop: {
    position: 'absolute',
    width: 10,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
    left: 1,
    top: 6,
    transform: [{rotate: '-45deg'}],
  },

  backArrowBottom: {
    position: 'absolute',
    width: 10,
    height: 2,
    backgroundColor: COLORS.navy,
    borderRadius: 1,
    left: 1,
    bottom: 6,
    transform: [{rotate: '45deg'}],
  },

  headerTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.navy,
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
    borderRadius: 5,
    backgroundColor: COLORS.white,
    marginTop: 3,
  },

  profileBody: {
    width: 16,
    height: 9,
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
    backgroundColor: COLORS.white,
    marginTop: 2,
  },


  /* =====================================================
     BADGE
  ===================================================== */

  badge: {
    marginTop: 12,
    backgroundColor: COLORS.blueSoft,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  badgeIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  badgeKeyTop: {
    width: 7,
    height: 5,
    borderWidth: 1.2,
    borderColor: COLORS.blue,
    borderRadius: 3,
    position: 'absolute',
    top: 1,
  },

  badgeKeyBody: {
    width: 10,
    height: 2,
    backgroundColor: COLORS.blue,
    transform: [{rotate: '45deg'}],
    marginTop: 5,
  },

  badgeText: {
    fontSize: 9.5,
    color: COLORS.blue,
    fontWeight: '800',
    letterSpacing: 0.25,
  },


  /* =====================================================
     KEY ICON
  ===================================================== */

  keyIconArea: {
    marginTop: 17,
    position: 'relative',
  },

  keyOuterCircle: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#DCEFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  keyCircle: {
    width: 53,
    height: 53,
    borderRadius: 27,
    backgroundColor: COLORS.navy,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  keyRing: {
    width: 17,
    height: 17,
    borderRadius: 9,
    borderWidth: 2.2,
    borderColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -13,
  },

  keyHole: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: COLORS.white,
  },

  keyStem: {
    position: 'absolute',
    width: 21,
    height: 3,
    backgroundColor: COLORS.white,
    left: 24,
    top: 25,
    borderRadius: 2,
    transform: [{rotate: '-5deg'}],
  },

  keyToothOne: {
    position: 'absolute',
    width: 5,
    height: 6,
    backgroundColor: COLORS.white,
    left: 39,
    top: 27,
  },

  keyToothTwo: {
    position: 'absolute',
    width: 5,
    height: 6,
    backgroundColor: COLORS.white,
    left: 44,
    top: 25,
  },

  securityMiniBadge: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    right: -4,
    bottom: 0,
    borderWidth: 2,
    borderColor: '#8DE1E1',
    justifyContent: 'center',
    alignItems: 'center',
  },

  miniStar: {
    width: 9,
    height: 9,
    borderWidth: 1,
    borderColor: '#58C8CC',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  miniStarHorizontal: {
    position: 'absolute',
    width: 7,
    height: 1,
    backgroundColor: '#58C8CC',
  },

  miniStarVertical: {
    position: 'absolute',
    width: 1,
    height: 7,
    backgroundColor: '#58C8CC',
  },


  /* =====================================================
     TITLE
  ===================================================== */

  mainTitle: {
    marginTop: 12,
    color: COLORS.navy,
    fontSize: 21,
    fontWeight: '800',
    textAlign: 'center',
  },

  description: {
    marginTop: 5,
    color: '#4F5961',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 14,
  },


  /* =====================================================
     FORM CARD
  ===================================================== */

  formCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingTop: 17,
    paddingBottom: 16,
    marginTop: 17,
    borderWidth: 1,
    borderColor: '#EDF1F4',
  },

  fieldHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  fieldLabel: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '800',
  },

  checkingText: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '600',
  },


  /* =====================================================
     INPUT
  ===================================================== */

  inputWrapper: {
    height: 48,
    borderRadius: 9,
    backgroundColor: COLORS.input,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  passwordInput: {
    flex: 1,
    color: COLORS.navy,
    fontSize: 14,
    paddingVertical: 0,
    marginLeft: 9,
  },


  /* =====================================================
     LOCK
  ===================================================== */

  lockIcon: {
    width: 18,
    height: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  lockShackle: {
    width: 10,
    height: 8,
    borderWidth: 2,
    borderColor: '#59636A',
    borderBottomWidth: 0,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  lockBody: {
    width: 14,
    height: 11,
    borderRadius: 2,
    backgroundColor: '#59636A',
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockHole: {
    width: 3,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.white,
  },


  /* =====================================================
     EYE
  ===================================================== */

  eyeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  eyeOuter: {
    width: 19,
    height: 12,
    borderWidth: 1.7,
    borderColor: '#68737A',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  eyeInner: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#68737A',
  },


  /* =====================================================
     STRENGTH
  ===================================================== */

  strengthTrack: {
    height: 5,
    backgroundColor: '#DCEFFC',
    borderRadius: 3,
    marginTop: 11,
    overflow: 'hidden',
  },

  strengthFill: {
    height: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: 3,
  },


  /* =====================================================
     REQUIREMENTS
  ===================================================== */

  requirements: {
    marginTop: 12,
    gap: 6,
  },

  requirementRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  requirementCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    borderWidth: 1.4,
    borderColor: '#7D8990',
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },

  requirementCircleValid: {
    borderColor: COLORS.blue,
  },

  requirementCheck: {
    width: 5,
    height: 3,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#7D8990',
    transform: [{rotate: '-45deg'}],
    marginTop: -1,
  },

  requirementCheckValid: {
    borderColor: COLORS.blue,
  },

  requirementText: {
    color: '#59636A',
    fontSize: 12,
    lineHeight: 16,
  },

  requirementTextValid: {
    color: '#43545E',
  },


  /* =====================================================
     CONFIRM
  ===================================================== */

  confirmLabel: {
    color: COLORS.navy,
    fontSize: 14,
    fontWeight: '800',
    marginTop: 16,
    marginBottom: 9,
  },

  repeatIcon: {
    width: 18,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  repeatCircle: {
    width: 13,
    height: 13,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#59636A',
    borderTopColor: 'transparent',
  },

  repeatArrow: {
    width: 6,
    height: 6,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderColor: '#59636A',
    position: 'absolute',
    top: 1,
    left: 2,
    transform: [{rotate: '-15deg'}],
  },


  /* =====================================================
     INFO
  ===================================================== */

  infoBox: {
    marginTop: 14,
    backgroundColor: '#DCEEFF',
    borderRadius: 9,
    paddingHorizontal: 11,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  infoCircle: {
    width: 17,
    height: 17,
    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: COLORS.blue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginRight: 9,
  },

  infoText: {
    color: COLORS.blue,
    fontSize: 11,
    fontWeight: '800',
  },

  infoDescription: {
    flex: 1,
    color: '#53616A',
    fontSize: 11.5,
    lineHeight: 17,
  },


  /* =====================================================
     UPDATE BUTTON
  ===================================================== */

  updateButton: {
    height: 48,
    borderRadius: 10,
    backgroundColor: COLORS.navyButton,
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.12,
    shadowRadius: 3,
    elevation: 3,
  },

  updateButtonText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '800',
  },

  buttonArrow: {
    width: 17,
    height: 17,
    marginLeft: 9,
    justifyContent: 'center',
  },

  buttonArrowLine: {
    width: 14,
    height: 2,
    backgroundColor: COLORS.white,
    borderRadius: 1,
  },

  buttonArrowHead: {
    width: 7,
    height: 7,
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderColor: COLORS.white,
    position: 'absolute',
    right: 0,
    transform: [{rotate: '45deg'}],
  },


  /* =====================================================
     SUCCESS MODAL OVERLAY
  ===================================================== */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 35, 52, 0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },


  /* =====================================================
     SUCCESS MODAL CARD
  ===================================================== */

  modalCard: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 18,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 12,
  },


  /* =====================================================
     SUCCESS ICON
  ===================================================== */

  successIconCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#E4F3FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 8,
  },

  successCheck: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#2B6689',
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
    lineHeight: 31,
    overflow: 'hidden',
  },


  /* =====================================================
     MODAL TITLE
  ===================================================== */

  modalTitle: {
    color: COLORS.navy,
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 8,
  },


  /* =====================================================
     MODAL DESCRIPTION
  ===================================================== */

  modalDescription: {
    color: '#596771',
    fontSize: 11.5,
    lineHeight: 17,
    textAlign: 'center',
    paddingHorizontal: 5,
    marginBottom: 15,
  },


  /* =====================================================
     MODAL BUTTON
  ===================================================== */

  modalButton: {
    width: '100%',
    height: 44,
    borderRadius: 9,
    backgroundColor: COLORS.navyButton,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },

  modalButtonText: {
    color: COLORS.white,
    fontSize: 13,
    fontWeight: '800',
  },

  modalArrow: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: '400',
    marginLeft: 8,
    marginTop: -2,
  },


  /* =====================================================
     MODAL FOOTER
  ===================================================== */

  modalFooter: {
    color: '#6C767D',
    fontSize: 8.5,
    textAlign: 'center',
    marginTop: 12,
  },

});