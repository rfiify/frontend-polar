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

import PerusahaanNavbar from './PerusahaanNavbar';

/* ============================================================
   ASSETS
============================================================ */

const iconCompany = require('../assets/perusahaan/iconCompany.png');
const iconVerified = require('../assets/perusahaan/iconVerified.png');

const iconApplicant = require('../assets/perusahaan/iconApplicant.png');
const iconVerification = require('../assets/perusahaan/iconVerification.png');
const iconClock = require('../assets/perusahaan/iconClock.png');
const iconCheck = require('../assets/perusahaan/iconCheck.png');
const iconSalary = require('../assets/perusahaan/iconSalary.png');
const iconLocation = require('../assets/perusahaan/iconLocation.png');
const iconPriority = require('../assets/perusahaan/iconPriority.png');
const iconBriefcase = require('../assets/perusahaan/iconBriefcase.png');


/* ============================================================
   COMPONENT
============================================================ */

const LowonganPerusahaanScreen = ({navigation}: any) => {
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
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>

            <Text style={styles.backIcon}>
              ‹
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Lowongan
          </Text>

          <TouchableOpacity
            style={styles.searchButton}
            activeOpacity={0.7}>

            <View style={styles.searchCircle} />
            <View style={styles.searchHandle} />

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
              FILTER TABS
          ================================================== */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
            contentContainerStyle={styles.filterContainer}>

            <TouchableOpacity
              activeOpacity={0.8}
              style={[
                styles.filterTab,
                styles.filterTabActive,
              ]}>

              <Text style={styles.filterTextActive}>
                Semua (6)
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterTab}>

              <Text style={styles.filterText}>
                Aktif (5)
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterTab}>

              <Text style={styles.filterText}>
                Review Kampus (1)
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterTab}>

              <Text style={styles.filterText}>
                Ditutup
              </Text>

            </TouchableOpacity>

          </ScrollView>


          {/* ==================================================
              LOWONGAN 1
              FRONTEND WEB DEVELOPER
          ================================================== */}

          <JobCard
            status="Aktif Tayang"
            statusType="active"
            partner="Mitra Polinela"
            title="Frontend Web Developer (React / Tailwind)"
            salary="Rp 2.500.000 - Rp 3.800.000 / bln"
            applicants="14 Pelamar"
            candidate="Kuota: 3 Mahasiswa"
            verification="4 Verifikasi Berkas"
            deadline="Batas: 30 Nov 2024"
            remaining="(12 hari lagi)"
            manageCount="14"
            navigation={navigation}
            onPress={() => {
              navigation.navigate('DetailLowongan');
            }}
          />


          {/* ==================================================
              LOWONGAN 2
          ================================================== */}

          <JobCard
            status="Aktif Tayang"
            statusType="active"
            partner="Remote Polinela"
            title="UI/UX Designer & Product Researcher"
            subtitle="Magang Industri • Penuh Daring (Remote WFH)"
            salary="Rp 2.000.000 - Rp 3.000.000 / bln"
            applicants="8 Pelamar"
            candidate="Kuota: 2 Mahasiswa"
            verification="3 Verifikasi"
            navigation={navigation}
          />


          {/* ==================================================
              LOWONGAN 3
          ================================================== */}

          <JobCard
            status="Aktif Tayang"
            statusType="active"
            partner="Full-time Rekrut"
            title="Mobile App Developer (Flutter / Kotlin)"
            subtitle="Full-time (Fresh Graduate D3/D4) • On-site Kantor"
            salary="Rp 4.500.000 - Rp 6.000.000 / bln"
            applicants="5 Pelamar"
            verification="1 Verifikasi"
            navigation={navigation}
          />


          {/* ==================================================
              LOWONGAN 4 - REVIEW KAMPUS
          ================================================== */}

          <View style={styles.reviewCard}>

            <View style={styles.reviewTopRow}>

              <View style={styles.reviewStatusBadge}>

                <Text style={styles.reviewStatusIcon}>
                  ↻
                </Text>

                <Text style={styles.reviewStatusText}>
                  Meninjau Kurikulum Jurusan
                </Text>

              </View>

              <Text style={styles.moreIcon}>
                ⋮
              </Text>

            </View>


            <Text style={styles.reviewTitle}>
              IoT Engineer & Smart Agriculture
            </Text>


            <View style={styles.reviewSubtitleRow}>

              <Image
                source={iconLocation}
                style={styles.smallLocationIcon}
                resizeMode="contain"
              />

              <Text style={styles.reviewSubtitle}>
                Riset Vokasi • Teaching Factory Lab Pertanian Polinela
              </Text>

            </View>


            <View style={styles.salaryBadge}>

              <Image
                source={iconSalary}
                style={styles.salaryIcon}
                resizeMode="contain"
              />

              <Text style={styles.salaryText}>
                Rp 3.500.000 / proyek riset
              </Text>

            </View>


            <View style={styles.validationBox}>

              <Image
                source={iconPriority}
                style={styles.validationIcon}
                resizeMode="contain"
              />

              <View style={styles.validationTextContainer}>

                <Text style={styles.validationTitle}>
                  Sedang divalidasi oleh Unit Kerja Sama Polinela
                </Text>

                <Text style={styles.validationDescription}>
                  Penyesuaian bobot 20 SKS MBKM Terapan mahasiswa
                  jurusan Teknologi Pertanian & Rekayasa Perangkat
                  Lunak.
                </Text>

              </View>

            </View>


            <View style={styles.reviewBottom}>

              <Text style={styles.noApplicant}>
                0 Pelamar (Belum dibuka publik)
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.validationButton}>

                <Image
                  source={iconVerification}
                  style={styles.validationButtonIcon}
                  resizeMode="contain"
                />

                <Text style={styles.validationButtonText}>
                  Cek Validasi
                </Text>

              </TouchableOpacity>

            </View>

          </View>

          <View style={styles.bottomSpace} />

        </ScrollView>


        {/* ====================================================
            BOTTOM NAVIGATION
            SEKARANG MENGGUNAKAN PERUSAHAAN NAVBAR
        ==================================================== */}

        <PerusahaanNavbar
          navigation={navigation}
          activeScreen="LowonganPerusahaan"
        />

      </View>

    </SafeAreaView>
  );
};


/* ============================================================
   JOB CARD COMPONENT
============================================================ */

type JobCardProps = {
  status: string;
  statusType?: 'active' | 'review';
  partner: string;
  title: string;
  subtitle?: string;
  salary: string;
  applicants: string;
  candidate?: string;
  verification?: string;
  deadline?: string;
  remaining?: string;
  manageCount?: string;
  navigation?: any;
  onPress?: () => void;
};


const JobCard = ({
  status,
  statusType = 'active',
  partner,
  title,
  subtitle,
  salary,
  applicants,
  candidate,
  verification,
  deadline,
  remaining,
  manageCount,
  onPress,
}: JobCardProps) => {

  return (

    <TouchableOpacity
      activeOpacity={0.95}
      style={styles.jobCard}
      onPress={onPress}
      disabled={!onPress}
    >

      <View style={styles.jobTopRow}>

        <View style={styles.badgeGroup}>

          <View style={styles.activeBadge}>

            <View style={styles.activeDot} />

            <Text style={styles.activeBadgeText}>
              {status}
            </Text>

          </View>


          <View style={styles.partnerBadge}>

            {partner === 'Mitra Polinela' && (
              <Image
                source={iconVerified}
                style={styles.partnerIcon}
                resizeMode="contain"
              />
            )}

            <Text style={styles.partnerText}>
              {partner}
            </Text>

          </View>

        </View>


        <Text style={styles.moreIcon}>
          ⋮
        </Text>

      </View>


      <Text style={styles.jobTitle}>
        {title}
      </Text>


      {subtitle && (
        <View style={styles.subtitleRow}>

          <Image
            source={iconBriefcase}
            style={styles.subtitleIcon}
            resizeMode="contain"
          />

          <Text style={styles.subtitleText}>
            {subtitle}
          </Text>

        </View>
      )}


      <View style={styles.salaryBadge}>

        <Image
          source={iconSalary}
          style={styles.salaryIcon}
          resizeMode="contain"
        />

        <Text style={styles.salaryText}>
          {salary}
        </Text>

      </View>


      <View style={styles.applicantBox}>

        <View style={styles.applicantLeft}>

          <View style={styles.applicantIconBox}>

            <Image
              source={iconApplicant}
              style={styles.applicantIcon}
              resizeMode="contain"
            />

          </View>


          <View style={styles.applicantInformation}>

            <Text style={styles.applicantTitle}>
              {applicants}
            </Text>

            {candidate && (
              <Text style={styles.candidateText}>
                {candidate}
              </Text>
            )}

          </View>

        </View>


        {verification && (
          <View
            style={[
              styles.verificationBadge,
              verification.includes('4')
                ? styles.verificationDanger
                : styles.verificationNormal,
            ]}>

            <Image
              source={iconVerification}
              style={styles.verificationIcon}
              resizeMode="contain"
            />

            <Text
              style={[
                styles.verificationText,
                verification.includes('4')
                  ? styles.verificationTextDanger
                  : styles.verificationTextNormal,
              ]}>
              {verification}
            </Text>

          </View>
        )}

      </View>


      {deadline && (
        <View style={styles.jobBottomRow}>

          <View style={styles.deadlineContainer}>

            <Image
              source={iconClock}
              style={styles.clockIcon}
              resizeMode="contain"
            />

            <Text style={styles.deadlineText}>
              {deadline}
            </Text>

            {remaining && (
              <Text style={styles.remainingText}>
                {' '}{remaining}
              </Text>
            )}

          </View>


          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.manageButton}
            onPress={(event) => {
              event.stopPropagation();
            }}>

            <Text style={styles.manageText}>
              Kelola{'\n'}Pelamar
            </Text>

            {manageCount && (
              <View style={styles.manageCountCircle}>

                <Text style={styles.manageCountText}>
                  {manageCount}
                </Text>

              </View>
            )}

          </TouchableOpacity>

        </View>
      )}

    </TouchableOpacity>
  );
};


/* ============================================================
   STYLES
============================================================ */

const styles = StyleSheet.create({

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
    height: 96,
    backgroundColor: '#F8FAFD',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 18,
    paddingBottom: 9,
    paddingTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },

  backButton: {
    width: 32,
    height: 32,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 34,
    lineHeight: 34,
    color: '#062D47',
    fontWeight: '300',
    marginTop: -3,
  },

  headerTitle: {
    flex: 1,
    marginLeft: 8,
    fontSize: 21,
    fontWeight: '800',
    color: '#062D47',
  },

  searchButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  searchCircle: {
    width: 15,
    height: 15,
    borderWidth: 2.5,
    borderColor: '#062D47',
    borderRadius: 20,
    position: 'absolute',
    top: 5,
    left: 6,
  },

  searchHandle: {
    width: 8,
    height: 2.5,
    backgroundColor: '#062D47',
    transform: [
      {
        rotate: '45deg',
      },
    ],
    position: 'absolute',
    right: 4,
    bottom: 7,
    borderRadius: 2,
  },


  /* ==========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 6,
    paddingHorizontal: 14,
    paddingBottom: 16,
  },


  /* ==========================================================
     FILTER
  ========================================================== */

  filterScroll: {
    flexGrow: 0,
  },

  filterContainer: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    gap: 5,
  },

  filterTab: {
    height: 34,
    paddingHorizontal: 10,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#EEF2F5',
  },

  filterTabActive: {
    backgroundColor: '#163F5A',
    borderColor: '#163F5A',
  },

  filterText: {
    fontSize: 12.5,
    color: '#4D5660',
    fontWeight: '500',
  },

  filterTextActive: {
    fontSize: 12.5,
    color: '#FFFFFF',
    fontWeight: '600',
  },


  /* ==========================================================
     JOB CARD
  ========================================================== */

  jobCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 9,
    paddingHorizontal: 13,
    paddingTop: 11,
    paddingBottom: 11,
    borderWidth: 1,
    borderColor: '#EEF2F5',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.04,
    shadowRadius: 2,
    elevation: 1,
  },

  jobTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  badgeGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 1,
  },

  activeBadge: {
    height: 23,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: '#DDEFFB',
    flexDirection: 'row',
    alignItems: 'center',
  },

  activeDot: {
    width: 6,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#34749A',
    marginRight: 5,
  },

  activeBadgeText: {
    color: '#34749A',
    fontSize: 11,
    fontWeight: '600',
  },

  partnerBadge: {
    height: 23,
    paddingHorizontal: 8,
    borderRadius: 15,
    backgroundColor: '#D5ECFC',
    flexDirection: 'row',
    alignItems: 'center',
  },

  partnerIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
  },

  partnerText: {
    color: '#2D678B',
    fontSize: 11,
    fontWeight: '600',
  },

  moreIcon: {
    fontSize: 21,
    color: '#747C82',
    lineHeight: 21,
    marginLeft: 8,
  },


  /* ==========================================================
     JOB TITLE
  ========================================================== */

  jobTitle: {
    marginTop: 12,
    color: '#102A3D',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },


  /* ==========================================================
     SUBTITLE
  ========================================================== */

  subtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  subtitleIcon: {
    width: 14,
    height: 14,
    marginRight: 5,
  },

  subtitleText: {
    color: '#2D668C',
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },


  /* ==========================================================
     SALARY
  ========================================================== */

  salaryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E7F2FC',
    borderRadius: 9,
    minHeight: 28,
    paddingHorizontal: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  salaryIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  salaryText: {
    color: '#123C58',
    fontSize: 12,
    fontWeight: '600',
  },


  /* ==========================================================
     APPLICANT
  ========================================================== */

  applicantBox: {
    marginTop: 8,
    minHeight: 56,
    borderRadius: 13,
    backgroundColor: '#E7F3FD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  applicantLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  applicantIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#123E5C',
    alignItems: 'center',
    justifyContent: 'center',
  },

  applicantIcon: {
    width: 22,
    height: 22,
  },

  applicantInformation: {
    marginLeft: 8,
  },

  applicantTitle: {
    color: '#102A3D',
    fontSize: 15,
    fontWeight: '800',
  },

  candidateText: {
    color: '#707A82',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 1,
  },


  /* ==========================================================
     VERIFICATION
  ========================================================== */

  verificationBadge: {
    minHeight: 27,
    paddingHorizontal: 7,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 155,
  },

  verificationDanger: {
    backgroundColor: '#FFD6D5',
  },

  verificationNormal: {
    backgroundColor: '#DCEFFC',
  },

  verificationIcon: {
    width: 13,
    height: 13,
    marginRight: 3,
  },

  verificationText: {
    fontSize: 11,
    fontWeight: '700',
  },

  verificationTextDanger: {
    color: '#B62828',
  },

  verificationTextNormal: {
    color: '#397295',
  },


  /* ==========================================================
     BOTTOM JOB
  ========================================================== */

  jobBottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  deadlineContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingRight: 7,
  },

  clockIcon: {
    width: 15,
    height: 15,
    marginTop: 1,
    marginRight: 4,
  },

  deadlineText: {
    color: '#555D65',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 15,
  },

  remainingText: {
    color: '#D72E32',
    fontSize: 11,
    fontWeight: '700',
    lineHeight: 15,
  },


  /* ==========================================================
     KELOLA PELAMAR
  ========================================================== */

  manageButton: {
    minWidth: 124,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#073651',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 9,
  },

  manageText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
    lineHeight: 14,
    textAlign: 'center',
  },

  manageCountCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#45657A',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 7,
  },

  manageCountText: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: '700',
  },


  /* ==========================================================
     REVIEW CARD
  ========================================================== */

  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EEF2F5',
    borderLeftWidth: 4,
    borderLeftColor: '#8ACCF3',
  },

  reviewTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reviewStatusBadge: {
    minHeight: 25,
    borderRadius: 16,
    paddingHorizontal: 9,
    backgroundColor: '#A9DDFC',
    flexDirection: 'row',
    alignItems: 'center',
  },

  reviewStatusIcon: {
    color: '#31729A',
    fontSize: 14,
    marginRight: 4,
    fontWeight: '700',
  },

  reviewStatusText: {
    color: '#347293',
    fontSize: 11,
    fontWeight: '700',
  },

  reviewTitle: {
    marginTop: 12,
    color: '#102A3D',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '800',
  },

  reviewSubtitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  smallLocationIcon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  reviewSubtitle: {
    color: '#286489',
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },

  validationBox: {
    backgroundColor: '#DDEFFC',
    borderRadius: 12,
    padding: 10,
    flexDirection: 'row',
    marginTop: 8,
  },

  validationIcon: {
    width: 20,
    height: 20,
    marginRight: 7,
    marginTop: 1,
  },

  validationTextContainer: {
    flex: 1,
  },

  validationTitle: {
    color: '#19384C',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 16,
  },

  validationDescription: {
    color: '#53636E',
    fontSize: 11,
    lineHeight: 15,
    marginTop: 3,
  },

  reviewBottom: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  noApplicant: {
    color: '#7B7F84',
    fontSize: 11,
    fontStyle: 'italic',
    fontWeight: '600',
    flex: 1,
  },

  validationButton: {
    height: 45,
    borderRadius: 13,
    paddingHorizontal: 11,
    backgroundColor: '#D8ECFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  validationButtonIcon: {
    width: 17,
    height: 17,
    marginRight: 5,
  },

  validationButtonText: {
    color: '#173D56',
    fontSize: 12,
    fontWeight: '700',
  },


  /* ==========================================================
     BOTTOM SPACE
  ========================================================== */

  bottomSpace: {
    height: 8,
  },

});

export default LowonganPerusahaanScreen;