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
import NavbarMahasiswa, { NavTabKey } from './NavbarMahasiswa';

type Props = {
  navigation?: any;
};

type ChatItem = {
  id: string;
  name: string;
  verifiedType?: 'badge' | 'grad' | null;
  roleLabel: string;
  message: string;
  time: string;
  timeHighlight?: boolean;
  unread?: boolean;
  isOnline?: boolean;
  checkStatus?: 'single' | 'double' | null;
  avatarImage?: ImageSourcePropType;
  avatarText?: string;
  avatarBg?: string;
  avatarTextColor?: string;
  isSupportIcon?: boolean;
};

// Sesuaikan nama file gambar di folder src/assets/Mahasiswa/ kamu
const CHAT_DATA: ChatItem[] = [
  {
    id: '1',
    name: 'HRD Telkom Witel Lampung',
    verifiedType: 'badge',
    roleLabel: 'Bpk. Dimas (Mitra Magang)',
    message:
      'Halo Rayhan, berkas portofolio kamu sudah kami review. Apakah besok ada waktu luang untuk briefing awal?',
    time: '14:45 WIB',
    timeHighlight: true,
    unread: true,
    isOnline: true,
    checkStatus: null,
    avatarImage: require('../assets/kandidat/avatar-telkom.png'),
    avatarBg: '#F1F5F9',
  },
  {
    id: '2',
    name: 'Ibu Rina Marlina',
    verifiedType: 'badge',
    roleLabel: 'Rekruter AGIT',
    message: 'Undangan tautan wawancara teks magang su',
    time: '10:35 WIB',
    timeHighlight: false,
    unread: false,
    isOnline: false,
    checkStatus: 'double',
    avatarImage: require('../assets/kandidat/sitiRahmawati.png'),
    avatarBg: '#CBD5E1',
  },
  {
    id: '3',
    name: 'Bpk. Fajar Setiawan',
    verifiedType: null,
    roleLabel: 'Klien UMKM Kopi',
    message:
      'Baik mas, nanti tolong kirimkan rincian modul IoT-nya ya untuk dipelajari tim koperasi.',
    time: 'Kemarin',
    timeHighlight: true,
    unread: true,
    isOnline: true,
    checkStatus: null,
    avatarImage: require('../assets/kandidat/bagusPratama.png'),
    avatarBg: '#14532D',
  },
  {
    id: '4',
    name: 'Daffa Ramadhan',
    verifiedType: null,
    roleLabel: 'Rekan Tim Gemastik ITERA',
    message: 'Rayhan, draft proposal Gemastik bagian front',
    time: 'Kemarin',
    timeHighlight: false,
    unread: false,
    isOnline: false,
    checkStatus: 'single',
    avatarText: 'DR',
    avatarBg: '#15344E',
    avatarTextColor: '#FFFFFF',
  },
  {
    id: '5',
    name: 'Firdaus Alfarizi',
    verifiedType: null,
    roleLabel: "TRPL '25 Polinela",
    message: 'Boleh minta contoh kode konfigurasi Tailwind',
    time: '2 hari lalu',
    timeHighlight: false,
    unread: false,
    isOnline: false,
    checkStatus: 'double',
    avatarImage: require('../assets/kandidat/dimasAryaSaputra.png'),
    avatarBg: '#334155',
  },
  {
    id: '6',
    name: 'Dr. Eko Prasetyo, M.Kom.',
    verifiedType: 'grad',
    roleLabel: 'Dosen Pembimbing PKL',
    message: 'Laporan kemajuan magang bab 2 sudah saya',
    time: '3 hari lalu',
    timeHighlight: false,
    unread: false,
    isOnline: false,
    checkStatus: 'double',
    avatarImage: require('../assets/kandidat/bagusPratama.png'),
    avatarBg: '#475569',
  },
  {
    id: '7',
    name: 'POLAR Care Support',
    verifiedType: 'badge',
    roleLabel: 'Layanan Bantuan Resmi',
    message: 'Tiket #CS-8921 mengenai verifikasi SKS mag',
    time: '',
    timeHighlight: false,
    unread: false,
    isOnline: false,
    checkStatus: 'double',
    avatarText: '🎧',
    avatarBg: '#E0F2FE',
    avatarTextColor: '#0284C7',
    isSupportIcon: true,
  },
];

export default function PesanMahasiswaScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<NavTabKey>('Pesan');

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

  const filteredChats = CHAT_DATA.filter(
    item =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.roleLabel.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8FAFC" />

      {/* Header Judul Pesan & Search */}
      <View style={styles.topSection}>
        <Text style={styles.pageTitle}>Pesan</Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari pesan, mitra, mahasiswa, atau doser"
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.chipActive} activeOpacity={0.85}>
            <Text style={styles.chipActiveText}>Semua</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Daftar Pesan */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {filteredChats.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.chatCard}
            activeOpacity={0.8}
            onPress={() =>
              navigation?.navigate('DetailChatMahasiswa', {
                chatId: item.id,
                title: item.name,
                subtitle: item.roleLabel,
                avatarImage: item.avatarImage,
                avatarText: item.avatarText,
                avatarBg: item.avatarBg,
                avatarTextColor: item.avatarTextColor,
                isOnline: item.isOnline,
                verifiedType: item.verifiedType,
              })
            }>
            {/* Avatar dari Asset / Inisial + Indikator Online */}
            <View style={styles.avatarContainer}>
              <View
                style={[
                  styles.avatarBox,
                  { backgroundColor: item.avatarBg || '#15344E' },
                ]}>
                {item.avatarImage ? (
                  <Image
                    source={item.avatarImage}
                    style={styles.avatarImage}
                    resizeMode="cover"
                  />
                ) : (
                  <Text
                    style={[
                      styles.avatarInitials,
                      { color: item.avatarTextColor || '#FFFFFF' },
                      item.isSupportIcon && { fontSize: 20 },
                    ]}>
                    {item.avatarText}
                  </Text>
                )}
              </View>
              {item.isOnline && <View style={styles.onlineDot} />}
            </View>

            {/* Konten Pesan */}
            <View style={styles.chatBody}>
              {/* Baris Nama + Verified + Waktu */}
              <View style={styles.nameRow}>
                <View style={styles.nameLeft}>
                  <Text style={styles.senderName} numberOfLines={1}>
                    {item.name}
                  </Text>
                  {item.verifiedType === 'badge' && (
                    <View style={styles.verifiedBadge}>
                      <Text style={styles.verifiedCheck}>✓</Text>
                    </View>
                  )}
                  {item.verifiedType === 'grad' && (
                    <Text style={styles.gradIcon}>🎓</Text>
                  )}
                </View>

                {item.time ? (
                  <Text
                    style={[
                      styles.timeText,
                      item.timeHighlight && styles.timeTextHighlight,
                    ]}>
                    {item.time}
                  </Text>
                ) : null}
              </View>

              {/* Pill Jabatan / Peran */}
              <View style={styles.rolePill}>
                <Text style={styles.rolePillText}>{item.roleLabel}</Text>
              </View>

              {/* Cuplikan Pesan + Centang */}
              <View style={styles.messageRow}>
                <Text
                  style={[
                    styles.messageText,
                    item.unread && styles.messageTextUnread,
                  ]}
                  numberOfLines={item.unread ? 3 : 1}>
                  {item.message}
                </Text>

                {item.checkStatus === 'double' && (
                  <Text style={styles.doubleCheck}>✓✓</Text>
                )}
                {item.checkStatus === 'single' && (
                  <Text style={styles.singleCheck}>✓</Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tombol Melayang Mulai Chat */}
      <TouchableOpacity
        style={styles.fabButton}
        activeOpacity={0.85}
        onPress={() => navigation?.navigate('MulaiChatMahasiswa')}>
        <Text style={styles.fabIcon}>📝</Text>
        <Text style={styles.fabText}>Mulai Chat</Text>
      </TouchableOpacity>

      {/* Navbar Bawah */}
      <NavbarMahasiswa activeTab={activeTab} onSelectTab={handleTabChange} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  topSection: {
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 12 : 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
    backgroundColor: '#F8FAFC',
  },
  pageTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#0F172A',
    marginBottom: 14,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    marginBottom: 12,
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
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: '#15344E',
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderRadius: 20,
  },
  chipActiveText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
  },

  // LIST CHAT
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 88,
  },
  chatCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 3,
    elevation: 1,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatarBox: {
    width: 46,
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarInitials: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
  },
  onlineDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#0D9488',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  chatBody: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  nameLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingRight: 6,
    gap: 5,
  },
  senderName: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
    flexShrink: 1,
  },
  verifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheck: {
    color: '#FFFFFF',
    fontSize: 9,
    fontFamily: 'Inter-Bold',
  },
  gradIcon: {
    fontSize: 13,
  },
  timeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  timeTextHighlight: {
    fontFamily: 'Inter-SemiBold',
    color: '#0284C7',
  },
  rolePill: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 5,
  },
  rolePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#286184',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 4,
  },
  messageText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    lineHeight: 17,
  },
  messageTextUnread: {
    fontFamily: 'Inter-Medium',
    color: '#0F172A',
  },
  doubleCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#3B6E94',
  },
  singleCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#94A3B8',
  },

  // FLOATING ACTION BUTTON
  fabButton: {
    position: 'absolute',
    right: 16,
    bottom: 76,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#15344E',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    gap: 8,
    elevation: 6,
    shadowColor: '#0F2942',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  fabIcon: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  fabText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },
});