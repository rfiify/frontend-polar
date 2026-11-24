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

const iconApplicant = require('../assets/perusahaan/iconApplicant.png');
const iconVerificationn = require('../assets/perusahaan/iconVerificationn.png');
const iconProfile = require('../assets/perusahaan/iconProfile.png');
const iconChat = require('../assets/perusahaan/iconChat.png');
const iconVerified = require('../assets/perusahaan/iconVerified.png');

const fotoBagus = require('../assets/kandidat/bagusPratama.png');
const fotoSiti = require('../assets/kandidat/sitiRahmawati.png');
const fotoDimas = require('../assets/kandidat/dimasAryaSaputra.png');
const fotoNanda = require('../assets/kandidat/nandaPutriLestari.png');


/* ============================================================
   DATA KANDIDAT
============================================================ */

const candidates = [
  {
    name: 'Bagus Pratama',
    major: 'D4 Rekayasa Perangkat Lunak',
    semester: 'Semester 7',
    photo: fotoBagus,
  },
  {
    name: 'Siti Rahmawati',
    major: 'D3 Manajemen Informatika',
    semester: 'Semester 5',
    photo: fotoSiti,
  },
  {
    name: 'Dimas Arya Saputra',
    major: 'D4 TRPL Polinela',
    semester: 'Semester 7',
    photo: fotoDimas,
  },
  {
    name: 'Nanda Putri Lestari',
    major: 'D3 Sistem Informasi Akuntansi',
    semester: 'Semester 7',
    photo: fotoNanda,
  },
];


/* ============================================================
   COMPONENT
============================================================ */

const ReviewPelamarScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFD"
        translucent={false}
      />

      <View style={styles.container}>

        {/* ====================================================
            HEADER
        ==================================================== */}

        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >

            <Text style={styles.backIcon}>
              ‹
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Review Pelamar
          </Text>

          <View style={styles.headerRight} />

        </View>


        {/* ====================================================
            CONTENT
        ==================================================== */}

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* ==================================================
              LOWONGAN AKTIF
          ================================================== */}

          <View style={styles.jobCard}>

            <View style={styles.activeBadge}>

              <View style={styles.activeDot} />

              <Text style={styles.activeText}>
                Lowongan Aktif
              </Text>

            </View>

            <Text style={styles.jobTitle}>
              Frontend Web Developer
            </Text>

            <View style={styles.totalApplicantBox}>

              <Image
                source={iconApplicant}
                style={styles.totalApplicantIcon}
                resizeMode="contain"
              />

              <View>

                <Text style={styles.totalLabel}>
                  Total Masuk
                </Text>

                <Text style={styles.totalNumber}>
                  14 Pelamar
                </Text>

              </View>

            </View>

            <View style={styles.decorCircle} />

          </View>


          {/* ==================================================
              FILTER
          ================================================== */}

          <View style={styles.filterRow}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterActive}
            >

              <Text style={styles.filterActiveText}>
                Semua
              </Text>

              <View style={styles.filterNumber}>

                <Text style={styles.filterNumberText}>
                  14
                </Text>

              </View>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterInactive}
            >

              <Text style={styles.filterInactiveText}>
                Perlu Verifikasi
              </Text>

              <View style={styles.verificationNumber}>

                <Text style={styles.verificationNumberText}>
                  4
                </Text>

              </View>

            </TouchableOpacity>

          </View>


          {/* ==================================================
              HEADER DAFTAR KANDIDAT
          ================================================== */}

          <View style={styles.listHeader}>

            <Text style={styles.listTitle}>
              Daftar Kandidat Polinela
            </Text>

            <View style={styles.verifiedPolorow}>

              <Image
                source={iconVerified}
                style={styles.verifiedSmallIcon}
                resizeMode="contain"
              />

              <Text style={styles.verifiedText}>
                Terverifikasi POLAR
              </Text>

            </View>

          </View>


          {/* ==================================================
              LIST KANDIDAT
          ================================================== */}

          {candidates.map((candidate) => (

            <View
              key={candidate.name}
              style={styles.candidateCard}
            >

              {/* INFO KANDIDAT */}

              <View style={styles.candidateInfo}>

                <Image
                  source={candidate.photo}
                  style={styles.candidatePhoto}
                  resizeMode="cover"
                />

                <View style={styles.candidateTextContainer}>

                  <Text style={styles.candidateName}>
                    {candidate.name}
                  </Text>

                  <Text style={styles.candidateMajor}>
                    {candidate.major}
                  </Text>

                  <Text style={styles.candidateSemester}>
                    {candidate.semester}
                  </Text>

                </View>

              </View>


              {/* BUTTON AREA */}

              <View style={styles.candidateActionRow}>

                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.verifyButton}

                  /* ==================================================
                     TAMBAHAN:
                     Klik Verifikasi Pelamar ->
                     VerifikasiPelamarScreen
                  ================================================== */

                  onPress={() => navigation.navigate('VerifikasiPelamar')}
                >

                  <Image
                    source={iconVerificationn}
                    style={styles.verifyIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.verifyButtonText}>
                    Verifikasi Pelamar
                  </Text>

                </TouchableOpacity>


                <TouchableOpacity
                  activeOpacity={0.85}
                  style={styles.chatButton}
                >

                  <Image
                    source={iconChat}
                    style={styles.chatIcon}
                    resizeMode="contain"
                  />

                </TouchableOpacity>

              </View>

            </View>

          ))}

        </ScrollView>

      </View>

    </SafeAreaView>
  );
};


/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

  /* ==========================================================
     BASE
  ========================================================== */

  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFD',
  },

  container: {
    flex: 1,
    backgroundColor: '#F8FAFD',
  },


  /* ==========================================================
     HEADER
     DITURUNKAN AGAR TIDAK NABRAK JAM
  ========================================================== */

  header: {
    height: 96,
    backgroundColor: '#F8FAFD',

    flexDirection: 'row',
    alignItems: 'flex-end',

    paddingHorizontal: 18,
    paddingBottom: 12,

    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },

  backButton: {
    width: 42,
    height: 42,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    color: '#082F47',

    fontSize: 40,
    lineHeight: 40,
    fontWeight: '300',
  },

  headerTitle: {
    flex: 1,

    marginLeft: 6,
    marginBottom: 7,

    color: '#082F47',

    fontSize: 21,
    fontWeight: '700',
  },

  headerRight: {
    width: 30,
    height: 42,
  },


  /* ==========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 20,
  },


  /* ==========================================================
     JOB CARD
  ========================================================== */

  jobCard: {
    height: 116,

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    paddingHorizontal: 14,
    paddingTop: 12,

    borderWidth: 1,
    borderColor: '#E9EEF2',

    overflow: 'hidden',
    position: 'relative',
  },

  activeBadge: {
    alignSelf: 'flex-start',

    height: 27,

    paddingHorizontal: 10,

    borderRadius: 14,

    backgroundColor: '#DDF3F8',

    flexDirection: 'row',
    alignItems: 'center',
  },

  activeDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#14758B',

    marginRight: 5,
  },

  activeText: {
    color: '#17465A',

    fontSize: 11,
    fontWeight: '700',
  },

  jobTitle: {
    color: '#102C3E',

    fontSize: 18,
    fontWeight: '800',

    marginTop: 7,
  },

  totalApplicantBox: {
    width: 138,
    height: 48,

    borderRadius: 8,

    backgroundColor: '#F0F7FC',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 10,

    marginTop: 6,
  },

  totalApplicantIcon: {
    width: 23,
    height: 23,

    marginRight: 8,
  },

  totalLabel: {
    color: '#58646C',

    fontSize: 10,
    lineHeight: 12,
  },

  totalNumber: {
    color: '#102C3E',

    fontSize: 14,
    fontWeight: '800',

    marginTop: 1,
  },

  decorCircle: {
    position: 'absolute',

    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: '#F0F1F2',

    right: -8,
    bottom: -18,
  },


  /* ==========================================================
     FILTER
  ========================================================== */

  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 11,
    marginBottom: 12,
  },

  filterActive: {
    height: 34,

    paddingHorizontal: 13,

    borderRadius: 18,

    backgroundColor: '#06374F',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterActiveText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '600',
  },

  filterNumber: {
    minWidth: 23,
    height: 21,

    borderRadius: 11,

    backgroundColor: '#FFFFFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  filterNumberText: {
    color: '#143C53',

    fontSize: 10,
    fontWeight: '800',
  },

  filterInactive: {
    height: 34,

    paddingHorizontal: 10,

    flexDirection: 'row',
    alignItems: 'center',

    marginLeft: 7,
  },

  filterInactiveText: {
    color: '#4E555B',

    fontSize: 11,
    fontWeight: '500',
  },

  verificationNumber: {
    width: 21,
    height: 21,

    borderRadius: 11,

    backgroundColor: '#C8282E',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  verificationNumberText: {
    color: '#FFFFFF',

    fontSize: 10,
    fontWeight: '800',
  },


  /* ==========================================================
     LIST HEADER
  ========================================================== */

  listHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginBottom: 9,
  },

  listTitle: {
    color: '#152D3D',

    fontSize: 15,
    fontWeight: '800',
  },

  verifiedPolorow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedSmallIcon: {
    width: 15,
    height: 15,

    marginRight: 4,
  },

  verifiedText: {
    color: '#4E555B',

    fontSize: 10,
    fontWeight: '500',
  },


  /* ==========================================================
     CANDIDATE CARD
  ========================================================== */

  candidateCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 11,

    borderWidth: 1,
    borderColor: '#E9EEF2',

    paddingHorizontal: 12,
    paddingTop: 11,
    paddingBottom: 11,

    marginBottom: 9,
  },

  candidateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  candidatePhoto: {
    width: 47,
    height: 47,

    borderRadius: 24,

    backgroundColor: '#E5E8EA',
  },

  candidateTextContainer: {
    flex: 1,

    marginLeft: 10,
  },

  candidateName: {
    color: '#102C3E',

    fontSize: 15,
    fontWeight: '800',

    marginBottom: 2,
  },

  candidateMajor: {
    color: '#394E5B',

    fontSize: 10,
    lineHeight: 13,

    marginBottom: 1,
  },

  candidateSemester: {
    color: '#394E5B',

    fontSize: 10,
    lineHeight: 13,
  },


  /* ==========================================================
     BUTTON
  ========================================================== */

  candidateActionRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 10,
  },

  verifyButton: {
    flex: 1,

    height: 39,

    borderRadius: 7,

    backgroundColor: '#06374F',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifyIcon: {
    width: 16,
    height: 16,

    marginRight: 6,
  },

  verifyButtonText: {
    color: '#FFFFFF',

    fontSize: 11,
    fontWeight: '700',
  },

  chatButton: {
    width: 39,
    height: 39,

    borderRadius: 7,

    backgroundColor: '#DCEEFF',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 7,
  },

  chatIcon: {
    width: 19,
    height: 19,
  },

});

export default ReviewPelamarScreen;