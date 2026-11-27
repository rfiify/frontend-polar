import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

export type NavTabKey = 'Beranda' | 'Lowongan' | 'Proyek' | 'Pesan' | 'Menu/Akun';

type NavItem = {
  key: NavTabKey;
  label: string;
  icon: ImageSourcePropType;
};

type NavbarProps = {
  activeTab: NavTabKey;
  onSelectTab: (tab: NavTabKey) => void;
};

const NAV_ITEMS: NavItem[] = [
  {
    key: 'Beranda',
    label: 'Beranda',
    icon: require('../assets/Mahasiswa/ic-beranda.png')
  },
  {
    key: 'Lowongan',
    label: 'Lowongan',
    icon: require('../assets/Mahasiswa/ic-lowongan.png')
  },
  {
    key: 'Proyek',
    label: 'Proyek',
    icon: require('../assets/Mahasiswa/ic-proyek.png')
  },
  {
    key: 'Pesan',
    label: 'Pesan',
    icon: require('../assets/Mahasiswa/ic-pesan.png')
  },
  {
    key: 'Menu/Akun',
    label: 'Menu/Akun',
    icon: require('../assets/Mahasiswa/ic-akun.png')
  },
];

export default function NavbarMahasiswa({activeTab, onSelectTab}: NavbarProps) {
  return (
    <View style={styles.navbarContainer}>
      {NAV_ITEMS.map(item => {
        const isActive = activeTab === item.key;
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.tabItem}
            activeOpacity={0.75}
            onPress={() => onSelectTab(item.key)}>
            <Image
              source={item.icon}
              style={[
                styles.tabIcon,
                {tintColor: isActive ? '#0284C7' : '#3F464E'},
              ]}
              resizeMode="contain"
            />
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    paddingVertical: 10,
    paddingHorizontal: 8,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -2},
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabIcon: {
    width: 22,
    height: 22,
  },
  tabLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#3F464E',
  },
  tabLabelActive: {
    fontFamily: 'Inter-SemiBold',
    color: '#0284C7',
  },
});
