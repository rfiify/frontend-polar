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

export default function DetailLowonganMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [activeTab, setActiveTab] = useState<'Deskripsi' | 'Perusahaan'>(
    'Deskripsi',
  );

  // Mengambil data lowongan jika dikirim lewat route.params, default ke Telkom sesuai desain
  const job = route?.params?.job || {
    initials: 'TI',
    subInitials: 'TELKOM',
    badges: ['🎓 Mitra Resmi Polinela', 'Magang / Full-time'],
    title: 'Frontend Web Developer Intern',
    company: 'PT Telkom Indonesia (Persero) Tbk',
    division: 'Witel Lampung • Divisi Digital Service',
    location: 'Bandar Lampung (Hybrid)',
    salary: 'Rp 2.500.000 - Rp 3.500.000 / bln',
    skills: ['React.js', 'Tailwind CSS', 'REST API'],
  };

  const handleLamar = () => {
      navigation?.navigate('LamarLowonganMahasiswa', { job });
    };

  const handleOpenMaps = () => {
    const query = encodeURIComponent(
      'Jl. Raden Intan No. 89, Enggal, Tanjung Karang Pusat, Kota Bandar Lampung, Lampung 35118',
    );
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${query}`);
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
        <Text style={styles.topBarTitle}>Detail Lowongan</Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Hero Card Info Lowongan */}
        <View style={styles.heroCard}>
          <View style={styles.heroRow}>
            <View style={styles.companyLogoBox}>
              <Text style={styles.companyLogoMain}>{job.initials || 'TI'}</Text>
              <Text style={styles.companyLogoSub}>
                {job.subInitials || 'TELKOM'}
              </Text>
            </View>

            <View style={styles.heroMeta}>
              <View style={styles.badgeRow}>
                <View style={styles.badgeBlue}>
                  <Text style={styles.badgeBlueText}>
                    🎓 Mitra Resmi Polinela
                  </Text>
                </View>
                <View style={styles.badgeGray}>
                  <Text style={styles.badgeGrayText}>Magang / Full-time</Text>
                </View>
              </View>

              <Text style={styles.heroJobTitle}>{job.title}</Text>
              <Text style={styles.heroCompanyName}>{job.company}</Text>
              <Text style={styles.heroDivision}>
                🏢 {job.division || 'Witel Lampung • Divisi Digital Service'}
              </Text>
            </View>
          </View>
        </View>

        {/* Segmented Tab: Deskripsi & Syarat | Perusahaan */}
        <View style={styles.segmentContainer}>
          <TouchableOpacity
            style={[
              styles.segmentTab,
              activeTab === 'Deskripsi' && styles.segmentTabActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setActiveTab('Deskripsi')}>
            <Text
              style={[
                styles.segmentText,
                activeTab === 'Deskripsi' && styles.segmentTextActive,
              ]}>
              Deskripsi & Syarat
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentTab,
              activeTab === 'Perusahaan' && styles.segmentTabActive,
            ]}
            activeOpacity={0.85}
            onPress={() => setActiveTab('Perusahaan')}>
            <Text
              style={[
                styles.segmentText,
                activeTab === 'Perusahaan' && styles.segmentTextActive,
              ]}>
              Perusahaan
            </Text>
          </TouchableOpacity>
        </View>

        {activeTab === 'Deskripsi' ? (
          <>
            {/* Section: Tanggung Jawab Utama */}
            <Text style={styles.sectionHeading}>Tanggung Jawab Utama</Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  Mengembangkan antarmuka aplikasi web internal dan layanan
                  pelanggan Telkom berbasis React.js / Next.js dan Tailwind CSS.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  Berkolaborasi dengan UI/UX Designer untuk mengimplementasikan
                  mockup desain menjadi komponen yang responsif dan interaktif.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  Melakukan integrasi API RESTful dan penanganan state
                  management menggunakan Redux Toolkit atau Zustand.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  Membantu proses code review, debugging, dan optimalisasi
                  performa frontend aplikasi web.
                </Text>
              </View>
            </View>

            {/* Section: Kualifikasi Khusus Mahasiswa */}
            <Text style={styles.sectionHeading}>
              Kualifikasi Khusus Mahasiswa
            </Text>
            <View style={styles.bulletList}>
              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bulletBold}>Prestasi Akademik:</Text>{' '}
                  Mahasiswa aktif Polinela semester 5 atau 7 jurusan Manajemen
                  Informatika / TRPL dengan IPK minimal 3.25.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bulletBold}>Kemampuan Teknis:</Text>{' '}
                  Menguasai HTML5, CSS3/Tailwind, JavaScript modern (ES6+), dan
                  dasar TypeScript serta framework React.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bulletBold}>Portofolio:</Text> Memiliki
                  proyek web mandiri atau tim yang dapat didemonstrasikan di
                  GitHub.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bulletBold}>Administrasi Kampus:</Text>{' '}
                  Mendapat surat rekomendasi magang/PKL dari jurusan dan
                  bersedia mengonversi 20 SKS MBKM.
                </Text>
              </View>

              <View style={styles.bulletItem}>
                <View style={styles.squareBullet} />
                <Text style={styles.bulletText}>
                  <Text style={styles.bulletBold}>Kecakapan Personal:</Text>{' '}
                  Memiliki etos kerja tinggi, komunikasi proaktif, dan antusiasme
                  belajar teknologi baru di lingkungan BUMN.
                </Text>
              </View>
            </View>

            {/* Card: Benefit & Fasilitas Magang */}
            <View style={styles.benefitCard}>
              <Text style={styles.benefitTitle}>
                Benefit & Fasilitas Magang
              </Text>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Uang Saku / Stipend resmi BUMN bulanan sesuai ketentuan Telkom
                  Internship Program.
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Sertifikat Industri Resmi Telkom Indonesia yang diakui secara
                  nasional.
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Terakreditasi konversi penuh 20 SKS terintegrasi sistem
                  akademik kampus Polinela.
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Mentoring 1-on-1 bersama Senior Software Engineer Telkom
                  Digital Service.
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Akses penuh ke pelatihan internal, lisensi software
                  profesional, dan cloud lab Telkom.
                </Text>
              </View>

              <View style={styles.benefitItem}>
                <View style={styles.greenSquareBullet} />
                <Text style={styles.bulletText}>
                  Peluang fast-track rekrutmen pasca kelulusan untuk lulusan
                  magang berkinerja terbaik.
                </Text>
              </View>
            </View>

            {/* Card Ringkasan Bawah */}
            <View style={styles.summaryCard}>
              <View style={styles.badgeRow}>
                <View style={styles.badgeBlue}>
                  <Text style={styles.badgeBlueText}>
                    🎓 Mitra Resmi Polinela
                  </Text>
                </View>
                <View style={styles.badgeGray}>
                  <Text style={styles.badgeGrayText}>Magang / Full-time</Text>
                </View>
              </View>

              <View style={styles.summaryHeaderRow}>
                <View style={styles.summaryAvatar}>
                  <Text style={styles.summaryAvatarText}>
                    {job.initials || 'TI'}
                  </Text>
                </View>
                <View style={styles.summaryMeta}>
                  <Text style={styles.summaryTitle} numberOfLines={1}>
                    {job.title}
                  </Text>
                  <Text style={styles.summaryCompany} numberOfLines={1}>
                    {job.company} • Witel Lam
                  </Text>
                </View>
              </View>

              <Text style={styles.summaryLocation}>
                📍 {job.location || 'Bandar Lampung (Hybrid)'}
              </Text>
              <Text style={styles.summarySalary}>
                💵 {job.salary || 'Rp 2.500.000 - Rp 3.500.000 / bln'}
              </Text>

              <View style={styles.skillsRow}>
                {(job.skills || ['React.js', 'Tailwind CSS', 'REST API']).map(
                  (skill: string) => (
                    <View key={skill} style={styles.skillPill}>
                      <Text style={styles.skillPillText}>{skill}</Text>
                    </View>
                  ),
                )}
              </View>
            </View>
          </>
        ) : (
          /* ==================== TAB PERUSAHAAN ==================== */
          <View style={styles.companySection}>
            {/* Header Profil Perusahaan */}
            <View style={styles.companyProfileRow}>
              <View style={styles.companySquareAvatar}>
                <Text style={styles.companySquareAvatarText}>
                  {job.initials || 'TI'}
                </Text>
              </View>
              <View style={styles.companyProfileMeta}>
                <Text style={styles.companyProfileName}>{job.company}</Text>
                <Text style={styles.companyProfileBranch}>
                  Wilayah Telekomunikasi (Witel) Lampung
                </Text>
                <View style={styles.mitraVerifiedRow}>
                  <Text style={styles.mitraCheckIcon}>✓</Text>
                  <Text style={styles.mitraVerifiedText}>
                    Mitra Kampus Resmi Polinela
                  </Text>
                </View>
              </View>
            </View>

            {/* Paragraf Deskripsi Perusahaan */}
            <Text style={styles.companyDescription}>
              PT Telkom Indonesia (Persero) Tbk merupakan Badan Usaha Milik
              Negara (BUMN) penyedia layanan telekomunikasi dan jaringan digital
              terbesar di Indonesia. Kantor Witel Lampung menggerakkan
              akselerasi transformasi digital di seluruh kabupaten/kota
              se-Provinsi Lampung melalui penyediaan infrastruktur serat optik,
              pusat inovasi digital, dan kemitraan kampus strategis bersama
              Polinela.
            </Text>

            {/* Box Info Detail Perusahaan */}
            <View style={styles.companyInfoCard}>
              {/* Sektor Industri */}
              <View style={styles.infoItemRow}>
                <Text style={styles.infoIcon}>❖</Text>
                <View style={styles.infoTextCol}>
                  <Text style={styles.infoLabel}>Sektor Industri</Text>
                  <Text style={styles.infoValue}>
                    Telekomunikasi & Layanan Teknologi Informasi Digital
                  </Text>
                </View>
              </View>

              {/* Ukuran Perusahaan */}
              <View style={styles.infoItemRow}>
                <Text style={styles.infoIcon}>🪪</Text>
                <View style={styles.infoTextCol}>
                  <Text style={styles.infoLabel}>Ukuran Perusahaan</Text>
                  <Text style={styles.infoValue}>
                    10.000+ Karyawan Nasional (350+ di Witel Lampung)
                  </Text>
                </View>
              </View>

              {/* Website Resmi */}
              <View style={styles.infoItemRow}>
                <Text style={styles.infoIcon}>🌐</Text>
                <View style={styles.infoTextCol}>
                  <Text style={styles.infoLabel}>Website Resmi</Text>
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => Linking.openURL('https://www.telkom.co.id')}>
                    <Text style={styles.infoValueLink}>
                      https://www.telkom.co.id
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Budaya Kerja */}
              <View style={styles.infoItemRow}>
                <Text style={styles.infoIcon}>👥</Text>
                <View style={styles.infoTextCol}>
                  <Text style={styles.infoLabel}>Budaya Kerja</Text>
                  <Text style={styles.infoValue}>
                    AKHLAK (Amanah, Kompeten, Harmonis, Loyal, Adaptif,
                    Kolaboratif)
                  </Text>
                </View>
              </View>

              {/* Alamat Kantor Wilayah */}
              <View style={[styles.infoItemRow, { marginBottom: 0 }]}>
                <Text style={styles.infoIcon}>📍</Text>
                <View style={styles.infoTextCol}>
                  <Text style={styles.infoLabel}>Alamat Kantor Wilayah</Text>
                  <Text style={styles.infoValue}>
                    Jl. Raden Intan No. 89, Enggal, Tanjung Karang Pusat, Kota
                    Bandar Lampung, Lampung 35118
                  </Text>
                </View>
              </View>
            </View>

            {/* Card Peta Bandar Lampung */}
            <View style={styles.mapOuterCard}>
              <View style={styles.mapPreviewBox}>
                {/* Ganti source jika punya gambar peta statis di assets, atau gunakan tampilan peta mockup ini */}
                <Image
                  source={require('../assets/Mahasiswa/mapbalam.png')}
                  style={styles.mapImage}
                  resizeMode="cover"
                />
                {/* Gradient/Overlay Gelap di Bawah Peta */}
                <View style={styles.mapBottomOverlay}>
                  <Text style={styles.mapPinLabel} numberOfLines={1}>
                    📍 Witel Lampung Headquarter
                  </Text>
                  <TouchableOpacity
                    style={styles.openMapsBtn}
                    activeOpacity={0.85}
                    onPress={handleOpenMaps}>
                    <Text style={styles.openMapsBtnText}>Buka di Maps</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Bottom Bar: Tombol Lamar Sekarang */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.applyButton}
          activeOpacity={0.85}
          onPress={handleLamar}>
          <Text style={styles.applyButtonIcon}>▷</Text>
          <Text style={styles.applyButtonText}>Lamar Sekarang</Text>
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

  // TOP APP BAR
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
  topBarTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 17,
    color: '#0F172A',
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 28,
  },

  // HERO CARD
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  heroRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  companyLogoBox: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: '#0A2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companyLogoMain: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
    lineHeight: 18,
  },
  companyLogoSub: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 7,
    color: '#93C5FD',
    letterSpacing: 0.5,
    marginTop: 1,
  },
  heroMeta: {
    flex: 1,
  },
  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 6,
  },
  badgeBlue: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeBlueText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#1D4E6E',
  },
  badgeGray: {
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  badgeGrayText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#475569',
  },
  heroJobTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A',
    lineHeight: 22,
  },
  heroCompanyName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#286184',
    marginTop: 3,
  },
  heroDivision: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 3,
  },

  // SEGMENTED TABS
  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#EBF4FA',
    borderRadius: 10,
    padding: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DCE9F5',
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 9,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 12,
    color: '#475569',
  },
  segmentTextActive: {
    fontFamily: 'Inter-Bold',
    color: '#0F2942',
  },

  // TAB DESKRIPSI & SYARAT
  sectionHeading: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 10,
    marginTop: 2,
  },
  bulletList: {
    marginBottom: 16,
    gap: 10,
  },
  bulletItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  squareBullet: {
    width: 6,
    height: 6,
    borderRadius: 1.5,
    backgroundColor: '#1E40AF',
    marginTop: 6,
  },
  bulletText: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 19,
  },
  bulletBold: {
    fontFamily: 'Inter-Bold',
    color: '#0F172A',
  },
  benefitCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
    gap: 10,
  },
  benefitTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 2,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  greenSquareBullet: {
    width: 6,
    height: 6,
    borderRadius: 1.5,
    backgroundColor: '#0D9488',
    marginTop: 6,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 8,
  },
  summaryHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 4,
    marginBottom: 8,
  },
  summaryAvatar: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#0A2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  summaryAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  summaryMeta: {
    flex: 1,
  },
  summaryTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
  },
  summaryCompany: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  summaryLocation: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#475569',
    marginTop: 2,
  },
  summarySalary: {
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
  },
  skillPill: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 6,
  },
  skillPillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#1D4E6E',
  },

  // ==================== TAB PERUSAHAAN ====================
  companySection: {
    paddingTop: 2,
  },
  companyProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 14,
  },
  companySquareAvatar: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#0A2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  companySquareAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#FFFFFF',
  },
  companyProfileMeta: {
    flex: 1,
  },
  companyProfileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
    lineHeight: 20,
  },
  companyProfileBranch: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
  },
  mitraVerifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: 4,
  },
  mitraCheckIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F2942',
  },
  mitraVerifiedText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#0F2942',
  },
  companyDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 19,
    marginBottom: 16,
  },
  companyInfoCard: {
    backgroundColor: '#EBF4FA',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#DCE9F5',
    marginBottom: 16,
  },
  infoItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 13,
  },
  infoIcon: {
    fontSize: 15,
    color: '#286184',
    marginTop: 2,
    width: 20,
    textAlign: 'center',
  },
  infoTextCol: {
    flex: 1,
  },
  infoLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  infoValue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12.5,
    color: '#0F172A',
    marginTop: 2,
    lineHeight: 18,
  },
  infoValueLink: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12.5,
    color: '#0F2942',
    marginTop: 2,
  },

  // MAP CARD
  mapOuterCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 8,
  },
  mapPreviewBox: {
    height: 155,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#E2E8F0',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  mapBottomOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(15, 23, 42, 0.72)',
    paddingHorizontal: 12,
    paddingVertical: 10,
    gap: 8,
  },
  mapPinLabel: {
    flex: 1,
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  openMapsBtn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  openMapsBtnText: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F2942',
  },

  // BOTTOM BAR
  bottomBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  applyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2942',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
  },
  applyButtonIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  applyButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});