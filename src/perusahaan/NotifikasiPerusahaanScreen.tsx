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
   ASSETS NOTIFIKASI PERUSAHAAN
   ============================================================ */

// Foto Bagus Pratama
const avaBagusPratama = require('../assets/kandidat/avaBagusPratama.png');

// Icon tombol Tandai Semua Dibaca
const iconTandaiSemua = require('../assets/perusahaan/iconTandaiSemua.png');

// Icon kalender "Hari Ini"
const iconKalendar = require('../assets/perusahaan/iconKalendar.png');

// Icon Verifikasi MBKM Polinela
const iconVerifikasiMBKM = require('../assets/perusahaan/iconVerifikasiMBKM.png');

// Icon Status Lowongan
const iconStatusLowongan = require('../assets/perusahaan/iconStatusLowongan.png');

// Icon titik tiga
const iconMore = require('../assets/perusahaan/iconMore.png');


const NotifikasiPerusahaanScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>

      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9FC"
      />

      <View style={styles.container}>

        {/* ==================================================
            HEADER
            ================================================== */}

        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backArrow}>
              ‹
            </Text>
          </TouchableOpacity>

          <View style={styles.headerTextContainer}>

            <Text style={styles.headerTitle}>
              Notifikasi
            </Text>

            <Text style={styles.headerSubtitle}>
              POLAR Perusahaan
            </Text>

          </View>

        </View>


        {/* ==================================================
            CONTENT
            ================================================== */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
        >

          {/* ==================================================
              UNREAD + TANDAI SEMUA
              ================================================== */}

          <View style={styles.topActionRow}>

            <View style={styles.unreadContainer}>

              <View style={styles.unreadBlueDot} />

              <Text style={styles.unreadText}>
                4 Notifikasi Belum Dibaca
              </Text>

            </View>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.markAllButton}
            >

              <Image
                source={iconTandaiSemua}
                style={styles.markAllIcon}
                resizeMode="contain"
              />

              <Text style={styles.markAllText}>
                Tandai Semua Dibaca
              </Text>

            </TouchableOpacity>

          </View>


          {/* ==================================================
              FILTER
              ================================================== */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
            contentContainerStyle={styles.filterContainer}
          >

            {/* SEMUA */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterActive}
            >

              <Text style={styles.filterActiveText}>
                Semua
              </Text>

              <View style={styles.activeBadge}>

                <Text style={styles.activeBadgeText}>
                  4
                </Text>

              </View>

            </TouchableOpacity>


            {/* PELAMAR MASUK */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterItem}
            >

              <Text style={styles.filterText}>
                Pelamar Masuk
              </Text>

              <View style={styles.filterBadge}>

                <Text style={styles.filterBadgeText}>
                  2
                </Text>

              </View>

            </TouchableOpacity>


            {/* MBKM & DPL */}

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterItem}
            >

              <Text style={styles.filterText}>
                MBKM & DPL
              </Text>

              <View style={styles.filterBadge}>

                <Text style={styles.filterBadgeText}>
                  1
                </Text>

              </View>

            </TouchableOpacity>

          </ScrollView>


          {/* ==================================================
              HARI INI
              ================================================== */}

          <View style={styles.sectionHeader}>

            <View style={styles.sectionLeft}>

              <Image
                source={iconKalendar}
                style={styles.calendarIcon}
                resizeMode="contain"
              />

              <Text style={styles.sectionTitle}>
                Hari Ini
              </Text>

            </View>

            <Text style={styles.sectionCount}>
              3 Baru
            </Text>

          </View>


          {/* ==================================================
              NOTIFIKASI BAGUS
              ================================================== */}

          <View style={styles.notificationCard}>

            <View style={styles.avatarContainer}>

              <Image
                source={avaBagusPratama}
                style={styles.avatar}
                resizeMode="cover"
              />

            </View>


            <View style={styles.notificationBody}>

              <View style={styles.tagRow}>

                <View style={styles.tag}>

                  <Text style={styles.tagText}>
                    Pelamar Baru • D4 TRPL
                  </Text>

                </View>

                <View style={styles.unreadSmallDot} />

              </View>


              <Text style={styles.timeText}>
                10 menit lalu
              </Text>


              <Text style={styles.notificationTitle}>
                Bagus Pratama melamar posisi{' '}
                {'\n'}
                Frontend Web Developer
              </Text>


              <Text style={styles.description}>
                IPK 3.82 • Portofolio Terverifikasi{' '}
                {'\n'}
                Kemitraan Polinela. Berkas lamaran dan{' '}
                {'\n'}
                portofolio proyek siap ditinjau oleh tim{' '}
                {'\n'}
                HRD.
              </Text>

            </View>


            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.moreButton}
            >

              <Image
                source={iconMore}
                style={styles.moreIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>


          {/* ==================================================
              NOTIFIKASI MBKM
              ================================================== */}

          <View style={styles.notificationCard}>

            <View style={styles.iconContainer}>

              <Image
                source={iconVerifikasiMBKM}
                style={styles.notificationImage}
                resizeMode="contain"
              />

            </View>


            <View style={styles.notificationBody}>

              <View style={styles.tagRow}>

                <View style={styles.tag}>

                  <Text style={styles.tagText}>
                    Verifikasi MBKM Polinela
                  </Text>

                </View>

                <View style={styles.unreadSmallDot} />

              </View>


              <Text style={styles.timeText}>
                2 jam lalu
              </Text>


              <Text style={styles.notificationTitle}>
                Dosen Pembimbing (DPL)
                {'\n'}
                menyetujui konversi 20 SKS
              </Text>


              <Text style={styles.description}>
                Dr. Hendra, S.Kom., M.T. telah{' '}
                {'\n'}
                memvalidasi silabus magang mahasiswa{' '}
                {'\n'}
                untuk posisi Frontend Dev angkatan{' '}
                {'\n'}
                genap.
              </Text>

            </View>


            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.moreButton}
            >

              <Image
                source={iconMore}
                style={styles.moreIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>


          {/* ==================================================
              KEMARIN
              ================================================== */}

          <View style={styles.sectionHeaderYesterday}>

            <View style={styles.sectionLeft}>

              <Text style={styles.historyIcon}>
                ◔
              </Text>

              <Text style={styles.sectionTitleYesterday}>
                Kemarin
              </Text>

            </View>

            <Text style={styles.sectionCount}>
              2 Notifikasi
            </Text>

          </View>


          {/* ==================================================
              NOTIFIKASI STATUS LOWONGAN
              ================================================== */}

          <View style={styles.notificationCardLast}>

            <View style={styles.iconContainer}>

              <Image
                source={iconStatusLowongan}
                style={styles.notificationImage}
                resizeMode="contain"
              />

            </View>


            <View style={styles.notificationBody}>

              <View style={styles.tagRow}>

                <View style={styles.tag}>

                  <Text style={styles.tagText}>
                    Status Lowongan
                  </Text>

                </View>

              </View>


              <Text style={styles.timeText}>
                Kemarin, 14:30
                {'\n'}
                WIB
              </Text>


              <Text style={styles.notificationTitle}>
                Lowongan 'Frontend Web
                {'\n'}
                Developer' telah ditutup di portal
                {'\n'}
                mahasiswa
              </Text>


              <Text style={styles.description}>
                14 mahasiswa vokasi telah melihat rincian
                {'\n'}
                lowongan kerja Anda dalam 24 jam
                {'\n'}
                pertama.
              </Text>


              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.statisticButton}
              >

                <Text style={styles.statisticText}>
                  Lihat Statistik Lowongan →
                </Text>

              </TouchableOpacity>

            </View>


            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.moreButton}
            >

              <Image
                source={iconMore}
                style={styles.moreIcon}
                resizeMode="contain"
              />

            </TouchableOpacity>

          </View>

        </ScrollView>


        {/* ==================================================
            NAVBAR PERUSAHAAN
            ================================================== */}

        <PerusahaanNavbar
          navigation={navigation}
          activeScreen="NotifikasiPerusahaan"
        />

      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  /* ==========================================================
     BASIC
     ========================================================== */

  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },

  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },


  /* ==========================================================
     HEADER
     ========================================================== */

  header: {
    height: 125,
    paddingHorizontal: 20,
    paddingTop: 35,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
  },

  backButton: {
    width: 30,
    height: 46,

    justifyContent: 'center',
    alignItems: 'flex-start',

    marginRight: 5,
  },

  backArrow: {
    color: '#183B4F',

    fontSize: 38,
    fontWeight: '300',

    lineHeight: 42,
  },

  headerTextContainer: {
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#142F42',

    fontSize: 18,
    fontWeight: '800',

    lineHeight: 22,
  },

  headerSubtitle: {
    color: '#31769A',

    fontSize: 9,
    fontWeight: '600',

    marginTop: 2,
  },


  /* ==========================================================
     SCROLL
     ========================================================== */

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 21,
    paddingBottom: 20,
  },


  /* ==========================================================
     TOP ACTION
     ========================================================== */

  topActionRow: {
    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  unreadContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    flex: 1,
  },

  unreadBlueDot: {
    width: 9,
    height: 9,

    borderRadius: 5,

    backgroundColor: '#8DD5F2',

    marginRight: 6,
  },

  unreadText: {
    color: '#414D54',
    fontSize: 12,
    fontWeight: '500',
  },

  markAllButton: {
    height: 46,
    paddingHorizontal: 15,
    borderRadius: 24,
    backgroundColor: '#D9EDFC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  markAllIcon: {
    width: 17,
    height: 17,
    marginRight: 6,
  },

  markAllText: {
    color: '#194A66',
    fontSize: 10,
    fontWeight: '700',
  },


  /* ==========================================================
     FILTER
     ========================================================== */

  filterScroll: {
    marginHorizontal: -21,

    marginBottom: 11,
  },

  filterContainer: {
    paddingHorizontal: 21,

    gap: 8,
  },

  filterActive: {
    height: 46,
    paddingHorizontal: 15,
    borderRadius: 24,
    backgroundColor: '#00334E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterActiveText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '600',
  },

  activeBadge: {
    width: 21,
    height: 21,

    borderRadius: 11,

    backgroundColor: '#9EDCF6',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  activeBadgeText: {
    color: '#174A66',

    fontSize: 10,
    fontWeight: '800',
  },

  filterItem: {
    height: 40,

    paddingHorizontal: 12,

    borderRadius: 21,

    backgroundColor: '#E4F1FC',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterText: {
    color: '#25455A',

    fontSize: 10,
    fontWeight: '600',
  },

  filterBadge: {
    width: 20,
    height: 20,

    borderRadius: 10,

    backgroundColor: '#D1E7F7',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  filterBadgeText: {
    color: '#32627A',

    fontSize: 9.5,

    fontWeight: '800',
  },


  /* ==========================================================
     SECTION
     ========================================================== */

  sectionHeader: {
    height: 32,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionHeaderYesterday: {
    height: 40,

    marginTop: 2,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  calendarIcon: {
    width: 16,
    height: 16,

    marginRight: 6,
  },

  historyIcon: {
    color: '#50595F',

    fontSize: 16,

    marginRight: 6,
  },

  sectionTitle: {
    color: '#244D66',

    fontSize: 12,

    fontWeight: '800',
  },

  sectionTitleYesterday: {
    color: '#4C555B',

    fontSize: 12,

    fontWeight: '800',
  },

  sectionCount: {
    color: '#5B6368',

    fontSize: 9.5,

    fontWeight: '500',
  },


  /* ==========================================================
     NOTIFICATION CARD
     ========================================================== */

  notificationCard: {
    minHeight: 190,

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    borderWidth: 1,
    borderColor: '#E9EDF0',

    marginBottom: 10,

    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 12,
    paddingRight: 9,

    flexDirection: 'row',

    position: 'relative',
  },

  notificationCardLast: {
    minHeight: 225,

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    borderWidth: 1,
    borderColor: '#E9EDF0',

    marginBottom: 8,

    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 12,
    paddingRight: 9,

    flexDirection: 'row',

    position: 'relative',
  },


  /* ==========================================================
     AVATAR
     ========================================================== */

  avatarContainer: {
    width: 42,

    alignItems: 'center',
  },

  avatar: {
    width: 38,
    height: 38,

    borderRadius: 19,

    backgroundColor: '#DCE7EC',
  },


  /* ==========================================================
     ICON
     ========================================================== */

  iconContainer: {
    width: 42,

    alignItems: 'center',
  },

  notificationImage: {
    width: 37,
    height: 37,
  },


  /* ==========================================================
     BODY
     ========================================================== */

  notificationBody: {
    flex: 1,

    minWidth: 0,

    marginLeft: 9,

    paddingRight: 17,
  },

  tagRow: {
    flexDirection: 'row',

    alignItems: 'center',

    minHeight: 20,
  },

  tag: {
    alignSelf: 'flex-start',

    backgroundColor: '#E7F1FA',

    borderRadius: 8,

    paddingHorizontal: 9,
    paddingVertical: 4,
  },

  tagText: {
    color: '#255876',

    fontSize: 8.5,

    fontWeight: '700',
  },

  unreadSmallDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: '#123F5B',

    marginLeft: 6,
  },

  timeText: {
    color: '#687278',

    fontSize: 9.5,

    lineHeight: 13,

    marginTop: 3,
  },

  notificationTitle: {
    color: '#183247',

    fontSize: 16,

    fontWeight: '800',

    lineHeight: 20,

    marginTop: 7,
  },

  description: {
    color: '#5C656B',

    fontSize: 12,

    fontWeight: '400',

    lineHeight: 17,

    marginTop: 5,
  },


  /* ==========================================================
     MORE
     ========================================================== */

  moreButton: {
    position: 'absolute',

    right: 6,
    top: 10,

    width: 24,
    height: 27,

    alignItems: 'center',
    justifyContent: 'center',
  },

  moreIcon: {
    width: 18,
    height: 18,
  },


  /* ==========================================================
     STATISTIC
     ========================================================== */

  statisticButton: {
    alignSelf: 'flex-start',

    marginTop: 9,
  },

  statisticText: {
    color: '#26739A',

    fontSize: 10.5,

    fontWeight: '600',
  },

});

export default NotifikasiPerusahaanScreen;