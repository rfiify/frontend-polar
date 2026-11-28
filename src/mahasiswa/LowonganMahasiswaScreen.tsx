import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import HeaderMahasiswa from './HeaderMahasiswa';
import NavbarMahasiswa, { NavTabKey } from './NavbarMahasiswa';

type Props = {
  navigation?: any;
};

type JobItem = {
  id: string;
  badges: string[];
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
  title: string;
  company: string;
  locationIcon: string;
  location: string;
  salary: string;
  skills: string[];
  footerInfo: string;
};

const JOBS_DATA: JobItem[] = [
  {
    id: '1',
    badges: ['Mitra Resmi Polinela', 'Magang / Full-time'],
    initials: 'TI',
    avatarBg: '#0F2942',
    avatarTextColor: '#FFFFFF',
    title: 'Frontend Web Developer Intern',
    company: 'PT Telkom Indonesia (Persero) Tbk • Witel Lam...',
    locationIcon: '📍',
    location: 'Bandar Lampung (Hybrid)',
    salary: 'Rp 2.500.000 - Rp 3.500.000 / bln',
    skills: ['React.js', 'Tailwind CSS', 'REST API', 'Konversi 20 SKS'],
    footerInfo: 'Dibutuhkan 2 Mahasiswa • 2 hari lalu',
  },
  {
    id: '2',
    badges: ['Part-time', 'Prioritas Desain Komunikasi/MI'],
    initials: 'AT',
    avatarBg: '#1D4E6E',
    avatarTextColor: '#FFFFFF',
    title: 'UI/UX Designer Junior',
    company: 'CV Agro Tech Nusantara • Natar, Lampung Sel...',
    locationIcon: '🏢',
    location: 'On-site (Workshop Natar)',
    salary: 'Rp 1.800.000 - Rp 2.400.000 / bln',
    skills: ['Figma', 'Design System', 'Wireframing', 'User Research'],
    footerInfo: 'Batas 30 Okt 2024 • Hari ini',
  },
  {
    id: '3',
    badges: ['Mitra BUMN', 'Kontrak 6 Bulan'],
    initials: 'BSI',
    avatarBg: '#064E3B',
    avatarTextColor: '#FFFFFF',
    title: 'Staff Administrasi Digital &...',
    company: 'Bank Syariah Indonesia (BSI) KC Lampung - Dev...',
    locationIcon: '📍',
    location: 'Bandar Lampung (On-site)',
    salary: 'Gaji Kompetitif (UMR + Tunjangan)',
    skills: ['MS Excel Lanjutan', 'Pengarsipan Digital', 'Ketelitian Data'],
    footerInfo: 'Dibutuhkan 3 Mahasiswa • 3 hari lalu',
  },
  {
    id: '4',
    badges: ['Proyek Riset Magang', 'Pertanian / TRPL'],
    initials: 'SA',
    avatarBg: '#0B253A',
    avatarTextColor: '#FFFFFF',
    title: 'IoT & Smart Farming Assistant',
    company: 'PT Sinergi Agro Digital Lampung • Branti, Lam...',
    locationIcon: '🌱',
    location: 'Greenhouse Lab & Remote Monitoring',
    salary: 'Rp 2.000.000 - Rp 3.000.000 / bln',
    skills: ['Sensor IoT', 'Arduino/ESP32', 'Python Dasar', 'Pertanian Modern'],
    footerInfo: 'Rekrutmen Kuliah • 5 hari lalu',
  },
  {
    id: '5',
    badges: ['Full Remote', 'Terbuka Semester 5 & 7'],
    initials: 'NL',
    avatarBg: '#E0F2FE',
    avatarTextColor: '#0284C7',
    title: 'Junior QA Tester (Manual & Auto)',
    company: 'Nusantara Labs Techindo',
    locationIcon: '📶',
    location: 'Kerja Fleksibel dari Rumah / Kampus',
    salary: 'Rp 2.200.000 - Rp 3.200.000 / bln',
    skills: ['Test Case', 'Postman', 'Bug Reporting', 'Git'],
    footerInfo: '1 minggu lalu',
  },
];

export default function LowonganMahasiswaScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [locationChipVisible, setLocationChipVisible] = useState(true);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<NavTabKey>('Lowongan');

  const toggleBookmark = (id: string) => {
    setBookmarkedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

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

  const filteredJobs = JOBS_DATA.filter(
    job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderMahasiswa navigation={navigation} subtitle="Lowongan" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Judul Halaman */}
        <Text style={styles.pageTitle}>Lowongan Kerja</Text>
        <Text style={styles.pageSubtitle}>
          Temukan peluang magang & kerja yang sesuai kemampuanmu.
        </Text>

        {/* Banner Status Lamaran Saya */}
        <TouchableOpacity
          style={styles.statusBanner}
          activeOpacity={0.8}
          onPress={() => navigation?.navigate('StatusLamaranMahasiswa')}>
          <View style={styles.statusIconBox}>
            <Text style={styles.statusIconText}>☑</Text>
          </View>
          <View style={styles.statusInfo}>
            <View style={styles.statusTitleRow}>
              <Text style={styles.statusTitle}>Status Lamaran Saya</Text>
              <View style={styles.activePill}>
                <Text style={styles.activePillText}>4 Aktif</Text>
              </View>
            </View>
            <Text style={styles.statusDesc}>2 Dalam Review HRD mitra</Text>
          </View>
          <Text style={styles.chevron}>→</Text>
        </TouchableOpacity>

        {/* Search Bar */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari posisi atau nama perusahaan..."
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
          <TouchableOpacity
            style={styles.clearBtn}
            onPress={() => setSearch('')}>
            <Text style={styles.clearBtnText}>⊗</Text>
          </TouchableOpacity>
        </View>

        {/* Filter Chips */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterIconBtn} activeOpacity={0.75}>
            <Text style={styles.filterIconText}>Filter</Text>
            <View style={styles.filterCountBadge}>
              <Text style={styles.filterCountText}>3</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.chip,
              activeFilter === 'Semua' && styles.chipActive,
            ]}
            onPress={() => setActiveFilter('Semua')}>
            <Text
              style={[
                styles.chipText,
                activeFilter === 'Semua' && styles.chipTextActive,
              ]}>
              Semua (24)
            </Text>
          </TouchableOpacity>

          {locationChipVisible && (
            <TouchableOpacity
              style={styles.locationChip}
              onPress={() => setLocationChipVisible(false)}>
              <Text style={styles.locationChipText}>Bandar Lampung ×</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Subheader Jumlah Lowongan Terverifikasi */}
        <View style={styles.verifiedRow}>
          <View style={styles.verifiedLeft}>
            <View style={styles.verifiedCheckCircle}>
              <Text style={styles.verifiedCheckText}>✓</Text>
            </View>
            <Text style={styles.verifiedText}>
              Menampilkan <Text style={styles.verifiedBold}>16 Lowongan</Text>{' '}
              Terverifikasi
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.sortText}>Terbaru ⌄</Text>
          </TouchableOpacity>
        </View>

        {/* Daftar Card Lowongan */}
        {filteredJobs.map(job => {
          const isBookmarked = bookmarkedIds.includes(job.id);
          return (
            <View key={job.id} style={styles.card}>
              {/* Top Badges + Bookmark */}
              <View style={styles.cardTopRow}>
                <View style={styles.badgeRow}>
                  {job.badges.map((badge, idx) => (
                    <View
                      key={idx}
                      style={idx === 0 ? styles.tagBlue : styles.tagGray}>
                      <Text
                        style={
                          idx === 0 ? styles.tagBlueText : styles.tagGrayText
                        }>
                        {badge}
                      </Text>
                    </View>
                  ))}
                </View>

                <TouchableOpacity
                  onPress={() => toggleBookmark(job.id)}
                  hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                  <Text
                    style={[
                      styles.bookmarkIcon,
                      isBookmarked && styles.bookmarkIconActive,
                    ]}>
                    {isBookmarked ? '🔖' : '🏷'}
                  </Text>
                </TouchableOpacity>
              </View>

              {/* Avatar + Judul Posisi + Nama Perusahaan */}
              <View style={styles.jobHeader}>
                <View
                  style={[
                    styles.companyAvatar,
                    { backgroundColor: job.avatarBg },
                  ]}>
                  <Text
                    style={[
                      styles.companyAvatarText,
                      { color: job.avatarTextColor },
                    ]}>
                    {job.initials}
                  </Text>
                </View>
                <View style={styles.jobMeta}>
                  <Text style={styles.jobTitle} numberOfLines={1}>
                    {job.title}
                  </Text>
                  <Text style={styles.companyName} numberOfLines={1}>
                    {job.company}
                  </Text>
                </View>
              </View>

              {/* Lokasi & Gaji */}
              <Text style={styles.locationText}>
                {job.locationIcon} {job.location}
              </Text>
              <Text style={styles.salaryText}>💵 {job.salary}</Text>

              {/* Skill Pills */}
              <View style={styles.skillsRow}>
                {job.skills.map(skill => (
                  <View key={skill} style={styles.skillPill}>
                    <Text style={styles.skillPillText}>{skill}</Text>
                  </View>
                ))}
              </View>

              {/* Footer Card */}
              <View style={styles.cardFooter}>
                <Text style={styles.postedText}>{job.footerInfo}</Text>
                <TouchableOpacity
                  style={styles.detailBtn}
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation?.navigate('DetailLowonganMahasiswa', { job })
                  }>
                  <Text style={styles.detailBtnText}>Lihat Detail →</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </ScrollView>

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
  scrollContent: {
    padding: 16,
    paddingBottom: 28,
  },
  pageTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#0F172A',
  },
  pageSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
    marginBottom: 14,
  },
  statusBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF4FA',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#D6E6F4',
  },
  statusIconBox: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#15344E',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statusIconText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  statusInfo: {
    flex: 1,
  },
  statusTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statusTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F2942',
  },
  activePill: {
    backgroundColor: '#D0E4F5',
    paddingHorizontal: 7,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#1D4E6E',
  },
  statusDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
  chevron: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#3B6E94',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
    color: '#64748B',
  },
  searchInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#0F172A',
    height: 44,
  },
  clearBtn: {
    padding: 4,
  },
  clearBtnText: {
    fontSize: 15,
    color: '#94A3B8',
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  filterIconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    gap: 6,
  },
  filterIconText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0F2942',
  },
  filterCountBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#15344E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterCountText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#E2E8F0',
  },
  chipActive: {
    backgroundColor: '#15344E',
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#334155',
  },
  chipTextActive: {
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  locationChip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#EBF4FA',
    borderWidth: 1,
    borderColor: '#CBE0F2',
  },
  locationChipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#1D4E6E',
  },
  verifiedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  verifiedLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  verifiedCheckCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10B981',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheckText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Inter-Bold',
  },
  verifiedText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#475569',
  },
  verifiedBold: {
    fontFamily: 'Inter-Bold',
    color: '#0F172A',
  },
  sortText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#475569',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    flex: 1,
  },
  tagBlue: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagBlueText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#1D4E6E',
  },
  tagGray: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagGrayText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#475569',
  },
  bookmarkIcon: {
    fontSize: 16,
    color: '#94A3B8',
  },
  bookmarkIconActive: {
    color: '#15344E',
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  companyAvatar: {
    width: 42,
    height: 42,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
  },
  jobMeta: {
    flex: 1,
  },
  jobTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  companyName: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
  salaryText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0D9488',
    marginTop: 4,
    marginBottom: 10,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 12,
  },
  skillPill: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  skillPillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#1E40AF',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
  },
  postedText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  detailBtn: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 8,
  },
  detailBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#15344E',
  },
});