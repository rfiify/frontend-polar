import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Alert,
} from 'react-native';
import NavbarMahasiswa, { NavTabKey } from './NavbarMahasiswa';
import HeaderMahasiswa from './HeaderMahasiswa';

type Props = {
  navigation?: any;
};

export default function MenuAkunMahasiswaScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<NavTabKey>('Menu/Akun');

  const handleTabChange = (tab: NavTabKey) => {
    setActiveTab(tab);
    if (tab === 'Beranda') {
      navigation?.navigate('BerandaMahasiswa');
    } else if (tab === 'Lowongan') {
      navigation?.navigate('LowonganMahasiswa');
    } else if (tab === 'Proyek') {
      navigation?.navigate('ProyekMahasiswa');
    } else if (tab === 'Pesan') {
      navigation?.navigate('PesanMahasiswa');
    } else if (tab === 'Menu/Akun') {
      navigation?.navigate('MenuAkunMahasiswa');
    }
  };

  const handleLogout = () => {
    Alert.alert('Keluar dari Akun', 'Apakah kamu yakin ingin keluar dari POLAR?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Keluar',
        style: 'destructive',
        onPress: () => navigation?.replace('LoginMahasiswa'),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Header */}
      <HeaderMahasiswa navigation={navigation} subtitle="Menu & Akun" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Hero Card Profil Mahasiswa */}
        <View style={styles.profileCard}>
          {/* Watermark Perisai Kanan Bawah */}
          <View style={styles.shieldWatermark}>
            <Text style={styles.shieldWatermarkText}>🛡</Text>
          </View>

          <View style={styles.profileTopRow}>
            {/* Foto Profil dari Asset + Centang Hijau */}
            <View style={styles.avatarWrapper}>
              <Image
                source={require('../assets/kandidat/profile-rayhan.png')}
                style={styles.avatarImage}
                resizeMode="cover"
              />
              <View style={styles.verifiedGreenBadge}>
                <Text style={styles.verifiedGreenCheck}>✓</Text>
              </View>
            </View>

            {/* Info Nama, NPM & Kampus */}
            <View style={styles.profileInfo}>
              <Text style={styles.userName}>Rayhan Pratama</Text>
              <Text style={styles.userNpm}>NPM: 21753024</Text>
              <Text style={styles.userCampus} numberOfLines={1}>
                🎓 Politeknik Negeri Lampung (Polinela)
              </Text>
            </View>
          </View>

          {/* Pill Status Mahasiswa */}
          <View style={styles.roleBadgePill}>
            <View style={styles.roleGreenDot} />
            <Text style={styles.roleBadgeText}>Mahasiswa</Text>
          </View>
        </View>

        {/* Statistik Proyek Selesai */}
        <View style={styles.statsCard}>
          <Text style={styles.statsLabel}>Proyek Selesai</Text>
          <View style={styles.statsValueRow}>
            <Text style={styles.statsNumber}>12</Text>
            <Text style={styles.statsUnit}>Gigs</Text>
          </View>
          <Text style={styles.statsRating}>Rating 4.9 ★</Text>
        </View>

        {/* ==================== GRUP 1: INFORMASI PRIBADI & AKADEMIK ==================== */}
        <Text style={styles.groupTitle}>INFORMASI PRIBADI & AKADEMIK</Text>
        <View style={styles.menuGroupCard}>
          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.75}
            onPress={() => navigation?.navigate('DataDiriAkademik')}>
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIconEmoji}>👤</Text>
            </View>
            <View style={styles.menuTextCol}>
              <Text style={styles.menuTitle}>Data Diri & Akademik</Text>
              <Text style={styles.menuSubtitle} numberOfLines={1}>
                Rayhan Pratama • D4 TRPL • Smstr 6
              </Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* ==================== GRUP 2: KEUANGAN & PORTOFOLIO FREELANCE ==================== */}
        <Text style={styles.groupTitle}>KEUANGAN & PORTOFOLIO FREELANCE</Text>
        <View style={styles.menuGroupCard}>
          {/* Pesanan & Transaksi */}
          <TouchableOpacity
            style={[styles.menuRow, styles.menuRowDivider]}
            activeOpacity={0.75}
            onPress={() => navigation?.navigate('PesananTransaksi')}>
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIconEmoji}>🧾</Text>
            </View>
            <View style={styles.menuTextCol}>
              <Text style={styles.menuTitle}>Pesanan & Transaksi</Text>
              <Text style={styles.menuSubtitle} numberOfLines={1}>
                Penawaran masuk, pesanan aktif & M
              </Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          {/* M-Banking & E-Wallet */}
          <TouchableOpacity
            style={[styles.menuRow, styles.menuRowDivider]}
            activeOpacity={0.75}
            onPress={() => navigation?.navigate('MBankingEWallet')}>
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIconEmoji}>💳</Text>
            </View>
            <View style={styles.menuTextCol}>
              <Text style={styles.menuTitle}>M-Banking & E-Wallet</Text>
              <Text style={styles.menuSubtitle} numberOfLines={1}>
                Mandiri (•••• 8291) • GoPay Terverifik
              </Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          {/* Portofolio & Karya Saya */}
          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.75}
            onPress={() => navigation?.navigate('PortofolioKarya')}>
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIconEmoji}>🎨</Text>
            </View>
            <View style={styles.menuTextCol}>
              <Text style={styles.menuTitle}>Portofolio & Karya Saya</Text>
              <Text style={styles.menuSubtitle} numberOfLines={1}>
                Web Alumni, IoT Smart Farming, UI Rec
              </Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* ==================== GRUP 3: PENGATURAN & DUKUNGAN ==================== */}
        <Text style={styles.groupTitle}>PENGATURAN & DUKUNGAN</Text>
        <View style={styles.menuGroupCard}>
          <TouchableOpacity
            style={styles.menuRow}
            activeOpacity={0.75}
            onPress={() => navigation?.navigate('PusatLaporanBantuan')}>
            <View style={styles.menuIconBox}>
              <Text style={styles.menuIconEmoji}>🎧</Text>
            </View>
            <View style={styles.menuTextCol}>
              <Text style={styles.menuTitle}>Pusat Laporan & Bantuan</Text>
              <Text style={styles.menuSubtitle} numberOfLines={1}>
                Aduan internal kampus & keluhan mitra
              </Text>
            </View>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Tombol Keluar dari Akun */}
        <TouchableOpacity
          style={styles.logoutButton}
          activeOpacity={0.8}
          onPress={handleLogout}>
          <Text style={styles.logoutIcon}>↪</Text>
          <Text style={styles.logoutText}>Keluar dari Akun</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Navbar Bawah */}
      <NavbarMahasiswa
        activeTab={activeTab}
        onSelectTab={handleTabChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },

  // HERO PROFILE CARD
  profileCard: {
    backgroundColor: '#0A2942',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    overflow: 'hidden',
    position: 'relative',
  },
  shieldWatermark: {
    position: 'absolute',
    right: -10,
    bottom: -18,
    opacity: 0.08,
  },
  shieldWatermarkText: {
    fontSize: 96,
    color: '#FFFFFF',
  },
  profileTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 14,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImage: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 2,
    borderColor: '#3B6E94',
    backgroundColor: '#CBD5E1',
  },
  verifiedGreenBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#0A2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedGreenCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    color: '#FFFFFF',
  },
  userNpm: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#CBD5E1',
    marginTop: 2,
  },
  userCampus: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#94A3B8',
    marginTop: 4,
  },
  roleBadgePill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.16)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.35)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
  },
  roleGreenDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#10B981',
  },
  roleBadgeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#34D399',
  },

  // STATS CARD
  statsCard: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 18,
  },
  statsLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#64748B',
  },
  statsValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 5,
    marginTop: 2,
  },
  statsNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A',
  },
  statsUnit: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  statsRating: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#2563EB',
    marginTop: 4,
  },

  // MENU GROUPS
  groupTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#64748B',
    letterSpacing: 0.6,
    marginBottom: 8,
    marginTop: 4,
  },
  menuGroupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    marginBottom: 16,
    overflow: 'hidden',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
    gap: 12,
  },
  menuRowDivider: {
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  menuIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#EBF4FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIconEmoji: {
    fontSize: 16,
    color: '#15344E',
  },
  menuTextCol: {
    flex: 1,
  },
  menuTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  menuSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  menuChevron: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#64748B',
  },

  // LOGOUT BUTTON
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEE2E2',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 6,
    gap: 8,
  },
  logoutIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#DC2626',
  },
  logoutText: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#DC2626',
  },
});