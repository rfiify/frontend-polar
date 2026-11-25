import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import PerusahaanNavbar from './PerusahaanNavbar';

const {width} = Dimensions.get('window');

// ============================================================
// ASSETS - PROFIL PERUSAHAAN
// ============================================================

// Logo / foto perusahaan
const iconProfilePerusahaan = require('../assets/perusahaan/iconProfilePerusahaan.png');

// Badge terverifikasi pada logo perusahaan
const iconVerified = require('../assets/perusahaan/iconVerified.png');

// Tombol Edit Profil
const iconEditProfile = require('../assets/perusahaan/iconEditProfile.png');

// Status kemitraan
const iconStatusKemitraan = require('../assets/perusahaan/iconStatusKemitraan.png');

// Status terverifikasi
const iconTerverifikasi = require('../assets/perusahaan/iconTerverifikasi.png');

// Data perusahaan
const iconDataPerusahaan = require('../assets/perusahaan/iconDataPerusahaan.png');

// Profil singkat & usaha
const iconProfilUsaha = require('../assets/perusahaan/iconProfilUsaha.png');

// Lokasi & alamat
const iconLokasi = require('../assets/perusahaan/iconLokasi.png');

// Kontak & portal resmi
const iconGlobe = require('../assets/perusahaan/iconGlobe.png');

// Keamanan
const iconLock = require('../assets/perusahaan/iconLock.png');

// Ubah kata sandi
const iconPassword = require('../assets/perusahaan/iconPassword.png');

// Autentikasi dua langkah
const icon2FA = require('../assets/perusahaan/icon2FA.png');

// Keluar
const iconLogout = require('../assets/perusahaan/iconLogout.png');


const ProfilPerusahaanScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9FC"
      />

      <View style={styles.container}>

        {/* =====================================================
            HEADER
            ===================================================== */}

        <View style={styles.header}>

          {/* LOGO POLAR */}
          <View style={styles.headerBrand}>

            <View style={styles.polarLogoBox}>
              <Text style={styles.polarBuilding}>▦</Text>
            </View>

            <View style={styles.brandTextContainer}>
              <Text style={styles.polarTitle}>
                POLAR
              </Text>

              <Text style={styles.polarSubtitle}>
                AKUN
              </Text>
            </View>

          </View>


          {/* HEADER RIGHT */}
          <View style={styles.headerActions}>

            {/* SUPPORT / HEADSET */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.headerIconButton}
            >
              <Text style={styles.headsetIcon}>
                ◉
              </Text>
            </TouchableOpacity>


            {/* NOTIFICATION */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.headerIconButton}
              onPress={() =>
                navigation.navigate('NotifikasiPerusahaan')
              }
            >
              <Text style={styles.bellIcon}>
                ♧
              </Text>

              <View style={styles.notificationDot} />
            </TouchableOpacity>


            {/* PROFILE */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.profileCircle}
            >
              <Text style={styles.profilePerson}>
                ♙
              </Text>
            </TouchableOpacity>

          </View>

        </View>


        {/* =====================================================
            CONTENT
            ===================================================== */}

        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >

          {/* ===================================================
              PROFILE HERO
              =================================================== */}

          <View style={styles.profileHero}>

            {/* BACKGROUND CIRCLE */}
            <View style={styles.heroCircle} />


            {/* COMPANY LOGO */}
            <View style={styles.companyLogoWrapper}>

              <Image
                source={iconProfilePerusahaan}
                style={styles.companyLogo}
                resizeMode="cover"
              />

              <Image
                source={iconTerverifikasi}
                style={styles.verifiedBadge}
                resizeMode="contain"
              />

            </View>


            {/* COMPANY INFORMATION */}
            <View style={styles.companyInfo}>

              <View style={styles.officialBadge}>

                <Text style={styles.officialShield}>
                  ✓
                </Text>

                <Text style={styles.officialText}>
                  Mitra Industri Resmi POLAR
                </Text>

              </View>


              <Text style={styles.companyName}>
                PT Nusantara Digital Raya
              </Text>


              <View style={styles.industryRow}>

                <Text style={styles.industryIcon}>
                  ▣
                </Text>

                <Text style={styles.industryText}>
                  Teknologi & Rekayasa Perangkat Lunak
                </Text>

              </View>

            </View>


            {/* EDIT PROFIL */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.editProfileButton}
            >

              <Image
                source={iconEditProfile}
                style={styles.editIcon}
                resizeMode="contain"
              />

              <Text style={styles.editProfileText}>
                Edit Profil
              </Text>

            </TouchableOpacity>


            {/* COMPANY ID */}
            <Text style={styles.companyId}>
              ID: POL-MITRA-092
            </Text>


            {/* STATUS */}
            <View style={styles.statusCard}>

              <View style={styles.statusLeft}>

                <View style={styles.statusCircle}>
                  <Text style={styles.statusCircleText}>
                    ●
                  </Text>
                </View>

                <View>
                  <Text style={styles.statusLabel}>
                    Status Kemitraan
                  </Text>

                  <Text style={styles.statusValue}>
                    Aktif s/d 31 Des 2025
                  </Text>
                </View>

              </View>


              <View style={styles.statusDivider} />


              <View style={styles.verifiedStatus}>

                <Image
                  source={iconVerified}
                  style={styles.verifiedIcon}
                  resizeMode="contain"
                />

                <Text style={styles.verifiedText}>
                  Terverifikasi
                </Text>

              </View>

            </View>

          </View>


          {/* ===================================================
              INFORMASI PERUSAHAAN
              =================================================== */}

          <Text style={styles.sectionTitle}>
            INFORMASI PERUSAHAAN
          </Text>


          <View style={styles.informationCard}>

            {/* DATA PERUSAHAAN */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.dataCompanyRow}
            >

              <View style={styles.squareIcon}>

                <Image
                  source={iconDataPerusahaan}
                  style={styles.dataIcon}
                  resizeMode="contain"
                />

              </View>

              <View style={styles.dataTextContainer}>

                <Text style={styles.dataTitle}>
                  Data Perusahaan
                </Text>

                <Text style={styles.dataSubtitle}>
                  Identitas bisnis & operasional
                </Text>

              </View>

              <Text style={styles.arrow}>
                ›
              </Text>

            </TouchableOpacity>


            {/* PROFIL USAHA */}

            <View style={styles.infoBlueBox}>

              <Image
                source={iconProfilUsaha}
                style={styles.infoIcon}
                resizeMode="contain"
              />

              <View style={styles.infoTextContainer}>

                <Text style={styles.infoLabel}>
                  Profil Singkat & Usaha
                </Text>

                <Text style={styles.infoValue}>
                  Solusi IT & Software House Nusantara
                </Text>

              </View>

            </View>


            {/* LOKASI */}

            <View style={styles.infoBlueBox}>

              <Image
                source={iconLokasi}
                style={styles.infoIcon}
                resizeMode="contain"
              />

              <View style={styles.infoTextContainer}>

                <Text style={styles.infoLabel}>
                  Lokasi & Alamat Kantor
                </Text>

                <Text style={styles.infoValue}>
                  Bandar Lampung & Jakarta Selatan
                </Text>

              </View>

            </View>


            {/* KONTAK */}

            <View style={styles.infoBlueBoxLarge}>

              <Image
                source={iconGlobe}
                style={styles.infoIcon}
                resizeMode="contain"
              />

              <View style={styles.infoTextContainer}>

                <Text style={styles.infoLabel}>
                  Kontak & Portal Resmi
                </Text>

                <Text style={styles.infoValue}>
                  contact@nusantaradigital.id •
                </Text>

                <Text style={styles.infoValue}>
                  nusantaradigital.id
                </Text>

              </View>

            </View>

          </View>


          {/* ===================================================
              KEAMANAN
              =================================================== */}

          <View style={styles.securityTitleRow}>

            <Text style={styles.sectionTitle}>
              KEAMANAN & AKSES KAMPUS
            </Text>

            <Image
              source={iconLock}
              style={styles.lockIcon}
              resizeMode="contain"
            />

          </View>


          <View style={styles.securityCard}>

            {/* UBAH PASSWORD */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.securityRow}
            >

              <View style={styles.securityIconBox}>

                <Image
                  source={iconPassword}
                  style={styles.securityIcon}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.securityTextContainer}>

                <Text style={styles.securityTitle}>
                  Ubah Kata Sandi Perusahaan
                </Text>

                <Text style={styles.securitySubtitle}>
                  Diperbarui 45 hari yang lalu
                </Text>

              </View>


              <Text style={styles.securityArrow}>
                ›
              </Text>

            </TouchableOpacity>


            <View style={styles.horizontalDivider} />


            {/* 2FA */}

            <View style={styles.securityRow2}>

              <View style={styles.securityIconBoxShield}>

                <Image
                  source={icon2FA}
                  style={styles.securityIcon}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.securityTextContainer}>

                <Text style={styles.securityTitle}>
                  Autentikasi Dua Langkah (2FA)
                </Text>

                <Text style={styles.securitySubtitle}>
                  Proteksi via SMS / WhatsApp PIC HRD
                </Text>

                <Text style={styles.phoneText}>
                  (+62 812-***)
                </Text>

              </View>


              <View style={styles.activeBadge}>

                <Text style={styles.activeCheck}>
                  ✓
                </Text>

                <Text style={styles.activeText}>
                  Aktif
                </Text>

              </View>

            </View>

            <View style={styles.horizontalDividerBottom} />

          </View>


          {/* ===================================================
              LOGOUT
              =================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.logoutCard}
          >

            <Image
              source={iconLogout}
              style={styles.logoutIcon}
              resizeMode="contain"
            />

            <Text style={styles.logoutText}>
              Keluar dari Akun Mitra
            </Text>

          </TouchableOpacity>


          {/* ===================================================
              APP VERSION
              =================================================== */}

          <View style={styles.footerInfo}>

            <Text style={styles.footerPolar}>
              POLAR
            </Text>

            <Text style={styles.footerVersion}>
              POLAR Perusahaan v2.4.1 (Build 2024.11)
            </Text>

            <Text style={styles.footerDescription}>
              Pusat Karir & Kerjasama Industri
            </Text>

          </View>

        </ScrollView>


        {/* =====================================================
            NAVBAR
            ===================================================== */}

        <PerusahaanNavbar
          navigation={navigation}
          activeScreen="ProfilPerusahaan"
        />

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  // ==========================================================
  // BASIC
  // ==========================================================

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
    paddingBottom: 20,
  },


  // ==========================================================
  // HEADER
  // ==========================================================

  header: {
    height: 91,

    paddingHorizontal: 33,

    backgroundColor: '#F7F9FC',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  polarLogoBox: {
    width: 51,
    height: 51,

    borderRadius: 12,

    backgroundColor: '#00334E',

    alignItems: 'center',
    justifyContent: 'center',
  },

  polarBuilding: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '800',
  },

  brandTextContainer: {
    marginLeft: 10,
  },

  polarTitle: {
    color: '#102D40',

    fontSize: 23,
    fontWeight: '800',

    lineHeight: 25,
  },

  polarSubtitle: {
    color: '#2C698C',

    fontSize: 15,
    fontWeight: '700',

    letterSpacing: 0.4,

    marginTop: 1,
  },

  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerIconButton: {
    width: 39,
    height: 39,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 8,

    position: 'relative',
  },

  headsetIcon: {
    color: '#424B51',
    fontSize: 25,
  },

  bellIcon: {
    color: '#424B51',
    fontSize: 26,
  },

  notificationDot: {
    position: 'absolute',

    width: 11,
    height: 11,

    borderRadius: 6,

    backgroundColor: '#C51D2C',

    right: 5,
    top: 3,
  },

  profileCircle: {
    width: 46,
    height: 46,

    borderRadius: 23,

    backgroundColor: '#00334E',

    alignItems: 'center',
    justifyContent: 'center',
  },

  profilePerson: {
    color: '#FFFFFF',
    fontSize: 28,
  },


  // ==========================================================
  // PROFILE HERO
  // ==========================================================

  profileHero: {
    minHeight: 364,

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 33,
    paddingTop: 20,

    position: 'relative',

    overflow: 'hidden',
  },

  heroCircle: {
    position: 'absolute',

    width: 205,
    height: 205,

    borderRadius: 103,

    backgroundColor: '#DCEFFF',

    right: -43,
    top: -37,
  },

  companyLogoWrapper: {
    width: 92,
    height: 92,

    position: 'relative',
  },

  companyLogo: {
    width: 88,
    height: 88,

    borderRadius: 17,

    borderWidth: 3,
    borderColor: '#0A3853',

    backgroundColor: '#FFFFFF',
  },

  verifiedBadge: {
    position: 'absolute',

    width: 29,
    height: 29,

    right: -5,
    bottom: -4,
  },

  companyInfo: {
    marginTop: 13,
  },

  officialBadge: {
    alignSelf: 'flex-start',

    height: 31,

    paddingHorizontal: 10,

    borderRadius: 16,

    backgroundColor: '#E3EAEA',

    flexDirection: 'row',
    alignItems: 'center',
  },

  officialShield: {
    color: '#51B8B7',

    fontSize: 15,
    fontWeight: '800',

    marginRight: 5,
  },

  officialText: {
    color: '#4DB7B6',

    fontSize: 12,

    fontWeight: '800',
  },

  companyName: {
    color: '#102D40',

    fontSize: 23,

    fontWeight: '800',

    marginTop: 12,
  },

  industryRow: {
    flexDirection: 'row',
    alignItems: 'center',

    marginTop: 5,
  },

  industryIcon: {
    color: '#2E6F91',

    fontSize: 18,

    marginRight: 7,
  },

  industryText: {
    color: '#5A6167',

    fontSize: 17,

    fontWeight: '500',

    flexShrink: 1,
  },

  editProfileButton: {
    position: 'absolute',

    top: 21,
    right: 26,

    height: 62,

    paddingHorizontal: 17,

    borderRadius: 12,

    backgroundColor: '#DDEFFF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 1,
  },

  editIcon: {
    width: 22,
    height: 22,

    marginRight: 8,
  },

  editProfileText: {
    color: '#0E344D',

    fontSize: 18,

    fontWeight: '800',
  },

  companyId: {
    position: 'absolute',

    top: 87,
    right: 32,

    color: '#397394',

    fontSize: 14,

    fontWeight: '800',
  },

  statusCard: {
    height: 71,

    backgroundColor: '#E7F2FF',

    borderRadius: 12,

    marginTop: 22,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
  },

  statusLeft: {
    flex: 1,

    flexDirection: 'row',
    alignItems: 'center',
  },

  statusCircle: {
    width: 18,
    height: 18,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  statusCircleText: {
    color: '#48B5B4',

    fontSize: 18,
  },

  statusLabel: {
    color: '#5C6268',

    fontSize: 12,

    fontWeight: '700',
  },

  statusValue: {
    color: '#173248',

    fontSize: 15,

    fontWeight: '800',

    marginTop: 1,
  },

  statusDivider: {
    width: 1,
    height: 38,

    backgroundColor: '#D1DFEC',

    marginHorizontal: 12,
  },

  verifiedStatus: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingRight: 5,
  },

  verifiedIcon: {
    width: 19,
    height: 19,

    marginRight: 6,
  },

  verifiedText: {
    color: '#194A66',

    fontSize: 15,

    fontWeight: '800',
  },


  // ==========================================================
  // SECTION
  // ==========================================================

  sectionTitle: {
    color: '#356E8E',

    fontSize: 15,

    fontWeight: '800',

    letterSpacing: 0.5,
  },


  // ==========================================================
  // INFORMATION
  // ==========================================================

  informationCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 17,

    marginHorizontal: 10,
    marginTop: 11,

    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 20,

    elevation: 1,
  },

  dataCompanyRow: {
    minHeight: 64,

    flexDirection: 'row',
    alignItems: 'center',
  },

  squareIcon: {
    width: 50,
    height: 50,

    borderRadius: 12,

    backgroundColor: '#DCEEFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  dataIcon: {
    width: 27,
    height: 27,
  },

  dataTextContainer: {
    flex: 1,

    marginLeft: 14,
  },

  dataTitle: {
    color: '#132F43',

    fontSize: 18,

    fontWeight: '800',
  },

  dataSubtitle: {
    color: '#60676C',

    fontSize: 13.5,

    fontWeight: '500',

    marginTop: 1,
  },

  arrow: {
    color: '#39708E',

    fontSize: 35,

    fontWeight: '300',

    marginLeft: 7,
  },

  infoBlueBox: {
    minHeight: 76,

    borderRadius: 12,

    backgroundColor: '#F0F7FF',

    marginTop: 10,

    paddingHorizontal: 13,

    flexDirection: 'row',
    alignItems: 'center',
  },

  infoBlueBoxLarge: {
    minHeight: 98,

    borderRadius: 12,

    backgroundColor: '#F0F7FF',

    marginTop: 10,

    paddingHorizontal: 13,

    flexDirection: 'row',
    alignItems: 'center',
  },

  infoIcon: {
    width: 25,
    height: 25,

    marginRight: 13,
  },

  infoTextContainer: {
    flex: 1,
  },

  infoLabel: {
    color: '#596168',

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 2,
  },

  infoValue: {
    color: '#173248',

    fontSize: 17,

    fontWeight: '500',

    lineHeight: 23,
  },


  // ==========================================================
  // SECURITY
  // ==========================================================

  securityTitleRow: {
    marginTop: 44,
    marginHorizontal: 33,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  lockIcon: {
    width: 20,
    height: 20,
  },

  securityCard: {
    backgroundColor: '#FFFFFF',

    borderRadius: 17,

    marginHorizontal: 10,
    marginTop: 11,

    paddingHorizontal: 22,
    paddingTop: 15,
    paddingBottom: 2,

    elevation: 1,
  },

  securityRow: {
    minHeight: 75,

    flexDirection: 'row',
    alignItems: 'center',
  },

  securityRow2: {
    minHeight: 91,

    flexDirection: 'row',
    alignItems: 'center',
  },

  securityIconBox: {
    width: 50,
    height: 50,

    borderRadius: 12,

    backgroundColor: '#DCEEFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  securityIconBoxShield: {
    width: 50,
    height: 50,

    borderRadius: 12,

    backgroundColor: '#E4F1EF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  securityIcon: {
    width: 27,
    height: 27,
  },

  securityTextContainer: {
    flex: 1,

    marginLeft: 14,
  },

  securityTitle: {
    color: '#132F43',

    fontSize: 17,

    fontWeight: '800',

    lineHeight: 21,
  },

  securitySubtitle: {
    color: '#62696E',

    fontSize: 13,

    fontWeight: '500',

    lineHeight: 18,

    marginTop: 1,
  },

  phoneText: {
    color: '#62696E',

    fontSize: 13,

    fontWeight: '500',

    marginTop: 0,
  },

  securityArrow: {
    color: '#4E5C64',

    fontSize: 33,

    fontWeight: '300',

    marginLeft: 7,
  },

  horizontalDivider: {
    height: 1,

    backgroundColor: '#DDE8F0',

    marginLeft: 64,
  },

  horizontalDividerBottom: {
    height: 1,

    backgroundColor: '#DDE8F0',

    marginLeft: 64,

    marginBottom: 1,
  },

  activeBadge: {
    height: 29,

    paddingHorizontal: 10,

    borderRadius: 16,

    backgroundColor: '#E3EFEF',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 5,
  },

  activeCheck: {
    color: '#51B8B7',

    fontSize: 15,

    fontWeight: '800',

    marginRight: 3,
  },

  activeText: {
    color: '#50B2B1',

    fontSize: 12,

    fontWeight: '800',
  },


  // ==========================================================
  // LOGOUT
  // ==========================================================

  logoutCard: {
    height: 69,

    backgroundColor: '#FFFFFF',

    borderRadius: 15,

    marginHorizontal: 10,
    marginTop: 38,

    alignItems: 'center',
    justifyContent: 'center',

    flexDirection: 'row',

    elevation: 1,
  },

  logoutIcon: {
    width: 22,
    height: 22,

    marginRight: 8,
  },

  logoutText: {
    color: '#C8232C',

    fontSize: 18,

    fontWeight: '800',
  },


  // ==========================================================
  // FOOTER
  // ==========================================================

  footerInfo: {
    alignItems: 'center',

    paddingTop: 16,
    paddingBottom: 20,
  },

  footerPolar: {
    color: '#163B52',

    fontSize: 16,

    fontWeight: '800',

    marginBottom: 4,
  },

  footerVersion: {
    color: '#70767B',

    fontSize: 14,

    fontWeight: '600',

    marginBottom: 4,
  },

  footerDescription: {
    color: '#70767B',

    fontSize: 14,

    fontWeight: '600',
  },

});

export default ProfilPerusahaanScreen;