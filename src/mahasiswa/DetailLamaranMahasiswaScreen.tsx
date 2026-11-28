import React from 'react';
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

export default function DetailLamaranMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const application = route?.params?.application;

  const companyName =
    application?.companyName || 'PT Telkom Indonesia (Persero) Tbk';
  const jobTitle =
    application?.jobTitle || 'Frontend Web Developer Intern';
  const logoSource =
    application?.logoSource ||
    require('../assets/kandidat/avatar-telkom.png');

  const handleCopyReg = () => {
    Alert.alert(
      'Disalin',
      'No. Registrasi SIAKAD #PLR-TLK-2025-8842 berhasil disalin.',
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
          onPress={() => navigation?.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.topBarTitle}>Lamaran Terkirim</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Banner Estimasi Respon HRD */}
        <View style={styles.estimateBanner}>
          <View style={styles.estimateDot} />
          <Text style={styles.estimateText}>
            <Text style={styles.estimateBold}>Estimasi respon HRD:</Text> 1 - 3
            Hari Kerja
          </Text>
        </View>

        {/* ==================== CARD INFO LOWONGAN & SIAKAD ==================== */}
        <View style={styles.mainInfoCard}>
          {/* Header Perusahaan + Posisi */}
          <View style={styles.companyHeaderRow}>
            <View style={styles.logoBox}>
              <Image
                source={logoSource}
                style={styles.logoImage}
                resizeMode="cover"
              />
            </View>

            <View style={styles.companyHeaderMeta}>
              <View style={styles.companyNameRow}>
                <Text style={styles.companyNameText} numberOfLines={1}>
                  {companyName}
                </Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedCheck}>✓</Text>
                </View>
              </View>

              <Text style={styles.jobTitleText}>{jobTitle}</Text>
              <Text style={styles.branchText}>
                Witel Lampung • Mitra Resmi Kampus{'\n'}Polinela
              </Text>
            </View>
          </View>

          {/* Box Sistem Kerja */}
          <View style={styles.innerGrayBox}>
            <Text style={styles.innerBoxLabel}>🏢 Sistem Kerja</Text>
            <Text style={styles.innerBoxValueBold}>
              Offline (Bandar{'\n'}Lampung)
            </Text>
          </View>

          {/* Box No. Registrasi SIAKAD + Tombol Salin */}
          <View style={styles.innerRegBox}>
            <View style={styles.regLeft}>
              <Text style={styles.innerBoxLabel}>No. Registrasi SIAKAD</Text>
              <Text style={styles.regCodeText}>#PLR-TLK-2025-8842</Text>
            </View>

            <TouchableOpacity
              style={styles.copyButton}
              activeOpacity={0.8}
              onPress={handleCopyReg}>
              <Text style={styles.copyIcon}>❐</Text>
              <Text style={styles.copyText}>Salin</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Tanggal Diajukan */}
          <View style={styles.submittedFooterRow}>
            <Text style={styles.submittedDateText}>
              📅 Diajukan: 28 Okt 2024{' '}
              <Text style={styles.semesterBold}>Semester Ganjil 2024/2025</Text>
            </Text>
          </View>
        </View>

        {/* ==================== SECTION: STATUS PERKEMBANGAN ==================== */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionTitleLeft}>
            <Text style={styles.sectionIcon}>🎯</Text>
            <Text style={styles.sectionTitle}>Status Perkembangan</Text>
          </View>

          <View style={styles.stepPill}>
            <Text style={styles.stepPillText}>Step 3 dari 4</Text>
          </View>
        </View>

        {/* Card Timeline Status Perkembangan */}
        <View style={styles.timelineCard}>
          {/* STEP 1: Lamaran Terkirim */}
          <View style={styles.timelineStepRow}>
            <View style={styles.timelineLeftCol}>
              <View style={styles.circleNavySolid}>
                <Text style={styles.circleWhiteIcon}>✓</Text>
              </View>
              <View style={styles.lineSolidNavy} />
            </View>

            <View style={styles.timelineRightCol}>
              <View style={styles.stepHeaderRow}>
                <Text style={styles.stepTitleDark}>Lamaran Terkirim</Text>
                <Text style={styles.stepTimeText}>28 Okt, 09:15 WIB</Text>
              </View>

              <Text style={styles.stepDescText}>
                Berkas digital & verifikasi data mahasiswa TRPL Polinela berhasil
                masuk ke portal e-recruitment Telkom Talent Pool.
              </Text>

              <View style={styles.siakadBadge}>
                <Text style={styles.siakadBadgeText}>
                  🛡 Otorisasi SIAKAD Valid
                </Text>
              </View>
            </View>
          </View>

          {/* STEP 2: Ditelaah oleh Talent Acquisition */}
          <View style={styles.timelineStepRow}>
            <View style={styles.timelineLeftCol}>
              <View style={styles.circleNavySolid}>
                <Text style={styles.circleWhiteIcon}>👁</Text>
              </View>
              <View style={styles.lineSolidNavy} />
            </View>

            <View style={styles.timelineRightCol}>
              <View style={styles.stepHeaderRow}>
                <Text style={styles.stepTitleDark}>
                  Ditelaah oleh Talent{'\n'}Acquisition
                </Text>
                <Text style={styles.stepTimeText}>
                  29 Okt, 14:30{'\n'}WIB
                </Text>
              </View>

              <Text style={styles.stepDescText}>
                Profil CV, tautan GitHub, dan portofolio proyek terverifikasi
                telah dibuka dan ditinjau oleh HRD Witel Lampung.
              </Text>
            </View>
          </View>

          {/* STEP 3: Seleksi Teknis & Wawancara (Active Highlight Box) */}
          <View style={styles.timelineStepRow}>
            <View style={styles.timelineLeftCol}>
              <View style={styles.circleActiveHalo}>
                <View style={styles.circleActiveInner}>
                  <Text style={styles.circleWhiteIcon}>⏳</Text>
                </View>
              </View>
              <View style={styles.lineMutedGray} />
            </View>

            <View style={styles.timelineRightCol}>
              <View style={styles.activeStepBox}>
                <View style={styles.activeStepHeader}>
                  <Text style={styles.activeStepTitle}>
                    Seleksi Teknis &{'\n'}Wawancara
                  </Text>
                  <View style={styles.sedangBerjalanPill}>
                    <Text style={styles.sedangBerjalanText}>
                      Sedang Berjalan
                    </Text>
                  </View>
                </View>

                <Text style={styles.activeStepDesc}>
                  Tim Lead Frontend Engineer sedang memvalidasi kecocokan skill
                  (React.js, Tailwind{'\n'}CSS, REST API). Undangan wawancara
                  Google{'\n'}Meet akan dikirimkan via notifikasi aplikasi POLAR.
                </Text>

                <Text style={styles.targetDecisionText}>
                  📅 Target Keputusan: 04 Nov 2024
                </Text>
              </View>
            </View>
          </View>

          {/* STEP 4: Keputusan Akhir (Menunggu) */}
          <View style={[styles.timelineStepRow, { marginBottom: 0 }]}>
            <View style={styles.timelineLeftCol}>
              <View style={styles.circleMutedGray}>
                <Text style={styles.circleGrayIcon}>⚑</Text>
              </View>
            </View>

            <View style={[styles.timelineRightCol, { paddingBottom: 0 }]}>
              <View style={styles.stepHeaderRow}>
                <Text style={styles.stepTitleMuted}>Keputusan Akhir</Text>
                <Text style={styles.stepTimeMuted}>Menunggu</Text>
              </View>

              <Text style={styles.stepDescMuted}>
                Penetapan status resmi:{'\n'}•{' '}
                <Text style={styles.mutedBold}>Diterima:</Text> Penerbitan surat
                penerimaan magang{'\n'}(LoA) & panduan onboarding kampus.{'\n'}•{' '}
                <Text style={styles.mutedBold}>Belum Lolos:</Text> Laporan
                evaluasi keahlian & rujukan{'\n'}lowongan sejenis.
              </Text>
            </View>
          </View>
        </View>

        {/* ==================== SECTION: BERKAS LAMARAN TERLAMPIR ==================== */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionTitleLeft}>
            <Text style={styles.sectionIcon}>📁</Text>
            <Text style={styles.sectionTitle}>Berkas Lamaran Terlampir</Text>
          </View>
          <Text style={styles.docCountText}>4 Dokumen</Text>
        </View>

        {/* Dokumen 1: CV */}
        <TouchableOpacity
          style={styles.attachmentCard}
          activeOpacity={0.8}
          onPress={() =>
            Alert.alert('Pratinjau Dokumen', 'Membuka CV_Muhammad_Rayhan_2025.pdf')
          }>
          <View style={styles.iconBoxPdf}>
            <Text style={styles.iconBoxEmoji}>📄</Text>
          </View>
          <View style={styles.attachmentMeta}>
            <Text style={styles.attachmentTitle} numberOfLines={1}>
              CV_Muhammad_Rayhan_2025.pdf
            </Text>
            <Text style={styles.attachmentSub} numberOfLines={1}>
              2.4 MB • Terverifikasi Akademik TRPL
            </Text>
          </View>
          <Text style={styles.attachmentActionIcon}>↗</Text>
        </TouchableOpacity>

        {/* Dokumen 2: 3 Proyek Unggulan */}
        <TouchableOpacity
          style={styles.attachmentCard}
          activeOpacity={0.8}
          onPress={() =>
            Alert.alert(
              'Portofolio POLAR Hub',
              'Menampilkan 3 Proyek Unggulan: Smart Farming IoT, Portal Alumni, AgroGateway.',
            )
          }>
          <View style={styles.iconBoxBlue}>
            <Text style={styles.iconBoxEmoji}>📱</Text>
          </View>
          <View style={styles.attachmentMeta}>
            <Text style={styles.attachmentTitle} numberOfLines={1}>
              3 Proyek Unggulan POLAR Hub
            </Text>
            <Text style={styles.attachmentSub} numberOfLines={1}>
              Smart Farming IoT, Portal Alumni, AgroGatew
            </Text>
          </View>
          <Text style={styles.attachmentActionIcon}>›</Text>
        </TouchableOpacity>

        {/* Dokumen 3: GitHub & Portfolio */}
        <TouchableOpacity
          style={styles.attachmentCard}
          activeOpacity={0.8}
          onPress={() => Linking.openURL('https://github.com')}>
          <View style={styles.iconBoxTeal}>
            <Text style={styles.iconCodeText}>{'<>'}</Text>
          </View>
          <View style={styles.attachmentMeta}>
            <Text style={styles.attachmentTitle} numberOfLines={1}>
              rayhanpratama.dev & GitHub
            </Text>
            <Text style={styles.attachmentSub} numberOfLines={1}>
              18 Repositori Publik • Aktivitas Aktif
            </Text>
          </View>
          <Text style={styles.attachmentActionIcon}>🔗</Text>
        </TouchableOpacity>

        {/* Dokumen 4: Surat Rekomendasi */}
        <TouchableOpacity
          style={styles.attachmentCard}
          activeOpacity={0.8}
          onPress={() =>
            Alert.alert(
              'Pratinjau Dokumen',
              'Membuka Rekomendasi_Magang_TRPL_Polinela.pdf',
            )
          }>
          <View style={styles.iconBoxGray}>
            <Text style={styles.iconBoxEmoji}>📋</Text>
          </View>
          <View style={styles.attachmentMeta}>
            <Text style={styles.attachmentTitle} numberOfLines={1}>
              Rekomendasi_Magang_TRPL_Polinela.pdf
            </Text>
            <Text style={styles.attachmentSub} numberOfLines={1}>
              Ditandatangani Kaprodi TRPL Polinela
            </Text>
          </View>
          <Text style={styles.attachmentActionIcon}>↗</Text>
        </TouchableOpacity>

        {/* ==================== FOOTER CARD PROFIL MAHASISWA ==================== */}
        <View style={styles.profileFooterCard}>
          <View style={styles.rpAvatarCircle}>
            <Text style={styles.rpAvatarText}>RP</Text>
          </View>

          <View style={styles.rpMeta}>
            <Text style={styles.rpName}>Rayhan Pratama</Text>
            <Text style={styles.rpSub}>
              NPM 21753042 • D4 Teknologi Rekayasa{'\n'}Perangkat Lunak
            </Text>
          </View>

          <Text style={styles.gradCapIcon}>🎓</Text>
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
    paddingBottom: 34,
  },

  // BANNER ESTIMASI RESPON HRD
  estimateBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F3FC',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#D4E6F7',
    gap: 8,
    marginBottom: 14,
  },
  estimateDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#286184',
  },
  estimateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#1D4E6E',
  },
  estimateBold: {
    fontFamily: 'Inter-Bold',
    color: '#0F2942',
  },

  // MAIN INFO CARD
  mainInfoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },
  companyHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginBottom: 14,
  },
  logoBox: {
    width: 46,
    height: 46,
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
  companyHeaderMeta: {
    flex: 1,
  },
  companyNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginBottom: 2,
  },
  companyNameText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#475569',
    flexShrink: 1,
  },
  verifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#286184',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 8.5,
    color: '#FFFFFF',
  },
  jobTitleText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15.5,
    color: '#0F172A',
    marginBottom: 3,
  },
  branchText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    lineHeight: 15.5,
  },

  // INNER BOXES
  innerGrayBox: {
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
  },
  innerBoxLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#64748B',
    marginBottom: 4,
  },
  innerBoxValueBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
    lineHeight: 17.5,
  },
  innerRegBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  regLeft: {
    flex: 1,
  },
  regCodeText: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
    fontWeight: '700',
    fontSize: 12.5,
    color: '#0F2942',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D6E6F4',
    gap: 5,
  },
  copyIcon: {
    fontSize: 12,
    color: '#1D4E6E',
  },
  copyText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#0F2942',
  },
  submittedFooterRow: {
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    paddingTop: 10,
  },
  submittedDateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  semesterBold: {
    fontFamily: 'Inter-Bold',
    color: '#1D4E6E',
  },

  // SECTION HEADERS
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitleLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  sectionIcon: {
    fontSize: 15,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  stepPill: {
    backgroundColor: '#E2EDF7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  stepPillText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10.5,
    color: '#1D4E6E',
  },

  // TIMELINE CARD
  timelineCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },
  timelineStepRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 12,
  },
  timelineLeftCol: {
    width: 30,
    alignItems: 'center',
  },
  circleNavySolid: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleWhiteIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#FFFFFF',
  },
  lineSolidNavy: {
    flex: 1,
    width: 2,
    backgroundColor: '#05263B',
    marginVertical: 3,
  },
  circleActiveHalo: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D6E8F8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleActiveInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineMutedGray: {
    flex: 1,
    width: 2,
    backgroundColor: '#CBD5E1',
    marginVertical: 3,
  },
  circleMutedGray: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#F1F5F9',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleGrayIcon: {
    fontSize: 11,
    color: '#94A3B8',
  },

  timelineRightCol: {
    flex: 1,
    paddingBottom: 18,
  },
  stepHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 5,
  },
  stepTitleDark: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
    flexShrink: 1,
  },
  stepTimeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#64748B',
    textAlign: 'right',
  },
  stepDescText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#475569',
    lineHeight: 17.5,
  },
  siakadBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#EDF5FC',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 8,
  },
  siakadBadgeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10.5,
    color: '#1D4E6E',
  },

  // STEP 3 ACTIVE BOX
  activeStepBox: {
    backgroundColor: '#EDF5FC',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#D4E6F7',
  },
  activeStepHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 6,
    marginBottom: 6,
  },
  activeStepTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F2942',
    flexShrink: 1,
  },
  sedangBerjalanPill: {
    backgroundColor: '#05263B',
    paddingHorizontal: 9,
    paddingVertical: 3,
    borderRadius: 10,
  },
  sedangBerjalanText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 9.5,
    color: '#FFFFFF',
  },
  activeStepDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#1E293B',
    lineHeight: 17.5,
    marginBottom: 8,
  },
  targetDecisionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#1D4E6E',
  },

  // STEP 4 MUTED
  stepTitleMuted: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#94A3B8',
  },
  stepTimeMuted: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#94A3B8',
  },
  stepDescMuted: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#94A3B8',
    lineHeight: 17.5,
  },
  mutedBold: {
    fontFamily: 'Inter-Bold',
    color: '#64748B',
  },

  // BERKAS LAMARAN TERLAMPIR
  docCountText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
  },
  attachmentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
    gap: 12,
  },
  iconBoxPdf: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxBlue: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxTeal: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#CCFBF1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxGray: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBoxEmoji: {
    fontSize: 16,
  },
  iconCodeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#0F766E',
  },
  attachmentMeta: {
    flex: 1,
  },
  attachmentTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  attachmentSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  attachmentActionIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#64748B',
  },

  // FOOTER PROFILE CARD
  profileFooterCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginTop: 8,
    gap: 12,
  },
  rpAvatarCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rpAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  rpMeta: {
    flex: 1,
  },
  rpName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  rpSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },
  gradCapIcon: {
    fontSize: 18,
  },
});