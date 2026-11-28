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
  ImageSourcePropType,
} from 'react-native';

type Props = {
  navigation?: any;
};

type FilterTabKey = 'Semua' | 'Terkirim' | 'Dibaca' | 'Ditolak';

type ApplicationItem = {
  id: string;
  filterGroup: 'Terkirim' | 'Dibaca' | 'Ditolak';
  jobTitle: string;
  companyName: string;
  locationMode: string;
  logoSource: ImageSourcePropType;
  statusType: 'terkirim' | 'dibaca' | 'ditolak_red' | 'ditolak_closed';
  statusIcon: string;
  statusHeader: string;
  statusDate: string;
  statusDesc: string;
  actionButtonType?: 'detail_primary' | 'evaluasi_outline' | null;
};

const APPLICATION_LIST: ApplicationItem[] = [
  {
    id: '1',
    filterGroup: 'Terkirim',
    jobTitle: 'Frontend Web Developer Intern',
    companyName: 'PT Telkom Indonesia (Persero) Tbk',
    locationMode: 'Witel Lampung • Hybrid (On-Site & Remote)',
    logoSource: require('../assets/kandidat/avatar-telkom.png'),
    statusType: 'terkirim',
    statusIcon: '⏳',
    statusHeader: 'Terkirim •',
    statusDate: 'Hari ini, 28 Okt 2024',
    statusDesc:
      'Menunggu Antrean Review HRD. Berkas portofolio SIAKAD Polinela Anda telah diamankan.',
    actionButtonType: 'detail_primary',
  },
  {
    id: '2',
    filterGroup: 'Dibaca',
    jobTitle: 'UI/UX Designer Intern',
    companyName: 'PT Bank Lampung (Persero)',
    locationMode: 'Kantor Pusat Teluk Betung • On-Site',
    logoSource: require('../assets/kandidat/profile-rayhan.png'),
    statusType: 'dibaca',
    statusIcon: '👁',
    statusHeader: 'Dibaca oleh HRD •',
    statusDate: '24 Okt 2024 (4 hari lalu)',
    statusDesc:
      'Sedang dalam tahap seleksi berkas portofolio\nFigma & design system Polinela.',
    actionButtonType: 'detail_primary',
  },
  {
    id: '3',
    filterGroup: 'Ditolak',
    jobTitle: 'Mobile App Developer (Flutter)',
    companyName: 'CV Digital Media Lampung',
    locationMode: 'Kedaton, Bandar Lampung • Remote',
    logoSource: require('../assets/kandidat/profile-rayhan.png'),
    statusType: 'ditolak_red',
    statusIcon: '⊗',
    statusHeader: 'Belum Sesuai (Ditolak) •',
    statusDate: '15 Okt 2024',
    statusDesc:
      'Kualifikasi kuota telah terpenuhi. Tetap semangat! Rekomendasi lowongan serupa telah disiapkan di POLAR Hub.',
    actionButtonType: 'evaluasi_outline',
  },
  {
    id: '4',
    filterGroup: 'Ditolak',
    jobTitle: 'Fullstack Web Intern (Laravel & V',
    companyName: 'PT Nusantara Agro Industri',
    locationMode: 'Natar, Lampung Selatan • On-Site',
    logoSource: require('../assets/kandidat/profile-rayhan.png'),
    statusType: 'ditolak_closed',
    statusIcon: '🗑',
    statusHeader: 'Ditolak • Perekrutan Ditutup •',
    statusDate: '02 Okt 2024',
    statusDesc:
      'Posisi ditutup lebih awal oleh pihak industri karena periode kuota program telah selesai.',
    actionButtonType: null,
  },
];

export default function StatusLamaranMahasiswaScreen({ navigation }: Props) {
  const [selectedTab, setSelectedTab] = useState<FilterTabKey>('Semua');

  const filteredApplications = APPLICATION_LIST.filter(item => {
    if (selectedTab === 'Semua') return true;
    return item.filterGroup === selectedTab;
  });

  const getStatusBoxStyles = (type: ApplicationItem['statusType']) => {
    switch (type) {
      case 'terkirim':
        return {
          boxBg: '#E8F3FC',
          iconCircleBg: '#D0E7FA',
          headerColor: '#1D4E6E',
          dateColor: '#286184',
          descColor: '#286184',
        };
      case 'dibaca':
        return {
          boxBg: '#E6F7F5',
          iconCircleBg: '#CCFBF1',
          headerColor: '#0F766E',
          dateColor: '#115E59',
          descColor: '#115E59',
        };
      case 'ditolak_red':
        return {
          boxBg: '#FEEFEF',
          iconCircleBg: '#FEE2E2',
          headerColor: '#DC2626',
          dateColor: '#7F1D1D',
          descColor: '#7F1D1D',
        };
      case 'ditolak_closed':
      default:
        return {
          boxBg: '#F1F5F9',
          iconCircleBg: '#E2E8F0',
          headerColor: '#334155',
          dateColor: '#64748B',
          descColor: '#475569',
        };
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top App Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.75}
          onPress={() => navigation?.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Lamaran Terkirim</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Sub-info Mahasiswa + Badge 4 Terdata */}
        <View style={styles.studentMetaRow}>
          <View style={styles.studentInfoLeft}>
            <View style={styles.tealDot} />
            <Text style={styles.studentIdentityText}>
              RAYHAN PRATAMA (D4 TI POLINELA)
            </Text>
          </View>

          <View style={styles.countBadge}>
            <Text style={styles.countBadgeText}>4 Terdata</Text>
          </View>
        </View>

        {/* Judul & Deskripsi Halaman */}
        <Text style={styles.pageTitle}>Lamaran Saya</Text>
        <Text style={styles.pageSubtitle}>
          Pantau progres review berkas, status verifikasi akademik, dan{'\n'}
          respon HRD secara real-time.
        </Text>

        {/* Segmented Filter Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterTabsRow}>
          {(
            [
              { key: 'Semua', label: 'Semua (4)' },
              { key: 'Terkirim', label: 'Terkirim (1)' },
              { key: 'Dibaca', label: 'Dibaca (1)' },
              { key: 'Ditolak', label: 'Ditolak (2)' },
            ] as { key: FilterTabKey; label: string }[]
          ).map(tab => {
            const isActive = selectedTab === tab.key;
            return (
              <TouchableOpacity
                key={tab.key}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                activeOpacity={0.85}
                onPress={() => setSelectedTab(tab.key)}>
                <Text
                  style={[
                    styles.filterPillText,
                    isActive && styles.filterPillTextActive,
                  ]}>
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        {/* Daftar Kartu Lamaran */}
        {filteredApplications.map(item => {
          const theme = getStatusBoxStyles(item.statusType);

          return (
            <View key={item.id} style={styles.applicationCard}>
              {/* Header Card: Logo + Posisi + Perusahaan + Lokasi */}
              <View style={styles.cardTopRow}>
                <View style={styles.logoWrapper}>
                  <Image
                    source={item.logoSource}
                    style={styles.logoImage}
                    resizeMode="cover"
                  />
                </View>

                <View style={styles.jobInfoCol}>
                  <Text style={styles.jobTitle} numberOfLines={1}>
                    {item.jobTitle}
                  </Text>
                  <Text style={styles.companyName} numberOfLines={1}>
                    {item.companyName}
                  </Text>
                  <Text style={styles.locationModeText} numberOfLines={1}>
                    {item.locationMode}
                  </Text>
                </View>
              </View>

              {/* Status Box Berwarna */}
              <View
                style={[
                  styles.statusBox,
                  { backgroundColor: theme.boxBg },
                  !item.actionButtonType && { marginBottom: 0 },
                ]}>
                <View
                  style={[
                    styles.statusIconCircle,
                    { backgroundColor: theme.iconCircleBg },
                  ]}>
                  <Text style={styles.statusIconText}>{item.statusIcon}</Text>
                </View>

                <View style={styles.statusTextCol}>
                  <Text style={styles.statusTitleLine}>
                    <Text
                      style={[
                        styles.statusHeaderBold,
                        { color: theme.headerColor },
                      ]}>
                      {item.statusHeader}{' '}
                    </Text>
                    <Text
                      style={[
                        styles.statusDateText,
                        { color: theme.dateColor },
                      ]}>
                      {item.statusDate}
                    </Text>
                  </Text>

                  <Text
                    style={[
                      styles.statusDescText,
                      { color: theme.descColor },
                    ]}>
                    {item.statusDesc}
                  </Text>
                </View>
              </View>

              {/* Tombol Aksi Bawah Card */}
              {item.actionButtonType === 'detail_primary' && (
                <TouchableOpacity
                  style={styles.primaryDetailBtn}
                  activeOpacity={0.85}
                  onPress={() =>
                    navigation?.navigate('DetailLamaranMahasiswa', {
                      application: item,
                    })
                  }>
                  <Text style={styles.primaryDetailBtnText}>
                    Detail Lamaran →
                  </Text>
                </TouchableOpacity>
              )}

              {item.actionButtonType === 'evaluasi_outline' && (
                <TouchableOpacity
                  style={styles.outlineEvalBtn}
                  activeOpacity={0.85}
                  onPress={() =>
                    Alert.alert(
                      'Evaluasi & Rekomendasi',
                      'Menampilkan catatan evaluasi kualifikasi dan rekomendasi lowongan serupa di POLAR Hub.',
                    )
                  }>
                  <Text style={styles.outlineEvalIcon}>💡</Text>
                  <Text style={styles.outlineEvalBtnText}>
                    Lihat Evaluasi & Rekomendasi
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        })}

        {/* Footer Security Badge */}
        <View style={styles.footerShieldRow}>
          <Text style={styles.footerShieldIcon}>🛡</Text>
          <Text style={styles.footerShieldText}>POLAR Career Shield</Text>
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
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
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
    fontSize: 16.5,
    color: '#0F172A',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 36,
  },

  // STUDENT META HEADER
  studentMetaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  studentInfoLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tealDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#0D9488',
  },
  studentIdentityText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10.5,
    color: '#286184',
    letterSpacing: 0.3,
  },
  countBadge: {
    backgroundColor: '#E2EDF7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  countBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10.5,
    color: '#1D4E6E',
  },

  pageTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#0F172A',
    marginBottom: 6,
  },
  pageSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#475569',
    lineHeight: 18.5,
    marginBottom: 16,
  },

  // FILTER TABS
  filterTabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFF6FC',
    borderRadius: 14,
    padding: 5,
    marginBottom: 16,
    gap: 4,
  },
  filterPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
  },
  filterPillActive: {
    backgroundColor: '#05263B',
  },
  filterPillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#475569',
  },
  filterPillTextActive: {
    fontFamily: 'Inter-Bold',
    color: '#FFFFFF',
  },

  // APPLICATION CARD
  applicationCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  cardTopRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 12,
  },
  logoWrapper: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: '100%',
    height: '100%',
  },
  jobInfoCol: {
    flex: 1,
  },
  jobTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14.5,
    color: '#0F172A',
    marginBottom: 2,
  },
  companyName: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginBottom: 3,
  },
  locationModeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
  },

  // STATUS BOX
  statusBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    gap: 10,
  },
  statusIconCircle: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  statusIconText: {
    fontSize: 12,
  },
  statusTextCol: {
    flex: 1,
  },
  statusTitleLine: {
    marginBottom: 3,
    lineHeight: 16,
  },
  statusHeaderBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 11.5,
  },
  statusDateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
  },
  statusDescText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    lineHeight: 17,
  },

  // CARD ACTION BUTTONS
  primaryDetailBtn: {
    backgroundColor: '#05263B',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryDetailBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12.5,
    color: '#FFFFFF',
  },
  outlineEvalBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#CBD5E1',
    gap: 6,
  },
  outlineEvalIcon: {
    fontSize: 13,
  },
  outlineEvalBtnText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12.5,
    color: '#0F2942',
  },

  // FOOTER
  footerShieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
    gap: 6,
  },
  footerShieldIcon: {
    fontSize: 13,
    color: '#286184',
  },
  footerShieldText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#64748B',
  },
});