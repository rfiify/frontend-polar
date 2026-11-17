import React, {useState} from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';

import {
  pick,
  types,
  isCancel,
} from '@react-native-documents/picker';

// Recognizable Bold Arrow Component
const BoldArrow = ({ direction = 'left', color = '#062D47', size = 20 }: { direction?: 'left' | 'right', color?: string, size?: number }) => {
  const isRight = direction === 'right';
  const thickness = size * 0.12;
  const headSize = size * 0.42;

  return (
    <View style={{
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      transform: [{ rotate: isRight ? '180deg' : '0deg' }]
    }}>
      <View style={{
        width: size * 0.75,
        height: thickness,
        backgroundColor: color,
        borderRadius: thickness / 2,
        position: 'absolute',
      }} />
      <View style={{
        position: 'absolute',
        left: size * 0.08,
        width: headSize,
        height: headSize,
        borderTopWidth: thickness,
        borderLeftWidth: thickness,
        borderColor: color,
        transform: [{ rotate: '-45deg' }],
        borderTopLeftRadius: 1.5
      }} />
    </View>
  );
};

const LengkapiProfilPerusahaan = ({navigation, route}: any) => {
  const emailTerdaftar =
    route?.params?.email || 'hrd@mitrafirdaus.co.id';

  // ============================================================
  // FORM STATE
  // ============================================================

  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [jenisPerusahaan, setJenisPerusahaan] = useState('');
  const [bidangUsaha, setBidangUsaha] = useState('');
  const [alamat, setAlamat] = useState('');
  const [telepon, setTelepon] = useState('');
  const [website, setWebsite] = useState('');

  // ============================================================
  // DOKUMEN STATE
  // ============================================================

  const [dokumenUtama, setDokumenUtama] = useState<any>(null);
  const [dokumenPendukung, setDokumenPendukung] =
    useState<any>(null);

  // ============================================================
  // MODAL STATE
  // ============================================================
  const [showModal, setShowModal] = useState(false);

  // ============================================================
  // HANDLERS
  // ============================================================

  const handlePilihJenis = () => {
    Alert.alert(
      'Jenis Perusahaan',
      'Pilih jenis badan usaha',
      [
        { text: 'PT', onPress: () => setJenisPerusahaan('PT (Perseroan Terbatas)') },
        { text: 'CV', onPress: () => setJenisPerusahaan('CV (Commanditaire Vennootschap)') },
        { text: 'Firma', onPress: () => setJenisPerusahaan('Firma') },
        { text: 'Yayasan', onPress: () => setJenisPerusahaan('Yayasan') },
        { text: 'Batal', style: 'cancel' },
      ],
    );
  };

  const isFileAllowed = (file: any) => {
    const mimeType = (file?.type || '').toLowerCase();
    const fileName = (file?.name || '').toLowerCase();
    const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
    return allowedExtensions.some(ext => fileName.endsWith(ext)) || mimeType.includes('pdf') || mimeType.includes('image');
  };

  const handleUploadUtama = async () => {
    try {
      const results = await pick({ type: [types.pdf, types.images], copyTo: 'cachesDirectory' });
      const result = results?.[0];
      if (!result) return;
      if (!isFileAllowed(result)) {
        Alert.alert('Format Tidak Didukung', 'Pilih file PDF, JPG, JPEG, atau PNG.');
        return;
      }
      if (result.size && result.size > 5 * 1024 * 1024) {
        Alert.alert('Ukuran Terlalu Besar', 'Maksimal 5MB.');
        return;
      }
      setDokumenUtama(result);
    } catch (error) {
      if (!isCancel(error)) Alert.alert('Gagal', 'Terjadi kesalahan saat memilih file.');
    }
  };

  const handleUploadPendukung = async () => {
    try {
      const results = await pick({ type: [types.pdf, types.images], copyTo: 'cachesDirectory' });
      const result = results?.[0];
      if (!result) return;
      if (!isFileAllowed(result)) {
        Alert.alert('Format Tidak Didukung', 'Pilih file PDF, JPG, JPEG, atau PNG.');
        return;
      }
      if (result.size && result.size > 5 * 1024 * 1024) {
        Alert.alert('Ukuran Terlalu Besar', 'Maksimal 5MB.');
        return;
      }
      setDokumenPendukung(result);
    } catch (error) {
      if (!isCancel(error)) Alert.alert('Gagal', 'Terjadi kesalahan saat memilih file.');
    }
  };

  const handleKirim = () => {
    if (!namaPerusahaan.trim() || !jenisPerusahaan || !bidangUsaha.trim() || !alamat.trim() || !telepon.trim() || !dokumenUtama) {
      Alert.alert('Data Belum Lengkap', 'Silakan lengkapi semua data wajib yang bertanda (*).');
      return;
    }
    setShowModal(true);
  };

  const formatFileSize = (size?: number) => {
    if (!size) return '';
    if (size < 1024) return `${size} B`;
    if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoP}>P</Text>
            </View>
            <Text style={styles.logoText}>POLAR</Text>
          </View>
          <TouchableOpacity style={styles.profileCircle}>
            <View style={styles.profileIconInner}>
              <View style={styles.profileHead} />
              <View style={styles.profileBody} />
            </View>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          <View style={styles.pageIntro}>
            <View style={styles.stepBadge}>
               <Text style={styles.stepBadgeText}>🏁 Tahap 2 dari 2: Profil & Legalitas</Text>
            </View>
            <Text style={styles.pageTitle}>Lengkapi Profil Perusahaan</Text>
            <Text style={styles.pageSubtitle}>
              Lengkapi informasi dan dokumen perusahaan untuk proses verifikasi Admin POLAR.
            </Text>
          </View>

          {/* FORM CARD */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Informasi Perusahaan</Text>
            <Text style={styles.cardDescription}>Masukkan informasi dasar mengenai perusahaan Anda.</Text>

            <Text style={styles.label}>Nama Perusahaan <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              value={namaPerusahaan}
              onChangeText={setNamaPerusahaan}
              placeholder="Masukkan nama resmi perusahaan"
              placeholderTextColor="#8A9BAA"
            />

            <Text style={styles.label}>Jenis Perusahaan <Text style={styles.required}>*</Text></Text>
            <TouchableOpacity style={styles.selectInput} onPress={handlePilihJenis}>
              <Text style={[styles.selectText, !jenisPerusahaan && {color: '#8A9BAA'}]}>
                {jenisPerusahaan || 'Pilih jenis badan usaha'}
              </Text>
              <Text style={styles.chevronDown}>▼</Text>
            </TouchableOpacity>

            <Text style={styles.label}>Bidang Usaha <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={styles.input}
              value={bidangUsaha}
              onChangeText={setBidangUsaha}
              placeholder="Contoh: Teknologi Informasi, Agrikultur"
              placeholderTextColor="#8A9BAA"
            />

            <Text style={styles.label}>Alamat Perusahaan <Text style={styles.required}>*</Text></Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={alamat}
              onChangeText={setAlamat}
              placeholder="Masukkan alamat lengkap operasional atau kantor pusat"
              placeholderTextColor="#8A9BAA"
              multiline
            />

            <Text style={styles.label}>Nomor Telepon Perusahaan <Text style={styles.required}>*</Text></Text>
            <View style={styles.inputWrapperPhone}>
               <Text style={styles.countryCode}>+62</Text>
               <TextInput
                style={styles.inputPhone}
                value={telepon}
                onChangeText={setTelepon}
                placeholder="812-3456-7890 / (021) 555-0123"
                placeholderTextColor="#8A9BAA"
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.emailHeaderRow}>
               <Text style={styles.labelNoMargin}>Email Perusahaan</Text>
               <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>Terdaftar</Text>
               </View>
            </View>
            <View style={styles.emailDisplayBox}>
               <Text style={styles.emailText}>{emailTerdaftar}</Text>
               <Text style={styles.lockIconSmall}>🔒</Text>
            </View>
            <Text style={styles.emailHelper}>Email akun yang didaftarkan pada tahap awal.</Text>

            <Text style={styles.label}>Website Perusahaan (Opsional)</Text>
            <TextInput
              style={styles.input}
              value={website}
              onChangeText={setWebsite}
              placeholder="https://www.perusahaan.com"
              placeholderTextColor="#8A9BAA"
              autoCapitalize="none"
            />
          </View>

          {/* LEGALITY CARD */}
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Dokumen Legalitas</Text>
            <Text style={styles.cardDescription}>Unggah dokumen resmi sebagai bukti identitas dan legalitas perusahaan.</Text>

            <View style={styles.docLabelRow}>
               <Text style={styles.labelSmall}>Dokumen Legalitas Utama <Text style={styles.required}>*</Text></Text>
               <Text style={styles.docExample}>NIB / Akta / NPWP / SIUP</Text>
            </View>

            <TouchableOpacity
               style={[styles.uploadBox, dokumenUtama && styles.uploadBoxActive]}
               onPress={handleUploadUtama}
            >
               <View style={styles.uploadIconCircle}>
                  <Text style={styles.uploadIcon}>{dokumenUtama ? '✓' : '↑'}</Text>
               </View>
               <Text style={styles.uploadTitle}>{dokumenUtama ? dokumenUtama.name : 'Unggah Dokumen Legalitas'}</Text>
               <Text style={styles.uploadSubTitle}>
                  {dokumenUtama ? `${formatFileSize(dokumenUtama.size)} • Ganti` : 'Format PDF, JPG, atau PNG (Maks. 5MB)'}
               </Text>
            </TouchableOpacity>

            <View style={styles.docLabelRow}>
               <Text style={styles.labelSmall}>Dokumen Pendukung</Text>
               <Text style={styles.docExample}>Surat Kuasa / SK / Portofolio</Text>
            </View>
            <TouchableOpacity
               style={[styles.uploadBoxSmall, dokumenPendukung && styles.uploadBoxActive]}
               onPress={handleUploadPendukung}
            >
               <View style={styles.uploadIconCircleSmall}>
                  <Text style={styles.uploadIconSmall}>{dokumenPendukung ? '✓' : '+'}</Text>
               </View>
               <View style={{flex:1}}>
                  <Text style={styles.uploadTitleSmall}>{dokumenPendukung ? dokumenPendukung.name : 'Unggah Dokumen Pendukung'}</Text>
                  <Text style={styles.uploadSubTitleSmall}>
                     {dokumenPendukung ? formatFileSize(dokumenPendukung.size) : 'Opsional • PDF, JPG, PNG (Maks. 5MB)'}
                  </Text>
               </View>
            </TouchableOpacity>

            <View style={styles.noteBox}>
               <Text style={styles.noteIcon}>✓</Text>
               <Text style={styles.noteText}>Pastikan dokumen yang diunggah terbaca dengan jelas, masih dalam masa berlaku, dan nama tertera identik dengan profil badan usaha.</Text>
            </View>
          </View>

          {/* VERIFICATION INFO */}
          <View style={styles.verifInfoBox}>
             <View style={styles.verifInfoHeader}>
                <View style={styles.verifInfoIconCircle}>
                   <Text style={styles.verifInfoIcon}>i</Text>
                </View>
                <Text style={styles.verifInfoTitle}>Informasi Verifikasi</Text>
             </View>
             <Text style={styles.verifInfoText}>
               Setelah seluruh data dan dokumen dikirim, Admin POLAR akan melakukan pemeriksaan keabsahan. Anda akan menerima pemberitahuan melalui email setelah hasil verifikasi tersedia (maksimal 1-2 hari kerja).
             </Text>
          </View>

          {/* SUBMIT BUTTON */}
          <TouchableOpacity style={styles.submitBtn} onPress={handleKirim} activeOpacity={0.8}>
             <Text style={styles.submitBtnText}>Kirim untuk Verifikasi</Text>
             <Text style={styles.submitBtnArrow}>→</Text>
          </TouchableOpacity>
          <Text style={styles.disclaimerText}>Dengan menekan tombol di atas, Anda menyatakan bahwa data yang diisi adalah benar dan dapat dipertanggungjawabkan.</Text>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* =====================================================
          VERIFICATION PENDING MODAL
      ===================================================== */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Hourglass Icon */}
            <View style={styles.hourglassWrapper}>
              <View style={styles.hourglassCircleMain}>
                <View style={styles.hourglassIconContainer}>
                  <View style={styles.hourglassTop} />
                  <View style={styles.hourglassBottom} />
                </View>
              </View>
            </View>

            <Text style={styles.modalTitle}>Pengajuan Sedang Diverifikasi</Text>
            <Text style={styles.modalSubtitle}>
              Data profil dan berkas perusahaan Anda sedang ditinjau oleh Admin POLAR Polinela.
            </Text>

            {/* Email Box */}
            <View style={styles.modalEmailCard}>
              <Text style={styles.modalEmailLabel}>
                Hasil verifikasi (Disetujui / Ditolak) akan dikirimkan melalui email:
              </Text>
              <Text style={styles.modalEmailValue}>{emailTerdaftar}</Text>
              <Text style={styles.modalEstimation}>Estimasi peninjauan: 1-2 hari kerja</Text>
            </View>

            {/* Selesai Button */}
            <TouchableOpacity
              style={styles.selesaiButton}
              activeOpacity={0.8}
              onPress={() => {
                setShowModal(false);
                navigation.navigate('RoleSelection');
              }}
            >
              <View style={styles.selesaiBtnContent}>
                <Text style={styles.selesaiButtonText}>Selesai</Text>
                <View style={{ marginLeft: 8 }}>
                  <BoldArrow direction="right" color="#FFFFFF" size={16} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    height: Platform.OS === 'android' ? 64 + (StatusBar.currentHeight || 0) : 100,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 0) : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F8',
  },
  backButton: { paddingRight: 10 },
  backArrow: { fontSize: 28, color: '#062D47', fontWeight: 'bold' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoBox: { width: 34, height: 34, borderRadius: 8, backgroundColor: '#062D47', alignItems: 'center', justifyContent: 'center', marginRight: 10 },
  logoP: { color: '#FFFFFF', fontSize: 20, fontWeight: 'bold' },
  logoText: { color: '#062D47', fontSize: 22, fontWeight: 'bold', letterSpacing: 1 },
  profileCircle: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#062D47', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  profileIconInner: { alignItems: 'center', marginTop: 4 },
  profileHead: { width: 11, height: 11, borderRadius: 5.5, backgroundColor: '#FFF' },
  profileBody: { width: 22, height: 12, borderRadius: 6, backgroundColor: '#FFF', marginTop: 1 },
  scrollContent: { flexGrow: 1, paddingBottom: 40, backgroundColor: '#F8FAFC' },
  pageIntro: { paddingHorizontal: 24, paddingTop: 24, paddingBottom: 16 },
  stepBadge: { alignSelf: 'flex-start', backgroundColor: '#E1EEF6', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 8, marginBottom: 12 },
  stepBadgeText: { color: '#286184', fontSize: 12, fontWeight: 'bold' },
  pageTitle: { fontSize: 24, fontWeight: 'bold', color: '#062D47', marginBottom: 8 },
  pageSubtitle: { fontSize: 14, color: '#596771', lineHeight: 22 },
  card: { marginHorizontal: 20, backgroundColor: '#FFFFFF', borderRadius: 16, padding: 20, marginBottom: 20, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 10, elevation: 2 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#062D47', marginBottom: 4 },
  cardDescription: { fontSize: 14, color: '#8A9BAA', marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#062D47', marginBottom: 8 },
  labelNoMargin: { fontSize: 14, fontWeight: 'bold', color: '#062D47' },
  required: { color: '#C53030' },
  input: { height: 56, backgroundColor: '#F4F8FC', borderRadius: 12, paddingHorizontal: 16, fontSize: 15, color: '#062D47', marginBottom: 16 },
  textArea: { height: 100, paddingTop: 16, textAlignVertical: 'top' },
  selectInput: { height: 56, backgroundColor: '#F4F8FC', borderRadius: 12, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  selectText: { fontSize: 15, color: '#062D47' },
  chevronDown: { fontSize: 12, color: '#8A9BAA' },
  inputWrapperPhone: { height: 56, backgroundColor: '#F4F8FC', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginBottom: 16 },
  countryCode: { fontSize: 15, fontWeight: 'bold', color: '#062D47', marginRight: 12 },
  inputPhone: { flex: 1, fontSize: 15, color: '#062D47' },
  emailHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  verifiedBadge: { backgroundColor: '#E1EEF6', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8 },
  verifiedText: { color: '#286184', fontSize: 11, fontWeight: 'bold' },
  emailDisplayBox: { height: 56, backgroundColor: '#EDF4FB', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 },
  emailText: { flex: 1, fontSize: 15, color: '#596771' },
  lockIconSmall: { fontSize: 16, color: '#8A9BAA' },
  emailHelper: { fontSize: 12, color: '#8A9BAA', marginTop: 6, marginBottom: 16 },
  docLabelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: 10, marginBottom: 8 },
  labelSmall: { fontSize: 14, fontWeight: 'bold', color: '#062D47' },
  docExample: { fontSize: 12, color: '#286184', fontWeight: '500' },
  uploadBox: { height: 140, backgroundColor: '#F4F8FC', borderRadius: 16, borderStyle: 'dashed', borderWidth: 1.5, borderColor: '#D1E2EF', justifyContent: 'center', alignItems: 'center', padding: 20 },
  uploadBoxActive: { backgroundColor: '#E1EEF6', borderColor: '#286184', borderStyle: 'solid' },
  uploadIconCircle: { width: 48, height: 48, borderRadius: 24, backgroundColor: '#D1E2EF', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  uploadIcon: { fontSize: 24, color: '#286184', fontWeight: 'bold' },
  uploadTitle: { fontSize: 15, fontWeight: 'bold', color: '#062D47', textAlign: 'center' },
  uploadSubTitle: { fontSize: 12, color: '#8A9BAA', textAlign: 'center', marginTop: 4 },
  uploadBoxSmall: { height: 70, backgroundColor: '#F4F8FC', borderRadius: 12, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, marginTop: 4 },
  uploadIconCircleSmall: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#D1E2EF', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  uploadIconSmall: { fontSize: 20, color: '#286184', fontWeight: 'bold' },
  uploadTitleSmall: { fontSize: 14, fontWeight: 'bold', color: '#062D47' },
  uploadSubTitleSmall: { fontSize: 11, color: '#8A9BAA', marginTop: 2 },
  noteBox: { flexDirection: 'row', backgroundColor: '#E1EEF6', padding: 12, borderRadius: 12, marginTop: 16 },
  noteIcon: { fontSize: 14, color: '#286184', marginRight: 8, fontWeight: 'bold' },
  noteText: { flex: 1, fontSize: 12, color: '#596771', lineHeight: 18 },
  verifInfoBox: { marginHorizontal: 20, backgroundColor: '#EBF4FA', padding: 16, borderRadius: 16, marginBottom: 24 },
  verifInfoHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  verifInfoIconCircle: { width: 24, height: 24, borderRadius: 12, borderWidth: 1.5, borderColor: '#286184', justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  verifInfoIcon: { color: '#286184', fontSize: 12, fontWeight: 'bold' },
  verifInfoTitle: { fontSize: 15, fontWeight: 'bold', color: '#062D47' },
  verifInfoText: { fontSize: 13, color: '#596771', lineHeight: 20, paddingLeft: 34 },
  submitBtn: { marginHorizontal: 20, height: 56, backgroundColor: '#062D47', borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  submitBtnText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
  submitBtnArrow: { color: '#FFFFFF', fontSize: 24, marginLeft: 12, fontWeight: 'bold' },
  disclaimerText: { fontSize: 12, color: '#8A9BAA', textAlign: 'center', marginHorizontal: 30, lineHeight: 18 },

  // MODAL STYLES
  modalOverlay: { flex: 1, backgroundColor: 'rgba(5, 32, 48, 0.7)', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 24 },
  modalContent: { width: '100%', backgroundColor: '#FFFFFF', borderRadius: 24, paddingVertical: 32, paddingHorizontal: 24, alignItems: 'center', elevation: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 5 }, shadowOpacity: 0.25, shadowRadius: 10 },
  hourglassWrapper: { marginBottom: 20 },
  hourglassCircleMain: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#F1F8FF', justifyContent: 'center', alignItems: 'center' },
  hourglassIconContainer: { width: 22, height: 28, justifyContent: 'space-between', alignItems: 'center' },
  hourglassTop: { width: 0, height: 0, borderLeftWidth: 11, borderRightWidth: 11, borderTopWidth: 13, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderTopColor: '#063452' },
  hourglassBottom: { width: 0, height: 0, borderLeftWidth: 11, borderRightWidth: 11, borderBottomWidth: 13, borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: '#063452' },
  modalTitle: { fontSize: 22, fontWeight: 'bold', color: '#062D47', textAlign: 'center', marginBottom: 12 },
  modalSubtitle: { fontSize: 15, color: '#596771', textAlign: 'center', lineHeight: 22, marginBottom: 24 },
  modalEmailCard: { width: '100%', backgroundColor: '#F4F8FC', borderRadius: 16, padding: 18, alignItems: 'center', marginBottom: 32, borderWidth: 1, borderColor: '#EBF2F7' },
  modalEmailLabel: { fontSize: 13, color: '#596771', textAlign: 'center', marginBottom: 10 },
  modalEmailValue: { fontSize: 17, fontWeight: 'bold', color: '#062D47', marginBottom: 10 },
  modalEstimation: { fontSize: 13, color: '#8A9BAA', fontWeight: '500' },
  selesaiButton: { width: '100%', height: 56, backgroundColor: '#1B3D54', borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  selesaiBtnContent: { flexDirection: 'row', alignItems: 'center' },
  selesaiButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});
export default LengkapiProfilPerusahaan;