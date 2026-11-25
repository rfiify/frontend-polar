import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

// ============================================================
// ASSETS
// ============================================================

// Icon notifikasi
const iconNotification = require('../assets/perusahaan/iconNotification.png');

// Icon profile
const iconProfile = require('../assets/perusahaan/iconProfile.png');


const PerusahaanHeader = ({
  navigation,
  title,
}: any) => {
  return (
    <View style={styles.header}>

      {/* ======================================================
          BAGIAN KIRI
          ====================================================== */}

      <View style={styles.titleContainer}>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          POLAR Perusahaan
        </Text>

      </View>


      {/* ======================================================
          BAGIAN KANAN
          ====================================================== */}

      <View style={styles.rightContainer}>

        {/* ==================================================
            NOTIFIKASI
            ================================================== */}

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

          {/* NOTIFICATION BADGE */}
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationBadgeText}>
              4
            </Text>
          </View>

        </TouchableOpacity>


        {/* ==================================================
            PROFILE
            ================================================== */}

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
  );
};


const styles = StyleSheet.create({

  // ==========================================================
  // HEADER
  // ==========================================================

  header: {
    height: 82,

    paddingHorizontal: 20,

    backgroundColor: '#F7F9FC',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },


  // ==========================================================
  // TITLE
  // ==========================================================

  titleContainer: {
    justifyContent: 'center',
  },

  title: {
    color: '#142F42',

    fontSize: 18,

    fontWeight: '800',

    lineHeight: 21,
  },

  subtitle: {
    color: '#31769A',

    fontSize: 8.5,

    fontWeight: '600',

    marginTop: 1,
  },


  // ==========================================================
  // RIGHT
  // ==========================================================

  rightContainer: {
    flexDirection: 'row',

    alignItems: 'center',
  },


  // ==========================================================
  // NOTIFICATION
  // ==========================================================

  notificationButton: {
    width: 38,
    height: 38,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 8,
  },

  notificationIcon: {
    width: 23,
    height: 23,
  },

  notificationBadge: {
    position: 'absolute',

    top: 2,
    right: 1,

    minWidth: 14,
    height: 14,

    paddingHorizontal: 3,

    borderRadius: 7,

    backgroundColor: '#D82F3D',

    borderWidth: 1.5,
    borderColor: '#F7F9FC',

    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationBadgeText: {
    color: '#FFFFFF',

    fontSize: 7,

    fontWeight: '800',
  },


  // ==========================================================
  // PROFILE
  // ==========================================================

  profileButton: {
    width: 38,
    height: 38,

    alignItems: 'center',
    justifyContent: 'center',
  },

  profileIcon: {
    width: 27,
    height: 27,
  },

});

export default PerusahaanHeader;