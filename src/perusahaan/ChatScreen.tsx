import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';

import PerusahaanNavbar from './PerusahaanNavbar';

/* ============================================================
   ASSETS
============================================================ */

const logoPolar = require('../assets/logoPolar.png');

const iconNotification = require('../assets/iconBell.png');
const iconProfile = require('../assets/iconProfile.png');

const iconSearch = require('../assets/perusahaan/iconSearch.png');
const iconFilter = require('../assets/perusahaan/iconFilter.png');

const avatarBagus = require('../assets/kandidat/avaBagusPratama.png');
const avatarSiti = require('../assets/kandidat/avaSitiRahmawati.png');
const avatarAhmad = require('../assets/kandidat/avaAhmadFauzan.png');
const avatarPutri = require('../assets/kandidat/avaPutriWulandari.png');


/* ============================================================
   DATA CHAT
============================================================ */

const conversations = [
  {
    name: 'Bagus Pratama',
    avatar: avatarBagus,
    time: '10:24 WIB',
    education: 'D4 TRPL Sem 7',
    tag: 'Siap Magang',
    position: 'Re: Frontend Web Developer (React.js)',
    message: 'Selamat siang Bapak/Ibu HRD, terima...',
    unread: 1,
    online: true,
    verified: true,
  },
  {
    name: 'Siti Rahmawati',
    avatar: avatarSiti,
    time: 'Kemarin',
    education: 'D3 Manajemen Informatika Sm 6',
    tag: '',
    position: 'Posisi: UI/UX Designer & Frontend',
    message: 'Halo tim POLAR, portofolio revisi...',
    unread: 2,
    online: true,
    verified: true,
  },
  {
    name: 'Ahmad Fauzan',
    avatar: avatarAhmad,
    time: '18 Nov',
    education: 'D4 Rekayasa Komputer Sm 8',
    tag: 'MBKM 20 SKS',
    position: 'Posisi: IoT & Embedded System Engineer',
    message: 'Baik Pak, berkas konversi MBKM 20 SKS...',
    unread: 0,
    online: false,
    verified: false,
  },
  {
    name: 'Putri Wulandari',
    avatar: avatarPutri,
    time: '15 Nov',
    education: 'D3 Sistem Informasi',
    tag: '',
    position: 'Posisi: Quality Assurance Tester',
    message: 'Terima kasih atas konfirmasi penawarannya!',
    unread: 0,
    online: false,
    verified: false,
  },
];


/* ============================================================
   CHAT SCREEN
============================================================ */

const ChatScreen = ({navigation}: any) => {
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

          <View style={styles.brandContainer}>

            <View style={styles.logoBox}>
              <Image
                source={logoPolar}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>

            <View style={styles.brandTextContainer}>

              <View style={styles.brandNameRow}>

                <Text style={styles.brandName}>
                  POLAR
                </Text>

                <View style={styles.mitraBadge}>
                  <Text style={styles.mitraText}>
                    Mitra
                  </Text>
                </View>

              </View>

              <Text style={styles.chatLabel}>
                Chat
              </Text>

            </View>

          </View>


          {/* HEADER KANAN */}

          <View style={styles.headerRight}>

            {/* NOTIFIKASI */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.notificationButton}
              onPress={() =>
                navigation.navigate('NotifikasiPerusahaan')
              }
            >
              <Image
                source={iconNotification}
                style={styles.notificationIcon}
                resizeMode="contain"
              />

              <View style={styles.notificationDot} />
            </TouchableOpacity>


            {/* PROFILE */}
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.profileButton}
              onPress={() =>
                navigation.navigate('ProfilPerusahaan')
              }
            >
              <Image
                source={iconProfile}
                style={styles.profileIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

          </View>

        </View>


        {/* ====================================================
            CONTENT
        ==================================================== */}

        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          {/* TITLE */}

          <View style={styles.titleRow}>

            <Text style={styles.pageTitle}>
              Pesan & Percakapan
            </Text>

            <View style={styles.newBadge}>
              <Text style={styles.newBadgeText}>
                3 Baru
              </Text>
            </View>

          </View>


          {/* ==================================================
              SEARCH
          ================================================== */}

          <View style={styles.searchContainer}>

            <Image
              source={iconSearch}
              style={styles.searchIcon}
              resizeMode="contain"
            />

            <TextInput
              style={styles.searchInput}
              placeholder="Cari percakapan, nama mahasiswa, lowongan"
              placeholderTextColor="#7A8790"
              numberOfLines={1}
            />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.filterIconButton}
            >
              <Image
                source={iconFilter}
                style={styles.filterIcon}
                resizeMode="contain"
              />
            </TouchableOpacity>

          </View>


          {/* ==================================================
              FILTER
          ================================================== */}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.filterScroll}
            contentContainerStyle={styles.filterContent}
          >

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.activeFilter}
            >
              <Text style={styles.activeFilterText}>
                Semua
              </Text>

              <View style={styles.activeFilterDot} />
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterChip}
            >
              <Text style={styles.filterText}>
                Belum Dibaca
              </Text>

              <View style={styles.unreadFilterBadge}>
                <Text style={styles.unreadFilterText}>
                  3
                </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.filterChip}
            >
              <Text style={styles.filterText}>
                Pelamar Lowongan
              </Text>
            </TouchableOpacity>

          </ScrollView>


          {/* ==================================================
              CONVERSATION LIST
          ================================================== */}

          <View style={styles.conversationList}>

            {conversations.map((item, index) => (

              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                style={styles.conversationCard}

                /*
                 * HANYA TAMBAHAN INI:
                 * kalau yang diklik Bagus Pratama,
                 * masuk ke halaman ChatDetail.
                 *
                 * Chat lain tetap tidak berubah.
                 */
                onPress={() => {
                  if (item.name === 'Bagus Pratama') {
                    navigation.navigate('ChatDetail');
                  }
                }}
              >

                {/* AVATAR */}

                <View style={styles.avatarContainer}>

                  <Image
                    source={item.avatar}
                    style={styles.avatar}
                    resizeMode="cover"
                  />

                  {item.online && (
                    <View style={styles.onlineDot} />
                  )}

                </View>


                {/* CONTENT */}

                <View style={styles.conversationContent}>

                  {/* NAMA + WAKTU */}

                  <View style={styles.nameTimeRow}>

                    <View style={styles.nameRow}>

                      <Text
                        style={styles.studentName}
                        numberOfLines={1}
                      >
                        {item.name}
                      </Text>

                      {item.verified && (
                        <Text style={styles.verifiedSmall}>
                          ✦
                        </Text>
                      )}

                    </View>

                    <Text style={styles.timeText}>
                      {item.time}
                    </Text>

                  </View>


                  {/* TAG */}

                  <View style={styles.tagRow}>

                    <View style={styles.educationBadge}>

                      <Text style={styles.educationText}>
                        {item.education}
                      </Text>

                    </View>

                    {item.tag !== '' && (
                      <View style={styles.studentTag}>

                        <Text style={styles.studentTagText}>
                          {item.tag}
                        </Text>

                      </View>
                    )}

                  </View>


                  {/* POSISI */}

                  <Text
                    style={styles.positionText}
                    numberOfLines={1}
                  >
                    {item.position}
                  </Text>


                  {/* PESAN */}

                  <View style={styles.messageRow}>

                    <Text
                      style={styles.messageText}
                      numberOfLines={1}
                    >
                      {item.message}
                    </Text>

                    {item.unread > 0 && (
                      <View style={styles.messageBadge}>

                        <Text style={styles.messageBadgeText}>
                          {item.unread}
                        </Text>

                      </View>
                    )}

                  </View>

                </View>

              </TouchableOpacity>

            ))}

          </View>

        </ScrollView>


        {/* ====================================================
            NAVBAR
        ==================================================== */}

        <PerusahaanNavbar
          navigation={navigation}
          activeScreen="Chat"
        />

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
    height: 145,

    paddingHorizontal: 20,

    paddingTop: 65,
    paddingBottom: 12,

    backgroundColor: '#F7FAFD',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  brandContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 46,
    height: 46,

    borderRadius: 9,

    backgroundColor: '#123F5B',

    alignItems: 'center',
    justifyContent: 'center',

    overflow: 'hidden',
  },

  logoImage: {
    width: 36,
    height: 36,
  },

  brandTextContainer: {
    marginLeft: 9,
  },

  brandNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  brandName: {
    color: '#102F43',

    fontSize: 18,

    fontWeight: '900',
  },

  mitraBadge: {
    backgroundColor: '#A9DDF6',

    borderRadius: 6,

    paddingHorizontal: 6,
    paddingVertical: 3,

    marginLeft: 5,
  },

  mitraText: {
    color: '#24627E',

    fontSize: 9,

    fontWeight: '800',
  },

  chatLabel: {
    color: '#4E5960',

    fontSize: 10,

    marginTop: 2,
  },

  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationButton: {
    width: 40,
    height: 42,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 8,
  },

  notificationIcon: {
    width: 25,
    height: 25,
  },

  notificationDot: {
    position: 'absolute',

    top: 5,
    right: 5,

    width: 8,
    height: 8,

    borderRadius: 5,

    backgroundColor: '#D52835',

    borderWidth: 1.5,
    borderColor: '#F7FAFD',
  },

  profileButton: {
    width: 34,
    height: 34,

    borderRadius: 17,

    backgroundColor: '#062E47',

    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    width: 20,
    height: 20,
  },


  /* ==========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 18,

    paddingTop: 9,

    paddingBottom: 20,
  },


  /* ==========================================================
     TITLE
  ========================================================== */

  titleRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginBottom: 14,
  },

  pageTitle: {
    color: '#102F43',

    fontSize: 20,

    fontWeight: '900',
  },

  newBadge: {
    backgroundColor: '#123F5B',

    borderRadius: 10,

    paddingHorizontal: 8,
    paddingVertical: 4,

    marginLeft: 7,
  },

  newBadgeText: {
    color: '#FFFFFF',

    fontSize: 9,

    fontWeight: '800',
  },


  /* ==========================================================
     SEARCH
  ========================================================== */

  searchContainer: {
    height: 44,

    borderRadius: 11,

    backgroundColor: '#EAF4FD',

    flexDirection: 'row',

    alignItems: 'center',

    paddingHorizontal: 11,
  },

  searchIcon: {
    width: 20,
    height: 20,

    marginRight: 7,
  },

  searchInput: {
    flex: 1,

    height: 44,

    color: '#253A48',

    fontSize: 11.5,

    paddingVertical: 0,

    includeFontPadding: false,
  },

  filterIconButton: {
    width: 32,
    height: 36,

    alignItems: 'center',
    justifyContent: 'center',
  },

  filterIcon: {
    width: 20,
    height: 20,
  },


  /* ==========================================================
     FILTER
  ========================================================== */

  filterScroll: {
    marginTop: 9,

    marginHorizontal: -18,
  },

  filterContent: {
    paddingHorizontal: 18,

    gap: 8,
  },

  activeFilter: {
    height: 39,

    paddingHorizontal: 16,

    borderRadius: 21,

    backgroundColor: '#002F4B',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  activeFilterText: {
    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '700',
  },

  activeFilterDot: {
    width: 6,
    height: 6,

    borderRadius: 3,

    backgroundColor: '#61D2C8',

    marginLeft: 6,
  },

  filterChip: {
    height: 39,

    paddingHorizontal: 15,

    borderRadius: 21,

    backgroundColor: '#EAF4FD',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',
  },

  filterText: {
    color: '#234257',

    fontSize: 10.5,

    fontWeight: '600',
  },

  unreadFilterBadge: {
    minWidth: 19,
    height: 19,

    borderRadius: 10,

    backgroundColor: '#A9DDF6',

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 6,
  },

  unreadFilterText: {
    color: '#23627E',

    fontSize: 9,

    fontWeight: '800',
  },


  /* ==========================================================
     CONVERSATION LIST
  ========================================================== */

  conversationList: {
    marginTop: 9,
  },

  conversationCard: {
    minHeight: 116,

    backgroundColor: '#FFFFFF',

    borderRadius: 13,

    borderWidth: 1,

    borderColor: '#E6EDF1',

    paddingHorizontal: 12,

    paddingVertical: 11,

    flexDirection: 'row',

    marginBottom: 10,
  },


  /* ==========================================================
     AVATAR
  ========================================================== */

  avatarContainer: {
    width: 55,
    height: 61,

    alignItems: 'center',

    position: 'relative',

    marginRight: 11,
  },

  avatar: {
    width: 50,
    height: 50,

    borderRadius: 25,

    backgroundColor: '#DCE6EB',
  },

  onlineDot: {
    position: 'absolute',

    right: 0,
    bottom: 8,

    width: 10,
    height: 10,

    borderRadius: 5,

    backgroundColor: '#2BBE8A',

    borderWidth: 1.5,

    borderColor: '#FFFFFF',
  },


  /* ==========================================================
     CONVERSATION CONTENT
  ========================================================== */

  conversationContent: {
    flex: 1,

    minWidth: 0,
  },

  nameTimeRow: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-between',
  },

  nameRow: {
    flex: 1,

    flexDirection: 'row',

    alignItems: 'center',

    minWidth: 0,
  },

  studentName: {
    color: '#102F43',

    fontSize: 15,

    fontWeight: '900',

    maxWidth: '86%',
  },

  verifiedSmall: {
    color: '#347C9F',

    fontSize: 14,

    marginLeft: 4,
  },

  timeText: {
    color: '#28719A',

    fontSize: 10,

    fontWeight: '700',

    marginLeft: 5,
  },


  /* ==========================================================
     TAG
  ========================================================== */

  tagRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,
  },

  educationBadge: {
    backgroundColor: '#E7EDF1',

    borderRadius: 5,

    paddingHorizontal: 7,

    paddingVertical: 3,
  },

  educationText: {
    color: '#53636D',

    fontSize: 9,

    fontWeight: '600',
  },

  studentTag: {
    backgroundColor: '#DDF1FF',

    borderRadius: 5,

    paddingHorizontal: 7,

    paddingVertical: 3,

    marginLeft: 5,
  },

  studentTagText: {
    color: '#2A6D92',

    fontSize: 9,

    fontWeight: '600',
  },


  /* ==========================================================
     POSITION
  ========================================================== */

  positionText: {
    color: '#24698E',

    fontSize: 10.5,

    fontWeight: '600',

    marginTop: 6,
  },


  /* ==========================================================
     MESSAGE
  ========================================================== */

  messageRow: {
    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 5,
  },

  messageText: {
    flex: 1,

    color: '#3D464D',

    fontSize: 11,

    minWidth: 0,
  },

  messageBadge: {
    width: 23,
    height: 23,

    borderRadius: 12,

    backgroundColor: '#052F48',

    alignItems: 'center',

    justifyContent: 'center',

    marginLeft: 6,
  },

  messageBadgeText: {
    color: '#FFFFFF',

    fontSize: 11,

    fontWeight: '800',
  },


  /* ==========================================================
     STYLE NAVBAR LAMA
  ========================================================== */

  bottomNavbar: {
    height: 66,

    backgroundColor: '#F8FAFD',

    borderTopWidth: 1,

    borderTopColor: '#E8EEF2',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'space-around',

    paddingHorizontal: 5,

    paddingBottom: 3,
  },

  navItem: {
    flex: 1,

    height: 59,

    alignItems: 'center',

    justifyContent: 'center',
  },

  navIcon: {
    width: 21,
    height: 21,

    marginBottom: 4,

    opacity: 0.85,
  },

  activeNavIcon: {
    opacity: 1,
  },

  navText: {
    color: '#48545C',

    fontSize: 9,

    fontWeight: '500',
  },

  activeNavText: {
    color: '#0A4565',

    fontSize: 9,

    fontWeight: '800',
  },

});

export default ChatScreen;