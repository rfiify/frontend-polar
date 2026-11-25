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

/* =========================================================
   ASSETS DETAIL PELAMAR DITERIMA
   ========================================================= */

const avaBagusPratama = require('../assets/kandidat/avaBagusPratama.png');
const iconBack = require('../assets/perusahaan/iconBack.png');
const iconLowonganCode =
  require('../assets/perusahaan/iconLowonganCode.png');
const iconCurriculumVitae =
  require('../assets/perusahaan/iconCurriculumVitae.png');
const iconPortfolio =
  require('../assets/perusahaan/iconPortfolio.png');
const iconTranscript =
  require('../assets/perusahaan/iconTranscript.png');
const iconPdf = require('../assets/perusahaan/iconPdf.png');
const iconExpand = require('../assets/perusahaan/iconExpand.png');
const iconDownload =
  require('../assets/perusahaan/iconDownload.png');

const DetailPelamarDiterimaScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9FC"
      />

      <View style={styles.container}>

        {/* =========================
            HEADER
        ========================= */}

        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              source={iconBack}
              style={styles.backIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.headerTitle}>
              Notifikasi
            </Text>

            <Text style={styles.headerSubtitle}>
              POLAR Perusahaan
            </Text>
          </View>

        </View>


        {/* =========================
            CONTENT
        ========================= */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>

          {/* STATUS */}

          <View style={styles.statusRow}>

            <View style={styles.statusBadge}>
              <Text style={styles.statusIcon}>⚙</Text>
              <Text style={styles.statusText}>
                Status: Diterima • Siap Magang
              </Text>
            </View>

            <View style={styles.validBadge}>
              <Text style={styles.validIcon}>✦</Text>
              <Text style={styles.validText}>
                SHA-256 Valid
              </Text>
            </View>

            <View style={styles.downloadCircle}>
              <Text style={styles.downloadIcon}>
                ⇩
              </Text>
            </View>

          </View>


          {/* =========================
              DATA PELAMAR
          ========================= */}

          <View style={styles.profileCard}>

            <View style={styles.profileTop}>

              <Image
                source={avaBagusPratama}
                style={styles.avatar}
                resizeMode="cover"
              />

              <View style={styles.profileInfo}>

                <View style={styles.nameRow}>

                  <Text style={styles.name}>
                    Bagus Pratama
                  </Text>

                  <View style={styles.nimBadge}>
                    <Text style={styles.nimText}>
                      NIM 21753042
                    </Text>
                  </View>

                </View>

                <Text style={styles.profileDetail}>
                  D4 Rekayasa Perangkat Lunak • Smt 7
                </Text>

                <Text style={styles.campus}>
                  Politeknik Negeri Lampung (Polinela)
                </Text>

              </View>

            </View>


            {/* BADGES */}

            <View style={styles.badgeRow}>

              <View style={styles.acceptBadge}>
                <Text style={styles.acceptIcon}>
                  ✓
                </Text>

                <Text style={styles.acceptText}>
                  Lolos Seleksi & Diterima
                </Text>
              </View>

              <View style={styles.ipkBadge}>
                <Text style={styles.ipkIcon}>
                  ♙
                </Text>

                <Text style={styles.ipkText}>
                  IPK: 3.82
                </Text>
              </View>

            </View>


            <View style={styles.mbkmBadge}>
              <Text style={styles.mbkmIcon}>
                ⚡
              </Text>

              <Text style={styles.mbkmText}>
                MBKM 20 SKS Siap
              </Text>
            </View>


            {/* POSISI */}

            <View style={styles.positionBox}>

              <View style={styles.positionIconBox}>
                <Image
                  source={iconLowonganCode}
                  style={styles.positionIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.positionInfo}>
                <Text style={styles.positionLabel}>
                  Melamar Posisi:
                </Text>

                <Text
                  style={styles.positionTitle}
                  numberOfLines={1}>
                  Frontend Web Developer
                </Text>
              </View>

              <View style={styles.pddiktiBadge}>
                <Text style={styles.pddiktiCheck}>
                  ✓
                </Text>

                <Text style={styles.pddiktiText}>
                  Valid PDDIKTI
                </Text>
              </View>

            </View>

          </View>


          {/* =========================
              TAB
          ========================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabScroll}
            contentContainerStyle={styles.tabContainer}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.tabActive}>

              <Image
                source={iconCurriculumVitae}
                style={styles.tabIcon}
                resizeMode="contain"
              />

              <Text style={styles.tabActiveText}>
                Curriculum Vitae
              </Text>

              <View style={styles.tabDot} />

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.tabInactive}>

              <Image
                source={iconPortfolio}
                style={styles.tabInactiveIcon}
                resizeMode="contain"
              />

              <Text style={styles.tabInactiveText}>
                Portofolio (5)
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.tabInactive}>

              <Image
                source={iconTranscript}
                style={styles.tabInactiveIcon}
                resizeMode="contain"
              />

              <Text style={styles.tabInactiveText}>
                Transkrip
              </Text>

            </TouchableOpacity>

          </ScrollView>


          {/* =========================
              FILE CV
          ========================= */}

          <View style={styles.cvCard}>

            <View style={styles.pdfRow}>

              <View style={styles.pdfIconBox}>
                <Image
                  source={iconPdf}
                  style={styles.pdfIcon}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.pdfInfo}>

                <Text style={styles.pdfName}>
                  CV_Bagus_Pratama_Frontend_TRPL.pdf
                </Text>

                <Text style={styles.pdfDetail}>
                  2.4 MB • Diunggah 10 menit lalu
                </Text>

              </View>

            </View>


            <View style={styles.pdfActionRow}>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.fullscreenButton}>

                <Image
                  source={iconExpand}
                  style={styles.fullscreenIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.downloadButton}>

                <Image
                  source={iconDownload}
                  style={styles.downloadButtonIcon}
                  resizeMode="contain"
                />

                <Text style={styles.downloadButtonText}>
                  Unduh
                </Text>

              </TouchableOpacity>

            </View>


            {/* =========================
                CV PREVIEW
            ========================= */}

            <View style={styles.cvPreview}>

              <View style={styles.cvHeaderRow}>

                <View>

                  <Text style={styles.cvName}>
                    BAGUS PRATAMA
                  </Text>

                  <Text style={styles.cvJob}>
                    Junior Frontend Web Developer • D4
                  </Text>

                  <Text style={styles.cvJob}>
                    TRPL Polinela
                  </Text>

                  <Text style={styles.cvLocation}>
                    Bandar
                  </Text>

                  <Text style={styles.cvLocation}>
                    Lampung, Indonesia
                  </Text>

                </View>

                <View style={styles.initialBadge}>
                  <Text style={styles.initialText}>
                    BP
                  </Text>
                </View>

              </View>


              <View style={styles.githubRow}>
                <Text style={styles.cvLocation}>
                  • github.com/baguspratama
                </Text>
              </View>


              {/* KEAHLIAN */}

              <Text style={styles.sectionBlueTitle}>
                KEAHLIAN UTAMA & ALAT
              </Text>

              <View style={styles.skillRow}>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    React.js
                  </Text>
                </View>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    Tailwind CSS
                  </Text>
                </View>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    TypeScript
                  </Text>
                </View>

              </View>

              <View style={styles.skillRow}>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    Next.js 14
                  </Text>
                </View>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    REST API Integration
                  </Text>
                </View>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    Git & GitHub
                  </Text>
                </View>

              </View>

              <View style={styles.skillRow}>

                <View style={styles.skill}>
                  <Text style={styles.skillText}>
                    Figma to Code
                  </Text>
                </View>

              </View>


              {/* PROYEK */}

              <Text style={styles.sectionBlueTitle}>
                PENGALAMAN PROYEK UNGGULAN
              </Text>


              <View style={styles.projectCard}>

                <View style={styles.projectHeader}>

                  <Text style={styles.projectTitle}>
                    Platform E-Commerce Kopi
                    {'\n'}
                    Krakatau Tefactory
                  </Text>

                  <Text style={styles.projectYear}>
                    2024 •{'\n'}
                    Polinela
                  </Text>

                </View>

                <Text style={styles.projectDescription}>
                  Mengembangkan UI katalog produk dan
                  checkout responsif menggunakan React &
                  Tailwind CSS untuk Teaching Factory Polinela.
                  Meningkatkan kecepatan loading 42%.
                </Text>

              </View>


              <View style={styles.projectCard}>

                <View style={styles.projectHeader}>

                  <Text style={styles.projectTitle}>
                    Sistem Informasi Rekam Medis
                    {'\n'}
                    Klinik Kampus
                  </Text>

                  <Text style={styles.projectYear}>
                    2023 •{'\n'}
                    Proyek Tim
                  </Text>

                </View>

                <Text style={styles.projectDescription}>
                  Merancang arsitektur komponen frontend
                  berbasis role akses dokter, perawat, dan staf
                  farmasi dengan integrasi token JWT aman.
                </Text>

              </View>


              {/* PENDIDIKAN */}

              <Text style={styles.sectionBlueTitle}>
                PENDIDIKAN & PRESTASI VOKASI
              </Text>

              <View style={styles.educationCard}>

                <Text style={styles.trophy}>
                  ♕
                </Text>

                <View style={styles.educationInfo}>

                  <Text style={styles.educationTitle}>
                    Finalis KMIPN V 2023 - Kategori
                    {'\n'}
                    Pengembangan Web
                  </Text>

                  <Text style={styles.educationDescription}>
                    Kompetisi Mahasiswa Informatika Politeknik
                    Nasional se-Indonesia
                  </Text>

                </View>

              </View>

            </View>


            {/* =========================
                PAGINATION
            ========================= */}

            <View style={styles.pagination}>

              <Text style={styles.pageText}>
                Halaman 1 dari 2
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.pageButton}>
                <Text style={styles.pageButtonText}>
                  ‹
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.pageButtonActive}>
                <Text style={styles.pageButtonTextActive}>
                  ›
                </Text>
              </TouchableOpacity>

            </View>

          </View>

          {/* SPACING UNTUK BOTTOM BUTTON */}
          <View style={{height: 95}} />

        </ScrollView>


        {/* =========================
            CHAT MAHASISWA
        ========================= */}

        <View style={styles.bottomAction}>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.chatButton}
            onPress={() =>
              navigation.navigate('ChatDetail', {
                nama: 'Bagus Pratama',
              })
            }>

            <Text style={styles.chatIcon}>
              💬
            </Text>

            <Text style={styles.chatButtonText}>
              Chat Mahasiswa
            </Text>

          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },


  /* HEADER */

  header: {
    height: 102,
    paddingHorizontal: 20,
    paddingTop: 24,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    borderBottomWidth: 1,
    borderBottomColor: '#DDE5EA',
  },

  backButton: {
    width: 35,
    height: 45,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginRight: 5,
  },

  backIcon: {
    width: 24,
    height: 24,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#142F42',
  },

  headerSubtitle: {
    fontSize: 10,
    fontWeight: '600',
    color: '#31769A',
    marginTop: 2,
  },


  /* CONTENT */

  scrollContent: {
    paddingHorizontal: 25,
    paddingTop: 7,
    paddingBottom: 20,
  },


  /* STATUS */

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 5,
  },

  statusBadge: {
    height: 31,
    paddingHorizontal: 9,
    borderRadius: 18,
    backgroundColor: '#E5F5F3',
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusIcon: {
    fontSize: 14,
    marginRight: 4,
    color: '#145A64',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#174E5A',
  },

  validBadge: {
    height: 31,
    paddingHorizontal: 9,
    borderRadius: 18,
    backgroundColor: '#E7F1FA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  validIcon: {
    fontSize: 14,
    color: '#064C65',
    marginRight: 4,
  },

  validText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#17445A',
  },

  downloadCircle: {
    width: 31,
    height: 31,
    borderRadius: 16,
    backgroundColor: '#E7F1FA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  downloadIcon: {
    fontSize: 18,
    color: '#244D66',
  },


  /* PROFILE */

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5EBEF',
    padding: 12,
    marginBottom: 10,
  },

  profileTop: {
    flexDirection: 'row',
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 10,
    backgroundColor: '#DCE7EC',
  },

  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  name: {
    fontSize: 18,
    fontWeight: '800',
    color: '#172F41',
    marginRight: 7,
  },

  nimBadge: {
    backgroundColor: '#DDEDF8',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  nimText: {
    color: '#347092',
    fontSize: 10,
    fontWeight: '700',
  },

  profileDetail: {
    color: '#5E666C',
    fontSize: 12,
    marginTop: 4,
  },

  campus: {
    color: '#26739A',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 3,
  },


  /* BADGES */

  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    gap: 7,
  },

  acceptBadge: {
    height: 24,
    paddingHorizontal: 9,
    borderRadius: 13,
    backgroundColor: '#A9E2F8',
    flexDirection: 'row',
    alignItems: 'center',
  },

  acceptIcon: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#176277',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '800',
    marginRight: 4,
  },

  acceptText: {
    color: '#174C63',
    fontSize: 10,
    fontWeight: '700',
  },

  ipkBadge: {
    height: 24,
    paddingHorizontal: 9,
    borderRadius: 13,
    backgroundColor: '#E4F0FA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  ipkIcon: {
    fontSize: 12,
    color: '#1B5B78',
    marginRight: 4,
  },

  ipkText: {
    color: '#315F78',
    fontSize: 10,
    fontWeight: '700',
  },

  mbkmBadge: {
    alignSelf: 'flex-start',
    height: 24,
    paddingHorizontal: 9,
    borderRadius: 13,
    backgroundColor: '#DDEFFC',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  mbkmIcon: {
    fontSize: 12,
    color: '#1D5C76',
    marginRight: 4,
  },

  mbkmText: {
    color: '#285E78',
    fontSize: 10,
    fontWeight: '700',
  },


  /* POSITION */

  positionBox: {
    marginTop: 9,
    backgroundColor: '#EAF4FC',
    borderRadius: 11,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  positionIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#174663',
    alignItems: 'center',
    justifyContent: 'center',
  },

  positionIcon: {
    width: 18,
    height: 18,
  },

  positionInfo: {
    flex: 1,
    marginLeft: 8,
  },

  positionLabel: {
    color: '#2C6C8C',
    fontSize: 10,
    fontWeight: '600',
  },

  positionTitle: {
    color: '#142F42',
    fontSize: 14,
    fontWeight: '800',
    marginTop: 2,
  },

  pddiktiBadge: {
    height: 26,
    paddingHorizontal: 8,
    borderRadius: 13,
    backgroundColor: '#D9EAF7',
    flexDirection: 'row',
    alignItems: 'center',
  },

  pddiktiCheck: {
    color: '#174D63',
    fontSize: 11,
    marginRight: 4,
  },

  pddiktiText: {
    color: '#315B72',
    fontSize: 10,
    fontWeight: '700',
  },


  /* TABS */

  tabScroll: {
    marginHorizontal: -25,
    marginBottom: 8,
  },

  tabContainer: {
    paddingHorizontal: 25,
    gap: 8,
  },

  tabActive: {
    height: 37,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#00334E',
    flexDirection: 'row',
    alignItems: 'center',
  },

  tabIcon: {
    width: 15,
    height: 15,
    tintColor: '#FFFFFF',
    marginRight: 5,
  },

  tabActiveText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '700',
  },

  tabDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#A8E3F8',
    marginLeft: 6,
  },

  tabInactive: {
    height: 37,
    paddingHorizontal: 11,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  tabInactiveIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  tabInactiveText: {
    color: '#4B5054',
    fontSize: 11,
    fontWeight: '500',
  },


  /* CV */

  cvCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5EBEF',
    overflow: 'hidden',
  },

  pdfRow: {
    backgroundColor: '#E9F3FD',
    paddingHorizontal: 12,
    paddingTop: 12,
    paddingBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },

  pdfIconBox: {
    width: 28,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },

  pdfIcon: {
    width: 24,
    height: 24,
  },

  pdfInfo: {
    flex: 1,
  },

  pdfName: {
    color: '#203546',
    fontSize: 14,
    fontWeight: '800',
  },

  pdfDetail: {
    color: '#2B7094',
    fontSize: 10,
    fontWeight: '600',
    marginTop: 3,
  },

  pdfActionRow: {
    backgroundColor: '#E9F3FD',
    paddingHorizontal: 12,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  fullscreenButton: {
    width: 38,
    height: 38,
    borderRadius: 7,
    backgroundColor: '#D5EAF9',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 7,
  },

  fullscreenIcon: {
    width: 17,
    height: 17,
  },

  downloadButton: {
    height: 38,
    paddingHorizontal: 12,
    borderRadius: 7,
    backgroundColor: '#164965',
    flexDirection: 'row',
    alignItems: 'center',
  },

  downloadButtonIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },


  /* CV PREVIEW */

  cvPreview: {
    margin: 12,
    padding: 13,
    backgroundColor: '#EFF6FD',
    borderRadius: 10,
  },

  cvHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cvName: {
    color: '#12334B',
    fontSize: 19,
    fontWeight: '900',
  },

  cvJob: {
    color: '#286487',
    fontSize: 13,
    lineHeight: 19,
  },

  cvLocation: {
    color: '#5D646A',
    fontSize: 11,
    lineHeight: 16,
  },

  initialBadge: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#DCECF9',
    alignItems: 'center',
    justifyContent: 'center',
  },

  initialText: {
    color: '#174664',
    fontSize: 17,
    fontWeight: '800',
  },

  githubRow: {
    marginTop: -18,
    marginBottom: 15,
    alignItems: 'flex-end',
  },


  /* SKILLS */

  sectionBlueTitle: {
    color: '#286987',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.4,
    marginTop: 14,
    marginBottom: 7,
  },

  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    marginBottom: 4,
  },

  skill: {
    backgroundColor: '#CFE7F8',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  skillText: {
    color: '#153C53',
    fontSize: 10,
    fontWeight: '600',
  },


  /* PROJECT */

  projectCard: {
    backgroundColor: '#E1F0FC',
    borderRadius: 10,
    padding: 12,
    marginBottom: 9,
  },

  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  projectTitle: {
    flex: 1,
    color: '#173448',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 19,
  },

  projectYear: {
    color: '#286B8D',
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'right',
    lineHeight: 15,
  },

  projectDescription: {
    color: '#59636A',
    fontSize: 11,
    lineHeight: 16,
    marginTop: 6,
  },


  /* EDUCATION */

  educationCard: {
    backgroundColor: '#E9F3FD',
    borderRadius: 9,
    padding: 11,
    flexDirection: 'row',
  },

  trophy: {
    color: '#14536B',
    fontSize: 20,
    marginRight: 7,
  },

  educationInfo: {
    flex: 1,
  },

  educationTitle: {
    color: '#17364A',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
  },

  educationDescription: {
    color: '#5B656C',
    fontSize: 10,
    lineHeight: 15,
    marginTop: 3,
  },


  /* PAGINATION */

  pagination: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  pageText: {
    color: '#4E555A',
    fontSize: 10,
    marginRight: 4,
  },

  pageButton: {
    width: 28,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#E7F2FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageButtonActive: {
    width: 28,
    height: 28,
    borderRadius: 5,
    backgroundColor: '#D8ECFA',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageButtonText: {
    color: '#9AA9B4',
    fontSize: 18,
  },

  pageButtonTextActive: {
    color: '#174D68',
    fontSize: 18,
    fontWeight: '700',
  },


  /* =========================
     BOTTOM CHAT BUTTON
  ========================= */

  bottomAction: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E4EAEE',
    paddingHorizontal: 25,
    paddingTop: 10,
    paddingBottom: 12,
  },

  chatButton: {
    height: 48,
    borderRadius: 24,
    backgroundColor: '#003B59',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  chatIcon: {
    fontSize: 17,
    marginRight: 8,
  },

  chatButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

});

export default DetailPelamarDiterimaScreen;