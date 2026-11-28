import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
  Alert,
  Linking,
} from 'react-native';

type Props = {
  navigation?: any;
  route?: any;
};

const MILESTONE_HISTORY = [
  {
    id: '1',
    title: 'M1: Wireframe UI/UX & Flow K',
    price: 'Rp 150rb',
    date: 'Selesai 12 Okt 2024',
  },
  {
    id: '2',
    title: 'M2: Setup Frontend Next.js &',
    price: 'Rp 200rb',
    date: 'Selesai 20 Okt 2024',
  },
  {
    id: '3',
    title: 'M3: Katalog Produk & Checko',
    price: 'Rp 350rb',
    date: 'Selesai 28 Okt 2024',
  },
  {
    id: '4',
    title: 'M4: Handover, Final Testing &',
    price: 'Rp 150rb',
    date: 'Selesai 04 Nov 2024',
  },
];

export default function DetailProyekSelesaiMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [isFeatured, setIsFeatured] = useState(false);

  const project = route?.params?.project || {
    title: 'Aplikasi Pendataan Panen Kopi\nBerbasis Web',
    completedDate: '15 Okt 2024',
  };

  const handleToggleFeatured = () => {
    setIsFeatured(prev => !prev);
    Alert.alert(
      !isFeatured ? 'Portofolio Unggulan' : 'Dihapus dari Unggulan',
      !isFeatured
        ? 'Proyek ini berhasil ditambahkan ke daftar Portofolio Unggulan di profilmu!'
        : 'Proyek dihapus dari daftar Portofolio Unggulan.',
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top App Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.75}
          onPress={() => navigation?.navigate('ProyekMahasiswa')}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Detail Proyek Selesai</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* ==================== HEADER INFO PROYEK SELESAI ==================== */}
        <View style={styles.headerInfoSection}>
          <View style={styles.statusDateRow}>
            <View style={styles.completedPill}>
              <View style={styles.completedCheckCircle}>
                <Text style={styles.completedCheckMark}>✓</Text>
              </View>
              <Text style={styles.completedPillText}>Proyek Selesai</Text>
            </View>

            <Text style={styles.completedDateText}>
              📅 {project.completedDate || '15 Okt 2024'}
            </Text>
          </View>

          <Text style={styles.projectTitle}>
            {project.title || 'Aplikasi Pendataan Panen Kopi\nBerbasis Web'}
          </Text>
        </View>

        {/* ==================== CARD 1: ULASAN & TESTIMONI KLIEN ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleLeft}>
              <Text style={styles.sectionHeaderIcon}>💬</Text>
              <Text style={styles.sectionHeaderTitle}>
                Ulasan & Testimoni Klien
              </Text>
            </View>

            <View style={styles.ratingScorePill}>
              <Text style={styles.ratingScoreText}>★ 5.0</Text>
            </View>
          </View>

          {/* Box Testimoni Klien */}
          <View style={styles.testimonialInnerBox}>
            <View style={styles.clientRow}>
              <Image
                source={require('../assets/kandidat/profile-rayhan.png')}
                style={styles.clientAvatar}
                resizeMode="cover"
              />
              <View style={styles.clientMeta}>
                <Text style={styles.clientName}>Hendra Wijaya</Text>
                <Text style={styles.clientRole}>
                  Direktur Operasional CV Agro Lampung{'\n'}Mandiri
                </Text>
              </View>
            </View>

            {/* Bintang + Label Sempurna */}
            <View style={styles.starsRow}>
              <Text style={styles.starsText}>★★★★★</Text>
              <Text style={styles.perfectText}>Sempurna (5/5)</Text>
            </View>

            {/* Kutipan Ulasan */}
            <Text style={styles.quoteText}>
              “Pengerjaan sangat profesional, responsif terhadap revisi, dan
              hasil implementasi mobile catalog melebihi ekspektasi kami. Sangat
              merekomendasikan mahasiswa Polinela untuk digitalisasi UMKM
              daerah!”
            </Text>

            {/* 3 Kotak Skor Metrik */}
            <View style={styles.metricsRow}>
              <View style={styles.metricBox}>
                <Text style={styles.metricLabel}>Kualitas Kode</Text>
                <Text style={styles.metricScore}>5.0 ★</Text>
              </View>

              <View style={styles.metricBox}>
                <Text style={styles.metricLabel}>Komunikasi</Text>
                <Text style={styles.metricScore}>5.0 ★</Text>
              </View>

              <View style={styles.metricBox}>
                <Text style={styles.metricLabel}>Tepat Waktu</Text>
                <Text style={styles.metricScore}>5.0 ★</Text>
              </View>
            </View>
          </View>

          {/* Banner Ulasan Balik */}
          <View style={styles.feedbackBanner}>
            <Text style={styles.feedbackDiamondIcon}>💎</Text>
            <Text style={styles.feedbackText}>
              Anda telah memberikan ulasan balik untuk klien ini{' '}
              <Text style={styles.feedbackBold}>★ 5.0 (Klien Teladan)</Text>
            </Text>
          </View>
        </View>

        {/* ==================== CARD 2: RIWAYAT MILESTONE ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleLeft}>
              <Text style={styles.sectionHeaderIcon}>☑</Text>
              <Text style={styles.sectionHeaderTitle}>Riwayat Milestone</Text>
            </View>
            <Text style={styles.milestoneCountText}>4 / 4 Tuntas</Text>
          </View>

          {MILESTONE_HISTORY.map((item, idx) => (
            <View
              key={item.id}
              style={[
                styles.milestoneItemBox,
                idx === MILESTONE_HISTORY.length - 1 && { marginBottom: 0 },
              ]}>
              <View style={styles.milestoneCheckCircle}>
                <Text style={styles.milestoneCheckText}>✓</Text>
              </View>

              <View style={styles.milestoneMeta}>
                <View style={styles.milestoneTitleRow}>
                  <Text style={styles.milestoneTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.milestonePrice}>{item.price}</Text>
                </View>

                <Text style={styles.milestoneSubRow}>
                  {item.date} •{' '}
                  <Text style={styles.approvedText}>Disetujui</Text>
                </Text>
              </View>
            </View>
          ))}
        </View>

        {/* ==================== CARD 3: ASET & BERKAS SERAH TERIMA ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.sectionHeaderRow}>
            <View style={styles.sectionTitleLeft}>
              <Text style={styles.sectionHeaderIcon}>🗂</Text>
              <Text style={styles.sectionHeaderTitle}>
                Aset & Berkas Serah Terima
              </Text>
            </View>
            <Text style={styles.verifiedTagText}>Telah Diverifikasi</Text>
          </View>

          {/* Item 1: Live Production URL */}
          <TouchableOpacity
            style={styles.assetRowBox}
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL('https://kopi-robusta-lampung.com')
            }>
            <View style={styles.assetIconCircle}>
              <Text style={styles.assetEmoji}>🌐</Text>
            </View>
            <View style={styles.assetMeta}>
              <Text style={styles.assetTitle}>Live Production URL</Text>
              <Text style={styles.assetMonoText} numberOfLines={1}>
                kopi-robusta-lampung.com
              </Text>
            </View>
            <Text style={styles.assetActionIcon}>↗</Text>
          </TouchableOpacity>

          {/* Item 2: GitHub Repository (Archived) */}
          <TouchableOpacity
            style={styles.assetRowBox}
            activeOpacity={0.8}
            onPress={() =>
              Linking.openURL(
                'https://github.com/polinela-work/agro-lampung-katalog',
              )
            }>
            <View style={styles.assetIconCircle}>
              <Text style={styles.assetCodeText}>{'<>'}</Text>
            </View>
            <View style={styles.assetMeta}>
              <Text style={styles.assetTitle}>
                GitHub Repository (Archived)
              </Text>
              <Text style={styles.assetMonoText} numberOfLines={1}>
                polinela-work/agro-lampung-katalog
              </Text>
            </View>
            <Text style={styles.assetActionIcon}>↗</Text>
          </TouchableOpacity>

          {/* Item 3: Handover_Final_Dokumentasi.pdf */}
          <TouchableOpacity
            style={styles.assetRowBox}
            activeOpacity={0.8}
            onPress={() =>
              Alert.alert(
                'Unduh Berkas',
                'Mengunduh Handover_Final_Dokumentasi.pdf',
              )
            }>
            <View style={styles.assetIconPdf}>
              <Text style={styles.assetEmoji}>📄</Text>
            </View>
            <View style={styles.assetMeta}>
              <Text style={styles.assetTitle} numberOfLines={1}>
                Handover_Final_Dokumentasi.pdf
              </Text>
              <Text style={styles.assetSubDetail}>
                Dokumen Panduan CMS • 4.2 MB
              </Text>
            </View>
            <Text style={styles.assetActionIcon}>⬇</Text>
          </TouchableOpacity>

          {/* Item 4: Release_v1.0_Final.zip */}
          <TouchableOpacity
            style={[styles.assetRowBox, { marginBottom: 0 }]}
            activeOpacity={0.8}
            onPress={() =>
              Alert.alert('Unduh Berkas', 'Mengunduh Release_v1.0_Final.zip')
            }>
            <View style={styles.assetIconZip}>
              <Text style={styles.assetEmoji}>📦</Text>
            </View>
            <View style={styles.assetMeta}>
              <Text style={styles.assetTitle} numberOfLines={1}>
                Release_v1.0_Final.zip
              </Text>
              <Text style={styles.assetSubDetail}>
                Source Bundle & Assets • 24.5 MB
              </Text>
            </View>
            <Text style={styles.assetActionIcon}>⬇</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ==================== BOTTOM BAR ==================== */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.portfolioButton}
          activeOpacity={0.85}
          onPress={handleToggleFeatured}>
          <Text style={styles.portfolioStarIcon}>★</Text>
          <Text style={styles.portfolioButtonText}>
            {isFeatured
              ? 'Terpasang di Portofolio Unggulan'
              : 'Jadikan Portofolio Unggulan'}
          </Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    gap: 14,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  topBarTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    color: '#0F172A',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 28,
  },

  // HEADER INFO
  headerInfoSection: {
    marginBottom: 16,
  },
  statusDateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  completedPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#05263B',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 20,
    gap: 6,
  },
  completedCheckCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#99F6E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  completedCheckMark: {
    fontFamily: 'Inter-Bold',
    fontSize: 9,
    color: '#05263B',
  },
  completedPillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#FFFFFF',
  },
  completedDateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#475569',
  },
  projectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A',
    lineHeight: 25,
  },

  // CARD SECTION
  cardSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
    gap: 8,
  },
  sectionTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    flexShrink: 1,
  },
  sectionHeaderIcon: {
    fontSize: 14,
    color: '#1D4E6E',
  },
  sectionHeaderTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
  },

  // ULASAN & TESTIMONI
  ratingScorePill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
  },
  ratingScoreText: {
    fontFamily: 'Inter-Bold',
    fontSize: 11.5,
    color: '#D97706',
  },
  testimonialInnerBox: {
    backgroundColor: '#EDF5FC',
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  clientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CBD5E1',
  },
  clientMeta: {
    flex: 1,
  },
  clientName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  clientRole: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },
  starsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  starsText: {
    fontSize: 13,
    color: '#F59E0B',
  },
  perfectText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#64748B',
  },
  quoteText: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    fontSize: 12,
    color: '#1E293B',
    lineHeight: 18.5,
    marginBottom: 12,
  },
  metricsRow: {
    flexDirection: 'row',
    gap: 8,
  },
  metricBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  metricLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    marginBottom: 3,
  },
  metricScore: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#0F172A',
  },
  feedbackBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    gap: 10,
  },
  feedbackDiamondIcon: {
    fontSize: 14,
  },
  feedbackText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#334155',
    lineHeight: 16.5,
  },
  feedbackBold: {
    fontFamily: 'Inter-Bold',
    color: '#0F172A',
  },

  // RIWAYAT MILESTONE
  milestoneCountText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
  },
  milestoneItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  milestoneCheckCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  milestoneCheckText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  milestoneMeta: {
    flex: 1,
  },
  milestoneTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 6,
  },
  milestoneTitle: {
    flex: 1,
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
  },
  milestonePrice: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#0F172A',
  },
  milestoneSubRow: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  approvedText: {
    fontFamily: 'Inter-SemiBold',
    color: '#286184',
  },

  // ASET & BERKAS SERAH TERIMA
  verifiedTagText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#64748B',
  },
  assetRowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  assetIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#DCEBF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assetIconPdf: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assetIconZip: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#FEF3C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  assetEmoji: {
    fontSize: 16,
  },
  assetCodeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#0F2942',
  },
  assetMeta: {
    flex: 1,
  },
  assetTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  assetMonoText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontSize: 10.5,
    color: '#286184',
    marginTop: 2,
  },
  assetSubDetail: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  assetActionIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#286184',
  },

  // BOTTOM BAR
  bottomBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  portfolioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05263B',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
  },
  portfolioStarIcon: {
    fontSize: 14,
    color: '#81E6D9',
  },
  portfolioButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13.5,
    color: '#FFFFFF',
  },
});