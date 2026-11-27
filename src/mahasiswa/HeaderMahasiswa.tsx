import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

type HeaderProps = {
  navigation?: any;
  subtitle?: string;
  hasUnreadNotification?: boolean;
};

export default function HeaderMahasiswa({
  navigation,
  subtitle = 'Lowongan',
  hasUnreadNotification = true,
}: HeaderProps) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerContainer}>
        <View style={styles.leftSection}>
          <View style={styles.logoWrapper}>
            <Image
             source={require('../assets/Mahasiswa/logo-polar.png')}
              style={styles.logoImage}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.brandTitle}>POLAR</Text>
            <Text style={styles.brandSubtitle}>{subtitle}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.notifButton}
          activeOpacity={0.7}
          onPress={() => navigation?.navigate('NotifikasiMahasiswa')}>
          {hasUnreadNotification && <View style={styles.redDot} />}
          <Image
           source={require('../assets/Mahasiswa/ic-bell.png')}
            style={styles.bellImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#F8FAFC',
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 8 : 12,
    paddingHorizontal: 16,
    paddingBottom: 6,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E8EFF7',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoWrapper: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#15344E',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  brandTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F2942',
    letterSpacing: 0.3,
  },
  brandSubtitle: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#3B6E94',
    marginTop: 1,
  },
  notifButton: {
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: 5,
    left: 4,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#B91C1C',
    zIndex: 2,
  },
  bellImage: {
    width: 22,
    height: 22,
  },
});