import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Modal,
} from 'react-native';

/* ============================================================
   ASSETS
============================================================ */

const iconVerified = require('../assets/perusahaan/iconVerified.png');
const iconSalary = require('../assets/perusahaan/iconSalary.png');
const iconProfile = require('../assets/iconProfile.png');
const iconVerification = require('../assets/perusahaan/iconVerification.png');
const iconClock = require('../assets/perusahaan/iconClock.png');
const iconBriefcase = require('../assets/perusahaan/iconBriefcase.png');

/* ============================================================
   ASSETS - KELOLA LOWONGAN
============================================================ */

const iconEdit = require('../assets/perusahaan/iconEdit.png');
const iconPause = require('../assets/perusahaan/iconPause.png');
const iconDelete = require('../assets/perusahaan/iconDelete.png');


/* ============================================================
   COMPONENT
============================================================ */

const DetailLowonganScreen = ({navigation}: any) => {

  const [showManage, setShowManage] = useState(false);

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
            onPress={() => navigation.goBack()}>

            <Text style={styles.backIcon}>
              ‹
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Detail Lowongan
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.moreButton}>

            <Text style={styles.headerMore}>
              ⋮
            </Text>

          </TouchableOpacity>

        </View>


        {/* ====================================================
            CONTENT
        ==================================================== */}

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          {/* ==================================================
              INFORMASI LOWONGAN
          ================================================== */}

          <View style={styles.jobInfoCard}>

            {/* STATUS + SISA WAKTU */}

            <View style={styles.statusRow}>

              <View style={styles.statusBadge}>

                <View style={styles.statusDot} />

                <Text style={styles.statusText}>
                  AKTIF TAYANG
                </Text>

              </View>


              <View style={styles.remainingContainer}>

                <Image
                  source={iconClock}
                  style={styles.remainingIcon}
                  resizeMode="contain"
                />

                <Text style={styles.remainingText}>
                  Sisa 12 hari lagi
                </Text>

              </View>

            </View>


            {/* JUDUL */}

            <Text style={styles.jobTitle}>
              Frontend Web Developer (React /Tailwind)
            </Text>


            {/* PROGRAM */}

            <View style={styles.programRow}>

              <Image
                source={iconVerified}
                style={styles.programIcon}
                resizeMode="contain"
              />

              <Text style={styles.programText}>
                Magang MBKM Terpadu Polinela
              </Text>

            </View>


            {/* BATAS LAMARAN */}

            <View style={styles.deadlineBox}>

              <Text style={styles.deadlineLabel}>
                Batas Lamaran
              </Text>

              <Text style={styles.deadlineDate}>
                30 Nov 2024
              </Text>

            </View>

          </View>


          {/* ==================================================
              PENDAFTAR MASUK
          ================================================== */}

          <View style={styles.applicantCard}>

            {/* HEADER */}

            <View style={styles.applicantHeader}>

              <View style={styles.applicantHeaderLeft}>

                <Image
                  source={iconProfile}
                  style={styles.applicantHeaderIcon}
                  resizeMode="contain"
                />

                <Text style={styles.applicantHeaderText}>
                  PENDAFTAR MASUK
                </Text>

              </View>


              <View style={styles.reviewBadge}>

                <Text style={styles.reviewBadgeIcon}>
                  !
                </Text>

                <Text style={styles.reviewBadgeText}>
                  4 Butuh Review
                </Text>

              </View>

            </View>


            {/* JUMLAH */}

            <View style={styles.applicantNumberRow}>

              <Text style={styles.applicantNumber}>
                14
              </Text>

              <Text style={styles.candidateLabel}>
                Kandidat Mahasiswa
              </Text>

            </View>


            {/* AVATAR + LAST REGISTER */}

            <View style={styles.applicantBottomRow}>

              <View style={styles.avatarGroup}>

                <View style={[styles.avatar, styles.avatar1]}>
                  <Text style={styles.avatarText}>
                    RP
                  </Text>
                </View>

                <View style={[styles.avatar, styles.avatar2]}>
                  <Text style={styles.avatarText}>
                    AZ
                  </Text>
                </View>

                <View style={[styles.avatar, styles.avatar3]}>
                  <Text style={styles.avatarTextDark}>
                    MA
                  </Text>
                </View>

                <View style={[styles.avatar, styles.avatar4]}>
                  <Text style={styles.avatarTextDark}>
                    +11
                  </Text>
                </View>

              </View>


              <Text style={styles.lastRegistered}>
                Terakhir mendaftar 42m lalu
              </Text>

            </View>


            {/* LIHAT SEMUA */}

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.allApplicantButton}
              onPress={() => {
                navigation.navigate('ReviewPelamar');
              }}>

              <Text style={styles.allApplicantText}>
                Lihat Semua Pelamar (14)
              </Text>

              <Text style={styles.allApplicantArrow}>
                →
              </Text>

            </TouchableOpacity>

          </View>


          {/* ==================================================
              RINGKASAN & SPESIFIKASI
          ================================================== */}

          <Text style={styles.sectionTitle}>
            Ringkasan & Spesifikasi Posisi
          </Text>


          <View style={styles.summaryCard}>

            {/* GAJI */}

            <View style={styles.summaryRow}>

              <View style={styles.summaryIconBox}>

                <Image
                  source={iconSalary}
                  style={styles.summaryIcon}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.summaryContent}>

                <Text style={styles.summaryLabel}>
                  Uang Saku / Allowance
                </Text>

                <View style={styles.salaryRow}>

                  <Text style={styles.summaryValue}>
                    Rp 2.500.000 - Rp 3.800.000
                  </Text>

                  <Text style={styles.salaryPerMonth}>
                    /bln
                  </Text>

                </View>

                <Text style={styles.summaryDescription}>
                  Termasuk insentif kehadiran & kuota internet
                </Text>

              </View>

            </View>


            <View style={styles.divider} />

          </View>


          {/* ==================================================
              DESKRIPSI
          ================================================== */}

          <View style={styles.descriptionSection}>

            <Text style={styles.sectionTitleLarge}>
              Deskripsi & Tanggung Jawab
            </Text>


            <Text style={styles.descriptionText}>
              Sebagai peserta magang Frontend Developer,
              mahasiswa akan berkolaborasi langsung dengan
              tim Product Engineering internal kami untuk
              mengimplementasikan antarmuka modul Sistem
              Informasi Akademik Generasi Baru.
            </Text>


            <Text style={styles.responsibilityTitle}>
              Tanggung Jawab Harian:
            </Text>


            {/* POINT 1 */}

            <ResponsibilityItem>
              Membangun komponen UI modular dan reusable
              menggunakan Tailwind CSS dan React.
            </ResponsibilityItem>


            {/* POINT 2 */}

            <ResponsibilityItem>
              Menghubungkan antarmuka frontend dengan
              service RESTful backend secara efisien.
            </ResponsibilityItem>


            {/* POINT 3 */}

            <ResponsibilityItem>
              Melakukan peer review kode di GitHub bersama
              Senior Software Engineer pendamping.
            </ResponsibilityItem>


            {/* POINT 4 */}

            <ResponsibilityItem>
              Mengikuti sesi standup mingguan dan mentoring
              berkala dari perwakilan dosen pembimbing.
            </ResponsibilityItem>


            {/* ==================================================
                MENTOR
            ================================================== */}

            <View style={styles.mentorCard}>

              <View style={styles.mentorIconCircle}>

                <Text style={styles.mentorIcon}>
                  ?
                </Text>

              </View>


              <View style={styles.mentorContent}>

                <Text style={styles.mentorTitle}>
                  Mentor Pendamping Industri
                </Text>

                <Text style={styles.mentorName}>
                  Dimas Setiadi, S.Kom (Lead Web Platform)
                </Text>

              </View>

            </View>

          </View>


          <View style={styles.bottomContentSpace} />

        </ScrollView>


        {/* ====================================================
            BOTTOM ACTION
        ==================================================== */}

        <View style={styles.bottomAction}>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.manageButton}
            onPress={() => setShowManage(true)}>

            <Text style={styles.manageIcon}>
              ⋮
            </Text>

            <Text style={styles.manageText}>
              Kelola
            </Text>

          </TouchableOpacity>


          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.manageApplicantButton}
            onPress={() =>
              navigation.navigate('PelamarLowongan')
            }>

            <Image
              source={iconProfile}
              style={styles.manageApplicantIcon}
              resizeMode="contain"
            />

            <Text style={styles.manageApplicantText}>
              Kelola 14 Pelamar
            </Text>

          </TouchableOpacity>

        </View>


        {/* ====================================================
            MODAL KELOLA LOWONGAN
        ==================================================== */}

        <Modal
          visible={showManage}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowManage(false)}>

          <View style={styles.manageModalContainer}>

            {/* AREA GELAP / BACKGROUND */}

            <TouchableOpacity
              activeOpacity={1}
              style={styles.manageOverlay}
              onPress={() => setShowManage(false)}
            />

            {/* ==================================================
                BOTTOM SHEET
            ================================================== */}

            <View style={styles.manageSheet}>

              {/* HEADER SHEET */}

              <View style={styles.manageSheetHeader}>

                <View style={styles.manageSheetTitleContainer}>

                  <Text style={styles.manageSheetTitle}>
                    Kelola Lowongan
                  </Text>

                  <Text style={styles.manageSheetSubtitle}>
                    Frontend Web Developer (React / Tailwind)
                  </Text>

                </View>


                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.manageCloseButton}
                  onPress={() => setShowManage(false)}>

                  <Text style={styles.manageCloseIcon}>
                    ×
                  </Text>

                </TouchableOpacity>

              </View>


              {/* ==================================================
                  EDIT LOWONGAN
              ================================================== */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.manageMenuCard}>

                <View style={styles.manageMenuIconBox}>

                  <Image
                    source={iconEdit}
                    style={styles.manageMenuIcon}
                    resizeMode="contain"
                  />

                </View>


                <View style={styles.manageMenuContent}>

                  <Text style={styles.manageMenuTitle}>
                    Edit Lowongan
                  </Text>

                  <Text style={styles.manageMenuDescription}>
                    Ubah informasi, kriteria, & persyaratan
                  </Text>

                </View>


                <Text style={styles.manageChevron}>
                  ›
                </Text>

              </TouchableOpacity>


              {/* ==================================================
                  NONAKTIFKAN
              ================================================== */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.manageMenuCard}>

                <View style={styles.manageMenuIconBox}>

                  <Image
                    source={iconPause}
                    style={styles.manageMenuIcon}
                    resizeMode="contain"
                  />

                </View>


                <View style={styles.manageMenuContent}>

                  <Text style={styles.manageMenuTitle}>
                    Nonaktifkan Sementara
                  </Text>

                  <Text style={styles.manageMenuDescription}>
                    Tutup pendaftaran tanpa menghapus data
                  </Text>

                </View>


                <Text style={styles.manageChevron}>
                  ›
                </Text>

              </TouchableOpacity>


              {/* ==================================================
                  HAPUS LOWONGAN
              ================================================== */}

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.manageDeleteCard}>

                <View style={styles.manageDeleteIconBox}>

                  <Image
                    source={iconDelete}
                    style={styles.manageDeleteIcon}
                    resizeMode="contain"
                  />

                </View>


                <View style={styles.manageMenuContent}>

                  <Text style={styles.manageDeleteTitle}>
                    Hapus Lowongan
                  </Text>

                  <Text style={styles.manageDeleteDescription}>
                    Hapus posisi ini secara permanen
                  </Text>

                </View>


                <Text style={styles.manageDeleteChevron}>
                  ›
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </Modal>

      </View>

    </SafeAreaView>
  );
};


/* ============================================================
   RESPONSIBILITY ITEM
============================================================ */

const ResponsibilityItem = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <View style={styles.responsibilityRow}>

      <View style={styles.checkCircle}>

        <Text style={styles.checkIcon}>
          ✓
        </Text>

      </View>

      <Text style={styles.responsibilityText}>
        {children}
      </Text>

    </View>
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
  ========================================================== */

  header: {
    height: 94,
    backgroundColor: '#F8FAFD',

    flexDirection: 'row',
    alignItems: 'flex-end',

    paddingHorizontal: 18,

    paddingTop: 25,
    paddingBottom: 11,

    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },

  backButton: {
    width: 34,
    height: 34,

    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  backIcon: {
    color: '#082F47',

    fontSize: 34,
    lineHeight: 34,

    fontWeight: '300',

    marginTop: -3,
  },

  headerTitle: {
    flex: 1,

    marginLeft: 8,

    color: '#082F47',

    fontSize: 18,
    fontWeight: '700',

    marginBottom: 5,
  },

  moreButton: {
    width: 30,
    height: 34,

    alignItems: 'center',
    justifyContent: 'center',

    marginBottom: 4,
  },

  headerMore: {
    color: '#6B7379',

    fontSize: 22,
    lineHeight: 22,

    fontWeight: '700',
  },


  /* ==========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 10,
    paddingBottom: 10,
  },


  /* ==========================================================
     JOB INFO
  ========================================================== */

  jobInfoCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 14,

    padding: 14,

    borderWidth: 1,
    borderColor: '#EEF2F5',
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  statusBadge: {
    height: 25,

    paddingHorizontal: 9,

    borderRadius: 15,

    backgroundColor: '#D9F5F4',

    flexDirection: 'row',
    alignItems: 'center',
  },

  statusDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#42B5B4',

    marginRight: 6,
  },

  statusText: {
    color: '#0E3D42',

    fontSize: 10,

    fontWeight: '800',

    letterSpacing: 0.4,
  },

  remainingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  remainingIcon: {
    width: 15,
    height: 15,

    marginRight: 4,
  },

  remainingText: {
    color: '#596168',

    fontSize: 11,
  },


  /* ==========================================================
     JOB TITLE
  ========================================================== */

  jobTitle: {
    color: '#112B3D',

    fontSize: 18,
    lineHeight: 23,

    fontWeight: '800',

    marginTop: 13,
  },

  programRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },

  programIcon: {
    width: 17,
    height: 17,

    marginRight: 5,
  },

  programText: {
    color: '#2E668B',

    fontSize: 13,

    fontWeight: '600',
  },


  /* ==========================================================
     DEADLINE
  ========================================================== */

  deadlineBox: {
    marginTop: 12,

    minHeight: 55,

    borderRadius: 9,

    backgroundColor: '#E8F3FD',

    paddingHorizontal: 11,
    paddingVertical: 7,
  },

  deadlineLabel: {
    color: '#5A646C',

    fontSize: 10,

    fontWeight: '500',
  },

  deadlineDate: {
    color: '#112B3D',

    fontSize: 15,

    fontWeight: '700',

    marginTop: 1,
  },


  /* ==========================================================
     APPLICANT CARD
  ========================================================== */

  applicantCard: {
    backgroundColor: '#073852',

    borderRadius: 14,

    marginTop: 10,

    padding: 14,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 2,
  },

  applicantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  applicantHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  applicantHeaderIcon: {
    width: 19,
    height: 19,

    marginRight: 6,
  },

  applicantHeaderText: {
    color: '#C8E5F6',

    fontSize: 11,

    fontWeight: '600',

    letterSpacing: 0.6,
  },

  reviewBadge: {
    minHeight: 24,

    paddingHorizontal: 8,

    borderRadius: 14,

    backgroundColor: '#FFD6D5',

    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewBadgeIcon: {
    width: 14,
    height: 14,

    borderRadius: 7,

    backgroundColor: '#B7282E',

    color: '#FFFFFF',

    fontSize: 10,

    fontWeight: '800',

    textAlign: 'center',

    lineHeight: 14,

    marginRight: 4,
  },

  reviewBadgeText: {
    color: '#A7292D',

    fontSize: 10,

    fontWeight: '700',
  },


  /* ==========================================================
     APPLICANT NUMBER
  ========================================================== */

  applicantNumberRow: {
    flexDirection: 'row',
    alignItems: 'baseline',

    marginTop: 4,
  },

  applicantNumber: {
    color: '#FFFFFF',

    fontSize: 26,

    lineHeight: 31,

    fontWeight: '800',
  },

  candidateLabel: {
    color: '#86AABD',

    fontSize: 13,

    marginLeft: 8,
  },


  /* ==========================================================
     AVATAR
  ========================================================== */

  applicantBottomRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',

    marginTop: 10,
  },

  avatarGroup: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  avatar: {
    width: 30,
    height: 30,

    borderRadius: 15,

    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1.5,
    borderColor: '#073852',

    marginLeft: -3,
  },

  avatar1: {
    backgroundColor: '#467D9A',
  },

  avatar2: {
    backgroundColor: '#237E82',
  },

  avatar3: {
    backgroundColor: '#BBDCF1',
  },

  avatar4: {
    backgroundColor: '#91C9EA',
  },

  avatarText: {
    color: '#FFFFFF',

    fontSize: 8,

    fontWeight: '700',
  },

  avatarTextDark: {
    color: '#173B50',

    fontSize: 8,

    fontWeight: '700',
  },

  lastRegistered: {
    color: '#B5CBD7',

    fontSize: 10,
  },


  /* ==========================================================
     ALL APPLICANT
  ========================================================== */

  allApplicantButton: {
    height: 44,

    marginTop: 11,

    borderRadius: 9,

    backgroundColor: '#BBDFF7',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  allApplicantText: {
    color: '#15374B',

    fontSize: 13,

    fontWeight: '700',
  },

  allApplicantArrow: {
    color: '#15374B',

    fontSize: 22,

    lineHeight: 22,

    marginLeft: 7,

    marginTop: -2,
  },


  /* ==========================================================
     SECTION
  ========================================================== */

  sectionTitle: {
    color: '#112B3D',

    fontSize: 16,

    fontWeight: '800',

    marginTop: 17,

    marginBottom: 8,

    paddingHorizontal: 4,
  },


  /* ==========================================================
     SUMMARY
  ========================================================== */

  summaryCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    paddingHorizontal: 14,
    paddingVertical: 12,

    borderWidth: 1,
    borderColor: '#EEF2F5',
  },

  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  summaryIconBox: {
    width: 40,
    height: 40,

    borderRadius: 9,

    backgroundColor: '#E8F3FD',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  summaryIcon: {
    width: 22,
    height: 22,
  },

  summaryContent: {
    flex: 1,
  },

  summaryLabel: {
    color: '#5C656D',

    fontSize: 11,

    marginBottom: 1,
  },

  salaryRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  summaryValue: {
    color: '#0F3048',

    fontSize: 15,

    fontWeight: '800',
  },

  salaryPerMonth: {
    color: '#53616B',

    fontSize: 11,

    marginLeft: 3,
  },

  summaryDescription: {
    color: '#327097',

    fontSize: 10,

    marginTop: 2,
  },

  divider: {
    height: 1,

    backgroundColor: '#E7EEF2',

    marginTop: 11,
  },


  /* ==========================================================
     DESCRIPTION
  ========================================================== */

  descriptionSection: {
    backgroundColor: '#FFFFFF',

    borderRadius: 14,

    marginTop: 10,

    paddingHorizontal: 14,
    paddingTop: 14,
    paddingBottom: 14,

    borderWidth: 1,
    borderColor: '#EEF2F5',
  },

  sectionTitleLarge: {
    color: '#112B3D',

    fontSize: 18,

    lineHeight: 23,

    fontWeight: '800',

    marginBottom: 13,
  },

  descriptionText: {
    color: '#4E555B',

    fontSize: 16,

    lineHeight: 25,

    fontWeight: '400',
  },

  responsibilityTitle: {
    color: '#112B3D',

    fontSize: 17,

    fontWeight: '800',

    marginTop: 17,

    marginBottom: 8,
  },


  /* ==========================================================
     RESPONSIBILITY
  ========================================================== */

  responsibilityRow: {
    flexDirection: 'row',

    alignItems: 'flex-start',

    marginBottom: 10,
  },

  checkCircle: {
    width: 21,
    height: 21,

    borderRadius: 11,

    borderWidth: 1.8,
    borderColor: '#35799C',

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: 2,

    marginRight: 9,
  },

  checkIcon: {
    color: '#35799C',

    fontSize: 13,

    fontWeight: '800',

    lineHeight: 16,
  },

  responsibilityText: {
    flex: 1,

    color: '#4E555B',

    fontSize: 16,

    lineHeight: 25,
  },


  /* ==========================================================
     MENTOR
  ========================================================== */

  mentorCard: {
    minHeight: 72,

    marginTop: 8,

    borderRadius: 10,

    backgroundColor: '#E7F3FD',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 12,
  },

  mentorIconCircle: {
    width: 27,
    height: 27,

    borderRadius: 14,

    borderWidth: 2,
    borderColor: '#173D56',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  mentorIcon: {
    color: '#173D56',

    fontSize: 17,

    fontWeight: '700',
  },

  mentorContent: {
    flex: 1,
  },

  mentorTitle: {
    color: '#112B3D',

    fontSize: 13,

    fontWeight: '700',
  },

  mentorName: {
    color: '#53616B',

    fontSize: 12,

    marginTop: 2,
  },


  /* ==========================================================
     BOTTOM
  ========================================================== */

  bottomContentSpace: {
    height: 75,
  },

  bottomAction: {
    height: 70,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,
    borderTopColor: '#E5EBEF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 14,

    gap: 9,
  },

  manageButton: {
    width: 96,
    height: 45,

    borderRadius: 10,

    backgroundColor: '#DCEFFF',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  manageIcon: {
    color: '#2E668B',

    fontSize: 20,

    fontWeight: '700',

    marginRight: 4,
  },

  manageText: {
    color: '#2E668B',

    fontSize: 14,

    fontWeight: '700',
  },

  manageApplicantButton: {
    flex: 1,

    height: 45,

    borderRadius: 10,

    backgroundColor: '#123E5A',

    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  manageApplicantIcon: {
    width: 19,
    height: 19,

    marginRight: 7,
  },

  manageApplicantText: {
    color: '#FFFFFF',

    fontSize: 14,

    fontWeight: '700',
  },


  /* ==========================================================
     MODAL KELOLA LOWONGAN
  ========================================================== */

  manageModalContainer: {
    flex: 1,

    justifyContent: 'flex-end',

    backgroundColor: 'transparent',
  },

  manageOverlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(30, 40, 46, 0.60)',
  },

  manageSheet: {
    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,

    paddingHorizontal: 14,
    paddingTop: 16,
    paddingBottom: 22,

    elevation: 12,

    shadowColor: '#000000',

    shadowOffset: {
      width: 0,
      height: -3,
    },

    shadowOpacity: 0.18,

    shadowRadius: 8,
  },

  manageSheetHeader: {
    minHeight: 48,

    flexDirection: 'row',

    alignItems: 'flex-start',

    justifyContent: 'space-between',

    marginBottom: 8,
  },

  manageSheetTitleContainer: {
    flex: 1,
  },

  manageSheetTitle: {
    color: '#12354B',

    fontSize: 17,

    fontWeight: '900',
  },

  manageSheetSubtitle: {
    color: '#667078',

    fontSize: 10.5,

    marginTop: 2,
  },

  manageCloseButton: {
    width: 34,
    height: 34,

    alignItems: 'center',
    justifyContent: 'center',

    marginTop: -3,
  },

  manageCloseIcon: {
    color: '#4F5960',

    fontSize: 25,

    lineHeight: 27,

    fontWeight: '300',
  },


  /* ==========================================================
     MANAGE MENU
  ========================================================== */

  manageMenuCard: {
    minHeight: 57,

    borderRadius: 7,

    backgroundColor: '#EAF5FF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 8,
    paddingVertical: 7,

    marginBottom: 7,
  },

  manageMenuIconBox: {
    width: 34,
    height: 34,

    borderRadius: 7,

    backgroundColor: '#D8ECFC',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  manageMenuIcon: {
    width: 19,
    height: 19,
  },

  manageMenuContent: {
    flex: 1,
  },

  manageMenuTitle: {
    color: '#12354B',

    fontSize: 12,

    fontWeight: '800',
  },

  manageMenuDescription: {
    color: '#65727A',

    fontSize: 9.5,

    marginTop: 2,
  },

  manageChevron: {
    color: '#6C7880',

    fontSize: 22,

    fontWeight: '300',

    marginLeft: 5,
    marginRight: 2,
  },


  /* ==========================================================
     DELETE MENU
  ========================================================== */

  manageDeleteCard: {
    minHeight: 57,

    borderRadius: 7,

    backgroundColor: '#FFF0F0',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 8,
    paddingVertical: 7,
  },

  manageDeleteIconBox: {
    width: 34,
    height: 34,

    borderRadius: 7,

    backgroundColor: '#FFE0E0',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  manageDeleteIcon: {
    width: 19,
    height: 19,
  },

  manageDeleteTitle: {
    color: '#C83232',

    fontSize: 12,

    fontWeight: '800',
  },

  manageDeleteDescription: {
    color: '#D16B6B',

    fontSize: 9.5,

    marginTop: 2,
  },

  manageDeleteChevron: {
    color: '#D94040',

    fontSize: 22,

    fontWeight: '300',

    marginLeft: 5,
    marginRight: 2,
  },

});

export default DetailLowonganScreen;