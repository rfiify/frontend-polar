import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

const DashboardPerusahaan = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFD"
        translucent={false}
      />

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <View style={styles.header}>
        <View style={styles.headerLeft}>

          {/* LOGO POLAR */}
          <View style={styles.logoBox}>
            <Text style={styles.logoP}>P</Text>
          </View>

          <View style={styles.headerInfo}>

            <View style={styles.polarRow}>
              <Text style={styles.polarText}>POLAR</Text>

              <View style={styles.mitraBadge}>
                <Text style={styles.mitraText}>Mitra</Text>
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

            <Text style={styles.bellIcon}>♧</Text>

            <View style={styles.headerNotificationDot} />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.profileButton}>

            <Text style={styles.profileIcon}>♙</Text>

          </TouchableOpacity>

        </View>
      </View>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>

        {/* ================================================= */}
        {/* WELCOME CARD */}
        {/* ================================================= */}

        <View style={styles.welcomeCard}>

          <View style={styles.companyIcon}>
            <Text style={styles.companyIconText}>▣</Text>
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

              <Text style={styles.verifiedIcon}>
                ✓
              </Text>

            </View>

            <View style={styles.recruitmentBadge}>
              <Text style={styles.recruitmentText}>
                Mitra Rekrutmen Polinela
              </Text>
            </View>

          </View>

          <View style={styles.activeDot} />

        </View>

        {/* ================================================= */}
        {/* RINGKASAN */}
        {/* ================================================= */}

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

        {/* ================================================= */}
        {/* STATISTIK */}
        {/* ================================================= */}

        <View style={styles.statsRow}>

          {/* LOWONGAN */}
          <View style={styles.statCard}>

            <View style={styles.statTop}>

              <View style={styles.darkIcon}>
                <Text style={styles.darkIconText}>
                  □
                </Text>
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
                <Text style={styles.blueIconText}>
                  ♙
                </Text>
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

        {/* ================================================= */}
        {/* PERLU DIVERIFIKASI */}
        {/* ================================================= */}

        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.verificationCard}>

          <View style={styles.verificationIcon}>
            <Text style={styles.verificationIconText}>
              !
            </Text>
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

        {/* ================================================= */}
        {/* MANAJEMEN LOWONGAN */}
        {/* ================================================= */}

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
          style={styles.addJobButton}>

          <Text style={styles.addJobIcon}>
            ＋
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
            <Text style={styles.allJobsIconText}>
              ▤
            </Text>
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

        {/* ================================================= */}
        {/* NOTIFIKASI */}
        {/* ================================================= */}

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
            <Text style={styles.notificationIconText}>
              +
            </Text>
          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Pelamar baru untuk posisi Web
              {'\n'}
              Developer.
            </Text>

            <View style={styles.timeRow}>

              <Text style={styles.timeIcon}>
                ◷
              </Text>

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
            <Text style={styles.notificationIconText}>
              !
            </Text>
          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Ada 3 pelamar yang menunggu
              {'\n'}
              verifikasi.
            </Text>

            <View style={styles.timeRow}>

              <Text style={styles.timeIcon}>
                ◷
              </Text>

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
            <Text style={styles.notificationIconText}>
              ✓
            </Text>
          </View>

          <View style={styles.notificationContent}>

            <Text style={styles.notificationMessage}>
              Lowongan UI/UX Designer berhasil
              {'\n'}
              dipublikasikan.
            </Text>

            <View style={styles.timeRow}>

              <Text style={styles.timeIcon}>
                ◷
              </Text>

              <Text style={styles.timeText}>
                2 jam lalu
              </Text>

            </View>

          </View>

        </TouchableOpacity>

        <View style={styles.bottomSpacer} />

      </ScrollView>

      {/* ================================================= */}
      {/* BOTTOM NAVIGATION */}
      {/* ================================================= */}

      <View style={styles.bottomNavigation}>

        {/* BERANDA */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.bottomItem}>

          <Text style={styles.bottomIconActive}>
            ⌂
          </Text>

          <Text style={styles.bottomActiveText}>
            Beranda
          </Text>

        </TouchableOpacity>

        {/* LOWONGAN */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.bottomItem}>

          <Text style={styles.bottomIcon}>
            □
          </Text>

          <Text style={styles.bottomText}>
            Lowongan
          </Text>

        </TouchableOpacity>

        {/* TALENTA */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.bottomItem}>

          <Text style={styles.bottomIcon}>
            ♙
          </Text>

          <Text style={styles.bottomText}>
            Talenta
          </Text>

        </TouchableOpacity>

        {/* CHAT */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.bottomItem}>

          <Text style={styles.bottomIcon}>
            ▢
          </Text>

          <Text style={styles.bottomText}>
            Chat
          </Text>

        </TouchableOpacity>

        {/* PROFIL */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.bottomItem}>

          <Text style={styles.bottomIcon}>
            ▣
          </Text>

          <Text style={styles.bottomText}>
            Profil
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default DashboardPerusahaan;

const styles = StyleSheet.create({

  // =================================================
  // SAFE AREA
  // =================================================

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // =================================================
  // HEADER
  // =================================================

  header: {
    height: 112,

    backgroundColor: '#F8FAFD',

    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',

    paddingHorizontal: 20,

    // DITURUNKAN LAGI
    paddingTop: 48,
    paddingBottom: 12,

    borderBottomWidth: 1,
    borderBottomColor: '#EEF1F4',
  },

  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 40,
    height: 40,

    borderRadius: 9,

    backgroundColor: '#173F5B',

    justifyContent: 'center',
    alignItems: 'center',
  },

  logoP: {
    color: '#FFFFFF',

    fontSize: 22,

    fontWeight: '800',
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
    width: 36,
    height: 38,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 6,
  },

  bellIcon: {
    fontSize: 27,

    color: '#27343D',

    fontWeight: '700',
  },

  headerNotificationDot: {
    position: 'absolute',

    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#326B8A',

    top: 5,
    right: 2,
  },

  profileButton: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#002D46',

    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    color: '#FFFFFF',

    fontSize: 23,

    fontWeight: '700',
  },

  // =================================================
  // CONTENT
  // =================================================

  scrollContent: {
    paddingHorizontal: 18,

    paddingTop: 19,

    paddingBottom: 0,
  },

  // =================================================
  // WELCOME
  // =================================================

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

  companyIconText: {
    color: '#FFFFFF',

    fontSize: 28,

    fontWeight: '700',
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

  verifiedIcon: {
    color: '#326B8A',

    fontSize: 18,

    fontWeight: '900',

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

  // =================================================
  // RINGKASAN
  // =================================================

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

  // =================================================
  // STATISTICS
  // =================================================

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

  darkIconText: {
    color: '#FFFFFF',

    fontSize: 26,

    fontWeight: '700',
  },

  blueIcon: {
    width: 41,
    height: 41,

    borderRadius: 10,

    backgroundColor: '#A9D9FA',

    alignItems: 'center',
    justifyContent: 'center',
  },

  blueIconText: {
    color: '#326B8A',

    fontSize: 26,

    fontWeight: '700',
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

    fontWeight: '800',

    marginTop: 7,
  },

  statTitle: {
    color: '#082F47',

    fontSize: 14,

    lineHeight: 18,

    fontWeight: '800',
  },

  statDescription: {
    color: '#5B6267',

    fontSize: 10,

    lineHeight: 13,

    marginTop: 2,
  },

  // =================================================
  // VERIFICATION
  // =================================================

  verificationCard: {
    height: 88,

    marginTop: 10,

    borderRadius: 14,

    borderWidth: 1,
    borderColor: '#F0F1F2',

    backgroundColor: '#FFFFFF',

    flexDirection: 'row',

    alignItems: 'center',

    paddingLeft: 12,

    overflow: 'hidden',
  },

  verificationIcon: {
    width: 41,
    height: 41,

    borderRadius: 9,

    backgroundColor: '#D7EBFC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  verificationIconText: {
    color: '#173F5B',

    fontSize: 25,

    fontWeight: '900',
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
    color: '#082F47',

    fontSize: 18,

    lineHeight: 21,

    fontWeight: '800',
  },

  actionBadge: {
    marginLeft: 6,

    backgroundColor: '#D6EAFB',

    paddingHorizontal: 7,
    paddingVertical: 3,

    borderRadius: 8,
  },

  actionText: {
    color: '#4D555A',

    fontSize: 8,

    fontWeight: '600',
  },

  verificationTitle: {
    color: '#082F47',

    fontSize: 14,

    lineHeight: 17,

    fontWeight: '800',

    marginTop: 2,
  },

  verificationDescription: {
    color: '#5A6166',

    fontSize: 9,

    lineHeight: 12,

    marginTop: 2,
  },

  verificationArrow: {
    width: 67,
    height: 67,

    borderRadius: 34,

    backgroundColor: '#E5F2FD',

    marginRight: -22,

    alignItems: 'center',
    justifyContent: 'center',
  },

  arrowText: {
    color: '#082F47',

    fontSize: 28,

    fontWeight: '700',
  },

  // =================================================
  // MANAGEMENT
  // =================================================

  managementHeader: {
    marginTop: 27,

    marginBottom: 11,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  managementTitle: {
    color: '#082F47',

    fontSize: 19,

    lineHeight: 23,

    fontWeight: '800',
  },

  quickAccess: {
    color: '#555C61',

    fontSize: 10,
  },

  addJobButton: {
    height: 43,

    borderRadius: 10,

    backgroundColor: '#002F48',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  addJobIcon: {
    color: '#FFFFFF',

    fontSize: 22,

    fontWeight: '500',
  },

  addJobText: {
    color: '#FFFFFF',

    fontSize: 13,

    fontWeight: '800',

    marginLeft: 6,
  },

  allJobsCard: {
    height: 63,

    marginTop: 8,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#F0F1F2',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 9,

    flexDirection: 'row',

    alignItems: 'center',
  },

  allJobsIcon: {
    width: 39,
    height: 39,

    borderRadius: 9,

    backgroundColor: '#DDEFFC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  allJobsIconText: {
    color: '#326B8A',

    fontSize: 23,

    fontWeight: '700',
  },

  allJobsContent: {
    flex: 1,

    marginLeft: 10,
  },

  allJobsTitle: {
    color: '#082F47',

    fontSize: 12,

    lineHeight: 15,

    fontWeight: '800',
  },

  allJobsDescription: {
    color: '#5B6267',

    fontSize: 9,

    lineHeight: 12,

    marginTop: 2,
  },

  chevron: {
    color: '#73797D',

    fontSize: 26,

    fontWeight: '500',

    marginRight: 3,
  },

  // =================================================
  // NOTIFICATION
  // =================================================

  notificationHeader: {
    marginTop: 27,

    marginBottom: 11,

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  notificationTitleRow: {
    flexDirection: 'row',

    alignItems: 'center',
  },

  notificationTitle: {
    color: '#082F47',

    fontSize: 19,

    lineHeight: 23,

    fontWeight: '800',
  },

  titleDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#326B8A',

    marginLeft: 5,
  },

  seeAll: {
    color: '#326B8A',

    fontSize: 10,

    fontWeight: '700',
  },

  notificationCard: {
    minHeight: 70,

    marginBottom: 8,

    borderRadius: 12,

    borderWidth: 1,
    borderColor: '#F0F1F2',

    backgroundColor: '#FFFFFF',

    paddingHorizontal: 9,
    paddingVertical: 9,

    flexDirection: 'row',

    alignItems: 'flex-start',
  },

  notificationIcon: {
    width: 39,
    height: 39,

    borderRadius: 9,

    backgroundColor: '#B5DFF9',

    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationIconText: {
    color: '#326B8A',

    fontSize: 23,

    fontWeight: '800',
  },

  notificationContent: {
    flex: 1,

    marginLeft: 10,
  },

  notificationMessage: {
    color: '#082F47',

    fontSize: 11,

    lineHeight: 15,

    fontWeight: '800',
  },

  timeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 3,
  },

  timeIcon: {
    color: '#73797D',

    fontSize: 15,
  },

  timeText: {
    color: '#73797D',

    fontSize: 9,

    marginLeft: 3,
  },

  notificationDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#326B8A',

    marginTop: 3,
  },

  bottomSpacer: {
    height: 18,
  },

  // =================================================
  // BOTTOM NAVIGATION
  // =================================================

  bottomNavigation: {
    height: 64,

    backgroundColor: '#FFFFFF',

    borderTopWidth: 1,

    borderTopColor: '#ECEFF1',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',

    paddingHorizontal: 3,
  },

  bottomItem: {
    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },

  bottomIcon: {
    color: '#4F555A',

    fontSize: 21,

    fontWeight: '700',
  },

  bottomIconActive: {
    color: '#082F47',

    fontSize: 22,

    fontWeight: '800',
  },

  bottomText: {
    color: '#4F555A',

    fontSize: 10,

    lineHeight: 13,

    fontWeight: '600',

    marginTop: 2,
  },

  bottomActiveText: {
    color: '#082F47',

    fontSize: 10,

    lineHeight: 13,

    fontWeight: '800',

    marginTop: 2,
  },
});