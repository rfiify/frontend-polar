import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

const navHome = require('../assets/navbar/navHome.png');
const navJobs = require('../assets/navbar/navJobs.png');
const navTalenta = require('../assets/navbar/navTalenta.png');
const navChat = require('../assets/navbar/navChat.png');
const navProfile = require('../assets/navbar/navProfile.png');

const PerusahaanNavbar = ({
  navigation,
  activeScreen,
}: any) => {
  return (
    <View style={styles.bottomNavbar}>

      {/* BERANDA */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navItem}
        onPress={() => navigation.navigate('DashboardPerusahaan')}
      >
        <Image
          source={navHome}
          style={[
            styles.navIcon,
            activeScreen === 'DashboardPerusahaan' &&
              styles.activeIcon,
          ]}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.navText,
            activeScreen === 'DashboardPerusahaan' &&
              styles.activeText,
          ]}
        >
          Beranda
        </Text>
      </TouchableOpacity>

      {/* LOWONGAN */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navItem}
        onPress={() => navigation.navigate('LowonganPerusahaan')}
      >
        <Image
          source={navJobs}
          style={[
            styles.navIcon,
            activeScreen === 'LowonganPerusahaan' &&
              styles.activeIcon,
          ]}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.navText,
            activeScreen === 'LowonganPerusahaan' &&
              styles.activeText,
          ]}
        >
          Lowongan
        </Text>
      </TouchableOpacity>

      {/* TALENTA */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navItem}
        onPress={() => navigation.navigate('Talenta')}
      >
        <Image
          source={navTalenta}
          style={[
            styles.navIcon,
            activeScreen === 'Talenta' &&
              styles.activeIcon,
          ]}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.navText,
            activeScreen === 'Talenta' &&
              styles.activeText,
          ]}
        >
          Talenta
        </Text>
      </TouchableOpacity>

      {/* CHAT */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navItem}
        onPress={() => navigation.navigate('Chat')}
      >
        <Image
          source={navChat}
          style={[
            styles.navIcon,
            activeScreen === 'Chat' &&
              styles.activeIcon,
          ]}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.navText,
            activeScreen === 'Chat' &&
              styles.activeText,
          ]}
        >
          Chat
        </Text>
      </TouchableOpacity>

      {/* PROFIL */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.navItem}
        onPress={() => navigation.navigate('ProfilPerusahaan')}
      >
        <Image
          source={navProfile}
          style={[
            styles.navIcon,
            activeScreen === 'ProfilPerusahaan' &&
              styles.activeIcon,
          ]}
          resizeMode="contain"
        />

        <Text
          style={[
            styles.navText,
            activeScreen === 'ProfilPerusahaan' &&
              styles.activeText,
          ]}
        >
          Profil
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavbar: {
    height: 67,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEF1F4',

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

    paddingHorizontal: 4,
  },

  navItem: {
    flex: 1,
    height: 63,

    alignItems: 'center',
    justifyContent: 'center',
  },

  navIcon: {
    width: 23,
    height: 23,

    opacity: 0.65,
  },

  activeIcon: {
    opacity: 1,
  },

  navText: {
    color: '#858C91',

    fontSize: 9,

    marginTop: 3,
  },

  activeText: {
    color: '#082F47',

    fontSize: 9,

    fontWeight: '700',

    marginTop: 3,
  },
});

export default PerusahaanNavbar;