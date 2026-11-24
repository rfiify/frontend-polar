import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
} from 'react-native';

/* ============================================================
   ASSETS
   ============================================================ */

const iconVerified = require('../assets/perusahaan/iconVerified.png');
const iconChat = require('../assets/perusahaan/iconChat.png');
const fotoBagus = require('../assets/kandidat/bagusPratama.png');

/* ============================================================
   SCREEN
   ============================================================ */

const VerifikasiAkademikScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7FAFD"
        translucent={false}
      />

      <View style={styles.container}>

        {/* ======================================================
            HEADER
        ====================================================== */}

        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Text style={styles.backIcon}>‹</Text>
          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Verifikasi Akademik
          </Text>

          <View style={styles.headerSpace} />
        </View>

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          {/* ====================================================
              SUCCESS ICON
          ==================================================== */}

          <View style={styles.successSection}>

            <View style={styles.successCircle}>
              <Image
                source={iconVerified}
                style={styles.successIcon}
                resizeMode="contain"
              />
            </View>

            <View style={styles.smallBadge}>
              <Text style={styles.smallBadgeIcon}>⌁</Text>
            </View>

            <Text style={styles.successTitle}>
              Pelamar Berhasil Diterima!
            </Text>

            <Text style={styles.successDescription}>
              Bagus Pratama telah diloloskan
            </Text>

            <Text style={styles.successDescription}>
              untuk posisi{' '}
              <Text style={styles.positionText}>
                Frontend Web Developer.
              </Text>
            </Text>

          </View>

          {/* ====================================================
              PROFILE CARD
          ==================================================== */}

          <View style={styles.profileCard}>

            <Image
              source={fotoBagus}
              style={styles.profilePhoto}
              resizeMode="cover"
            />

            <View style={styles.profileInfo}>

              <Text style={styles.profileName}>
                Bagus Pratama
              </Text>

              <Text style={styles.profileDetail}>
                NIM: 21753042 • D4 RPL Smt 7
              </Text>

              <Text style={styles.profileSkills}>
                ‹› React • Tailwind • TypeScript
              </Text>

            </View>

            <View style={styles.profileBadge}>
              <Text style={styles.profileBadgeIcon}>
                ◆
              </Text>
            </View>

          </View>

          {/* ====================================================
              CONFIRMATION INFO
          ==================================================== */}

          <View style={styles.confirmationCard}>

            <View style={styles.clockCircle}>
              <Text style={styles.clockIcon}>
                ◷
              </Text>
            </View>

            <View style={styles.confirmationContent}>

              <Text style={styles.confirmationTitle}>
                Batas Waktu Konfirmasi Mahasiswa
              </Text>

              <Text style={styles.confirmationText}>
                Mahasiswa memiliki waktu 2 × 24 jam untuk
                mengonfirmasi kehadiran sesi wawancara. Tim
                POLAR Career Hub siap memfasilitasi integrasi
                room Google Meet / Zoom secara langsung.
              </Text>

            </View>

          </View>

          {/* ====================================================
              CHAT BUTTON
          ==================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.chatButton}>

            <Image
              source={iconChat}
              style={styles.chatIcon}
              resizeMode="contain"
            />

            <Text style={styles.chatText}>
              Chat / Hubungi Mahasiswa
            </Text>

          </TouchableOpacity>

          {/* ====================================================
              BACK TO REVIEW PELAMAR
          ==================================================== */}

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backListButton}
            onPress={() => navigation.navigate('ReviewPelamar')}>

            <Text style={styles.backListArrow}>
              ←
            </Text>

            <Text style={styles.backListText}>
              Kembali ke Daftar Pelamar
            </Text>

          </TouchableOpacity>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

/* ============================================================
   STYLES
   ============================================================ */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  /* ==========================================================
     HEADER
  ========================================================== */

  header: {
    height: 100,
    paddingHorizontal: 18,
    paddingTop: 28,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F7FAFD',
    borderBottomWidth: 1,
    borderBottomColor: '#E9EEF2',
  },

  backButton: {
    width: 46,
    height: 46,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    color: '#102F43',
    fontSize: 42,
    fontWeight: '300',
    lineHeight: 44,
    marginTop: -2,
  },

  headerTitle: {
    flex: 1,
    marginLeft: 6,
    marginBottom: 5,
    color: '#102F43',
    fontSize: 20,
    fontWeight: '800',
  },

  headerSpace: {
    width: 30,
    height: 46,
  },

  /* ==========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 35,
  },

  /* ==========================================================
     SUCCESS
  ========================================================== */

  successSection: {
    alignItems: 'center',
    paddingTop: 0,
  },

  successCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: '#00575A',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#00575A',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  successIcon: {
    width: 55,
    height: 55,
    tintColor: '#65E2E2',
  },

  smallBadge: {
    position: 'absolute',
    top: 62,
    left: '50%',
    marginLeft: 34,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8EC',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  smallBadgeIcon: {
    color: '#4D8295',
    fontSize: 20,
    fontWeight: '800',
    transform: [
      {
        rotate: '-25deg',
      },
    ],
  },

  successTitle: {
    color: '#07364D',
    fontSize: 27,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: 22,
  },

  successDescription: {
    color: '#4A5962',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },

  positionText: {
    color: '#183D50',
    fontWeight: '500',
  },

  /* ==========================================================
     PROFILE CARD
  ========================================================== */

  profileCard: {
    minHeight: 94,
    marginTop: 47,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EDF0F2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 13,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.04,
    shadowRadius: 5,
    elevation: 2,
  },

  profilePhoto: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#E7EAEC',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  profileName: {
    color: '#172E3E',
    fontSize: 18,
    fontWeight: '800',
  },

  profileDetail: {
    color: '#59656D',
    fontSize: 13,
    marginTop: 3,
  },

  profileSkills: {
    color: '#2D6A8A',
    fontSize: 13,
    marginTop: 4,
    fontWeight: '600',
  },

  profileBadge: {
    position: 'absolute',
    left: 68,
    bottom: 14,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileBadgeIcon: {
    color: '#17475D',
    fontSize: 10,
  },

  /* ==========================================================
     CONFIRMATION CARD
  ========================================================== */

  confirmationCard: {
    marginTop: 12,
    borderRadius: 12,
    backgroundColor: '#E9F3FF',
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  clockCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#D7EBFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },

  clockIcon: {
    color: '#0D4E70',
    fontSize: 25,
    lineHeight: 27,
  },

  confirmationContent: {
    flex: 1,
    marginLeft: 11,
  },

  confirmationTitle: {
    color: '#173B52',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
  },

  confirmationText: {
    color: '#59666E',
    fontSize: 13,
    lineHeight: 18,
  },

  /* ==========================================================
     CHAT
  ========================================================== */

  chatButton: {
    height: 60,
    marginTop: 13,
    borderRadius: 11,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEF1F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },

  chatText: {
    color: '#073B56',
    fontSize: 16,
    fontWeight: '800',
  },

  /* ==========================================================
     BACK TO REVIEW PELAMAR
  ========================================================== */

  backListButton: {
    height: 58,
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  backListArrow: {
    color: '#4D5960',
    fontSize: 25,
    fontWeight: '800',
    marginRight: 6,
  },

  backListText: {
    color: '#4D5960',
    fontSize: 15,
    fontWeight: '800',
  },
});

export default VerifikasiAkademikScreen;