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

const LowonganBerhasilDitambahkanScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      <View style={styles.container}>

        {/* =====================================================
            HEADER
        ====================================================== */}
        <View style={styles.header}>

          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>

            <Text style={styles.backIcon}>
              ×
            </Text>

          </TouchableOpacity>

          <Text style={styles.headerTitle}>
            Tambah Lowongan
          </Text>

          <View style={styles.headerSpace} />

        </View>


        {/* =====================================================
            CONTENT
        ====================================================== */}
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>

          {/* =================================================
              LOGO SUKSES
          ================================================== */}
          <View style={styles.successArea}>

            <Image
              source={require('../assets/perusahaan/logo1.png')}
              style={styles.successLogo}
              resizeMode="contain"
            />

          </View>


          {/* =================================================
              JUDUL
          ================================================== */}
          <Text style={styles.successTitle}>
            Lowongan Berhasil
            {'\n'}
            Dipublikasikan!
          </Text>


          {/* =================================================
              DESKRIPSI
          ================================================== */}
          <Text style={styles.description}>
            Posisi{' '}
            <Text style={styles.boldText}>
              Frontend Web Developer (React / Tailwind)
            </Text>
            {'\n'}
            kini aktif dan siap dilamar talenta vokasi Politeknik
            {'\n'}
            Negeri Lampung.
          </Text>


          {/* =================================================
              STATUS
          ================================================== */}
          <View style={styles.statusBadge}>

            <View style={styles.statusDot} />

            <Text style={styles.statusText}>
              Status: Aktif & Terverifikasi Mitra Polinela
            </Text>

          </View>


          {/* =================================================
              PUBLIC LINK CARD
          ================================================== */}
          <View style={styles.linkCard}>

            {/* =================================================
                ICON LINK DARI FIGMA
            ================================================== */}
            <View style={styles.linkIconBox}>

              <Image
                source={require('../assets/perusahaan/tautan.png')}
                style={styles.linkIconImage}
                resizeMode="contain"
              />

            </View>


            {/* =================================================
                INFORMASI LINK
            ================================================== */}
            <View style={styles.linkInformation}>

              <Text style={styles.linkTitle}>
                Tautan Publik Lowongan
              </Text>

              <Text style={styles.linkUrl}>
                polar.polinela.ac.id/job/vac-092
              </Text>

            </View>


            {/* =================================================
                TOMBOL SALIN
            ================================================== */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.copyButton}
              onPress={() => {
                console.log('Salin tautan');
              }}>

              <Image
                source={require('../assets/perusahaan/salin.png')}
                style={styles.copyIconImage}
                resizeMode="contain"
              />

              <Text style={styles.copyText}>
                Salin
              </Text>

            </TouchableOpacity>

          </View>

        </ScrollView>

      </View>
    </SafeAreaView>
  );
};


/* =============================================================
   STYLES
============================================================= */

const styles = StyleSheet.create({

  /* =========================================================
     ROOT
  ========================================================== */

  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },


  /* =========================================================
     HEADER

     DITURUNKAN LAGI SUPAYA TIDAK MENABRAK
     JAM / STATUS BAR ANDROID
  ========================================================== */

  header: {
    height: 104,
    backgroundColor: '#FFFFFF',

    flexDirection: 'row',
    alignItems: 'flex-end',

    paddingHorizontal: 22,

    paddingTop: (StatusBar.currentHeight || 24) + 8,
    paddingBottom: 14,

    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F5',
  },

  backButton: {
    width: 38,
    height: 24,

    alignItems: 'flex-start',
    justifyContent: 'center',

    marginBottom: 1,
  },

  backIcon: {
    color: '#102A3D',
    fontSize: 32,
    fontWeight: '400',
    lineHeight: 32,
  },

  headerTitle: {
    flex: 1,

    color: '#102A3D',

    fontSize: 18,
    fontWeight: '800',

    marginLeft: 7,

    lineHeight: 24,

    height: 24,
  },

  headerSpace: {
    width: 38,
    height: 24,
  },


  /* =========================================================
     SCROLL
  ========================================================== */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 20,

    paddingTop: 4,

    paddingBottom: 40,

    alignItems: 'center',
  },


  /* =========================================================
     SUCCESS LOGO
  ========================================================== */

  successArea: {
    width: '100%',

    height: 108,

    alignItems: 'center',

    justifyContent: 'flex-start',

    paddingTop: 7,
  },

successLogo: {
  width: 170,
  height: 150,
},


  /* =========================================================
     SUCCESS TITLE
  ========================================================== */

successTitle: {
  color: '#52697A',
  fontSize: 25,
  lineHeight: 30,
  fontWeight: '800',
  textAlign: 'center',
  marginTop: 18,
},


  /* =========================================================
     DESCRIPTION
  ========================================================== */

  description: {
    width: '100%',

    color: '#596570',

    fontSize: 14,

    lineHeight: 20,

    textAlign: 'center',

    marginTop: 8,

    paddingHorizontal: 0,
  },

  boldText: {
    color: '#344D60',

    fontWeight: '800',
  },


  /* =========================================================
     STATUS
  ========================================================== */

  statusBadge: {
    minHeight: 29,

    paddingHorizontal: 13,

    borderRadius: 16,

    backgroundColor: '#EDF6FF',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    marginTop: 10,
  },

  statusDot: {
    width: 9,

    height: 9,

    borderRadius: 5,

    backgroundColor: '#286B8C',

    marginRight: 7,
  },

  statusText: {
    color: '#28627F',

    fontSize: 12,

    fontWeight: '600',
  },


  /* =========================================================
     LINK CARD
  ========================================================== */

  linkCard: {
    width: '100%',

    minHeight: 69,

    backgroundColor: '#FFFFFF',

    borderRadius: 14,

    borderWidth: 1,

    borderColor: '#EEF1F4',

    marginTop: 21,

    paddingHorizontal: 10,

    paddingVertical: 9,

    flexDirection: 'row',

    alignItems: 'center',

    shadowColor: '#72808A',

    shadowOffset: {
      width: 0,

      height: 1,
    },

    shadowOpacity: 0.07,

    shadowRadius: 3,

    elevation: 1,
  },


  /* =========================================================
     LINK ICON BOX
  ========================================================== */

  linkIconBox: {
    width: 38,

    height: 38,

    borderRadius: 8,

    backgroundColor: '#EAF4FF',

    alignItems: 'center',

    justifyContent: 'center',

    marginRight: 10,
  },

  linkIconImage: {
    width: 18,

    height: 18,
  },


  /* =========================================================
     LINK INFORMATION
  ========================================================== */

  linkInformation: {
    flex: 1,

    justifyContent: 'center',
  },

  linkTitle: {
    color: '#102A3D',

    fontSize: 14,

    fontWeight: '800',

    lineHeight: 18,
  },

  linkUrl: {
    color: '#697681',

    fontSize: 11,

    marginTop: 2,
  },


  /* =========================================================
     COPY BUTTON
  ========================================================== */

  copyButton: {
    height: 42,

    minWidth: 74,

    borderRadius: 9,

    backgroundColor: '#D6EBFF',

    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    paddingHorizontal: 10,

    marginLeft: 8,
  },

  copyIconImage: {
    width: 18,

    height: 18,

    marginRight: 5,
  },

  copyText: {
    color: '#103F5D',

    fontSize: 13,

    fontWeight: '800',
  },

});

export default LowonganBerhasilDitambahkanScreen;