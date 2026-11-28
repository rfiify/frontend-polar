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
  Alert,
} from 'react-native';

type Props = {
  navigation?: any;
  route?: any;
};

type AttachedFile = {
  id: string;
  name: string;
  size: string;
  type: 'pdf' | 'zip';
};

export default function KirimHasilKerjaMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const isRevision = route?.params?.isRevision === true;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [files, setFiles] = useState<AttachedFile[]>([
    {
      id: '1',
      name: 'Laporan_Milestone_3_Revamp_V',
      size: '3.2 MB',
      type: 'pdf',
    },
    {
      id: '2',
      name: 'Preview_Responsif_Mobile_Desk',
      size: '14.8 MB',
      type: 'zip',
    },
  ]);

  const [catatan, setCatatan] = useState(
    'Halo tim CV Agro Lampung Mandiri, pengerjaan Milestone 3 telah selesai sesuai spesifikasi: integrasi katalog 12 varian kopi robusta, sistem filter kategori, dan alur',
  );

  const handleBrowseFile = () => {
    const newId = String(Date.now());
    setFiles(prev => [
      ...prev,
      {
        id: newId,
        name: `Revisi_Final_Milestone_${prev.length + 1}.zip`,
        size: '6.4 MB',
        type: 'zip',
      },
    ]);
  };

  const handleRemoveFile = (id: string) => {
    setFiles(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmitReview = () => {
    if (files.length === 0) {
      Alert.alert('Berkas Kosong', 'Harap lampirkan minimal 1 berkas.');
      return;
    }
    setIsSubmitted(true);
  };

  const handleBackToDetail = () => {
    navigation?.navigate('DetailProyekMahasiswa', {
      hasSubmittedWork: true,
    });
  };

  if (isSubmitted) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

        {/* Top Bar Submission Success */}
        <View style={styles.successTopBar}>
          <TouchableOpacity
            style={styles.closeBtn}
            activeOpacity={0.75}
            onPress={handleBackToDetail}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
          <Text style={styles.successTopBarTitle}>Submission Success</Text>
          <View style={{ width: 28 }} />
        </View>

        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={styles.successScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Hero Icon Centang dengan Aura */}
          <View style={styles.heroIconWrapper}>
            <View style={styles.outerRing}>
              <View style={styles.middleRing}>
                <View style={styles.innerNavyCircle}>
                  <View style={styles.mintCheckRing}>
                    <Text style={styles.mintCheckText}>✓</Text>
                  </View>
                </View>
              </View>
              <View style={styles.floatingMintDot} />
            </View>
          </View>

          {/* Pill Status: Berhasi Terkirim & Ditinjau */}
          <View style={styles.statusBluePill}>
            <View style={styles.statusBlueDot} />
            <Text style={styles.statusBluePillText}>
              Berhasi Terkirim & Ditinjau
            </Text>
          </View>

          {/* Judul & Subjudul Sukses */}
          <Text style={styles.successHeading}>Hasil Kerja Berhasil Dikirim!</Text>
          <Text style={styles.successSubheading}>
            Berkas dan dokumentasi Anda telah diteruskan{'\n'}Dan akan di
            tindak lanjuti
          </Text>

          {/* Card Mitra: CV Agro Lampung Mandiri */}
          <View style={styles.mitraCard}>
            <View style={styles.mitraLogoBox}>
              <Image
                source={require('../assets/kandidat/profile-rayhan.png')}
                style={styles.mitraLogoImg}
                resizeMode="cover"
              />
            </View>
            <View style={styles.mitraMeta}>
              <View style={styles.mitraNameRow}>
                <Text style={styles.mitraName} numberOfLines={1}>
                  CV Agro Lampung Mandi
                </Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedBadgeText}>✓</Text>
                </View>
              </View>
              <Text style={styles.mitraSub}>
                Mitra Industri Politeknik Negeri{'\n'}Lampung
              </Text>
            </View>
            <View style={styles.uatPill}>
              <Text style={styles.uatPillText}>UAT Aktif</Text>
            </View>
          </View>

          {/* Card Ringkasan Pengiriman */}
          <View style={styles.summaryCard}>
            {/* Header Bar Ringkasan */}
            <View style={styles.summaryHeaderBar}>
              <View style={styles.summaryHeaderLeft}>
                <Text style={styles.summaryHeaderIcon}>📋</Text>
                <Text style={styles.summaryHeaderTitle}>
                  Ringkasan Pengiriman
                </Text>
              </View>
              <Text style={styles.summaryIdText}>ID: #MS-AGR-084</Text>
            </View>

            {/* Row Nama Proyek */}
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Nama Proyek</Text>
              <Text style={styles.summaryValueBold}>
                Web Katalog & Pemesanan
              </Text>
            </View>

            {/* Row Waktu Kirim */}
            <View style={styles.summaryRowTop}>
              <Text style={styles.summaryLabel}>Waktu Kirim</Text>
              <View style={styles.timeRightCol}>
                <Text style={styles.summaryValueBold}>
                  🕒 Hari ini, 28 Okt 2024 •
                </Text>
                <Text style={styles.summaryValueBold}>20:15 WIB</Text>
              </View>
            </View>

            {/* Divider */}
            <View style={styles.summaryDivider} />

            {/* Berkas Terlampir */}
            <View style={styles.summaryFileHeader}>
              <Text style={styles.summaryLabel}>Berkas Terlampir</Text>
              <Text style={styles.fileCountBlue}>2 File (18.0 MB)</Text>
            </View>

            <View style={styles.fileBadgePill}>
              <Text style={styles.fileBadgeIcon}>📄</Text>
              <Text style={styles.fileBadgeName}>Laporan_Milestone_3.pd</Text>
              <Text style={styles.fileBadgeSize}> (3.2 MB)</Text>
            </View>

            <View style={[styles.fileBadgePill, { marginBottom: 0 }]}>
              <Text style={styles.fileBadgeIcon}>📁</Text>
              <Text style={styles.fileBadgeName}>Preview_Responsif.zip</Text>
              <Text style={styles.fileBadgeSize}> (14.8 MB)</Text>
            </View>
          </View>

          {/* Card Batas Waktu Peninjauan Klien */}
          <View style={styles.reviewWindowCard}>
            <View style={styles.hourglassCircle}>
              <Text style={styles.hourglassIcon}>⏳</Text>
            </View>
            <View style={styles.reviewWindowContent}>
              <View style={styles.reviewWindowTitleRow}>
                <Text style={styles.reviewWindowTitle}>
                  Batas Waktu Peninjauan Klien
                </Text>
                <View style={styles.durationBadge}>
                  <Text style={styles.durationBadgeText}>2×24 Jam</Text>
                </View>
              </View>
              <Text style={styles.reviewWindowDesc}>
                Klien memiliki waktu hingga{' '}
                <Text style={styles.reviewWindowBold}>
                  31 Okt 2024, 20:15 WIB
                </Text>{' '}
                untuk meninjau hasil kerja. Dana milestone akan cair otomatis
                jika tidak terdapat revisi lanjutan.
              </Text>
            </View>
          </View>

          {/* Tombol Utama: Kembali ke Detail Proyek */}
          <TouchableOpacity
            style={styles.primaryBackDetailBtn}
            activeOpacity={0.85}
            onPress={handleBackToDetail}>
            <Text style={styles.primaryBackDetailText}>
              Kembali ke Detail Proyek →
            </Text>
          </TouchableOpacity>

          {/* Tombol Sekunder: Buka Ruang Obrolan Klien */}
          <TouchableOpacity
            style={styles.secondaryChatBtn}
            activeOpacity={0.85}
            onPress={() => navigation?.navigate('ChatProyekMahasiswa')}>
            <Text style={styles.secondaryChatIcon}>💬</Text>
            <Text style={styles.secondaryChatText}>
              Buka Ruang Obrolan Klien
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

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
        <Text style={styles.topBarTitle}>
          {isRevision ? 'Revisi' : 'Kirim Hasil Kerja'}
        </Text>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* ==================== CARD 1: UNGGAH BERKAS & DOKUMEN ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardHeaderIcon}>📄</Text>
            <Text style={styles.cardHeaderTitle}>Unggah Berkas & Dokumen</Text>
          </View>

          {/* Dropzone Area */}
          <TouchableOpacity
            style={styles.uploadDropzone}
            activeOpacity={0.85}
            onPress={handleBrowseFile}>
            <View style={styles.cloudCircle}>
              <Text style={styles.cloudIcon}>☁</Text>
            </View>
            <Text style={styles.dropzoneTitle}>
              Ketuk untuk Mengunggah Berkas
            </Text>
            <Text style={styles.dropzoneSub}>
              Mendukung format ZIP, RAR, PDF, PNG, atau MP4
            </Text>
            <View style={styles.browsePill}>
              <Text style={styles.browsePillText}>Jelajahi File Lokal</Text>
            </View>
          </TouchableOpacity>

          {/* Label Berkas Terlampir */}
          <Text style={styles.attachedLabel}>
            Berkas Terlampir ({files.length}):
          </Text>

          {/* Daftar Berkas Terlampir */}
          {files.map((file, idx) => (
            <View
              key={file.id}
              style={[
                styles.attachedFileRow,
                idx === files.length - 1 && { marginBottom: 0 },
              ]}>
              <View
                style={
                  file.type === 'pdf' ? styles.fileIconPdf : styles.fileIconZip
                }>
                <Text style={styles.fileEmoji}>
                  {file.type === 'pdf' ? '📕' : '📁'}
                </Text>
              </View>

              <View style={styles.fileMeta}>
                <Text style={styles.fileName} numberOfLines={1}>
                  {file.name}
                </Text>
                <Text style={styles.fileSubRow}>
                  {file.size} •{' '}
                  <Text style={styles.readyText}>Siap Dikirim</Text>
                </Text>
              </View>

              <TouchableOpacity
                style={styles.removeBtn}
                activeOpacity={0.7}
                onPress={() => handleRemoveFile(file.id)}>
                <Text style={styles.removeIcon}>✕</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* ==================== CARD 2: CATATAN UNTUK KLIEN ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardHeaderIcon}>📝</Text>
            <Text style={styles.cardHeaderTitle}>Catatan untuk Klien</Text>
          </View>

          <View style={styles.noteInputBox}>
            <TextInput
              style={styles.noteTextInput}
              multiline
              value={catatan}
              onChangeText={setCatatan}
              placeholder="Tulis catatan pengerjaan untuk klien..."
              placeholderTextColor="#64748B"
              textAlignVertical="top"
            />
          </View>
        </View>
      </ScrollView>

      {/* ==================== BOTTOM BAR ==================== */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.85}
          onPress={handleSubmitReview}>
          <Text style={styles.submitButtonIcon}>▷</Text>
          <Text style={styles.submitButtonText}>Kirim untuk Ditinjau</Text>
        </TouchableOpacity>

        <Text style={styles.bottomHelperText}>
          🔔 Klien akan menerima notifikasi instan via POLAR Chat & Email
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // TOP BAR FORM
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

  // CARD SECTION FORM
  cardSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 14,
  },
  cardHeaderIcon: {
    fontSize: 15,
    color: '#1D4E6E',
  },
  cardHeaderTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14.5,
    color: '#0F172A',
  },

  // DROPZONE
  uploadDropzone: {
    backgroundColor: '#EDF5FC',
    borderRadius: 14,
    paddingVertical: 22,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  cloudCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#9ED2F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cloudIcon: {
    fontSize: 20,
    color: '#0F2942',
  },
  dropzoneTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
    marginBottom: 4,
  },
  dropzoneSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 12,
  },
  browsePill: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DCE9F5',
  },
  browsePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#0F2942',
  },

  // BERKAS TERLAMPIR
  attachedLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#475569',
    marginBottom: 10,
  },
  attachedFileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    gap: 12,
  },
  fileIconPdf: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#FEE2E2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileIconZip: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileEmoji: {
    fontSize: 16,
  },
  fileMeta: {
    flex: 1,
  },
  fileName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  fileSubRow: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  readyText: {
    fontFamily: 'Inter-SemiBold',
    color: '#286184',
  },
  removeBtn: {
    padding: 6,
  },
  removeIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#64748B',
  },

  // CATATAN UNTUK KLIEN
  noteInputBox: {
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    padding: 12,
    minHeight: 115,
  },
  noteTextInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#1E293B',
    lineHeight: 19,
    padding: 0,
  },

  // BOTTOM BAR FORM
  bottomBar: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 14,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#05263B',
    borderRadius: 12,
    paddingVertical: 14,
    gap: 8,
  },
  submitButtonIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  submitButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  bottomHelperText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#475569',
    textAlign: 'center',
    marginTop: 8,
  },

  // ==================== SUBMISSION SUCCESS STYLES ====================
  successTopBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 14,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  closeBtn: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontFamily: 'Inter-Medium',
    fontSize: 18,
    color: '#0F172A',
  },
  successTopBarTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#0F172A',
  },
  successScrollContent: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 32,
    alignItems: 'center',
  },

  // HERO CHECK ICON
  heroIconWrapper: {
    marginBottom: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerRing: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#EEF6FC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  middleRing: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: '#DCEBF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerNavyCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mintCheckRing: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 2,
    borderColor: '#99F6E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mintCheckText: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#99F6E4',
  },
  floatingMintDot: {
    position: 'absolute',
    top: 8,
    right: 10,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#81E6D9',
  },

  // STATUS BLUE PILL
  statusBluePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E2EDF7',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
    marginBottom: 12,
  },
  statusBlueDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#286184',
  },
  statusBluePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#1D4E6E',
  },

  successHeading: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 8,
  },
  successSubheading: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 19,
    marginBottom: 20,
  },

  // MITRA CARD
  mitraCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
    gap: 10,
  },
  mitraLogoBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  mitraLogoImg: {
    width: '100%',
    height: '100%',
  },
  mitraMeta: {
    flex: 1,
  },
  mitraNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  mitraName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
    flexShrink: 1,
  },
  verifiedBadge: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#286184',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 9,
    color: '#FFFFFF',
  },
  mitraSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },
  uatPill: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  uatPillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10.5,
    color: '#1D4E6E',
  },

  // SUMMARY CARD
  summaryCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  summaryHeaderBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EDF5FC',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 9,
    marginBottom: 14,
  },
  summaryHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  summaryHeaderIcon: {
    fontSize: 13,
  },
  summaryHeaderTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
  },
  summaryIdText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryRowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  summaryLabel: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748B',
  },
  summaryValueBold: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
    textAlign: 'right',
  },
  timeRightCol: {
    alignItems: 'flex-end',
  },
  summaryDivider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 12,
  },
  summaryFileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  fileCountBlue: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#286184',
  },
  fileBadgePill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDF5FC',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    marginBottom: 8,
  },
  fileBadgeIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  fileBadgeName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11.5,
    color: '#0F172A',
  },
  fileBadgeSize: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },

  // REVIEW WINDOW CARD
  reviewWindowCard: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#E8F2FC',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#D4E6F7',
    marginBottom: 20,
    gap: 12,
  },
  hourglassCircle: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#D6E8F8',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  hourglassIcon: {
    fontSize: 15,
  },
  reviewWindowContent: {
    flex: 1,
  },
  reviewWindowTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6,
    marginBottom: 6,
  },
  reviewWindowTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
    flexShrink: 1,
  },
  durationBadge: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  durationBadgeText: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#286184',
  },
  reviewWindowDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#334155',
    lineHeight: 17.5,
  },
  reviewWindowBold: {
    fontFamily: 'Inter-Bold',
    color: '#0F172A',
  },

  // ACTION BUTTONS
  primaryBackDetailBtn: {
    width: '100%',
    backgroundColor: '#05263B',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  primaryBackDetailText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
  secondaryChatBtn: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDF5FC',
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#D6E6F4',
    gap: 8,
  },
  secondaryChatIcon: {
    fontSize: 15,
  },
  secondaryChatText: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F2942',
  },
});