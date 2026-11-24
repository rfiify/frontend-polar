import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import PerusahaanNavbar from './PerusahaanNavbar';

const logoPolar = require('../assets/logoPolar.png');

const iconBell = require('../assets/iconBell.png');
const iconProfile = require('../assets/iconProfile.png');

const iconCompany = require('../assets/perusahaan/iconCompany.png');
const iconVerified = require('../assets/perusahaan/iconVerified.png');

const iconBriefcase = require('../assets/perusahaan/iconBriefcase.png');
const iconUsers = require('../assets/perusahaan/iconUsers.png');
const iconVerification = require('../assets/perusahaan/iconVerification.png');

const iconList = require('../assets/perusahaan/iconList.png');
const iconApplicant = require('../assets/perusahaan/iconApplicant.png');
const iconClock = require('../assets/perusahaan/iconClock.png');
const iconCheck = require('../assets/perusahaan/iconCheck.png');

const navHome = require('../assets/navbar/navHome.png');
const navJobs = require('../assets/navbar/navJobs.png');
const navTalenta = require('../assets/navbar/navTalenta.png');
const navChat = require('../assets/navbar/navChat.png');
const navProfile = require('../assets/navbar/navProfile.png');

const DashboardPerusahaan = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFD"
        translucent={false}
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>

          {/* LOGO POLAR */}
          <Image
            source={logoPolar}
            style={styles.logoPolar}
            resizeMode="contain"
          />

          <View style={styles.headerInfo}>

            <View style={styles.polarRow}>

              <Text style={styles.polarText}>
                POLAR
              </Text>

              <View style={styles.mitraBadge}>
                <Text style={styles.mitraText}>
                  Mitra
                </Text>
              </View>

            </View>

            <Text style={styles.berandaText}>
              Beranda
            </Text>

          </View>

        </View>

        {/* HEADER KANAN */}
        <View style={styles.headerRight}>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.notificationButton}>

            <Image
              source={iconBell}
              style={styles.bellImage}
              resizeMode="contain"
            />

            <View style={styles.headerNotificationDot} />

          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.profileButton}>

            <Image
              source={iconProfile}
              style={styles.profileImage}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </View>
      </View>

      {/* =========================================================
          CONTENT
      ========================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* =========================================================
            WELCOME CARD
        ========================================================= */}

        <View style={styles.welcomeCard}>

          <View style={styles.companyIcon}>
            <Image
              source={iconCompany}
              style={styles.companyIconImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.welcomeContent}>

            <Text style={styles.welcomeText}>
              Selamat datang,
            </Text>

            <View style={styles.companyNameRow}>

              <Text
                numberOfLines={1}
                style={styles.companyName}>
                PT Contoh Perusahaan
              </Text>

              <Image
                source={iconVerified}
                style={styles.verifiedImage}
                resizeMode="contain"
              />

            </View>

            <View style={styles.recruitmentBadge}>

              <Text style={styles.recruitmentText}>
                Mitra Rekrutmen Polinela
              </Text>

            </View>

          </View>

          <View style={styles.activeDot} />

        </View>

        {/* =========================================================
            RINGKASAN REKRUTMEN
        ========================================================= */}

        <View style={styles.sectionHeader}>

          <View style={styles.sectionHeaderLeft}>

            <Text style={styles.sectionTitle}>
              Ringkasan Rekrutmen
            </Text>

            <Text style={styles.sectionSubtitle}>
              Status rekrutmen aktif saat ini
            </Text>

          </View>

          <View style={styles.realtimeBadge}>

            <Text style={styles.realtimeText}>
              Realtime
            </Text>

          </View>

        </View>

        {/* =========================================================
            STATISTIK
        ========================================================= */}

        <View style={styles.statsRow}>

          {/* LOWONGAN */}
          <View style={styles.statCard}>

            <View style={styles.statTop}>

              <View style={styles.darkIcon}>

                <Image
                  source={iconBriefcase}
                  style={styles.statIconImage}
                  resizeMode="contain"
                />

              </View>

              <Text style={styles.statStatus}>
                Aktif
              </Text>

            </View>

            <Text style={styles.statNumber}>
              5
            </Text>

            <Text style={styles.statTitle}>
              Lowongan
              {'\n'}
              Terpasang
            </Text>

            <Text style={styles.statDescription}>
              Sedang tayang
            </Text>

          </View>

          {/* TOTAL PELAMAR */}
          <View style={styles.statCard}>

            <View style={styles.statTop}>

              <View style={styles.blueIcon}>

                <Image
                  source={iconUsers}
                  style={styles.statIconImage}
                  resizeMode="contain"
                />

              </View>

              <Text style={styles.statStatus}>
                +4 hr ini
              </Text>

            </View>

            <Text style={styles.statNumber}>
              28
            </Text>

            <Text style={styles.statTitle}>
              Total Pelamar
            </Text>

            <Text style={styles.statDescription}>
              Semua lowongan
            </Text>

          </View>

        </View>

        {/* =========================================================
            PERLU DIVERIFIKASI
        ========================================================= */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.verificationCard}>

          <View style={styles.verificationIcon}>

            <Image
              source={iconVerification}
              style={styles.verificationImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.verificationContent}>

            <View style={styles.verificationTop}>

              <Text style={styles.verificationNumber}>
                8
              </Text>

              <View style={styles.actionBadge}>

                <Text style={styles.actionText}>
                  Tindakan Diperlukan
                </Text>

              </View>

            </View>

            <Text style={styles.verificationTitle}>
              Perlu Diverifikasi
            </Text>

            <Text style={styles.verificationDescription}>
              Pelamar menunggu verifikasi & tinjauan
              {'\n'}
              dokumen
            </Text>

          </View>

          <View style={styles.verificationArrow}>

            <Text style={styles.arrowText}>
              →
            </Text>

          </View>

        </TouchableOpacity>

        {/* =========================================================
            MANAJEMEN LOWONGAN
        ========================================================= */}

        <View style={styles.managementHeader}>

          <Text style={styles.managementTitle}>
            Manajemen Lowongan
          </Text>

          <Text style={styles.quickAccess}>
            Akses Cepat
          </Text>

        </View>

        {/* TAMBAH LOWONGAN */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.addJobButton}
          onPress={() => navigation.navigate('TambahLowongan')}>

          <Text style={styles.addJobIcon}>
            ⊕
          </Text>

          <Text style={styles.addJobText}>
            Tambah Lowongan Baru
          </Text>

        </TouchableOpacity>

        {/* LIHAT SEMUA */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.allJobsCard}>

          <View style={styles.allJobsIcon}>

            <Image
              source={iconList}
              style={styles.allJobsIconImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.allJobsContent}>

            <Text style={styles.allJobsTitle}>
              Lihat Semua Lowongan
            </Text>

            <Text style={styles.allJobsDescription}>
              Kelola dan pantau lowongan perusahaan
            </Text>

          </View>

          <Text style={styles.chevron}>
            ›
          </Text>

        </TouchableOpacity>

        {/* =========================================================
            NOTIFIKASI
        ========================================================= */}

        <View style={styles.notificationHeader}>

          <View style={styles.notificationTitleRow}>

            <Text style={styles.notificationTitle}>
              Notifikasi Terbaru
            </Text>

            <View style={styles.titleDot} />

          </View>

          <TouchableOpacity activeOpacity={0.7}>

            <Text style={styles.seeAll}>
              Lihat Semua
            </Text>

          </TouchableOpacity>

        </View>

        {/* NOTIFIKASI 1 */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.notificationCard}>

          <View style={styles.notificationIcon}>

            <Image
              source={iconApplicant}
              style={styles.notificationImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Pelamar baru untuk posisi Web
              {'\n'}
              Developer.
            </Text>

            <View style={styles.timeRow}>

              <Image
                source={iconClock}
                style={styles.timeImage}
                resizeMode="contain"
              />

              <Text style={styles.timeText}>
                10 menit lalu
              </Text>

            </View>

          </View>

          <View style={styles.notificationDot} />

        </TouchableOpacity>

        {/* NOTIFIKASI 2 */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.notificationCard}>

          <View style={styles.notificationIcon}>

            <Image
              source={iconVerification}
              style={styles.notificationImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Ada 3 pelamar yang menunggu
              {'\n'}
              verifikasi.
            </Text>

            <View style={styles.timeRow}>

              <Image
                source={iconClock}
                style={styles.timeImage}
                resizeMode="contain"
              />

              <Text style={styles.timeText}>
                45 menit lalu
              </Text>

            </View>

          </View>

          <View style={styles.notificationDot} />

        </TouchableOpacity>

        {/* NOTIFIKASI 3 */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.notificationCard}>

          <View style={styles.notificationIcon}>

            <Image
              source={iconCheck}
              style={styles.notificationImage}
              resizeMode="contain"
            />

          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Lowongan UI/UX Designer berhasil
              {'\n'}
              dipublikasikan.
            </Text>

            <View style={styles.timeRow}>

              <Image
                source={iconClock}
                style={styles.timeImage}
                resizeMode="contain"
              />

              <Text style={styles.timeText}>
                2 jam lalu
              </Text>

            </View>

          </View>

        </TouchableOpacity>

        <View style={styles.bottomSpacer} />

      </ScrollView>

      {/* =========================================================
          BOTTOM NAVIGATION
      ========================================================= */}

      <PerusahaanNavbar
        navigation={navigation}
        activeScreen="DashboardPerusahaan"
      />

    </SafeAreaView>
  );
};

export default DashboardPerusahaan;

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header: {
    height: 108,
    backgroundColor: '#F8FAFD',

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 14,

    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoPolar: {
    width: 43,
    height: 43,
  },

  headerInfo: {
    marginLeft: 9,
  },

  polarRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  polarText: {
    color: '#082F47',
    fontSize: 21,
    lineHeight: 23,
    fontWeight: '800',
  },

  mitraBadge: {
    marginLeft: 6,

    backgroundColor: '#C6E2F8',

    paddingHorizontal: 8,
    paddingVertical: 3,

    borderRadius: 9,
  },

  mitraText: {
    color: '#326B8A',
    fontSize: 11,
    fontWeight: '700',
  },

  berandaText: {
    color: '#555C61',
    fontSize: 12,
    marginTop: 2,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationButton: {
    width: 38,
    height: 40,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 7,
  },

  bellImage: {
    width: 25,
    height: 25,
  },

  headerNotificationDot: {
    position: 'absolute',

    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#326B8A',

    top: 4,
    right: 2,
  },

  profileButton: {
    width: 40,
    height: 40,

    borderRadius: 20,

    backgroundColor: '#002D46',

    alignItems: 'center',
    justifyContent: 'center',
  },

  profileImage: {
    width: 24,
    height: 24,
  },

  scrollContent: {
    paddingHorizontal: 18,
    paddingTop: 19,
    paddingBottom: 18,
  },

  welcomeCard: {
    minHeight: 112,

    borderRadius: 15,

    borderWidth: 1,
    borderColor: '#F0F1F2',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 14,
    paddingVertical: 14,
  },

  companyIcon: {
    width: 53,
    height: 53,

    borderRadius: 12,

    backgroundColor: '#173F5B',

    alignItems: 'center',
    justifyContent: 'center',
  },

  companyIconImage: {
    width: 31,
    height: 31,
  },

  welcomeContent: {
    flex: 1,
    marginLeft: 11,
  },

  welcomeText: {
    color: '#4E555A',
    fontSize: 13,
    lineHeight: 16,
  },

  companyNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  companyName: {
    color: '#082F47',
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '800',
    flexShrink: 1,
  },

  verifiedImage: {
    width: 20,
    height: 20,
    marginLeft: 4,
  },

  recruitmentBadge: {
    alignSelf: 'flex-start',

    marginTop: 5,

    backgroundColor: '#B9DFF8',

    paddingHorizontal: 9,
    paddingVertical: 4,

    borderRadius: 9,
  },

  recruitmentText: {
    color: '#326B8A',
    fontSize: 10,
    fontWeight: '700',
  },

  activeDot: {
    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: '#00585A',

    marginLeft: 5,
  },

  sectionHeader: {
    marginTop: 27,
    marginBottom: 12,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  sectionHeaderLeft: {
    flex: 1,
  },

  sectionTitle: {
    color: '#082F47',

    fontSize: 20,
    lineHeight: 24,

    fontWeight: '800',
  },

  sectionSubtitle: {
    color: '#555C61',

    fontSize: 12,
    lineHeight: 15,

    marginTop: 3,
  },

  realtimeBadge: {
    backgroundColor: '#D6EAFB',

    paddingHorizontal: 10,
    paddingVertical: 6,

    borderRadius: 11,

    marginLeft: 5,
  },

  realtimeText: {
    color: '#4D555A',

    fontSize: 10,
    fontWeight: '600',
  },

  statsRow: {
    flexDirection: 'row',
    gap: 9,
  },

  statCard: {
    flex: 1,

    height: 151,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#F0F1F2',

    backgroundColor: '#FFFFFF',

    padding: 13,
  },

  statTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  darkIcon: {
    width: 41,
    height: 41,

    borderRadius: 10,

    backgroundColor: '#173F5B',

    alignItems: 'center',
    justifyContent: 'center',
  },

  blueIcon: {
    width: 41,
    height: 41,

    borderRadius: 10,

    backgroundColor: '#A9D9FA',

    alignItems: 'center',
    justifyContent: 'center',
  },

  statIconImage: {
    width: 25,
    height: 25,
  },

  statStatus: {
    color: '#326B8A',

    fontSize: 10,
    fontWeight: '700',
  },

  statNumber: {
    color: '#062D47',

    fontSize: 30,
    lineHeight: 33,

    fontWeight: '900',

    marginTop: 10,
  },

  statTitle: {
    color: '#173F5B',

    fontSize: 14,
    lineHeight: 18,

    fontWeight: '800',

    marginTop: 2,
  },

  statDescription: {
    color: '#737A7F',

    fontSize: 10,

    marginTop: 4,
  },

  verificationCard: {
    minHeight: 123,

    marginTop: 14,

    borderRadius: 15,

    backgroundColor: '#EAF4FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 13,
    paddingVertical: 13,
  },

  verificationIcon: {
    width: 45,
    height: 45,

    borderRadius: 12,

    backgroundColor: '#C5E4FA',

    alignItems: 'center',
    justifyContent: 'center',
  },

  verificationImage: {
    width: 27,
    height: 27,
  },

  verificationContent: {
    flex: 1,
    marginLeft: 11,
  },

  verificationTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verificationNumber: {
    color: '#173F5B',

    fontSize: 25,
    fontWeight: '900',
  },

  actionBadge: {
    marginLeft: 8,

    backgroundColor: '#C6E2F8',

    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 10,
  },

  actionText: {
    color: '#326B8A',

    fontSize: 9,
    fontWeight: '700',
  },

  verificationTitle: {
    color: '#173F5B',

    fontSize: 16,
    fontWeight: '800',

    marginTop: 2,
  },

  verificationDescription: {
    color: '#65717A',

    fontSize: 10,
    lineHeight: 15,

    marginTop: 3,
  },

  verificationArrow: {
    width: 45,
    height: 45,

    borderRadius: 23,

    backgroundColor: '#DCEEFF',

    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowText: {
    color: '#173F5B',

    fontSize: 27,
    fontWeight: '300',
  },

  managementHeader: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 27,
    marginBottom: 11,
  },

  managementTitle: {
    color: '#082F47',

    fontSize: 19,
    fontWeight: '800',
  },

  quickAccess: {
    color: '#777E83',

    fontSize: 11,
    fontWeight: '500',
  },

  addJobButton: {
    height: 58,

    borderRadius: 11,

    backgroundColor: '#103F5D',

    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 15,
  },

  addJobIcon: {
    color: '#FFFFFF',

    fontSize: 28,
    fontWeight: '300',

    marginRight: 8,
  },

  addJobText: {
    color: '#FFFFFF',

    fontSize: 15,
    fontWeight: '700',
  },

  allJobsCard: {
    minHeight: 73,

    marginTop: 10,

    borderRadius: 13,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EEF1F4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,
  },

  allJobsIcon: {
    width: 42,
    height: 42,

    borderRadius: 11,

    backgroundColor: '#E5F2FC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  allJobsIconImage: {
    width: 24,
    height: 24,
  },

  allJobsContent: {
    flex: 1,
    marginLeft: 10,
  },

  allJobsTitle: {
    color: '#173F5B',

    fontSize: 14,
    fontWeight: '800',
  },

  allJobsDescription: {
    color: '#777E83',

    fontSize: 10,

    marginTop: 4,
  },

  chevron: {
    color: '#777E83',

    fontSize: 29,
    fontWeight: '300',

    marginLeft: 7,
  },

  notificationHeader: {
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'space-between',

    marginTop: 27,
    marginBottom: 10,
  },

  notificationTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationTitle: {
    color: '#082F47',

    fontSize: 19,
    fontWeight: '800',
  },

  titleDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#326B8A',

    marginLeft: 7,
  },

  seeAll: {
    color: '#326B8A',

    fontSize: 11,
    fontWeight: '600',
  },

  notificationCard: {
    minHeight: 78,

    borderRadius: 13,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#EEF1F4',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 12,

    marginBottom: 8,
  },

  notificationIcon: {
    width: 42,
    height: 42,

    borderRadius: 11,

    backgroundColor: '#E5F2FC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationImage: {
    width: 24,
    height: 24,
  },

  notificationContent: {
    flex: 1,
    marginLeft: 10,
  },

  notificationMessage: {
    color: '#173F5B',

    fontSize: 12,
    lineHeight: 17,

    fontWeight: '600',
  },

  timeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,
  },

  timeImage: {
    width: 13,
    height: 13,

    marginRight: 4,
  },

  timeText: {
    color: '#777E83',

    fontSize: 9,
  },

  notificationDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#326B8A',

    marginLeft: 6,
  },

  bottomSpacer: {
    height: 20,
  },

});