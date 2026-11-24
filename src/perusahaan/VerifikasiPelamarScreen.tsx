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
const iconCV = require('../assets/perusahaan/iconCV.png');
const iconRecommendation = require('../assets/perusahaan/iconRecommendation.png');
const iconEye = require('../assets/perusahaan/iconEye.png');
const iconPortofolio = require('../assets/perusahaan/iconPortofolio.png');
const iconAccept = require('../assets/perusahaan/iconAccept.png');
const iconChat = require('../assets/perusahaan/iconChat.png');

const fotoBagus = require('../assets/kandidat/bagusPratama.png');

const portfolioAkademik = require('../assets/perusahaan/portfolioAkademik.png');
const portfolioEcommerce = require('../assets/perusahaan/portfolioEcommerce.png');

/* ============================================================
   COMPONENT
   ============================================================ */

const VerifikasiPelamarScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7FAFD"
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
            Verifikasi Pelamar
          </Text>

          <View style={styles.headerSpace} />

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
              PROFILE CARD
              ================================================== */}

          <View style={styles.profileCard}>

            <View style={styles.profileTop}>

              <Image
                source={fotoBagus}
                style={styles.profilePhoto}
                resizeMode="cover"
              />

              <View style={styles.profileInfo}>

                <View style={styles.nameRow}>

                  <Text style={styles.profileName}>
                    Bagus Pratama
                  </Text>

                  <Image
                    source={iconVerified}
                    style={styles.verifiedIcon}
                    resizeMode="contain"
                  />

                </View>

                <Text style={styles.nim}>
                  NIM: 21753042
                </Text>

                <Text style={styles.major}>
                  D4 Rekayasa Perangkat Lunak
                </Text>

                <Text style={styles.detailText}>
                  Jurusan Ilmu Komputer • Semester 7
                </Text>

              </View>

            </View>


            {/* STATUS */}

            <View style={styles.statusBox}>

              <View style={styles.statusRow}>

                <Text style={styles.statusLabel}>
                  Posisi Dilamar
                </Text>

                <Text style={styles.statusValue}>
                  Frontend Web Developer
                </Text>

              </View>


              <View style={styles.statusRow}>

                <Text style={styles.statusLabel}>
                  Status Review
                </Text>

                <View style={styles.waitingBadge}>

                  <View style={styles.waitingDot} />

                  <Text style={styles.waitingText}>
                    Menunggu Persetujuan Mitra
                  </Text>

                </View>

              </View>

            </View>

          </View>


          {/* ==================================================
              CV PELAMAR
              ================================================== */}

          <View style={styles.section}>

            <View style={styles.sectionTitleRow}>

              <Image
                source={iconCV}
                style={styles.sectionIcon}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>
                CV Pelamar
              </Text>

            </View>


            <View style={styles.cvCard}>

              <View style={styles.cvLeft}>

                <Image
                  source={iconCV}
                  style={styles.documentIcon}
                  resizeMode="contain"
                />

                <Text style={styles.cvName}>
                  CV_BagusPratama.pdf
                </Text>

              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.downloadButton}
              >

                <Text style={styles.downloadText}>
                  Unduh
                </Text>

                <Text style={styles.externalIcon}>
                  ↗
                </Text>

              </TouchableOpacity>

            </View>

          </View>


          {/* ==================================================
              SURAT REKOMENDASI
              ================================================== */}

          <View style={styles.recommendationCard}>

            <View style={styles.recommendationTop}>

              <View style={styles.recommendationIconBox}>

                <Image
                  source={iconRecommendation}
                  style={styles.recommendationIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.recommendationInfo}>

                <Text style={styles.recommendationTitle}>
                  Surat Rekomendasi Dosen
                </Text>

                <Text style={styles.recommendationName}>
                  Dr. Hendro, S.Kom., M.T.
                </Text>

                <Text style={styles.recommendationRole}>
                  Koordinator Program Studi D4 RPL
                </Text>

              </View>


              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.eyeButton}
              >

                <Image
                  source={iconEye}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>


            <View style={styles.quoteBox}>

              <Text style={styles.quoteText}>
                “Mahasiswa memiliki etika kerja tinggi, kemandirian
                memecahkan masalah frontend, dan telah memenuhi
                standar kompetensi magang industri semester genap.”
              </Text>

            </View>

          </View>


          {/* ==================================================
              PORTFOLIO HEADER
              ================================================== */}

          <View style={styles.portfolioHeader}>

            <View style={styles.portfolioTitleRow}>

              <Image
                source={iconPortofolio}
                style={styles.portfolioIcon}
                resizeMode="contain"
              />

              <Text style={styles.portfolioTitle}>
                Portofolio Terverifikasi
              </Text>

            </View>

            <Text style={styles.portfolioCount}>
              2 Proyek Aktif
            </Text>

          </View>


          {/* ==================================================
              PORTFOLIO 1
              ================================================== */}

          <View style={styles.portfolioCard}>

            <Image
              source={portfolioAkademik}
              style={styles.portfolioImage}
              resizeMode="cover"
            />

            <View style={styles.portfolioContent}>

              <View style={styles.portfolioNameRow}>

                <Text
                  style={styles.portfolioName}
                  numberOfLines={1}
                >
                  Portal Akademik Polinela
                </Text>

                <View style={styles.techBadge}>

                  <Text style={styles.techText}>
                    React + Vite
                  </Text>

                </View>

              </View>

              <Text
                style={styles.portfolioDescription}
                numberOfLines={2}
              >
                Redesain dan pengisian KRS mahasiswa dengan optimalisasi
                rendering state via React.
              </Text>

              <View style={styles.portfolioMeta}>

                <Text style={styles.metaText}>
                  ◉ 142 commits
                </Text>

                <Text style={styles.metaText}>
                  ✦ Nilai Tugas Akhir: A
                </Text>

              </View>

            </View>

          </View>


          {/* ==================================================
              PORTFOLIO 2
              ================================================== */}

          <View style={styles.portfolioCard}>

            <Image
              source={portfolioEcommerce}
              style={styles.portfolioImage}
              resizeMode="cover"
            />

            <View style={styles.portfolioContent}>

              <View style={styles.portfolioNameRow}>

                <Text
                  style={styles.portfolioName}
                  numberOfLines={1}
                >
                  E-Commerce UMKM
                </Text>

                <View style={styles.techBadge}>

                  <Text style={styles.techText}>
                    Next.js + PWA
                  </Text>

                </View>

              </View>

              <Text
                style={styles.portfolioDescription}
                numberOfLines={2}
              >
                Platform katalog digital kerajinan UMKM Lampung dengan
                integrasi payment.
              </Text>

              <View style={styles.portfolioMeta}>

                <Text style={styles.metaText}>
                  ◉ PWA Ready
                </Text>

                <Text style={styles.metaText}>
                  ◉ Production Deployed
                </Text>

              </View>

            </View>

          </View>

        </ScrollView>


        {/* ====================================================
            BOTTOM ACTION
            ==================================================== */}

        <View style={styles.bottomContainer}>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.acceptButton}
            onPress={() => navigation.navigate('VerifikasiAkademik')}
          >

            <Image
              source={iconAccept}
              style={styles.acceptIcon}
              resizeMode="contain"
            />

            <Text style={styles.acceptText}>
              Terima & Loloskan ke Wawancara
            </Text>

          </TouchableOpacity>


          <View style={styles.bottomRow}>

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.contactButton}
            >

              <Image
                source={iconChat}
                style={styles.bottomIcon}
                resizeMode="contain"
              />

              <Text style={styles.contactText}>
                Hubungi
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.rejectButton}
            >

              <Text style={styles.rejectX}>
                ×
              </Text>

              <Text style={styles.rejectText}>
                Tolak Lamaran
              </Text>

            </TouchableOpacity>

          </View>

        </View>

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
    backgroundColor: '#F7FAFD',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7FAFD',
  },


  /* ==========================================================
     HEADER
     ========================================================== */

  header: {
    height: 94,
    paddingHorizontal: 18,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F7FAFD',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F5',
  },

  backButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    color: '#102F43',
    fontSize: 38,
    fontWeight: '300',
    lineHeight: 40,
  },

  headerTitle: {
    flex: 1,
    marginLeft: 2,
    marginBottom: 7,
    color: '#102F43',
    fontSize: 20,
    fontWeight: '800',
  },

  headerSpace: {
    width: 28,
    height: 44,
  },


  /* ==========================================================
     SCROLL
     ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 12,
    paddingTop: 13,
    paddingBottom: 20,
  },


  /* ==========================================================
     PROFILE CARD
     ========================================================== */

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#E9EEF2',
    padding: 14,
    marginBottom: 12,
  },

  profileTop: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  profilePhoto: {
    width: 64,
    height: 64,
    borderRadius: 7,
    backgroundColor: '#E6E9EB',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 11,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileName: {
    color: '#102C3E',
    fontSize: 20,
    fontWeight: '800',
  },

  verifiedIcon: {
    width: 19,
    height: 19,
    marginLeft: 5,
  },

  nim: {
    color: '#394C58',
    fontSize: 13,
    marginTop: 3,
  },

  major: {
    color: '#176087',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 4,
  },

  detailText: {
    color: '#5E686F',
    fontSize: 12,
    marginTop: 3,
  },


  /* ==========================================================
     STATUS CARD
     ========================================================== */

  statusBox: {
    marginTop: 11,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: '#EEF6FD',
  },

  statusRow: {
    minHeight: 31,
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusLabel: {
    width: 91,
    color: '#56636C',
    fontSize: 12,
  },

  statusValue: {
    flex: 1,
    color: '#0E4C6D',
    fontSize: 15,
    fontWeight: '800',
    textAlign: 'right',
  },

  waitingBadge: {
    paddingHorizontal: 10,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#B7E3FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  waitingDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#267BA5',
    marginRight: 5,
  },

  waitingText: {
    color: '#25627F',
    fontSize: 10.5,
    fontWeight: '600',
  },


  /* ==========================================================
     SECTION
     ========================================================== */

  section: {
    marginBottom: 11,
  },

  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 2,
  },

  sectionIcon: {
    width: 19,
    height: 19,
    marginRight: 5,
  },

  sectionTitle: {
    color: '#102C3E',
    fontSize: 19,
    fontWeight: '800',
  },


  /* ==========================================================
     CV CARD
     ========================================================== */

  cvCard: {
    minHeight: 54,
    backgroundColor: '#DDEFFF',
    borderRadius: 9,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  cvLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  documentIcon: {
    width: 22,
    height: 22,
    marginRight: 8,
  },

  cvName: {
    color: '#16445C',
    fontSize: 15,
    fontWeight: '500',
  },

  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  downloadText: {
    color: '#35647B',
    fontSize: 12,
    fontWeight: '600',
  },

  externalIcon: {
    color: '#35647B',
    fontSize: 19,
    marginLeft: 2,
  },


  /* ==========================================================
     RECOMMENDATION CARD
     ========================================================== */

  recommendationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E9EEF2',
    padding: 12,
    marginBottom: 12,
  },

  recommendationTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  recommendationIconBox: {
    width: 42,
    height: 42,
    borderRadius: 9,
    backgroundColor: '#DDEFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  recommendationIcon: {
    width: 23,
    height: 23,
  },

  recommendationInfo: {
    flex: 1,
    marginLeft: 10,
  },

  recommendationTitle: {
    color: '#102C3E',
    fontSize: 16,
    fontWeight: '800',
  },

  recommendationName: {
    color: '#59656D',
    fontSize: 12,
    marginTop: 3,
  },

  recommendationRole: {
    color: '#667078',
    fontSize: 11,
    marginTop: 2,
  },

  eyeButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E1F0FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  eyeIcon: {
    width: 18,
    height: 18,
  },

  quoteBox: {
    backgroundColor: '#E8F3FF',
    borderRadius: 9,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 9,
  },

  quoteText: {
    color: '#52616B',
    fontSize: 12,
    lineHeight: 17,
    fontStyle: 'italic',
  },


  /* ==========================================================
     PORTFOLIO
     ========================================================== */

  portfolioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 2,
  },

  portfolioTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  portfolioIcon: {
    width: 19,
    height: 19,
    marginRight: 5,
  },

  portfolioTitle: {
    color: '#102C3E',
    fontSize: 19,
    fontWeight: '800',
  },

  portfolioCount: {
    color: '#68747B',
    fontSize: 12,
  },


  portfolioCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E9EEF2',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 9,
  },

  portfolioImage: {
    width: 70,
    height: 62,
    borderRadius: 6,
    backgroundColor: '#E6E9EB',
  },

  portfolioContent: {
    flex: 1,
    marginLeft: 10,
  },

  portfolioNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  portfolioName: {
    flex: 1,
    color: '#102C3E',
    fontSize: 15,
    fontWeight: '800',
  },

  techBadge: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 6,
    backgroundColor: '#DCEEFF',
    marginLeft: 4,
  },

  techText: {
    color: '#25627F',
    fontSize: 9.5,
    fontWeight: '600',
  },

  portfolioDescription: {
    color: '#59656D',
    fontSize: 11.5,
    lineHeight: 16,
    marginTop: 4,
  },

  portfolioMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  metaText: {
    color: '#69747B',
    fontSize: 10,
    marginRight: 9,
  },


  /* ==========================================================
     BOTTOM
     ========================================================== */

  bottomContainer: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E4E9ED',
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 8,
  },

  acceptButton: {
    height: 43,
    borderRadius: 8,
    backgroundColor: '#06374F',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },

  acceptIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },

  acceptText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
  },

  bottomRow: {
    flexDirection: 'row',
    gap: 7,
  },

  contactButton: {
    flex: 1,
    height: 37,
    borderRadius: 8,
    backgroundColor: '#DDEFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },

  contactText: {
    color: '#15445E',
    fontSize: 11,
    fontWeight: '700',
  },

  rejectButton: {
    flex: 1,
    height: 37,
    borderRadius: 8,
    backgroundColor: '#E8F3FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rejectX: {
    color: '#D32F2F',
    fontSize: 19,
    marginRight: 4,
  },

  rejectText: {
    color: '#B62C31',
    fontSize: 11,
    fontWeight: '700',
  },

});

export default VerifikasiPelamarScreen;