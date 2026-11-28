import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';

type Props = {
  navigation?: any;
};

type ContactItem = {
  id: string;
  name: string;
  subLine1: string;
  subLine2?: string;
  subLine2IsBlue?: boolean;
  isOnline?: boolean;
  verifiedType?: 'badge' | 'grad' | null;
  avatarImage?: ImageSourcePropType;
  avatarText?: string;
  avatarBg?: string;
  avatarTextColor?: string;
};

const FREQUENT_CONTACTS: ContactItem[] = [
  {
    id: 'f1',
    name: 'Daffa R.',
    subLine1: 'Gemastik',
    subLine2: 'Rekan Tim Gemastik Divisi UI/UX',
    avatarImage: require('../assets/kandidat/dimasAryaSaputra.png'),
    isOnline: true,
  },
  {
    id: 'f2',
    name: 'Bpk. Fajar',
    subLine1: 'Koperasi Kopi',
    subLine2: 'Koperasi Kopi Tanggamus',
    avatarImage: require('../assets/kandidat/bagusPratama.png'),
    verifiedType: 'badge',
    isOnline: true,
  },
  {
    id: 'f3',
    name: 'Putri Amanda',
    subLine1: "TRPL '22",
    subLine2: 'NIM 21753058 • D4 TRPL Polinela',
    avatarImage: require('../assets/kandidat/sitiRahmawati.png'),
  },
  {
    id: 'f4',
    name: 'Dr. Eko P.',
    subLine1: 'Pembimbing',
    subLine2: 'Dosen Pembimbing PKL & MBKM',
    avatarText: 'EP',
    avatarBg: '#0F2942',
    avatarTextColor: '#FFFFFF',
    verifiedType: 'grad',
  },
];

const REKAN_MAHASISWA: ContactItem[] = [
  {
    id: 'm1',
    name: 'Daffa Ramadhan',
    subLine1: 'NIM 2215061042 • S1 Teknik Inform',
    subLine2: 'Rekan Tim Gemastik Divisi UI/UX',
    subLine2IsBlue: true,
    isOnline: true,
    avatarImage: require('../assets/kandidat/dimasAryaSaputra.png'),
  },
  {
    id: 'm2',
    name: 'Putri Amanda',
    subLine1: 'NIM 21753058 • D4 TRPL Polinela •',
    subLine2: 'Aktif 15 menit lalu',
    avatarImage: require('../assets/kandidat/sitiRahmawati.png'),
  },
  {
    id: 'm3',
    name: 'Bagas Pratama',
    subLine1: 'NIM 2215061019 • Sistem Informasi',
    subLine2: 'UI/UX Designer Magang',
    avatarText: 'BP',
    avatarBg: '#60A5FA',
    avatarTextColor: '#0F2942',
  },
  {
    id: 'm4',
    name: 'Nabila Syahrani',
    subLine1: 'NIM 21753040 • D4 TRPL Polinela',
    subLine2: 'Backend Developer • Proyek Capstone',
    avatarText: 'NS',
    avatarBg: '#E2EDF7',
    avatarTextColor: '#0F2942',
  },
];

const MITRA_INDUSTRI: ContactItem[] = [
  {
    id: 'k1',
    name: 'Bpk. Fajar Setiawan',
    subLine1: 'Koperasi Kopi Tanggamus',
    subLine2: 'Mitra Klien UMKM • Proyek\nDigitalisasi',
    subLine2IsBlue: true,
    verifiedType: 'badge',
    isOnline: true,
    avatarImage: require('../assets/kandidat/bagusPratama.png'),
  },
  {
    id: 'k2',
    name: 'HRD Telkom Witel Lampung',
    subLine1: 'Bpk. Dimas Ardiansyah',
    subLine2: 'Rekruter Industri Magang MBKM',
    verifiedType: 'badge',
    isOnline: true,
    avatarText: '🏢',
    avatarBg: '#0F2942',
    avatarTextColor: '#FFFFFF',
  },
  {
    id: 'k3',
    name: 'Ibu Rina Marlina',
    subLine1: 'PT Astra Graphia IT',
    subLine2: 'Talent Acquisition &\nCampus Partner',
    verifiedType: 'badge',
    avatarText: 'RM',
    avatarBg: '#E2EDF7',
    avatarTextColor: '#0F2942',
  },
];

const DOSEN_PEMBIMBING: ContactItem[] = [
  {
    id: 'd1',
    name: 'Dr. Eko Prasetyo, M.Kom.',
    subLine1: 'NIP 198204122008121002',
    subLine2: 'Dosen Pembimbing PKL & MBKM',
    verifiedType: 'grad',
    avatarText: 'EP',
    avatarBg: '#0F2942',
    avatarTextColor: '#FFFFFF',
  },
  {
    id: 'd2',
    name: 'Siti Rahmawati, S.T., M.T.',
    subLine1: 'NIP 198807192015042001',
    subLine2: 'Koordinator Magang & Kerjasama\nIndustri',
    verifiedType: 'grad',
    avatarText: 'SR',
    avatarBg: '#0F2942',
    avatarTextColor: '#FFFFFF',
  },
];

export default function MulaiChatMahasiswaScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');

  const openChatWithContact = (item: ContactItem) => {
    navigation?.navigate('DetailChatMahasiswa', {
      chatId: item.id,
      title: item.name,
      subtitle: item.subLine2
        ? `${item.subLine1} • ${item.subLine2.replace('\n', ' ')}`
        : item.subLine1,
      avatarImage: item.avatarImage,
      avatarText: item.avatarText,
      avatarBg: item.avatarBg || '#05263B',
      avatarTextColor: item.avatarTextColor || '#FFFFFF',
      isOnline: item.isOnline ?? false,
      verifiedType: item.verifiedType ?? null,
    });
  };

  const filterList = (list: ContactItem[]) =>
    list.filter(
      item =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.subLine1.toLowerCase().includes(search.toLowerCase()) ||
        (item.subLine2 &&
          item.subLine2.toLowerCase().includes(search.toLowerCase())),
    );

  const filteredRekan = filterList(REKAN_MAHASISWA);
  const filteredMitra = filterList(MITRA_INDUSTRI);
  const filteredDosen = filterList(DOSEN_PEMBIMBING);

  const renderContactRow = (item: ContactItem, isLast: boolean) => (
    <TouchableOpacity
      key={item.id}
      style={[styles.contactRow, isLast && { borderBottomWidth: 0, paddingBottom: 4 }]}
      activeOpacity={0.8}
      onPress={() => openChatWithContact(item)}>
      {/* Avatar */}
      <View style={styles.rowAvatarWrapper}>
        <View
          style={[
            styles.rowAvatarCircle,
            { backgroundColor: item.avatarBg || '#E2E8F0' },
          ]}>
          {item.avatarImage ? (
            <Image
              source={item.avatarImage}
              style={styles.rowAvatarImage}
              resizeMode="cover"
            />
          ) : (
            <Text
              style={[
                styles.rowAvatarInitials,
                { color: item.avatarTextColor || '#0F2942' },
              ]}>
              {item.avatarText}
            </Text>
          )}
        </View>

        {item.verifiedType === 'grad' && (
          <View style={styles.gradMiniBadge}>
            <Text style={styles.gradMiniIcon}>🎓</Text>
          </View>
        )}
      </View>

      {/* Info Kontak */}
      <View style={styles.rowMeta}>
        <View style={styles.rowNameLine}>
          <Text style={styles.rowName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.isOnline && (
            <View style={styles.onlinePill}>
              <Text style={styles.onlinePillText}>Online</Text>
            </View>
          )}
          {item.verifiedType === 'badge' && (
            <View style={styles.blueVerifiedBadge}>
              <Text style={styles.blueVerifiedCheck}>✓</Text>
            </View>
          )}
        </View>

        <Text style={styles.rowSubLine1} numberOfLines={1}>
          {item.subLine1}
        </Text>

        {item.subLine2 ? (
          <Text
            style={[
              styles.rowSubLine2,
              item.subLine2IsBlue && styles.rowSubLine2Blue,
            ]}>
            {item.subLine2}
          </Text>
        ) : null}
      </View>

      {/* Tombol Chat Kotak di Kanan */}
      <TouchableOpacity
        style={styles.chatSquareBtn}
        activeOpacity={0.8}
        onPress={() => openChatWithContact(item)}>
        <Text style={styles.chatSquareIcon}>💬</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top App Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.75}
          onPress={() => navigation?.goBack()}>
          <Text style={styles.backIcon}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Mulai Chat Baru</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari nama mahasiswa, NIM, mitra in"
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Card Layanan Resmi: POLAR Care */}
        <TouchableOpacity
          style={styles.polarCareCard}
          activeOpacity={0.85}
          onPress={() =>
            openChatWithContact({
              id: 'support-polar',
              name: 'POLAR Care',
              subLine1: 'Bantuan resmi Customer Service',
              verifiedType: 'badge',
              avatarText: '🎧',
              avatarBg: '#E0F2FE',
              avatarTextColor: '#0284C7',
            })
          }>
          <View style={styles.polarCareIconBox}>
            <Text style={styles.polarCareEmoji}>🎧</Text>
          </View>
          <Text style={styles.polarCareTitle}>POLAR Care</Text>
          <Text style={styles.polarCareSub}>
            Bantuan resmi{'\n'}Customer Service
          </Text>
        </TouchableOpacity>

        {/* ==================== SERING DIHUBUNGI ==================== */}
        <View style={styles.frequentHeaderRow}>
          <Text style={styles.capsSectionLabel}>SERING DIHUBUNGI</Text>
          <Text style={styles.quickHistoryLink}>Riwayat Cepat</Text>
        </View>

        <View style={styles.frequentRow}>
          {FREQUENT_CONTACTS.map(item => (
            <TouchableOpacity
              key={item.id}
              style={styles.frequentItem}
              activeOpacity={0.8}
              onPress={() => openChatWithContact(item)}>
              <View
                style={[
                  styles.frequentCircle,
                  { backgroundColor: item.avatarBg || '#CBD5E1' },
                ]}>
                {item.avatarImage ? (
                  <Image
                    source={item.avatarImage}
                    style={styles.frequentImage}
                    resizeMode="cover"
                  />
                ) : (
                  <Text
                    style={[
                      styles.frequentInitials,
                      { color: item.avatarTextColor || '#FFFFFF' },
                    ]}>
                    {item.avatarText}
                  </Text>
                )}
              </View>
              <Text style={styles.frequentName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.frequentSub} numberOfLines={1}>
                {item.subLine1}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ==================== REKAN MAHASISWA & TIM ==================== */}
        <View style={styles.groupHeaderRow}>
          <View style={styles.groupTitleLeft}>
            <Text style={styles.groupIcon}>👥</Text>
            <Text style={styles.capsSectionLabel}>REKAN MAHASISWA & TIM</Text>
          </View>
          <Text style={styles.groupRightCount}>4 Rekan</Text>
        </View>

        <View style={styles.groupCard}>
          {filteredRekan.map((item, idx) =>
            renderContactRow(item, idx === filteredRekan.length - 1),
          )}
        </View>

        {/* ==================== MITRA INDUSTRI & KLIEN MBKM ==================== */}
        <View style={styles.groupHeaderRow}>
          <View style={styles.groupTitleLeft}>
            <Text style={styles.groupIcon}>🏢</Text>
            <Text style={styles.capsSectionLabel}>
              MITRA INDUSTRI & KLIEN MBKM
            </Text>
          </View>
          <View style={styles.verifiedTagPill}>
            <Text style={styles.verifiedTagText}>Terverifikasi</Text>
          </View>
        </View>

        <View style={styles.groupCard}>
          {filteredMitra.map((item, idx) =>
            renderContactRow(item, idx === filteredMitra.length - 1),
          )}
        </View>

        {/* ==================== DOSEN & PEMBIMBING KAMPUS ==================== */}
        <View style={styles.groupHeaderRow}>
          <View style={styles.groupTitleLeft}>
            <Text style={styles.groupIcon}>🎓</Text>
            <Text style={styles.capsSectionLabel}>
              DOSEN & PEMBIMBING KAMPUS
            </Text>
          </View>
          <Text style={styles.groupRightCount}>2 Pembimbing</Text>
        </View>

        <View style={styles.groupCard}>
          {filteredDosen.map((item, idx) =>
            renderContactRow(item, idx === filteredDosen.length - 1),
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // TOP BAR
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 14,
    paddingBottom: 12,
    paddingHorizontal: 16,
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 26,
    color: '#0F172A',
    lineHeight: 26,
  },
  topBarTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    color: '#0F172A',
  },

  // SEARCH BAR
  searchWrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    height: 44,
  },
  searchIcon: {
    fontSize: 15,
    color: '#64748B',
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#0F172A',
    paddingVertical: 0,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },

  // POLAR CARE CARD
  polarCareCard: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
    minWidth: 142,
  },
  polarCareIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#DCEBF7',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  polarCareEmoji: {
    fontSize: 17,
  },
  polarCareTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
    marginBottom: 3,
  },
  polarCareSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    lineHeight: 15.5,
  },

  // SERING DIHUBUNGI
  frequentHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  capsSectionLabel: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#475569',
    letterSpacing: 0.4,
  },
  quickHistoryLink: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
  },
  frequentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 22,
    gap: 8,
  },
  frequentItem: {
    flex: 1,
    alignItems: 'center',
  },
  frequentCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 6,
  },
  frequentImage: {
    width: '100%',
    height: '100%',
  },
  frequentInitials: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  frequentName: {
    fontFamily: 'Inter-Bold',
    fontSize: 11.5,
    color: '#0F172A',
    textAlign: 'center',
  },
  frequentSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 1,
  },

  // GROUP SECTION HEADERS
  groupHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  groupTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  groupIcon: {
    fontSize: 13,
  },
  groupRightCount: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  verifiedTagPill: {
    backgroundColor: '#DCEBF7',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  verifiedTagText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#1D4E6E',
  },

  // GROUP CARD & CONTACT ROWS
  groupCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 12,
  },
  rowAvatarWrapper: {
    position: 'relative',
  },
  rowAvatarCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  rowAvatarImage: {
    width: '100%',
    height: '100%',
  },
  rowAvatarInitials: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  gradMiniBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 17,
    height: 17,
    borderRadius: 8.5,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  gradMiniIcon: {
    fontSize: 10,
  },
  rowMeta: {
    flex: 1,
  },
  rowNameLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 2,
  },
  rowName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
    flexShrink: 1,
  },
  onlinePill: {
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  onlinePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 9.5,
    color: '#0F766E',
  },
  blueVerifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueVerifiedCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 8.5,
    color: '#FFFFFF',
  },
  rowSubLine1: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
  },
  rowSubLine2: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },
  rowSubLine2Blue: {
    fontFamily: 'Inter-SemiBold',
    color: '#286184',
  },
  chatSquareBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#EDF5FC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatSquareIcon: {
    fontSize: 14,
    color: '#0F2942',
  },
});