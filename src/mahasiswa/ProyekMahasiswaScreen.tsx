import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderMahasiswa from './HeaderMahasiswa';
import NavbarMahasiswa, { NavTabKey } from './NavbarMahasiswa';

type Props = {
  navigation?: any;
};

type FilterTabKey = 'Berjalan' | 'Perlu Tindakan' | 'Riwayat';

export default function ProyekMahasiswaScreen({ navigation }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<FilterTabKey>('Berjalan');
  const [activeTab, setActiveTab] = useState<NavTabKey>('Proyek');

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

  return (
    <View style={styles.container}>
      {/* Header */}
      <HeaderMahasiswa
        navigation={navigation}
        subtitle="PROYEK SAYA"
        hasUnreadNotification={false}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Judul Halaman */}
        <Text style={styles.pageTitle}>Proyek/riwayat pengerjaan</Text>
        <Text style={styles.pageSubtitle}>
          Kelola pesanan klien aktif dan pantau riwayat proyekmu secara
          transparan.
        </Text>

        {/* Segmented Filter Tabs */}
        <View style={styles.segmentContainer}>
          <TouchableOpacity
            style={[
              styles.segmentTab,
              selectedFilter === 'Berjalan' && styles.segmentTabActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Berjalan')}>
            <Text
              style={[
                styles.segmentText,
                selectedFilter === 'Berjalan' && styles.segmentTextActive,
              ]}>
              Berjalan
            </Text>
            <View style={styles.badgeNavy}>
              <Text style={styles.badgeNavyText}>2</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentTab,
              selectedFilter === 'Perlu Tindakan' && styles.segmentTabActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Perlu Tindakan')}>
            <Text
              style={[
                styles.segmentText,
                selectedFilter === 'Perlu Tindakan' && styles.segmentTextActive,
              ]}>
              Perlu{'\n'}Tindakan
            </Text>
            <View style={styles.badgeRedSoft}>
              <Text style={styles.badgeRedText}>1</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentTab,
              selectedFilter === 'Riwayat' && styles.segmentTabActive,
            ]}
            activeOpacity={0.8}
            onPress={() => setSelectedFilter('Riwayat')}>
            <Text
              style={[
                styles.segmentText,
                selectedFilter === 'Riwayat' && styles.segmentTextActive,
              ]}>
              Riwayat
            </Text>
            <View style={styles.badgeBlueSoft}>
              <Text style={styles.badgeBlueText}>8</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* ==================== PROYEK AKTIF SAYA ==================== */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionTitleWithDot}>
            <Text style={styles.sectionTitle}>Proyek Aktif Saya</Text>
            <View style={styles.greenDot} />
          </View>
          <Text style={styles.updateTimeText}>Update 12m lalu</Text>
        </View>

        {/* Card Proyek Aktif 1: Berjalan */}
        <View style={[styles.projectCard, styles.topBorderNavy]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.projectIconBox}>
              <Text style={styles.projectIconEmoji}>🏛</Text>
            </View>
            <View style={styles.projectHeaderInfo}>
              <View style={styles.pillRunning}>
                <Text style={styles.pillRunningText}>• Berjalan</Text>
              </View>
              <Text style={styles.projectTitle}>
                Redesain UI/UX Landing Page Wisata Pahawang
              </Text>
              <Text style={styles.clientName}>
                Dinas Pariwisata Kab. Pesawaran (Bpk. Hendra)
              </Text>
            </View>
          </View>

          <View style={styles.deadlineBox}>
            <Text style={styles.deadlineLabel}>Tenggat Waktu</Text>
            <Text style={styles.deadlineValueNormal}>
              🕒 28 Okt (Sisa 3 hari)
            </Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.outlineBtnHalf}
              activeOpacity={0.8}
              onPress={() => navigation?.navigate('DetailProyekMahasiswa')}>
              <Text style={styles.outlineBtnText}>ⓘ Detail Proyek</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryBtnHalf}
              activeOpacity={0.8}
              onPress={() =>
                navigation?.navigate('KirimHasilKerjaMahasiswa', {
                  isRevision: false,
                })
              }>
              <Text style={styles.primaryBtnText}>☁ Kirim Hasil{'\n'}Kerja</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card Proyek Aktif 2: Perlu Revisi */}
        <View style={[styles.projectCard, styles.topBorderAmber]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.projectIconBox}>
              <Text style={styles.projectIconEmoji}>💻</Text>
            </View>
            <View style={styles.projectHeaderInfo}>
              <View style={styles.pillRevision}>
                <Text style={styles.pillRevisionText}>ⓘ Perlu Revisi</Text>
              </View>
              <Text style={styles.projectTitle}>
                Pembuatan Modul REST API Sistem Presensi Mahasiswa
              </Text>
              <Text style={styles.clientName}>Startup AgriTech Solusindo</Text>
            </View>
          </View>

          <View style={styles.deadlineBox}>
            <Text style={styles.deadlineLabel}>Tenggat Revisi</Text>
            <Text style={styles.deadlineValueDanger}>
              ⚠ 31 Okt (6 hari lagi)
            </Text>
          </View>

          {/* Catatan Klien */}
          <View style={styles.clientNoteBox}>
            <Text style={styles.clientNoteTitle}>💬 Catatan Klien:</Text>
            <Text style={styles.clientNoteBody}>
              "Perlu penyesuaian endpoint otentikasi JWT dan format respons QR
              Code agar kompatibel dengan scanner kampus."
            </Text>
          </View>

          <View style={styles.actionRow}>
            <TouchableOpacity
              style={styles.chatSquareBtn}
              activeOpacity={0.8}
              onPress={() =>
                navigation?.navigate('ChatProyekMahasiswa', {
                  clientName: 'Startup AgriTech Solusindo',
                  clientOrg: 'Klien Industri • Bandar Lampung',
                })
              }>
              <Text style={styles.chatSquareIcon}>💬</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.primaryBtnFlex}
              activeOpacity={0.8}
              onPress={() =>
                navigation?.navigate('KirimHasilKerjaMahasiswa', {
                  isRevision: true,
                })
              }>
              <Text style={styles.primaryBtnText}>↻ Revisi</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================== RIWAYAT PENGERJAAN PROYEK ==================== */}
        <View style={styles.historySectionHeader}>
          <Text style={styles.sectionTitle}>Riwayat Pengerjaan Proyek</Text>
          <Text style={styles.historySubtitle}>
            Total 8 Proyek Tuntas • Rata-rata 4.9/5.0
          </Text>
        </View>

        {/* Card Riwayat 1 */}
        <View style={[styles.projectCard, styles.topBorderTeal]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.projectIconBox}>
              <Text style={styles.projectIconEmoji}>⊞</Text>
            </View>
            <View style={styles.projectHeaderInfo}>
              <View style={styles.completedMetaRow}>
                <View style={styles.pillCompleted}>
                  <Text style={styles.pillCompletedText}>✓ Selesai</Text>
                </View>
                <Text style={styles.completedDate}>15 Okt 2024</Text>
              </View>
              <Text style={styles.projectTitle}>
                Aplikasi Pendataan Panen Kopi Berbasis Web
              </Text>
              <Text style={styles.clientName}>
                Koperasi Petani Kopi Lambar (Lampung Barat)
              </Text>
            </View>
          </View>

          <View style={styles.disbursedRow}>
            <View style={styles.pillDisbursed}>
              <Text style={styles.pillDisbursedText}>✓ Dana Dicairkan ✓</Text>
            </View>
          </View>

          {/* Ulasan Klien */}
          <View style={styles.reviewBox}>
            <View style={styles.reviewHeaderRow}>
              <Text style={styles.starsText}>
                ★★★★★ <Text style={styles.ratingScore}>5.0</Text>
              </Text>
              <Text style={styles.reviewLabel}>Ulasan Klien</Text>
            </View>
            <Text style={styles.reviewQuote}>
              "Pengerjaan sangat memuaskan, komunikasi aktif dan memahami
              kebutuhan sistem koperasi. Sangat direkomendasikan!"
            </Text>
          </View>

          <TouchableOpacity
            style={styles.outlineBtnFull}
            activeOpacity={0.8}
            onPress={() =>
              navigation?.navigate('DetailProyekSelesaiMahasiswa', {
                project: {
                  title: 'Aplikasi Pendataan Panen Kopi\nBerbasis Web',
                  completedDate: '15 Okt 2024',
                },
              })
            }>
            <Text style={styles.outlineBtnText}>ⓘ Detail Proyek</Text>
          </TouchableOpacity>
        </View>

        {/* Card Riwayat 2 */}
        <View style={[styles.projectCard, styles.topBorderTeal]}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.projectIconBox}>
              <Text style={styles.projectIconEmoji}>🎨</Text>
            </View>
            <View style={styles.projectHeaderInfo}>
              <View style={styles.completedMetaRow}>
                <View style={styles.pillCompleted}>
                  <Text style={styles.pillCompletedText}>✓ Selesai</Text>
                </View>
                <Text style={styles.completedDate}>28 Sep 2024</Text>
              </View>
              <Text style={styles.projectTitle}>
                Branding & Desain Kemasan Produk UMKM Olahan Pisang
              </Text>
              <Text style={styles.clientName}>CV Siger Agro Mandiri</Text>
            </View>
          </View>

          <View style={styles.disbursedRow}>
            <View style={styles.pillDisbursed}>
              <Text style={styles.pillDisbursedText}>✓ Dana Dicairkan ✓</Text>
            </View>
          </View>

          {/* Ulasan Klien */}
          <View style={styles.reviewBox}>
            <View style={styles.reviewHeaderRow}>
              <Text style={styles.starsText}>
                ★★★★★ <Text style={styles.ratingScore}>4.8</Text>
              </Text>
              <Text style={styles.reviewLabel}>Ulasan Klien</Text>
            </View>
            <Text style={styles.reviewQuote}>
              "Hasil desain estetik dan siap cetak packaging. Sesuai standar
              industri kreatif."
            </Text>
          </View>

          <TouchableOpacity
            style={styles.outlineBtnFull}
            activeOpacity={0.8}
            onPress={() =>
              navigation?.navigate('DetailProyekSelesaiMahasiswa', {
                project: {
                  title: 'Branding & Desain Kemasan Produk UMKM Olahan Pisang',
                  completedDate: '28 Sep 2024',
                },
              })
            }>
            <Text style={styles.outlineBtnText}>ⓘ Detail Proyek</Text>
          </TouchableOpacity>
        </View>

        {/* ==================== CTA PROYEK BARU ==================== */}
        <View style={styles.ctaSection}>
          <View style={styles.compassCircle}>
            <Text style={styles.compassIcon}>🧭</Text>
          </View>
          <Text style={styles.ctaTitle}>Siap Mengambil Proyek Baru?</Text>
          <Text style={styles.ctaDesc}>
            Banyak UMKM dan instansi Lampung sedang mencari keahlian teknologi
            dari mahasiswa Polinela.
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate('LowonganMahasiswa')}>
            <Text style={styles.ctaButtonText}>
              💼 Jelajahi Lowongan Proyek
            </Text>
          </TouchableOpacity>
        </View>
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
    lineHeight: 18,
  },

  // SEGMENTED TABS
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#EBF4FA',
    borderRadius: 12,
    padding: 4,
    marginBottom: 18,
    borderWidth: 1,
    borderColor: '#DCE9F5',
  },
  segmentTab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 6,
    borderRadius: 9,
    gap: 5,
  },
  segmentTabActive: {
    backgroundColor: '#FFFFFF',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
  },
  segmentText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#475569',
    textAlign: 'center',
  },
  segmentTextActive: {
    fontFamily: 'Inter-Bold',
    color: '#0F2942',
  },
  badgeNavy: {
    backgroundColor: '#15344E',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeNavyText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#FFFFFF',
  },
  badgeRedSoft: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeRedText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#DC2626',
  },
  badgeBlueSoft: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  badgeBlueText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#2563EB',
  },

  // SECTION HEADER
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitleWithDot: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  greenDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#0D9488',
  },
  updateTimeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },

  // CARDS
  projectCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderTopWidth: 3,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  topBorderNavy: {
    borderTopColor: '#2563EB',
  },
  topBorderAmber: {
    borderTopColor: '#F59E0B',
  },
  topBorderTeal: {
    borderTopColor: '#14B8A6',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  projectIconBox: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectIconEmoji: {
    fontSize: 18,
  },
  projectHeaderInfo: {
    flex: 1,
  },
  pillRunning: {
    alignSelf: 'flex-start',
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  pillRunningText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#0F766E',
  },
  pillRevision: {
    alignSelf: 'flex-start',
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
    marginBottom: 4,
  },
  pillRevisionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#B45309',
  },
  projectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
    lineHeight: 20,
  },
  clientName: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },

  // DEADLINE BOX
  deadlineBox: {
    backgroundColor: '#F4F8FC',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  deadlineLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
  },
  deadlineValueNormal: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0F2942',
    marginTop: 2,
  },
  deadlineValueDanger: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#DC2626',
    marginTop: 2,
  },

  // CLIENT NOTE
  clientNoteBox: {
    backgroundColor: '#FEF2F2',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#FECACA',
    marginBottom: 12,
  },
  clientNoteTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#B91C1C',
    marginBottom: 4,
  },
  clientNoteBody: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#475569',
    lineHeight: 16,
  },

  // BUTTONS
  actionRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  outlineBtnHalf: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineBtnFull: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outlineBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0F2942',
  },
  primaryBtnHalf: {
    flex: 1,
    backgroundColor: '#15344E',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnFlex: {
    flex: 1,
    backgroundColor: '#15344E',
    borderRadius: 10,
    paddingVertical: 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  chatSquareBtn: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#EBF4FA',
    borderWidth: 1,
    borderColor: '#D6E6F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatSquareIcon: {
    fontSize: 16,
  },

  // RIWAYAT SECTION
  historySectionHeader: {
    marginTop: 6,
    marginBottom: 12,
  },
  historySubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  completedMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  pillCompleted: {
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  pillCompletedText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#0F766E',
  },
  completedDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  disbursedRow: {
    backgroundColor: '#F4F8FC',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  pillDisbursed: {
    backgroundColor: '#CCFBF1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  pillDisbursedText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#0F766E',
  },
  reviewBox: {
    backgroundColor: '#EBF4FA',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
  },
  reviewHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  starsText: {
    fontSize: 12,
    color: '#F59E0B',
  },
  ratingScore: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F172A',
  },
  reviewLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
  },
  reviewQuote: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    fontSize: 11,
    color: '#334155',
    lineHeight: 16,
  },

  // CTA SECTION
  ctaSection: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginTop: 4,
  },
  compassCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EBF4FA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  compassIcon: {
    fontSize: 20,
  },
  ctaTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
    marginBottom: 4,
  },
  ctaDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 18,
    marginBottom: 14,
  },
  ctaButton: {
    backgroundColor: '#15344E',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  ctaButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },
});