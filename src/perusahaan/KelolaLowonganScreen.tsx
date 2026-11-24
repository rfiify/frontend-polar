import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/* ============================================================
   ASSETS
   ============================================================ */

/*
  Masukkan icon berikut ke:

  assets/perusahaan/

  lalu gunakan nama file:

  iconEdit.png
  iconPause.png
  iconDelete.png

  Kalau nama file asset lo berbeda, tinggal ubah require()
  di bawah ini.
*/

const iconEdit = require('../assets/perusahaan/iconEdit.png');
const iconPause = require('../assets/perusahaan/iconPause.png');
const iconDelete = require('../assets/perusahaan/iconDelete.png');

/* ============================================================
   SCREEN
   ============================================================ */

const KelolaLowonganScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#27343B"
        translucent={false}
      />

      <View style={styles.container}>

        {/* ======================================================
            BACKGROUND / OVERLAY
        ====================================================== */}

        <View style={styles.backgroundArea}>
          <View style={styles.dimOverlay} />
        </View>

        {/* ======================================================
            BOTTOM SHEET
        ====================================================== */}

        <View style={styles.bottomSheet}>

          {/* ====================================================
              SHEET HEADER
          ==================================================== */}

          <View style={styles.sheetHeader}>

            <View style={styles.sheetTitleContainer}>
              <Text style={styles.sheetTitle}>
                Kelola Lowongan
              </Text>

              <Text style={styles.sheetSubtitle}>
                Frontend Web Developer (React / Tailwind)
              </Text>
            </View>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.closeButton}
              onPress={() => navigation.goBack()}>

              <Text style={styles.closeIcon}>
                ×
              </Text>

            </TouchableOpacity>

          </View>

          {/* ====================================================
              EDIT LOWONGAN
          ==================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuCard}
            onPress={() => {}}>

            <View style={styles.menuIconBox}>
              <Text style={styles.menuIcon}>
                ✎
              </Text>
            </View>

            <View style={styles.menuTextContainer}>

              <Text style={styles.menuTitle}>
                Edit Lowongan
              </Text>

              <Text style={styles.menuDescription}>
                Ubah informasi, kriteria, & persyaratan
              </Text>

            </View>

            <Text style={styles.chevron}>
              ›
            </Text>

          </TouchableOpacity>

          {/* ====================================================
              NONAKTIFKAN
          ==================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuCard}
            onPress={() => {}}>

            <View style={styles.menuIconBox}>
              <Text style={styles.menuIcon}>
                ◫
              </Text>
            </View>

            <View style={styles.menuTextContainer}>

              <Text style={styles.menuTitle}>
                Nonaktifkan Sementara
              </Text>

              <Text style={styles.menuDescription}>
                Tutup pendaftaran tanpa menghapus data
              </Text>

            </View>

            <Text style={styles.chevron}>
              ›
            </Text>

          </TouchableOpacity>

          {/* ====================================================
              HAPUS LOWONGAN
          ==================================================== */}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.deleteCard}
            onPress={() => {}}>

            <View style={styles.deleteIconBox}>
              <Text style={styles.deleteIcon}>
                ▣
              </Text>
            </View>

            <View style={styles.menuTextContainer}>

              <Text style={styles.deleteTitle}>
                Hapus Lowongan
              </Text>

              <Text style={styles.deleteDescription}>
                Hapus posisi ini secara permanen
              </Text>

            </View>

            <Text style={styles.deleteChevron}>
              ›
            </Text>

          </TouchableOpacity>

        </View>
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
    backgroundColor: '#26333A',
  },

  container: {
    flex: 1,
    backgroundColor: '#26333A',
  },

  /* ==========================================================
     BACKGROUND
  ========================================================== */

  backgroundArea: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#7B858A',
  },

  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(20, 30, 35, 0.58)',
  },

  /* ==========================================================
     BOTTOM SHEET
  ========================================================== */

  bottomSheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,

    backgroundColor: '#FFFFFF',

    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,

    paddingHorizontal: 14,
    paddingTop: 17,
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

  /* ==========================================================
     HEADER
  ========================================================== */

  sheetHeader: {
    minHeight: 50,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 9,
  },

  sheetTitleContainer: {
    flex: 1,
  },

  sheetTitle: {
    color: '#12354B',
    fontSize: 17,
    fontWeight: '900',
  },

  sheetSubtitle: {
    color: '#667078',
    fontSize: 10.5,
    marginTop: 2,
  },

  closeButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },

  closeIcon: {
    color: '#4F5960',
    fontSize: 25,
    fontWeight: '300',
    lineHeight: 27,
  },

  /* ==========================================================
     NORMAL MENU
  ========================================================== */

  menuCard: {
    minHeight: 57,
    borderRadius: 7,
    backgroundColor: '#EAF5FF',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 8,
    paddingVertical: 7,

    marginBottom: 7,
  },

  menuIconBox: {
    width: 34,
    height: 34,
    borderRadius: 7,
    backgroundColor: '#D8ECFC',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  menuIcon: {
    color: '#21658A',
    fontSize: 19,
    fontWeight: '700',
  },

  menuTextContainer: {
    flex: 1,
  },

  menuTitle: {
    color: '#12354B',
    fontSize: 12,
    fontWeight: '800',
  },

  menuDescription: {
    color: '#65727A',
    fontSize: 9.5,
    marginTop: 2,
  },

  chevron: {
    color: '#6C7880',
    fontSize: 22,
    fontWeight: '300',
    marginLeft: 5,
    marginRight: 2,
  },

  /* ==========================================================
     DELETE MENU
  ========================================================== */

  deleteCard: {
    minHeight: 57,
    borderRadius: 7,
    backgroundColor: '#FFF0F0',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 8,
    paddingVertical: 7,

    marginBottom: 0,
  },

  deleteIconBox: {
    width: 34,
    height: 34,
    borderRadius: 7,
    backgroundColor: '#FFE0E0',

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 9,
  },

  deleteIcon: {
    color: '#E44A4A',
    fontSize: 17,
    fontWeight: '700',
  },

  deleteTitle: {
    color: '#C83232',
    fontSize: 12,
    fontWeight: '800',
  },

  deleteDescription: {
    color: '#D16B6B',
    fontSize: 9.5,
    marginTop: 2,
  },

  deleteChevron: {
    color: '#D94040',
    fontSize: 22,
    fontWeight: '300',
    marginLeft: 5,
    marginRight: 2,
  },
});

export default KelolaLowonganScreen;
