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

export default function BerandaMahasiswaScreen({ navigation }: Props) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');
  const [activeTab, setActiveTab] = useState<NavTabKey>('Beranda');

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderMahasiswa navigation={navigation} />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Hero Title */}
        <Text style={styles.pageTitle}>Lowongan Kerja</Text>
        <Text style={styles.pageSubtitle}>
          Temukan peluang magang & kerja yang sesuai minat bakatmu
        </Text>

        {/* Status Lamaran Saya */}
        <TouchableOpacity style={styles.statusBanner}>
          <View style={styles.statusIconBox}>
            <Text style={styles.statusIconText}>✓</Text>
          </View>
          <View style={styles.statusInfo}>
            <View style={styles.statusTitleRow}>
              <Text style={styles.statusTitle}>Status Lamaran Saya</Text>
              <View style={styles.activePill}>
                <Text style={styles.activePillText}>• Aktif</Text>
              </View>
            </View>
            <Text style={styles.statusDesc}>3 Dalam Review / 10 total</Text>
          </View>
          <Text style={styles.chevron}>›</Text>
        </TouchableOpacity>

        {/* Search Input */}
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Cari posisi, nama perusahaan..."
            placeholderTextColor="#94A3B8"
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* Filter Chips */}
        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.chip, activeFilter === 'Semua' && styles.chipActive]}
            onPress={() => setActiveFilter('Semua')}>
            <Text style={[styles.chipText, activeFilter === 'Semua' && styles.chipTextActive]}>
              Semua (25)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.chip, activeFilter === 'Lampung' && styles.chipActive]}
            onPress={() => setActiveFilter('Lampung')}>
            <Text style={[styles.chipText, activeFilter === 'Lampung' && styles.chipTextActive]}>
              Bandar Lampung ×
            </Text>
          </TouchableOpacity>
        </View>

        {/* Card Lowongan Contoh */}
        <View style={styles.card}>
          <View style={styles.badgeRow}>
            <View style={styles.tagBlue}>
              <Text style={styles.tagBlueText}>Magang / Internship</Text>
            </View>
            <View style={styles.tagGray}>
              <Text style={styles.tagGrayText}>Magang / Full-time</Text>
            </View>
          </View>

          <View style={styles.jobHeader}>
            <View style={styles.companyAvatar}>
              <Text style={styles.companyAvatarText}>TI</Text>
            </View>
            <View style={styles.jobMeta}>
              <Text style={styles.jobTitle}>Frontend Web Developer Intern</Text>
              <Text style={styles.companyName}>
                PT Telkom Indonesia (Persero) Tbk • Hybrid/...
              </Text>
            </View>
          </View>

          <Text style={styles.locationText}>📍 Bandar Lampung (Hybrid)</Text>
          <Text style={styles.salaryText}>Rp 2.000.000 - Rp 3.500.000 / bln</Text>

          <View style={styles.skillsRow}>
            {['Desain UI', 'Tailwind CSS', 'REST API', 'Konversi 20 SKS'].map((skill) => (
              <View key={skill} style={styles.skillPill}>
                <Text style={styles.skillPillText}>{skill}</Text>
              </View>
            ))}
          </View>

          <View style={styles.cardFooter}>
            <Text style={styles.postedText}>Dibuka 2 Hari Lalu • 16 pelamar</Text>
            <TouchableOpacity style={styles.detailBtn}>
              <Text style={styles.detailBtnText}>Lihat Detail →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Navbar Bawah */}
      <NavbarMahasiswa
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
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
    padding: 16,
    paddingBottom: 32,
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
    backgroundColor: '#EFF6FF',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DBEAFE',
  },
  statusIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  statusIconText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Bold',
  },
  statusInfo: {
    flex: 1,
  },
  statusTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#0F172A',
  },
  activePill: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
  },
  activePillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#1D4ED8',
  },
  statusDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
  chevron: {
    fontSize: 20,
    color: '#64748B',
  },
  searchBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  searchInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#0F172A',
    height: 42,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 14,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 20,
    backgroundColor: '#E2E8F0',
  },
  chipActive: {
    backgroundColor: '#0F2942',
  },
  chipText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#334155',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  badgeRow: {
    flexDirection: 'row',
    gap: 6,
    marginBottom: 10,
  },
  tagBlue: {
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagBlueText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#1D4ED8',
  },
  tagGray: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  tagGrayText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#475569',
  },
  jobHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  companyAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyAvatarText: {
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
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
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginTop: 4,
  },
  salaryText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#059669',
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
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  skillPillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#334155',
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
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#1D4ED8',
  },
});