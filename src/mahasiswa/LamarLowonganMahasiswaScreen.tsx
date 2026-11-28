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

export default function LamarLowonganMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const job = route?.params?.job || {
    title: 'Frontend Web Developer Intern',
    shortCompany: 'PT Telkom',
    company: 'PT Telkom Indonesia (Persero) Tbk - Witel Lam',
    salary: 'Rp 3.500.000 - Rp 4.500.000 /bln',
  };

  const handleKirimLamaran = () => {
    setIsSubmitted(true);
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
        <View style={styles.topBarTextCol}>
          <Text style={styles.topBarTitle}>Lamar Lowongan</Text>
          <Text style={styles.topBarSubtitle} numberOfLines={1}>
            {job.title} - {job.shortCompany || 'PT Telkom'}
          </Text>
        </View>
      </View>

      {isSubmitted ? (
        /* ==================== TAMPILAN SETELAH LAMARAN TERKIRIM ==================== */
        <>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
            {/* Banner Navy: Lamaran Terkirim */}
            <View style={styles.submittedTopBanner}>
              <View style={styles.submittedMintCircle}>
                <Text style={styles.submittedMintCheck}>✓</Text>
              </View>
              <Text style={styles.submittedBannerText}>Lamaran Terkirim</Text>
            </View>

            {/* Kartu Ringkasan Lowongan */}
            <View style={styles.jobSummaryCard}>
              <View style={styles.jobSummaryTop}>
                <View style={styles.buildingIconBox}>
                  <Text style={styles.buildingIcon}>🏢</Text>
                </View>
                <View style={styles.jobSummaryMeta}>
                  <Text style={styles.jobTitle} numberOfLines={1}>
                    {job.title}
                  </Text>
                  <Text style={styles.jobCompany} numberOfLines={1}>
                    {job.company}
                  </Text>
                </View>
              </View>

              <View style={styles.salaryPill}>
                <Text style={styles.salaryPillText}>
                  💵 {job.salary || 'Rp 3.500.000 - Rp 4.500.000 /bln'}
                </Text>
              </View>
            </View>

            {/* Kartu Konfirmasi: Lamaran Berhasil Terkirim! */}
            <View style={styles.successConfirmCard}>
              <View style={styles.successBigCircle}>
                <View style={styles.successInnerRing}>
                  <Text style={styles.successBigCheck}>✓</Text>
                </View>
              </View>

              <View style={styles.successTextCol}>
                <Text style={styles.successTitle}>
                  Lamaran Berhasil Terkirim!
                </Text>
                <Text style={styles.successDesc}>
                  Berkas Anda telah diterima oleh sistem rekrutmen PT Telkom
                  Indonesia Witel Lampung dan saat ini sedang menunggu antrean
                  review HRD.
                </Text>
              </View>
            </View>

            {/* Kartu: Berkas yang Diserahkan */}
            <View style={styles.cardSection}>
              <View style={styles.sectionHeaderRow}>
                <View style={styles.sectionTitleLeft}>
                  <Text style={styles.sectionHeaderIcon}>🗃</Text>
                  <Text style={styles.sectionHeaderTitle}>
                    Berkas yang Diserahkan
                  </Text>
                </View>
                <Text style={styles.fourItemsText}>4 Item Terlampir</Text>
              </View>

              {/* Item 1: CV */}
              <TouchableOpacity style={styles.docItemBox} activeOpacity={0.8}>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>📄</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    CV_Muhammad_Rayhan_2025.
                  </Text>
                  <Text style={styles.docSubtitle}>
                    2.4 MB • Terverifikasi Akademik{'\n'}Kampus
                  </Text>
                </View>
                <View style={styles.roundActionCircle}>
                  <Text style={styles.docActionIcon}>👁</Text>
                </View>
              </TouchableOpacity>

              {/* Item 2: 3 Proyek Terverifikasi POLAR */}
              <View style={styles.docItemBox}>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>✳</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    3 Proyek Terverifikasi POLAR
                  </Text>
                  <Text style={styles.docSubtitle}>
                    Rating 5.0 • Web Portal Alumni &{'\n'}AgroTech IoT
                  </Text>
                </View>
                <View style={styles.darkCheckCircle}>
                  <Text style={styles.darkCheckText}>✓</Text>
                </View>
              </View>

              {/* Item 3: rayhanpratama.dev & GitHub */}
              <TouchableOpacity
                style={[styles.docItemBox, { marginBottom: 0 }]}
                activeOpacity={0.8}
                onPress={() => Linking.openURL('https://rayhanpratama.dev')}>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>⌘</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    rayhanpratama.dev & GitHub
                  </Text>
                  <Text style={styles.docSubtitle}>
                    Tautan web live & 18 repositori publik
                  </Text>
                </View>
                <View style={styles.roundActionCircle}>
                  <Text style={styles.docActionIcon}>↗</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* Bottom Bar: LIHAT STATUS DI MENU PROYEK SAYA */}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.85}
              onPress={() => navigation?.navigate('ProyekMahasiswa')}>
              <Text style={styles.submitButtonIcon}>📁</Text>
              <Text style={styles.submitButtonText}>
                LIHAT STATUS DI MENU PROYEK SAYA
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        /* ==================== TAMPILAN FORM LAMAR LOWONGAN ==================== */
        <>
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}>
            {/* Kartu Ringkasan Lowongan */}
            <View style={styles.jobSummaryCard}>
              <View style={styles.jobSummaryTop}>
                <View style={styles.buildingIconBox}>
                  <Text style={styles.buildingIcon}>🏢</Text>
                </View>
                <View style={styles.jobSummaryMeta}>
                  <Text style={styles.jobTitle} numberOfLines={1}>
                    {job.title}
                  </Text>
                  <Text style={styles.jobCompany} numberOfLines={1}>
                    {job.company}
                  </Text>
                </View>
              </View>

              <View style={styles.salaryPill}>
                <Text style={styles.salaryPillText}>
                  💵 {job.salary || 'Rp 3.500.000 - Rp 4.500.000 /bln'}
                </Text>
              </View>
            </View>

            {/* Banner Info Sinkronisasi Otomatis */}
            <View style={styles.syncBanner}>
              <View style={styles.syncIconCircle}>
                <Text style={styles.syncIcon}>📋</Text>
              </View>
              <View style={styles.syncTextCol}>
                <Text style={styles.syncBodyText}>
                  Data diri, portofolio, dan riwayat proyek telah disinkronkan
                  secara otomatis dari profil mahasiswa{' '}
                  <Text style={styles.syncBoldText}>POLAR</Text> Anda.
                </Text>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={() => navigation?.navigate('MenuAkunMahasiswa')}>
                  <Text style={styles.syncLinkText}>
                    Perbarui Data Profil →
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* SECTION: DATA PRIBADI & AKADEMIK */}
            <View style={styles.cardSection}>
              <View style={styles.sectionHeaderRow}>
                <View style={styles.sectionTitleLeft}>
                  <Text style={styles.sectionHeaderIcon}>🪪</Text>
                  <Text style={styles.sectionHeaderTitle}>
                    Data Pribadi & Akademik
                  </Text>
                </View>
                <View style={styles.autoFilledBadge}>
                  <Text style={styles.autoFilledText}>✓ Otomatis Terisi</Text>
                </View>
              </View>

              <View style={styles.studentInnerCard}>
                <View style={styles.avatarWrapper}>
                  <Image
                    source={require('../assets/kandidat/profile-rayhan.png')}
                    style={styles.avatarImage}
                    resizeMode="cover"
                  />
                  <View style={styles.verifiedCheckBadge}>
                    <Text style={styles.verifiedCheckText}>✓</Text>
                  </View>
                </View>

                <View style={styles.studentInfo}>
                  <Text style={styles.studentName}>
                    Muhammad Rayhan Pratama
                  </Text>
                  <Text style={styles.studentNim}>NIM: 21753088</Text>
                  <Text style={styles.studentMajor}>
                    D4 Rekayasa Perangkat Lunak (TRPL)
                  </Text>
                </View>
              </View>

              <View style={styles.detailRows}>
                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Email Kampus</Text>
                  <Text style={styles.detailValue} numberOfLines={1}>
                    yhan.pratama@mhs.polinela.ac.id
                  </Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>WhatsApp</Text>
                  <Text style={styles.detailValue}>+62 812-7890-4321</Text>
                </View>

                <View style={styles.detailRow}>
                  <Text style={styles.detailLabel}>Domisili</Text>
                  <Text style={styles.detailValue}>
                    Bandar Lampung, Lampung
                  </Text>
                </View>
              </View>
            </View>

            {/* SECTION: DOKUMEN & PORTOFOLIO UTAMA */}
            <View style={styles.cardSection}>
              <View style={styles.sectionHeaderRow}>
                <View style={styles.sectionTitleLeft}>
                  <Text style={styles.sectionHeaderIcon}>📁</Text>
                  <Text style={styles.sectionHeaderTitle}>
                    Dokumen & Portofolio Utama
                  </Text>
                </View>
                <Text style={styles.filesReadyText}>3 Berkas Siap</Text>
              </View>

              <TouchableOpacity style={styles.docItemBox} activeOpacity={0.8}>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>📄</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    CV_Muhammad_Rayhan_2025.
                  </Text>
                  <Text style={styles.docSubtitle}>
                    2.4 MB • Terverifikasi Akademik{'\n'}Kampus
                  </Text>
                </View>
                <Text style={styles.docActionIcon}>👁</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.docItemBox}
                activeOpacity={0.8}
                onPress={() => Linking.openURL('https://rayhanpratama.dev')}>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>🌐</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    rayhanpratama.dev
                  </Text>
                  <Text style={styles.docSubtitle}>
                    Web Portfolio Interaktif (Next.js 14)
                  </Text>
                </View>
                <Text style={styles.docActionIcon}>↗</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.docItemBox}
                activeOpacity={0.8}
                onPress={() =>
                  Linking.openURL('https://github.com/rayhan-pratama')
                }>
                <View style={styles.docIconBox}>
                  <Text style={styles.docIcon}>⌘</Text>
                </View>
                <View style={styles.docMeta}>
                  <Text style={styles.docTitle} numberOfLines={1}>
                    github.com/rayhan-pratama
                  </Text>
                  <Text style={styles.docSubtitle}>
                    18 Repositori Publik • Kontributor Aktif
                  </Text>
                </View>
                <Text style={styles.docActionIcon}>↗</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.addDocButton}
                activeOpacity={0.8}
                onPress={() =>
                  Alert.alert(
                    'Tambah Dokumen',
                    'Pilih file PDF/dokumen pendukung.',
                  )
                }>
                <Text style={styles.addDocIcon}>⊕</Text>
                <Text style={styles.addDocText}>Tambah Dokumen Tambahan</Text>
              </TouchableOpacity>
            </View>

            {/* SECTION: ULASAN & TESTIMONI KLIEN */}
            <View style={styles.cardSection}>
              <View style={styles.sectionHeaderRow}>
                <View style={styles.sectionTitleLeft}>
                  <Text style={styles.sectionHeaderIcon}>💬</Text>
                  <Text style={styles.sectionHeaderTitle}>
                    Ulasan & Testimoni Klien
                  </Text>
                </View>
                <View style={styles.starScorePill}>
                  <Text style={styles.starScorePillText}>★ 5.0</Text>
                </View>
              </View>

              <View style={styles.reviewsInnerContainer}>
                <View style={styles.subReviewHeader}>
                  <Text style={styles.subReviewTitle}>
                    ☆ Rating & Ulasan Klien
                  </Text>
                  <TouchableOpacity activeOpacity={0.75}>
                    <Text style={styles.seeAllReviewsText}>
                      Lihat Semua (28)
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.ratingSummaryBox}>
                  <View style={styles.ratingLeftCol}>
                    <Text style={styles.bigScoreText}>4.9</Text>
                    <Text style={styles.fiveStarsText}>★★★★★</Text>
                    <Text style={styles.totalReviewsText}>28 Ulasan</Text>
                  </View>

                  <View style={styles.ratingDivider} />

                  <View style={styles.ratingRightCol}>
                    <View style={styles.metricRow}>
                      <Text style={styles.metricLabel}>Kualitas Desain</Text>
                      <Text style={styles.metricValue}>5.0</Text>
                    </View>
                    <View style={styles.progressBarTrack}>
                      <View style={styles.progressBarFill} />
                    </View>
                  </View>
                </View>

                <View style={styles.testimonialCard}>
                  <Text style={styles.singleStarScore}>★ 5.0</Text>

                  <View style={styles.clientHeaderRow}>
                    <View style={styles.clientAvatarCircle}>
                      <Text style={styles.clientAvatarText}>KL</Text>
                    </View>
                    <View style={styles.clientMeta}>
                      <Text style={styles.clientName}>
                        Koperasi Kopi Lambar
                      </Text>
                      <Text style={styles.clientProject}>
                        Klien UMKM • Proyek Mobile Dashboard
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.testimonialQuote}>
                    "Karya mas Rian sangat rapi. Struktur Auto-Layout{'\n'}di
                    Figma sangat memudahkan tim developer kami di{'\n'}Bandar
                    Lampung. Komunikasi santun dan selalu{'\n'}tepat waktu
                    sesuai deadline."
                  </Text>

                  <Text style={styles.testimonialDate}>
                    📅 12 hari yang lalu
                  </Text>
                </View>

                <View style={[styles.testimonialCard, { marginBottom: 0 }]}>
                  <Text style={styles.singleStarScore}>★ 4.9</Text>

                  <View style={styles.clientHeaderRow}>
                    <View style={styles.clientAvatarCircle}>
                      <Text style={styles.clientAvatarText}>KD</Text>
                    </View>
                    <View style={styles.clientMeta}>
                      <Text style={styles.clientName}>
                        PT Kreasi Digital Sumatra
                      </Text>
                      <Text style={styles.clientProject}>
                        Industri Kreatif • UI Redesign
                      </Text>
                    </View>
                  </View>

                  <Text style={styles.testimonialQuote}>
                    "Mahasiswa vokasi Polinela terbukti punya skill set{'\n'}
                    standar industri. Riset layout ringkas dan hasil{'\n'}
                    handoff komponen token CSS sangat memuaskan."
                  </Text>

                  <Text style={styles.testimonialDate}>
                    📅 3 minggu yang lalu
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>

          {/* Bottom Bar: KIRIM LAMARAN SEKARANG */}
          <View style={styles.bottomBar}>
            <TouchableOpacity
              style={styles.submitButton}
              activeOpacity={0.85}
              onPress={handleKirimLamaran}>
              <Text style={styles.submitButtonIcon}>▷</Text>
              <Text style={styles.submitButtonText}>
                KIRIM LAMARAN SEKARANG
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
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
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  topBarTextCol: {
    flex: 1,
  },
  topBarTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A',
  },
  topBarSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 28,
  },

  // ==================== SUBMITTED STATE STYLES ====================
  submittedTopBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F2942',
    borderRadius: 10,
    paddingVertical: 11,
    marginBottom: 14,
    gap: 8,
  },
  submittedMintCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#99F6E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submittedMintCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F2942',
  },
  submittedBannerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#FFFFFF',
  },

  successConfirmCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#CBE0F2',
    marginBottom: 16,
    gap: 14,
  },
  successBigCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  successInnerRing: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#99F6E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successBigCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#99F6E4',
  },
  successTextCol: {
    flex: 1,
  },
  successTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A',
    marginBottom: 6,
  },
  successDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#475569',
    lineHeight: 19,
  },

  fourItemsText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
  },
  roundActionCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#E2EDF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkCheckCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkCheckText: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#FFFFFF',
  },

  // JOB SUMMARY CARD
  jobSummaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  jobSummaryTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  buildingIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#EBF4FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buildingIcon: {
    fontSize: 18,
  },
  jobSummaryMeta: {
    flex: 1,
  },
  jobTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  jobCompany: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },
  salaryPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  salaryPillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#0F2942',
  },

  // SYNC BANNER
  syncBanner: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#EBF4FA',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#D6E6F4',
    marginBottom: 14,
    gap: 10,
  },
  syncIconCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  syncIcon: {
    fontSize: 13,
  },
  syncTextCol: {
    flex: 1,
  },
  syncBodyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#1E3A5F',
    lineHeight: 17,
  },
  syncBoldText: {
    fontFamily: 'Inter-Bold',
    color: '#0F2942',
  },
  syncLinkText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#0F2942',
    marginTop: 5,
  },

  // CARD SECTIONS
  cardSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
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
  sectionHeaderIcon: {
    fontSize: 14,
  },
  sectionHeaderTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  autoFilledBadge: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  autoFilledText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#1D4E6E',
  },

  // STUDENT INNER CARD
  studentInnerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 12,
    gap: 12,
    marginBottom: 12,
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatarImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#CBD5E1',
  },
  verifiedCheckBadge: {
    position: 'absolute',
    bottom: -1,
    right: -1,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#15344E',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheckText: {
    fontFamily: 'Inter-Bold',
    fontSize: 8,
    color: '#FFFFFF',
  },
  studentInfo: {
    flex: 1,
  },
  studentName: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
  },
  studentNim: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 1,
  },
  studentMajor: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
    marginTop: 2,
  },

  detailRows: {
    gap: 9,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
  },
  detailValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0F172A',
    maxWidth: '65%',
    textAlign: 'right',
  },

  // DOKUMEN & PORTOFOLIO
  filesReadyText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  docItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  docIconBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#E2EDF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  docIcon: {
    fontSize: 16,
  },
  docMeta: {
    flex: 1,
  },
  docTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  docSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },
  docActionIcon: {
    fontSize: 15,
    color: '#286184',
  },
  addDocButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#94A3B8',
    borderRadius: 10,
    paddingVertical: 11,
    gap: 6,
    marginTop: 2,
  },
  addDocIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F2942',
  },
  addDocText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#0F2942',
  },

  // ULASAN & TESTIMONI KLIEN
  starScorePill: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  starScorePillText: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#D97706',
  },
  reviewsInnerContainer: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F1F5F9',
  },
  subReviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subReviewTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
  },
  seeAllReviewsText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#0284C7',
  },
  ratingSummaryBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 12,
  },
  ratingLeftCol: {
    alignItems: 'center',
    paddingRight: 12,
  },
  bigScoreText: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#0F172A',
  },
  fiveStarsText: {
    fontSize: 11,
    color: '#F59E0B',
    marginTop: 2,
  },
  totalReviewsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
  },
  ratingDivider: {
    width: 1,
    height: 44,
    backgroundColor: '#E2E8F0',
    marginRight: 12,
  },
  ratingRightCol: {
    flex: 1,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  metricLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#475569',
  },
  metricValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F172A',
  },
  progressBarTrack: {
    height: 5,
    borderRadius: 3,
    backgroundColor: '#E2E8F0',
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '100%',
    height: '100%',
    backgroundColor: '#15344E',
    borderRadius: 3,
  },

  // TESTIMONIAL CARDS
  testimonialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 10,
  },
  singleStarScore: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#F59E0B',
    marginBottom: 8,
  },
  clientHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
  },
  clientAvatarCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#15344E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  clientMeta: {
    flex: 1,
  },
  clientName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  clientProject: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },
  testimonialQuote: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#334155',
    lineHeight: 17,
    marginBottom: 8,
  },
  testimonialDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#64748B',
  },

  // BOTTOM BAR
  bottomBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2942',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
  },
  submitButtonIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#FFFFFF',
  },
  submitButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#FFFFFF',
    letterSpacing: 0.4,
  },
});