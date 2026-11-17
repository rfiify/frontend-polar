import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

type Props = {
  navigation: any;
};

const RegistrasiPerusahaanScreen = ({navigation}: Props) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showKonfirmasiPassword, setShowKonfirmasiPassword] =
    useState(false);

  const [setuju, setSetuju] = useState(false);

  const handleDaftar = () => {
    if (!nama.trim()) {
      Alert.alert(
        'Nama Kosong',
        'Silakan masukkan nama penanggung jawab.',
      );
      return;
    }

    if (!email.trim()) {
      Alert.alert(
        'Email Kosong',
        'Silakan masukkan email perusahaan.',
      );
      return;
    }

    if (!password) {
      Alert.alert(
        'Password Kosong',
        'Silakan masukkan kata sandi.',
      );
      return;
    }

    if (password.length < 8) {
      Alert.alert(
        'Password Terlalu Pendek',
        'Kata sandi minimal 8 karakter.',
      );
      return;
    }

    if (password !== konfirmasiPassword) {
      Alert.alert(
        'Password Tidak Sama',
        'Konfirmasi password harus sama dengan password.',
      );
      return;
    }

    if (!setuju) {
      Alert.alert(
        'Persetujuan Diperlukan',
        'Silakan menyetujui ketentuan layanan POLAR.',
      );
      return;
    }

    // Sementara UI/navigation saja.
     navigation.navigate('VerifikasiOTPRegistrasiPerusahaan', {
       email: email.trim(),
     });
   };

   return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <View style={styles.header}>

          <View style={styles.headerLeft}>

            {/* BACK */}
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
              activeOpacity={0.7}>
              <Text style={styles.backArrow}>‹</Text>
            </TouchableOpacity>

            {/* LOGO POLAR */}
            <View style={styles.logoRow}>

              {/* KOTAK LOGO P */}
              <View style={styles.logoBox}>
                <Text style={styles.logoP}>P</Text>
              </View>

              <Text style={styles.logoText}>
                POLAR
              </Text>

            </View>

          </View>

        </View>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <View style={styles.content}>

          {/* TITLE */}
          <Text style={styles.title}>
            Daftar Akun Perusahaan
          </Text>

          <Text style={styles.subtitle}>
            Buat akun perusahaan untuk bergabung dengan
          </Text>

          <Text style={styles.subtitle}>
            POLAR.
          </Text>

          {/* ================================================= */}
          {/* FORM CARD */}
          {/* ================================================= */}

          <View style={styles.formCard}>

            {/* ================= NAMA ================= */}

            <Text style={styles.label}>
              Nama Penanggung Jawab
            </Text>

            <View style={styles.inputWrapper}>

              {/* ICON ORANG */}
              <View style={styles.personIcon}>
                <View style={styles.personHead} />
                <View style={styles.personBody} />
              </View>

              <TextInput
                style={styles.input}
                value={nama}
                onChangeText={setNama}
                placeholder="Masukkan nama lengkap"
                placeholderTextColor="#7D8B98"
                autoCapitalize="words"
              />

            </View>

            {/* ================= EMAIL ================= */}

            <Text style={styles.label}>
              Email Perusahaan
            </Text>

            <View style={styles.inputWrapper}>

              {/* ICON EMAIL */}
              <View style={styles.mailIcon}>
                <View style={styles.mailBox}>
                  <View style={styles.mailLeft} />
                  <View style={styles.mailRight} />
                </View>
              </View>

              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="nama@perusahaan.com"
                placeholderTextColor="#7D8B98"
                keyboardType="email-address"
                autoCapitalize="none"
              />

            </View>

            {/* ================= PASSWORD ================= */}

            <Text style={styles.label}>
              Password
            </Text>

            <View style={styles.inputWrapper}>

              {/* ICON GEMBOK */}
              <View style={styles.lockIcon}>
                <View style={styles.lockShackle} />

                <View style={styles.lockBody}>
                  <View style={styles.lockKeyhole} />
                </View>
              </View>

              <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="Buat kata sandi"
                placeholderTextColor="#7D8B98"
                secureTextEntry={!showPassword}
              />

              {/* EYE */}
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() =>
                  setShowPassword(!showPassword)
                }
                activeOpacity={0.7}>

                <View style={styles.eyeIcon}>
                  <View style={styles.eyePupil} />

                  {!showPassword && (
                    <View style={styles.eyeSlash} />
                  )}
                </View>

              </TouchableOpacity>

            </View>

            {/* PASSWORD HELPER */}
            <View style={styles.helperRow}>

              <Text style={styles.helperIcon}>
                ⓘ
              </Text>

              <Text style={styles.helperText}>
                Gunakan kata sandi yang kuat dan mudah Anda ingat.
              </Text>

            </View>

            {/* ================= KONFIRMASI ================= */}

            <Text style={styles.label}>
              Konfirmasi Password
            </Text>

            <View style={styles.inputWrapper}>

              {/* ICON GEMBOK */}
              <View style={styles.lockIcon}>
                <View style={styles.lockShackle} />

                <View style={styles.lockBody}>
                  <View style={styles.lockKeyhole} />
                </View>
              </View>

              <TextInput
                style={styles.input}
                value={konfirmasiPassword}
                onChangeText={setKonfirmasiPassword}
                placeholder="Masukkan ulang kata sandi"
                placeholderTextColor="#7D8B98"
                secureTextEntry={!showKonfirmasiPassword}
              />

              {/* EYE */}
              <TouchableOpacity
                style={styles.eyeButton}
                onPress={() =>
                  setShowKonfirmasiPassword(
                    !showKonfirmasiPassword,
                  )
                }
                activeOpacity={0.7}>

                <View style={styles.eyeIcon}>
                  <View style={styles.eyePupil} />

                  {!showKonfirmasiPassword && (
                    <View style={styles.eyeSlash} />
                  )}
                </View>

              </TouchableOpacity>

            </View>

          </View>

          {/* ================================================= */}
          {/* AGREEMENT */}
          {/* ================================================= */}

          <TouchableOpacity
            style={styles.agreementRow}
            onPress={() => setSetuju(!setuju)}
            activeOpacity={0.7}>

            <View
              style={[
                styles.checkbox,
                setuju && styles.checkboxChecked,
              ]}>

              {setuju && (
                <Text style={styles.checkMark}>
                  ✓
                </Text>
              )}

            </View>

            <Text style={styles.agreementText}>
              Saya menyetujui{' '}
              <Text style={styles.boldText}>
                Ketentuan Layanan POLAR
              </Text>{' '}
              serta{' '}
              <Text style={styles.boldText}>
                kebijakan privasi
              </Text>{' '}
              data mitra vokasi Polinela.
            </Text>

          </TouchableOpacity>

          {/* ================================================= */}
          {/* BUTTON */}
          {/* ================================================= */}

          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleDaftar}
            activeOpacity={0.8}>

            <Text style={styles.registerButtonText}>
              Daftar Sekarang
            </Text>

          </TouchableOpacity>

          {/* ================================================= */}
          {/* LOGIN */}
          {/* ================================================= */}

          <View style={styles.loginRow}>

            <Text style={styles.loginText}>
              Sudah memiliki akun?{' '}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginPerusahaan')
              }
              activeOpacity={0.7}>

              <Text style={styles.loginLink}>
                Masuk
              </Text>

            </TouchableOpacity>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  /* ================================================= */
  /* SCREEN */
  /* ================================================= */

  safeArea: {
    flex: 1,
    backgroundColor: '#F3F7FC',
  },

  scroll: {
    flex: 1,
  },

  container: {
    flexGrow: 1,
    paddingBottom: 35,
  },

  /* ================================================= */
  /* HEADER */
  /* ================================================= */

  header: {
    height: 92,

    backgroundColor: '#FFFFFF',

    borderBottomWidth: 1,
    borderBottomColor: '#E1E7ED',

    justifyContent: 'flex-end',

    paddingHorizontal: 25,

    /*
     * Dibuat lebih turun supaya tidak menempel
     * dengan jam/status bar.
     */
    paddingBottom: 14,
    paddingTop: 30,
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  /* ================================================= */
  /* BACK */
  /* ================================================= */

  backButton: {
    width: 32,
    height: 38,

    justifyContent: 'center',
    alignItems: 'flex-start',

    marginRight: 12,
  },

  backArrow: {
    fontSize: 36,

    lineHeight: 38,

    color: '#062D47',

    fontWeight: '300',
  },

  /* ================================================= */
  /* LOGO */
  /* ================================================= */

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 29,
    height: 29,

    borderRadius: 8,

    backgroundColor: '#063C59',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 7,
  },

  logoP: {
    color: '#FFFFFF',

    fontSize: 18,

    fontWeight: '900',

    lineHeight: 21,
  },

  logoText: {
    color: '#062D47',

    fontSize: 20,

    fontWeight: '800',

    letterSpacing: 0.3,
  },

  /* ================================================= */
  /* CONTENT */
  /* ================================================= */

  content: {
    paddingHorizontal: 25,

    paddingTop: 15,
  },

  title: {
    fontSize: 23,

    lineHeight: 29,

    fontWeight: '800',

    color: '#092C43',

    marginBottom: 3,
  },

  subtitle: {
    fontSize: 13,

    lineHeight: 19,

    color: '#53616D',
  },

  /* ================================================= */
  /* FORM */
  /* ================================================= */

 formCard: {
   backgroundColor: '#FFFFFF',
   borderRadius: 14,
   paddingHorizontal: 13,
   paddingTop: 15,
   paddingBottom: 12,
   marginTop: 14,
 },


  label: {
    fontSize: 12.5,

    lineHeight: 17,

    fontWeight: '700',

    color: '#092C43',

    marginBottom: 6,
  },

  /* ================================================= */
  /* INPUT */
  /* ================================================= */

  inputWrapper: {
    height: 40,

    backgroundColor: '#E4EFFB',

    borderRadius: 8,

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 12,

    marginBottom: 12,
  },

  input: {
    flex: 1,

    height: 40,

    paddingVertical: 0,

    marginLeft: 9,

    fontSize: 13,

    color: '#092C43',
  },

  /* ================================================= */
  /* PERSON ICON */
  /* ================================================= */

  personIcon: {
    width: 18,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  personHead: {
    width: 7,
    height: 7,

    borderWidth: 1.4,

    borderColor: '#4B5965',

    borderRadius: 4,

    marginBottom: 2,
  },

  personBody: {
    width: 13,
    height: 8,

    borderWidth: 1.4,

    borderColor: '#4B5965',

    borderTopLeftRadius: 8,

    borderTopRightRadius: 8,

    borderBottomWidth: 0,
  },

  /* ================================================= */
  /* EMAIL ICON */
  /* ================================================= */

  mailIcon: {
    width: 18,
    height: 18,

    justifyContent: 'center',
    alignItems: 'center',
  },

  mailBox: {
    width: 17,
    height: 12,

    borderWidth: 1.4,

    borderColor: '#4B5965',

    borderRadius: 2,

    position: 'relative',

    overflow: 'hidden',
  },

  mailLeft: {
    position: 'absolute',

    width: 10,
    height: 1.3,

    backgroundColor: '#4B5965',

    top: 3,

    left: -1,

    transform: [
      {
        rotate: '32deg',
      },
    ],
  },

  mailRight: {
    position: 'absolute',

    width: 10,
    height: 1.3,

    backgroundColor: '#4B5965',

    top: 3,

    right: -1,

    transform: [
      {
        rotate: '-32deg',
      },
    ],
  },

  /* ================================================= */
  /* LOCK ICON */
  /* ================================================= */

  lockIcon: {
    width: 18,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  lockShackle: {
    position: 'absolute',

    width: 10,
    height: 9,

    borderWidth: 1.5,

    borderColor: '#4B5965',

    borderBottomWidth: 0,

    borderTopLeftRadius: 6,

    borderTopRightRadius: 6,

    top: 0,
  },

  lockBody: {
    position: 'absolute',

    width: 15,
    height: 11,

    backgroundColor: '#4B5965',

    borderRadius: 2,

    bottom: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  lockKeyhole: {
    width: 3,
    height: 5,

    backgroundColor: '#FFFFFF',

    borderRadius: 2,
  },

  /* ================================================= */
  /* EYE */
  /* ================================================= */

  eyeButton: {
    width: 30,
    height: 35,

    justifyContent: 'center',
    alignItems: 'center',
  },

  eyeIcon: {
    width: 20,
    height: 13,

    borderWidth: 1.5,

    borderColor: '#53616D',

    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'center',

    position: 'relative',
  },

  eyePupil: {
    width: 5,
    height: 5,

    borderRadius: 3,

    backgroundColor: '#53616D',
  },

  eyeSlash: {
    position: 'absolute',

    width: 23,
    height: 1.5,

    backgroundColor: '#53616D',

    transform: [
      {
        rotate: '45deg',
      },
    ],
  },

  /* ================================================= */
  /* HELPER */
  /* ================================================= */

  helperRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: -5,

    marginBottom: 13,
  },

  helperIcon: {
    fontSize: 11,

    color: '#53616D',

    marginRight: 4,
  },

  helperText: {
    flex: 1,

    fontSize: 10.5,

    lineHeight: 15,

    color: '#53616D',
  },

  /* ================================================= */
  /* CHECKBOX */
  /* ================================================= */

  agreementRow: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginTop: 13,

    paddingHorizontal: 2,
  },

  checkbox: {
    width: 14,
    height: 14,

    borderWidth: 1,

    borderColor: '#87939D',

    borderRadius: 2,

    backgroundColor: '#FFFFFF',

    marginRight: 7,

    marginTop: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  checkboxChecked: {
    backgroundColor: '#063C59',

    borderColor: '#063C59',
  },

  checkMark: {
    color: '#FFFFFF',

    fontSize: 10,

    fontWeight: '800',

    lineHeight: 12,
  },

  agreementText: {
    flex: 1,

    fontSize: 10.5,

    lineHeight: 15,

    color: '#53616D',
  },

  boldText: {
    color: '#063C59',

    fontWeight: '800',
  },

  /* ================================================= */
  /* BUTTON */
  /* ================================================= */

  registerButton: {
    height: 40,

    backgroundColor: '#003B59',

    borderRadius: 8,

    marginTop: 14,

    justifyContent: 'center',

    alignItems: 'center',

    elevation: 3,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.15,

    shadowRadius: 3,
  },

  registerButtonText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',
  },

  /* ================================================= */
  /* LOGIN */
  /* ================================================= */

  loginRow: {
    flexDirection: 'row',

    justifyContent: 'center',

    alignItems: 'center',

    marginTop: 12,
  },

  loginText: {
    fontSize: 12,

    color: '#53616D',
  },

  loginLink: {
    fontSize: 12,

    color: '#063C59',

    fontWeight: '800',
  },
});

export default RegistrasiPerusahaanScreen;