import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';

/* =========================================================
   ASSETS DETAIL PELAMAR
   Nama asset dibuat sesuai fungsi/logo di Figma
   ========================================================= */

// FOTO PROFIL BAGUS PRATAMA
const avaBagusPratama = require('../assets/kandidat/avaBagusPratama.png');

// ICON HEADER
const iconBack = require('../assets/perusahaan/iconBack.png');

// ICON PROFIL / AKADEMIK
const iconGraduation = require('../assets/perusahaan/iconGraduation.png');

// ICON LOWONGAN
const iconLowonganCode =
  require('../assets/perusahaan/iconLowonganCode.png');

// ICON TAB CURRICULUM VITAE
const iconCurriculumVitae =
  require('../assets/perusahaan/iconCurriculumVitae.png');

// ICON TAB PORTOFOLIO
const iconPortfolio =
  require('../assets/perusahaan/iconPortfolio.png');

// ICON TAB TRANSKRIP
const iconTranscript =
  require('../assets/perusahaan/iconTranscript.png');

// ICON PDF
const iconPdf =
  require('../assets/perusahaan/iconPdf.png');

// ICON DOWNLOAD
const iconDownload =
  require('../assets/perusahaan/iconDownload.png');

// ICON FULLSCREEN / EXPAND
const iconExpand =
  require('../assets/perusahaan/iconExpand.png');

// ICON DOKUMEN
const iconDocument =
  require('../assets/perusahaan/iconDocument.png');

// ICON LINK
const iconLink =
  require('../assets/perusahaan/iconLink.png');

// ICON REKOMENDASI / REKOMENDASI DPL
const iconRecommndation =
  require('../assets/perusahaan/iconRecomendation.png');

// ICON KESEDIAAN MAGANG
const iconInternship =
  require('../assets/perusahaan/iconInternship.png');

// ICON EYE / LIHAT DOKUMEN
const iconEye =
  require('../assets/perusahaan/iconEye.png');

// ICON CATATAN INTERNAL HRD
const iconRecruiterNote =
  require('../assets/perusahaan/iconRecruiterNote.png');

// ICON CLOUD / DRAFT TERSIMPAN
const iconCloud =
  require('../assets/perusahaan/iconCloud.png');

// ICON TERIMA
const iconAccept =
  require('../assets/perusahaan/iconAcc.png');

// ICON TOLAK
const iconReject =
  require('../assets/perusahaan/iconReject.png');


const DetailPelamarScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9FC"
      />

      <View style={styles.container}>

        {/* =================================================
            HEADER
        ================================================= */}

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


        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          {/* =================================================
              PROFIL BAGUS
          ================================================= */}

          <View style={styles.profileCard}>

            <Image
              source={avaBagusPratama}
              style={styles.profileAvatar}
              resizeMode="cover"
            />

            <View style={styles.profileInfo}>

              <View style={styles.nameRow}>

                <Text style={styles.profileName}>
                  Bagus Pratama
                </Text>

                <View style={styles.nimBadge}>
                  <Text style={styles.nimText}>
                    NIM 21753042
                  </Text>
                </View>

              </View>

              <Text style={styles.profileStudy}>
                D4 Rekayasa Perangkat Lunak • Smt 7
              </Text>

              <Text style={styles.profileCampus}>
                Politeknik Negeri Lampung (Polinela)
              </Text>

              <View style={styles.profileBadges}>

                <View style={styles.profileBadge}>
                  <Text style={styles.profileBadgeText}>
                    🎓 IPK: 3.82
                  </Text>
                </View>

                <View style={styles.profileBadge}>
                  <Text style={styles.profileBadgeText}>
                    ⚡ MBKM 20 SKS Siap
                  </Text>
                </View>

              </View>

            </View>

          </View>


          {/* =================================================
              POSISI YANG DILAMAR
          ================================================= */}

          <View style={styles.positionCard}>

            <View style={styles.positionIconBox}>

              <Image
                source={iconLowonganCode}
                style={styles.positionIcon}
                resizeMode="contain"
              />

            </View>

            <View style={styles.positionInfo}>

              <Text style={styles.positionLabel}>
                Pelamar Posisi:
              </Text>

              <Text style={styles.positionTitle}>
                Frontend Web Developer
              </Text>

            </View>

            <View style={styles.validBadge}>

              <Text style={styles.validIcon}>
                ✓
              </Text>

              <Text style={styles.validText}>
                Valid PDDIKTI
              </Text>

            </View>

          </View>


          {/* =================================================
              TAB DOKUMEN
          ================================================= */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tabScroll}
            contentContainerStyle={styles.tabContainer}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.tab, styles.tabActive]}>

              <Image
                source={iconCurriculumVitae}
                style={[styles.tabIcon, styles.tabIconActive]}
                resizeMode="contain"
              />

              <Text style={styles.tabActiveText}>
                Curriculum Vitae
              </Text>

              <View style={styles.tabDot} />

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.tab}>

              <Image
                source={iconPortfolio}
                style={styles.tabIcon}
                resizeMode="contain"
              />

              <Text style={styles.tabText}>
                Portofolio (5)
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.tab}>

              <Image
                source={iconTranscript}
                style={styles.tabIcon}
                resizeMode="contain"
              />

              <Text style={styles.tabText}>
                Transkrip
              </Text>

            </TouchableOpacity>

          </ScrollView>


          {/* =================================================
              FILE CV
          ================================================= */}

          <View style={styles.cvFileCard}>

            <View style={styles.cvHeader}>

              <Image
                source={iconPdf}
                style={styles.pdfIcon}
                resizeMode="contain"
              />

              <View style={styles.cvFileInfo}>

                <Text
                  style={styles.cvFileName}
                  numberOfLines={1}>
                  CV_Bagus_Pratama_Frontend_TRPL.pdf
                </Text>

                <Text style={styles.cvFileMeta}>
                  2.4 MB • Diunggah 10 menit lalu
                </Text>

              </View>

            </View>


            <View style={styles.cvActionRow}>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.expandButton}>

                <Image
                  source={iconExpand}
                  style={styles.expandIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>


              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.downloadButton}>

                <Image
                  source={iconDownload}
                  style={styles.downloadIcon}
                  resizeMode="contain"
                />

                <Text style={styles.downloadText}>
                  Unduh
                </Text>

              </TouchableOpacity>

            </View>

          </View>


          {/* =================================================
              CV PREVIEW
          ================================================= */}

          <View style={styles.cvPreview}>

            {/* CV HEADER */}

            <View style={styles.cvPreviewHeader}>

              <View style={styles.cvPreviewInfo}>

                <Text style={styles.cvName}>
                  BAGUS PRATAMA
                </Text>

                <Text style={styles.cvPosition}>
                  Junior Frontend Web Developer • D4
                </Text>

                <Text style={styles.cvPosition}>
                  TRPL Polinela
                </Text>

                <View style={styles.cvContactRow}>

                  <Text style={styles.cvContact}>
                    Bandar{'\n'}
                    Lampung,{'\n'}
                    Indonesia
                  </Text>

                  <View style={styles.contactDivider} />

                  <Text style={styles.cvContact}>
                    • github.com/baguspratama
                  </Text>

                </View>

              </View>


              <View style={styles.cvInitialBox}>

                <Text style={styles.cvInitial}>
                  BP
                </Text>

              </View>

            </View>


            {/* =================================================
                KEAHLIAN
            ================================================= */}

            <View style={styles.cvSection}>

              <Text style={styles.cvSectionTitle}>
                KEAHLIAN UTAMA & ALAT
              </Text>

              <View style={styles.skillContainer}>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    React.js
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    Tailwind CSS
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    TypeScript
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    Next.js 14
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    REST API Integration
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    Git & GitHub
                  </Text>
                </View>

                <View style={styles.skillBadge}>
                  <Text style={styles.skillText}>
                    Figma to Code
                  </Text>
                </View>

              </View>

            </View>


            {/* =================================================
                PENGALAMAN
            ================================================= */}

            <View style={styles.cvSection}>

              <Text style={styles.cvSectionTitle}>
                PENGALAMAN PROYEK UNGGULAN
              </Text>


              {/* PROJECT 1 */}

              <View style={styles.projectCard}>

                <View style={styles.projectHeader}>

                  <Text style={styles.projectTitle}>
                    Platform E-Commerce Kopi{'\n'}
                    Krakatau Tefafactory
                  </Text>

                  <Text style={styles.projectYear}>
                    2024 •{'\n'}Polinela
                  </Text>

                </View>

                <Text style={styles.projectDescription}>
                  Mengembangkan UI katalog produk dan checkout
                  responsive menggunakan React & Tailwind CSS
                  untuk Teaching Factory Polinela. Meningkatkan
                  kecepatan loading 42%.
                </Text>

              </View>


              {/* PROJECT 2 */}

              <View style={styles.projectCard}>

                <View style={styles.projectHeader}>

                  <Text style={styles.projectTitle}>
                    Sistem Informasi Rekam Medis{'\n'}
                    Klinik Kampus
                  </Text>

                  <Text style={styles.projectYear}>
                    2023 •{'\n'}Proyek Tim
                  </Text>

                </View>

                <Text style={styles.projectDescription}>
                  Merancang arsitektur komponen frontend
                  berbasis role akses dokter, perawat, dan staf
                  farmasi dengan integrasi token JWT aman.
                </Text>

              </View>

            </View>


            {/* =================================================
                PENDIDIKAN & PRESTASI
            ================================================= */}

            <View style={styles.achievementCard}>

              <Text style={styles.cvSectionTitle}>
                PENDIDIKAN & PRESTASI VOKASI
              </Text>

              <View style={styles.achievementRow}>

                <Text style={styles.trophyIcon}>
                  ♜
                </Text>

                <View style={styles.achievementInfo}>

                  <Text style={styles.achievementTitle}>
                    Finalis KMPIN V 2023 - Kategori
                    Pengembangan Web
                  </Text>

                  <Text style={styles.achievementDescription}>
                    Kompetisi Mahasiswa Informatika Politeknik
                    Nasional se-Indonesia
                  </Text>

                </View>

              </View>

            </View>

          </View>


          {/* PAGE */}

          <View style={styles.pageIndicator}>

            <Text style={styles.pageText}>
              Halaman 1 dari 2
            </Text>

            <TouchableOpacity style={styles.pageButton}>
              <Text style={styles.pageArrow}>
                ‹
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.pageButton, styles.pageButtonActive]}>

              <Text style={styles.pageArrowActive}>
                ›
              </Text>

            </TouchableOpacity>

          </View>


          {/* =================================================
              DOKUMEN PELENGKAP
          ================================================= */}

          <View style={styles.documentSection}>

            <View style={styles.documentHeader}>

              <Text style={styles.documentTitle}>
                Dokumen Pelengkap{'\n'}
                Terverifikasi
              </Text>

              <Text style={styles.documentVerified}>
                4 Terverifikasi{'\n'}
                Polinela
              </Text>

            </View>


            {/* TRANSKRIP */}

            <View style={styles.documentCard}>

              <View style={styles.documentIconBox}>

                <Image
                  source={iconDocument}
                  style={styles.documentIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.documentInfo}>

                <Text style={styles.documentName}>
                  Transkrip Nilai Semester 1-6 Resn
                </Text>

                <Text style={styles.documentDescription}>
                  IPK Kumulatif 3.82 • 114 SKS Lulus
                </Text>

              </View>

              <TouchableOpacity
                style={styles.eyeButton}
                activeOpacity={0.8}>

                <Image
                  source={iconEye}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>


            {/* LIVE DEMO */}

            <View style={styles.documentCard}>

              <View style={styles.documentIconBox}>

                <Image
                  source={iconLink}
                  style={styles.documentIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.documentInfo}>

                <Text
                  style={styles.documentName}
                  numberOfLines={1}>
                  Live Demo & Repositori Proyek
                </Text>

                <Text style={styles.documentDescription}>
                  vercel.app/bagus-showcase • GitHub Active
                </Text>

              </View>

              <TouchableOpacity
                style={styles.eyeButton}
                activeOpacity={0.8}>

                <Text style={styles.openIcon}>
                  ↗
                </Text>

              </TouchableOpacity>

            </View>


            {/* SURAT REKOMENDASI */}

            <View style={styles.documentCard}>

              <View style={styles.documentIconBox}>

                <Image
                  source={iconRecommndation}
                  style={styles.documentIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.documentInfo}>

                <Text style={styles.documentName}>
                  Surat Rekomendasi DPL Magang
                </Text>

                <Text style={styles.documentDescription}>
                  Ditandatangani Dr. Hendra, S.Kom., M.T.
                </Text>

              </View>

              <TouchableOpacity
                style={styles.eyeButton}
                activeOpacity={0.8}>

                <Image
                  source={iconEye}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>


            {/* PAKTA */}

            <View style={styles.documentCard}>

              <View style={styles.documentIconBox}>

                <Image
                  source={iconInternship}
                  style={styles.documentIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.documentInfo}>

                <Text style={styles.documentName}>
                  Pakta Kesiapan Magang Penuh (6 Bulan)
                </Text>

                <Text style={styles.documentDescription}>
                  Konversi MBKM Vokasi 20 SKS Disetujui
                  Jurusan TI
                </Text>

              </View>

              <TouchableOpacity
                style={styles.eyeButton}
                activeOpacity={0.8}>

                <Image
                  source={iconEye}
                  style={styles.eyeIcon}
                  resizeMode="contain"
                />

              </TouchableOpacity>

            </View>

          </View>


          {/* =================================================
              CATATAN INTERNAL HRD
          ================================================= */}

          <View style={styles.noteSection}>

            <View style={styles.noteHeader}>

              <View style={styles.noteTitleRow}>

                <Image
                  source={iconRecruiterNote}
                  style={styles.noteIcon}
                  resizeMode="contain"
                />

                <Text style={styles.noteTitle}>
                  Catatan Internal Rekruter{'\n'}
                  (HRD)
                </Text>

              </View>

              <Text style={styles.savedText}>
                Tersimpan{'\n'}
                otomatis
              </Text>

            </View>


            <View style={styles.noteBox}>

              <Text style={styles.noteText}>
                Portofolio React & Tailwind sangat relevan dengan
                stack proyek ERP web kita. Nilai algoritma TRPL bagus
                (IPK 3.82). Rekomendasikan wawancara teknis 30
                menit.
              </Text>


              <View style={styles.noteFooter}>

                <View style={styles.noteTag}>
                  <Text style={styles.noteTagText}>
                    + Prioritas Kuat
                  </Text>
                </View>

                <View style={styles.noteTag}>
                  <Text style={styles.noteTagText}>
                    + Tes Koding
                  </Text>
                </View>

                <View style={styles.draftText}>

                  <Image
                    source={iconCloud}
                    style={styles.cloudIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.draftLabel}>
                    Draf Tersimpan
                  </Text>

                </View>

              </View>

            </View>

          </View>


          {/* BOTTOM SPACE */}

          <View style={styles.bottomSpace} />

        </ScrollView>


        {/* =================================================
            ACTION BAR
        ================================================= */}

        <View style={styles.bottomActionBar}>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.messageButton}>

            <Text style={styles.messageIcon}>
              ▤
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.rejectButton}>

            <Image
              source={iconReject}
              style={styles.actionIcon}
              resizeMode="contain"
            />

            <Text style={styles.rejectText}>
              Tolak
            </Text>

          </TouchableOpacity>


          {/* =================================================
              TOMBOL TERIMA
              KLIK -> DETAIL PELAMAR DITERIMA
          ================================================= */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.acceptButton}
            onPress={() =>
              navigation.navigate('DetailPelamarDiterima')
            }>

            <Image
              source={iconAccept}
              style={styles.actionIcon}
              resizeMode="contain"
            />

            <Text style={styles.acceptText}>
              Terima
            </Text>

          </TouchableOpacity>

        </View>

      </View>

    </SafeAreaView>
  );
};


/* =========================================================
   STYLES
   ========================================================= */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 14,
    paddingBottom: 20,
  },


  /* ================= HEADER ================= */

  header: {
    height: 78,
    paddingHorizontal: 18,
    paddingTop: 25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
  },

  backButton: {
    width: 38,
    height: 42,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 7,
  },

  backIcon: {
    width: 25,
    height: 25,
  },

  headerTitle: {
    color: '#132E42',
    fontSize: 20,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#31627F',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
  },


  /* ================= PROFILE ================= */

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  profileAvatar: {
    width: 68,
    height: 68,
    borderRadius: 11,
    marginRight: 12,
  },

  profileInfo: {
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  profileName: {
    color: '#112B3D',
    fontSize: 17,
    fontWeight: '800',
    marginRight: 6,
  },

  nimBadge: {
    backgroundColor: '#DCEEFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  nimText: {
    color: '#2B6284',
    fontSize: 9,
    fontWeight: '700',
  },

  profileStudy: {
    color: '#626B71',
    fontSize: 11.5,
    marginTop: 3,
  },

  profileCampus: {
    color: '#28658A',
    fontSize: 11,
    fontWeight: '700',
    marginTop: 1,
  },

  profileBadges: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
    gap: 5,
  },

  profileBadge: {
    backgroundColor: '#E2F2FC',
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 4,
  },

  profileBadgeText: {
    color: '#24536D',
    fontSize: 8.5,
    fontWeight: '700',
  },


  /* ================= POSITION ================= */

  positionCard: {
    minHeight: 62,
    backgroundColor: '#E9F4FF',
    borderRadius: 11,
    paddingHorizontal: 11,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  positionIconBox: {
    width: 35,
    height: 35,
    borderRadius: 9,
    backgroundColor: '#174766',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  positionIcon: {
    width: 19,
    height: 19,
  },

  positionInfo: {
    flex: 1,
  },

  positionLabel: {
    color: '#3A6D8B',
    fontSize: 9.5,
    fontWeight: '600',
  },

  positionTitle: {
    color: '#15354B',
    fontSize: 14.5,
    fontWeight: '800',
    marginTop: 1,
  },

  validBadge: {
    backgroundColor: '#D4EAF8',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },

  validIcon: {
    width: 15,
    height: 15,
    borderRadius: 8,
    backgroundColor: '#DFF5FA',
    color: '#146879',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '900',
    marginRight: 3,
  },

  validText: {
    color: '#35667E',
    fontSize: 8.5,
    fontWeight: '700',
  },


  /* ================= TABS ================= */

  tabScroll: {
    marginHorizontal: -14,
  },

  tabContainer: {
    paddingHorizontal: 14,
    gap: 7,
    marginBottom: 10,
  },

  tab: {
    height: 37,
    paddingHorizontal: 13,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabActive: {
    backgroundColor: '#003650',
  },

  tabIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },

  tabIconActive: {
    tintColor: '#FFFFFF',
  },

  tabText: {
    color: '#4B5358',
    fontSize: 10.5,
    fontWeight: '500',
  },

  tabActiveText: {
    color: '#FFFFFF',
    fontSize: 10.5,
    fontWeight: '700',
  },

  tabDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#B5E5F8',
    marginLeft: 5,
  },


  /* ================= CV FILE ================= */

  cvFileCard: {
    backgroundColor: '#E8F4FF',
    borderRadius: 11,
    overflow: 'hidden',
    marginBottom: 0,
  },

  cvHeader: {
    flexDirection: 'row',
    paddingHorizontal: 11,
    paddingTop: 11,
    paddingBottom: 7,
  },

  pdfIcon: {
    width: 25,
    height: 25,
    marginRight: 8,
  },

  cvFileInfo: {
    flex: 1,
  },

  cvFileName: {
    color: '#182F40',
    fontSize: 13.5,
    fontWeight: '800',
  },

  cvFileMeta: {
    color: '#347092',
    fontSize: 9.5,
    fontWeight: '600',
    marginTop: 2,
  },

  cvActionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 11,
    paddingBottom: 10,
  },

  expandButton: {
    width: 39,
    height: 39,
    borderRadius: 9,
    backgroundColor: '#D7ECFC',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },

  expandIcon: {
    width: 17,
    height: 17,
  },

  downloadButton: {
    height: 39,
    paddingHorizontal: 13,
    borderRadius: 9,
    backgroundColor: '#123F5B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  downloadIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  downloadText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '700',
  },


  /* ================= CV PREVIEW ================= */

  cvPreview: {
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    marginHorizontal: 4,
    paddingHorizontal: 15,
    paddingTop: 17,
    paddingBottom: 15,
  },

  cvPreviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cvPreviewInfo: {
    flex: 1,
  },

  cvName: {
    color: '#102E43',
    fontSize: 19,
    fontWeight: '800',
  },

  cvPosition: {
    color: '#28678C',
    fontSize: 12.5,
    marginTop: 1,
  },

  cvContactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  cvContact: {
    color: '#59636A',
    fontSize: 10.5,
    lineHeight: 16,
  },

  contactDivider: {
    width: 1,
    height: 35,
    backgroundColor: '#D5DDE2',
    marginHorizontal: 12,
  },

  cvInitialBox: {
    width: 40,
    height: 50,
    borderRadius: 9,
    backgroundColor: '#E4F1FC',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },

  cvInitial: {
    color: '#123F5A',
    fontSize: 18,
    fontWeight: '800',
  },


  /* ================= CV SECTION ================= */

  cvSection: {
    marginTop: 17,
  },

  cvSectionTitle: {
    color: '#3A708E',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 0.4,
    marginBottom: 7,
  },

  skillContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },

  skillBadge: {
    backgroundColor: '#DCEEFF',
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  skillText: {
    color: '#173B53',
    fontSize: 10,
    fontWeight: '700',
  },


  /* ================= PROJECT ================= */

  projectCard: {
    backgroundColor: '#EAF4FE',
    borderRadius: 9,
    padding: 11,
    marginBottom: 8,
  },

  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  projectTitle: {
    flex: 1,
    color: '#142F42',
    fontSize: 13,
    fontWeight: '800',
    lineHeight: 18,
  },

  projectYear: {
    color: '#2A6487',
    fontSize: 9.5,
    fontWeight: '700',
    textAlign: 'right',
    marginLeft: 7,
  },

  projectDescription: {
    color: '#59636B',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 6,
  },


  /* ================= ACHIEVEMENT ================= */

  achievementCard: {
    backgroundColor: '#F4F8FC',
    borderRadius: 9,
    padding: 11,
    marginTop: 8,
  },

  achievementRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  trophyIcon: {
    color: '#12627C',
    fontSize: 20,
    marginRight: 7,
  },

  achievementInfo: {
    flex: 1,
  },

  achievementTitle: {
    color: '#193449',
    fontSize: 12.5,
    fontWeight: '800',
    lineHeight: 17,
  },

  achievementDescription: {
    color: '#626B71',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 2,
  },


  /* ================= PAGE ================= */

  pageIndicator: {
    height: 47,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  pageText: {
    color: '#5B6268',
    fontSize: 10,
    fontWeight: '600',
    marginRight: 4,
  },

  pageButton: {
    width: 27,
    height: 27,
    borderRadius: 7,
    backgroundColor: '#E5F2FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pageButtonActive: {
    backgroundColor: '#D3EAF9',
  },

  pageArrow: {
    color: '#7E9AAF',
    fontSize: 18,
  },

  pageArrowActive: {
    color: '#176083',
    fontSize: 18,
    fontWeight: '700',
  },


  /* ================= DOCUMENT ================= */

  documentSection: {
    marginTop: 5,
  },

  documentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 9,
  },

  documentTitle: {
    color: '#142C3D',
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 22,
  },

  documentVerified: {
    color: '#397391',
    fontSize: 10,
    fontWeight: '700',
    lineHeight: 14,
    textAlign: 'right',
  },

  documentCard: {
    minHeight: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#EEF1F4',
    paddingHorizontal: 11,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  documentIconBox: {
    width: 43,
    height: 43,
    borderRadius: 9,
    backgroundColor: '#DCEFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  documentIcon: {
    width: 21,
    height: 21,
  },

  documentInfo: {
    flex: 1,
  },

  documentName: {
    color: '#193247',
    fontSize: 13.5,
    fontWeight: '800',
  },

  documentDescription: {
    color: '#5F686E',
    fontSize: 10.5,
    lineHeight: 15,
    marginTop: 2,
  },

  eyeButton: {
    width: 40,
    height: 40,
    borderRadius: 9,
    backgroundColor: '#E5F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  eyeIcon: {
    width: 21,
    height: 21,
  },

  openIcon: {
    color: '#124E6A',
    fontSize: 22,
    fontWeight: '700',
  },


  /* ================= NOTE ================= */

  noteSection: {
    marginTop: 12,
  },

  noteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  noteTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  noteIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },

  noteTitle: {
    color: '#193247',
    fontSize: 14,
    fontWeight: '800',
    lineHeight: 18,
  },

  savedText: {
    color: '#2E6B8C',
    fontSize: 9.5,
    fontWeight: '700',
    lineHeight: 13,
    textAlign: 'right',
  },

  noteBox: {
    backgroundColor: '#EAF4FE',
    borderRadius: 10,
    padding: 11,
  },

  noteText: {
    color: '#25404F',
    fontSize: 11,
    lineHeight: 16,
  },

  noteFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },

  noteTag: {
    backgroundColor: '#D4EAF8',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 5,
  },

  noteTagText: {
    color: '#194D6A',
    fontSize: 8.5,
    fontWeight: '700',
  },

  draftText: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },

  cloudIcon: {
    width: 14,
    height: 14,
    marginRight: 3,
  },

  draftLabel: {
    color: '#28658A',
    fontSize: 9,
    fontWeight: '700',
  },


  bottomSpace: {
    height: 20,
  },


  /* ================= BOTTOM ACTION ================= */

  bottomActionBar: {
    height: 78,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E9EDF0',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
  },

  messageButton: {
    width: 49,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E3F1FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  messageIcon: {
    color: '#18506D',
    fontSize: 25,
    fontWeight: '700',
  },

  rejectButton: {
    width: 80,
    height: 50,
    borderRadius: 10,
    backgroundColor: '#FFDCDC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rejectText: {
    color: '#B72727',
    fontSize: 13,
    fontWeight: '700',
    marginLeft: 3,
  },

  acceptButton: {
    flex: 1,
    height: 50,
    borderRadius: 11,
    backgroundColor: '#003650',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionIcon: {
    width: 19,
    height: 19,
    marginRight: 6,
  },

  acceptText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '800',
  },

});

export default DetailPelamarScreen;