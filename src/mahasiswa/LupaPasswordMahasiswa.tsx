    import React, {useState} from 'react';
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
      Image,
    } from 'react-native';

    type Props = {
      navigation: any;
    };

    export default function LupaPasswordMahasiswa({navigation}: Props) {
      const [method, setMethod] = useState<'email' | 'whatsapp'>('email');
      const [email, setEmail] = useState('');
      const [whatsapp, setWhatsapp] = useState('');

const handleContinue = () => {
  if (method === 'email') {
    navigation.navigate('VerifikasiOTPLupaPasswordMahasiswa', {
      email: email.trim(),
      method: 'email',
    });
  } else {
    navigation.navigate('VerifikasiOTPLupaPasswordMahasiswa', {
      whatsapp: whatsapp.trim(),
      method: 'whatsapp',
    });
  }
};

      return (
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.container}>

              {/* ================= HEADER ================= */}
<View style={styles.header}>
  <View style={styles.headerLeft}>
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
      activeOpacity={0.7}
    >
      <Text style={styles.backText}>‹</Text>
    </TouchableOpacity>

    <Text style={styles.headerTitle}>Lupa Kata Sandi</Text>
  </View>

  <View style={styles.profileCircle}>
    <Text style={styles.profileIcon}>♙</Text>
  </View>
</View>

              {/* ================= CONTENT ================= */}
              <View style={styles.content}>

                {/* ================= LOGO RESET PASSWORD ================= */}
                <View style={styles.resetLogoContainer}>
                  <Image
                    source={require('../assets/reset_password_icon.png')}
                    style={styles.resetLogo}
                    resizeMode="contain"
                  />
                </View>

                {/* ================= BADGE ================= */}
                <View style={styles.badgeContainer}>
                  <Text style={styles.badge}>
                    ♙ Pemulihan Akun Mahasiswa
                  </Text>
                </View>

                {/* ================= TITLE ================= */}
                <Text style={styles.title}>
                  Lupa Kata Sandi?
                </Text>

                {/* ================= SUBTITLE ================= */}
                <Text style={styles.subtitle}>
                  Masukkan Email Kampus Polinela atau NIM Anda.
                  {'\n'}
                  Kami akan mengirimkan instruksi dan tautan verifikasi
                  {'\n'}
                  untuk membuat kata sandi baru.
                </Text>

                {/* ================= CARD ================= */}
                <View style={styles.card}>

                  {/* ================= TAB ================= */}
                  <View style={styles.tabContainer}>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setMethod('email')}
                      style={[
                        styles.tab,
                        method === 'email' && styles.activeTab,
                      ]}>
                      <Text
                        style={[
                          styles.tabText,
                          method === 'email' && styles.activeTabText,
                        ]}>
                        Email Kampus
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setMethod('whatsapp')}
                      style={[
                        styles.tab,
                        method === 'whatsapp' && styles.activeTab,
                      ]}>
                      <Text
                        style={[
                          styles.tabText,
                          method === 'whatsapp' && styles.activeTabText,
                        ]}>
                        WhatsApp / SMS
                      </Text>
                    </TouchableOpacity>

                  </View>

                  {/* ================= EMAIL ================= */}
                  {method === 'email' ? (
                    <View>

                      <Text style={styles.label}>
                        Email Kampus atau NIM
                      </Text>

                      <View style={styles.inputWrapper}>
                        <Text style={styles.inputIcon}>
                          ✉
                        </Text>

                        <TextInput
                          style={styles.input}
                          placeholder="contoh: 21753001@polinela.ac.id"
                          placeholderTextColor="#8A9AAA"
                          value={email}
                          onChangeText={setEmail}
                          keyboardType="email-address"
                          autoCapitalize="none"
                        />
                      </View>

                      <View style={styles.helperRow}>
                        <Text style={styles.helperIcon}>
                          ⓘ
                        </Text>

                        <Text style={styles.helperText}>
                          Tautan verifikasi pemulihan kata sandi akan
                          dikirimkan ke email kampus resmi Anda.
                        </Text>
                      </View>

                    </View>
                  ) : (

                    /* ================= WHATSAPP ================= */
                    <View>

                      <Text style={styles.label}>
                        Nomor WhatsApp Terdaftar
                      </Text>

                      <View style={styles.inputWrapper}>
                        <Text style={styles.inputIcon}>
                          ▯
                        </Text>

                        <TextInput
                          style={styles.input}
                          placeholder="contoh: 081234567890"
                          placeholderTextColor="#8A9AAA"
                          value={whatsapp}
                          onChangeText={setWhatsapp}
                          keyboardType="phone-pad"
                        />
                      </View>

                      <View style={styles.helperRow}>
                        <Text style={styles.helperIcon}>
                          ⓘ
                        </Text>

                        <Text style={styles.helperText}>
                          Kode OTP 6-digit verifikasi pemulihan akan
                          dikirimkan ke nomor ini via WhatsApp.
                        </Text>
                      </View>

                    </View>
                  )}

                  {/* ================= BUTTON ================= */}
                  <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.8}
                    onPress={handleContinue}>

                    <Text style={styles.buttonText}>
                      Kirim Instruksi Pemulihan
                    </Text>

                    <Text style={styles.arrow}>
                      →
                    </Text>

                  </TouchableOpacity>

                </View>

                {/* ================= BACK LOGIN ================= */}
                <TouchableOpacity
                  style={styles.backLogin}
                  activeOpacity={0.7}
                  onPress={() => navigation.goBack()}>

                  <Text style={styles.backLoginText}>
                    Sudah ingat kata sandi?{' '}
                    <Text style={styles.loginBold}>
                      Masuk Kembali
                    </Text>
                  </Text>

                </TouchableOpacity>

                {/* ================= SECURITY ================= */}
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

      /* =====================================================
         SAFE AREA
      ===================================================== */

      safeArea: {
        flex: 1,
        backgroundColor: '#F4F8FC',
      },

      container: {
        flexGrow: 1,
        paddingBottom: 50,
      },

      /* =====================================================
         HEADER
      ===================================================== */

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
        fontSize: 19,
      },

      /* =====================================================
         CONTENT
      ===================================================== */

      content: {
        paddingHorizontal: 18,
        paddingTop: 34,
      },

      /* =====================================================
         LOGO RESET PASSWORD
      ===================================================== */

      resetLogoContainer: {
        alignItems: 'center',
        justifyContent: 'center',

        /*
          Diturunkan supaya tidak terlalu dekat
          dengan header.
        */
        marginTop: 8,

        /*
          Jarak logo ke badge diperbesar.
        */
        marginBottom: 22,
      },

      resetLogo: {
        /*
          Logo dibuat lebih besar.
        */
        width: 150,
        height: 150,
      },

      /* =====================================================
         BADGE
      ===================================================== */

      badgeContainer: {
        alignItems: 'center',
        marginBottom: 12,
      },

      badge: {
        backgroundColor: '#DCEEFF',
        borderRadius: 14,
        paddingHorizontal: 12,
        paddingVertical: 6,
        color: '#285C7C',
        fontSize: 10,
        fontWeight: '700',
      },

      /* =====================================================
         TITLE
      ===================================================== */

      title: {
        color: '#062D47',

        /*
          Dibesarkan.
        */
        fontSize: 29,

        fontWeight: '800',
        textAlign: 'center',

        /*
          Jarak dengan badge.
        */
        marginTop: 0,
        marginBottom: 7,
      },

      subtitle: {
        color: '#53616E',
        fontSize: 13,
        lineHeight: 19,
        textAlign: 'center',

        /*
          Card ikut turun.
        */
        marginBottom: 23,
      },

      /* =====================================================
         CARD
      ===================================================== */

      card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        paddingHorizontal: 12,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#E2EAF1',
      },

      /* =====================================================
         TAB
      ===================================================== */

      tabContainer: {
        height: 42,
        backgroundColor: '#EAF4FF',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 4,
        marginBottom: 17,
      },

      tab: {
        flex: 1,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
      },

      activeTab: {
        backgroundColor: '#174766',
      },

      tabText: {
        color: '#334552',
        fontSize: 10,
        fontWeight: '500',
      },

      activeTabText: {
        color: '#FFFFFF',
        fontWeight: '700',
      },

      /* =====================================================
         INPUT
      ===================================================== */

      label: {
        color: '#172F42',
        fontSize: 12,
        fontWeight: '700',
        marginBottom: 7,
      },

      inputWrapper: {
        height: 50,
        backgroundColor: '#EAF4FF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
      },

      inputIcon: {
        fontSize: 16,
        color: '#657B8D',
        width: 27,
        textAlign: 'center',
      },

      input: {
        flex: 1,
        color: '#172F42',
        fontSize: 12,
      },

      /* =====================================================
         HELPER
      ===================================================== */

      helperRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginTop: 7,
        marginBottom: 17,
      },

      helperIcon: {
        color: '#286184',
        fontSize: 10,
        marginRight: 5,
        marginTop: 1,
      },

      helperText: {
        flex: 1,
        color: '#647583',
        fontSize: 9,
        lineHeight: 13,
      },

      /* =====================================================
         BUTTON
      ===================================================== */

      button: {
        height: 48,
        borderRadius: 9,
        backgroundColor: '#00314D',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },

      buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: '800',
      },

      arrow: {
        color: '#FFFFFF',
        fontSize: 19,
        marginLeft: 7,
      },

      /* =====================================================
         BACK LOGIN
      ===================================================== */

      backLogin: {
        alignItems: 'center',
        marginTop: 20,
      },

      backLoginText: {
        color: '#53616E',
        fontSize: 11,
      },

      loginBold: {
        color: '#0D4568',
        fontWeight: '800',
      },

      /* =====================================================
         SECURITY
      ===================================================== */

      securityBadge: {
        alignSelf: 'center',
        backgroundColor: '#E7F2FC',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginTop: 10,
      },

      securityText: {
        color: '#617789',
        fontSize: 8,
        fontWeight: '500',
      },
    });