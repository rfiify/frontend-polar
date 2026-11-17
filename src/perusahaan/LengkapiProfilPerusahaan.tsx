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
} from 'react-native';

import {
  pick,
  types,
  isCancel,
} from '@react-native-documents/picker';

const LengkapiProfilPerusahaan = ({navigation, route}: any) => {
  const emailTerdaftar =
    route?.params?.email || 'kontak@perusahaan.com';

  // ============================================================
  // FORM
  // ============================================================

  const [namaPerusahaan, setNamaPerusahaan] = useState('');
  const [jenisPerusahaan, setJenisPerusahaan] = useState('');
  const [bidangUsaha, setBidangUsaha] = useState('');
  const [alamat, setAlamat] = useState('');
  const [telepon, setTelepon] = useState('');
  const [website, setWebsite] = useState('');

  // ============================================================
  // DOKUMEN
  // ============================================================

  const [dokumenUtama, setDokumenUtama] = useState<any>(null);
  const [dokumenPendukung, setDokumenPendukung] =
    useState<any>(null);

  // ============================================================
  // PILIH JENIS PERUSAHAAN
  // ============================================================

  const handlePilihJenis = () => {
    Alert.alert(
      'Jenis Perusahaan',
      'Pilih jenis badan usaha',
      [
        {
          text: 'PT',
          onPress: () =>
            setJenisPerusahaan(
              'PT (Perseroan Terbatas)',
            ),
        },
        {
          text: 'CV',
          onPress: () =>
            setJenisPerusahaan(
              'CV (Commanditaire Vennootschap)',
            ),
        },
        {
          text: 'Firma',
          onPress: () =>
            setJenisPerusahaan('Firma'),
        },
        {
          text: 'Yayasan',
          onPress: () =>
            setJenisPerusahaan('Yayasan'),
        },
        {
          text: 'Batal',
          style: 'cancel',
        },
      ],
    );
  };

  // ============================================================
  // CEK FILE
  // ============================================================

  const isFileAllowed = (file: any) => {
    const mimeType = (file?.type || '').toLowerCase();
    const fileName = (file?.name || '').toLowerCase();

    const allowedMimeTypes = [
      'application/pdf',
      'image/jpeg',
      'image/jpg',
      'image/png',
    ];

    const allowedExtensions = [
      '.pdf',
      '.jpg',
      '.jpeg',
      '.png',
    ];

    const validMime =
      allowedMimeTypes.includes(mimeType);

    const validExtension =
      allowedExtensions.some(extension =>
        fileName.endsWith(extension),
      );

    return validMime || validExtension;
  };

  // ============================================================
  // CEK UKURAN FILE
  // ============================================================

  const isFileSizeAllowed = (file: any) => {
    if (!file?.size) {
      return true;
    }

    const maxSize = 5 * 1024 * 1024;

    return file.size <= maxSize;
  };

  // ============================================================
  // FORMAT UKURAN FILE
  // ============================================================

  const formatFileSize = (size?: number) => {
    if (!size) {
      return '';
    }

    if (size < 1024) {
      return `${size} B`;
    }

    if (size < 1024 * 1024) {
      return `${(size / 1024).toFixed(1)} KB`;
    }

    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  };

  // ============================================================
  // PILIH DOKUMEN LEGALITAS UTAMA
  // ============================================================

  const handleUploadUtama = async () => {
    try {
      const results = await pick({
        type: [
          types.pdf,
          types.images,
        ],
        copyTo: 'cachesDirectory',
      });

      const result = results?.[0];

      if (!result) {
        return;
      }

      if (!isFileAllowed(result)) {
        Alert.alert(
          'Format Tidak Didukung',
          'Silakan pilih file PDF, JPG, JPEG, atau PNG.',
        );
        return;
      }

      if (!isFileSizeAllowed(result)) {
        Alert.alert(
          'Ukuran File Terlalu Besar',
          'Ukuran dokumen maksimal adalah 5MB.',
        );
        return;
      }

      setDokumenUtama(result);
    } catch (error) {
      if (isCancel(error)) {
        return;
      }

      console.error(
        'ERROR PILIH DOKUMEN UTAMA:',
        error,
      );

      Alert.alert(
        'Gagal Memilih File',
        'Dokumen tidak dapat dipilih. Silakan coba lagi.',
      );
    }
  };

  // ============================================================
  // PILIH DOKUMEN PENDUKUNG
  // ============================================================

  const handleUploadPendukung = async () => {
    try {
      const results = await pick({
        type: [
          types.pdf,
          types.images,
        ],
        copyTo: 'cachesDirectory',
      });

      const result = results?.[0];

      if (!result) {
        return;
      }

      if (!isFileAllowed(result)) {
        Alert.alert(
          'Format Tidak Didukung',
          'Silakan pilih file PDF, JPG, JPEG, atau PNG.',
        );
        return;
      }

      if (!isFileSizeAllowed(result)) {
        Alert.alert(
          'Ukuran File Terlalu Besar',
          'Ukuran dokumen maksimal adalah 5MB.',
        );
        return;
      }

      setDokumenPendukung(result);
    } catch (error) {
      if (isCancel(error)) {
        return;
      }

      console.error(
        'ERROR PILIH DOKUMEN PENDUKUNG:',
        error,
      );

      Alert.alert(
        'Gagal Memilih File',
        'Dokumen tidak dapat dipilih. Silakan coba lagi.',
      );
    }
  };

  // ============================================================
  // HAPUS DOKUMEN UTAMA
  // ============================================================

  const handleHapusDokumenUtama = () => {
    Alert.alert(
      'Hapus Dokumen',
      'Yakin ingin menghapus dokumen legalitas yang dipilih?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () =>
            setDokumenUtama(null),
        },
      ],
    );
  };

  // ============================================================
  // HAPUS DOKUMEN PENDUKUNG
  // ============================================================

  const handleHapusDokumenPendukung = () => {
    Alert.alert(
      'Hapus Dokumen',
      'Yakin ingin menghapus dokumen pendukung yang dipilih?',
      [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () =>
            setDokumenPendukung(null),
        },
      ],
    );
  };

  // ============================================================
  // KIRIM VERIFIKASI
  // ============================================================

  const handleKirim = () => {
    if (!namaPerusahaan.trim()) {
      Alert.alert(
        'Data Belum Lengkap',
        'Silakan masukkan nama perusahaan.',
      );
      return;
    }

    if (!jenisPerusahaan.trim()) {
      Alert.alert(
        'Data Belum Lengkap',
        'Silakan pilih jenis perusahaan.',
      );
      return;
    }

    if (!bidangUsaha.trim()) {
      Alert.alert(
        'Data Belum Lengkap',
        'Silakan masukkan bidang usaha.',
      );
      return;
    }

    if (!alamat.trim()) {
      Alert.alert(
        'Data Belum Lengkap',
        'Silakan masukkan alamat perusahaan.',
      );
      return;
    }

    if (!telepon.trim()) {
      Alert.alert(
        'Data Belum Lengkap',
        'Silakan masukkan nomor telepon perusahaan.',
      );
      return;
    }

    if (!dokumenUtama) {
      Alert.alert(
        'Dokumen Belum Ada',
        'Silakan unggah dokumen legalitas utama.',
      );
      return;
    }

    Alert.alert(
      'Berhasil Dikirim',
      'Profil perusahaan berhasil dikirim untuk proses verifikasi Admin POLAR.',
    );
  };

  // ============================================================
  // UI
  // ============================================================

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFFFFF"
        translucent={false}
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : undefined
        }>

        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={
            styles.scrollContent
          }
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">

          {/* =====================================================
              HEADER
          ===================================================== */}

          <View style={styles.header}>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() =>
                navigation.goBack()
              }
              activeOpacity={0.7}>

              <Text style={styles.backArrow}>
                ←
              </Text>

            </TouchableOpacity>

            <View style={styles.logoRow}>

              <View style={styles.logoBox}>
                <Text style={styles.logoP}>
                  P
                </Text>
              </View>

              <Text style={styles.logoText}>
                POLAR
              </Text>

            </View>

          </View>

          {/* =====================================================
              JUDUL
          ===================================================== */}

          <View style={styles.pageIntro}>

            <Text style={styles.pageTitle}>
              Lengkapi Profil Perusahaan
            </Text>

            <Text style={styles.pageSubtitle}>
              Lengkapi informasi dan dokumen perusahaan untuk
              proses verifikasi Admin POLAR.
            </Text>

          </View>

          {/* =====================================================
              INFORMASI PERUSAHAAN
          ===================================================== */}

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              Informasi Perusahaan
            </Text>

            <Text style={styles.cardDescription}>
              Masukkan informasi dasar mengenai perusahaan Anda.
            </Text>

            {/* NAMA PERUSAHAAN */}

            <Text style={styles.label}>
              Nama Perusahaan{' '}
              <Text style={styles.required}>
                *
              </Text>
            </Text>

            <TextInput
              value={namaPerusahaan}
              onChangeText={setNamaPerusahaan}
              placeholder="Masukkan nama resmi perusahaan"
              placeholderTextColor="#7D8793"
              style={styles.input}
            />

            {/* JENIS PERUSAHAAN */}

            <Text style={styles.label}>
              Jenis Perusahaan{' '}
              <Text style={styles.required}>
                *
              </Text>
            </Text>

            <TouchableOpacity
              style={styles.selectInput}
              onPress={handlePilihJenis}
              activeOpacity={0.8}>

              <Text
                style={[
                  styles.selectText,
                  !jenisPerusahaan &&
                    styles.placeholderText,
                ]}>

                {jenisPerusahaan ||
                  'Pilih jenis badan usaha'}

              </Text>

              <Text style={styles.chevron}>
                ⌄
              </Text>

            </TouchableOpacity>

            {/* BIDANG USAHA */}

            <Text style={styles.label}>
              Bidang Usaha{' '}
              <Text style={styles.required}>
                *
              </Text>
            </Text>

            <TextInput
              value={bidangUsaha}
              onChangeText={setBidangUsaha}
              placeholder="Contoh: Teknologi Informasi, Agrikultur"
              placeholderTextColor="#7D8793"
              style={styles.input}
            />

            {/* ALAMAT */}

            <Text style={styles.label}>
              Alamat Perusahaan{' '}
              <Text style={styles.required}>
                *
              </Text>
            </Text>

            <TextInput
              value={alamat}
              onChangeText={setAlamat}
              placeholder="Masukkan alamat lengkap operasional atau kantor pusat"
              placeholderTextColor="#7D8793"
              multiline
              textAlignVertical="top"
              style={[
                styles.input,
                styles.addressInput,
              ]}
            />

            {/* TELEPON */}

            <Text style={styles.label}>
              Nomor Telepon Perusahaan{' '}
              <Text style={styles.required}>
                *
              </Text>
            </Text>

            <View style={styles.phoneInput}>

              <Text style={styles.countryCode}>
                +62
              </Text>

              <TextInput
                value={telepon}
                onChangeText={setTelepon}
                placeholder="812-3456-7890 / (021) 555-0123"
                placeholderTextColor="#7D8793"
                keyboardType="phone-pad"
                style={styles.phoneTextInput}
              />

            </View>

            {/* EMAIL */}

            <View style={styles.labelRow}>

              <Text style={styles.labelNoMargin}>
                Email Perusahaan
              </Text>

              <View style={styles.registeredBadge}>

                <Text style={styles.registeredText}>
                  Terdaftar
                </Text>

              </View>

            </View>

            <View style={styles.emailInput}>

              <TextInput
                value={emailTerdaftar}
                editable={false}
                style={styles.emailTextInput}
              />

              <View style={styles.lockIcon}>
                <Text style={styles.lockText}>
                  ▣
                </Text>
              </View>

            </View>

            <Text style={styles.helperText}>
              Email akun yang didaftarkan pada tahap awal.
            </Text>

            {/* WEBSITE */}

            <View style={styles.websiteLabelRow}>

              <Text style={styles.labelNoMargin}>
                Website Perusahaan
              </Text>

              <Text style={styles.optionalText}>
                (Opsional)
              </Text>

            </View>

            <TextInput
              value={website}
              onChangeText={setWebsite}
              placeholder="https://www.perusahaan.com"
              placeholderTextColor="#7D8793"
              keyboardType="url"
              autoCapitalize="none"
              style={styles.input}
            />

          </View>

          {/* =====================================================
              DOKUMEN LEGALITAS
          ===================================================== */}

          <View style={styles.card}>

            <Text style={styles.cardTitle}>
              Dokumen Legalitas
            </Text>

            <Text style={styles.cardDescription}>
              Unggah dokumen resmi sebagai bukti identitas dan
              legalitas perusahaan.
            </Text>

            {/* DOKUMEN UTAMA */}

            <View style={styles.documentTitleRow}>

              <Text style={styles.documentLabel}>
                Dokumen Legalitas Utama{' '}
                <Text style={styles.required}>
                  *
                </Text>
              </Text>

              <Text style={styles.documentExamples}>
                NIB / Akta / NPWP / SIUP
              </Text>

            </View>

            <TouchableOpacity
              style={[
                styles.uploadMain,
                dokumenUtama &&
                  styles.uploadSelected,
              ]}
              onPress={handleUploadUtama}
              activeOpacity={0.8}>

              {dokumenUtama ? (
                <>
                  <View
                    style={
                      styles.fileIconCircle
                    }>
                    <Text style={styles.fileIcon}>
                      ✓
                    </Text>
                  </View>

                  <Text
                    style={
                      styles.selectedFileTitle
                    }
                    numberOfLines={1}>

                    {dokumenUtama.name ||
                      'Dokumen dipilih'}

                  </Text>

                  <Text
                    style={
                      styles.selectedFileSubtitle
                    }>

                    {formatFileSize(
                      dokumenUtama.size,
                    ) ||
                      'File berhasil dipilih'}{' '}
                    • Ketuk untuk mengganti

                  </Text>
                </>
              ) : (
                <>
                  <View
                    style={
                      styles.uploadIconCircle
                    }>

                    <Text
                      style={
                        styles.uploadIcon
                      }>
                      ⇧
                    </Text>

                  </View>

                  <Text
                    style={
                      styles.uploadTitle
                    }>
                    Unggah Dokumen Legalitas
                  </Text>

                  <Text
                    style={
                      styles.uploadSubtitle
                    }>
                    Format PDF, JPG, atau PNG (Maks. 5MB)
                  </Text>
                </>
              )}

            </TouchableOpacity>

            {/* HAPUS DOKUMEN UTAMA */}

            {dokumenUtama && (
              <TouchableOpacity
                style={
                  styles.removeButton
                }
                onPress={
                  handleHapusDokumenUtama
                }
                activeOpacity={0.7}>

                <Text
                  style={
                    styles.removeButtonText
                  }>
                  Hapus dokumen
                </Text>

              </TouchableOpacity>
            )}

            {/* DOKUMEN PENDUKUNG */}

            <View
              style={
                styles.supportTitleRow
              }>

              <Text
                style={
                  styles.supportLabel
                }>
                Dokumen{'\n'}Pendukung
              </Text>

              <Text
                style={
                  styles.supportExamples
                }>
                Surat Kuasa / SK /{'\n'}Portofolio
              </Text>

            </View>

            <TouchableOpacity
              style={[
                styles.uploadSupport,
                dokumenPendukung &&
                  styles.uploadSelected,
              ]}
              onPress={
                handleUploadPendukung
              }
              activeOpacity={0.8}>

              <View
                style={
                  styles.supportIconBox
                }>

                <Text
                  style={
                    styles.supportIcon
                  }>

                  {dokumenPendukung
                    ? '✓'
                    : '□+'}

                </Text>

              </View>

              <View
                style={
                  styles.supportTextContainer
                }>

                <Text
                  style={
                    styles.supportUploadTitle
                  }
                  numberOfLines={1}>

                  {dokumenPendukung
                    ? dokumenPendukung.name
                    : 'Unggah Dokumen Pendukung'}

                </Text>

                <Text
                  style={
                    styles.supportUploadSubtitle
                  }>

                  {dokumenPendukung
                    ? `${formatFileSize(
                        dokumenPendukung.size,
                      ) || 'File dipilih'} • Ketuk untuk mengganti`
                    : 'Opsional • PDF, JPG, PNG (Maks. 5MB)'}

                </Text>

              </View>

            </TouchableOpacity>

            {/* HAPUS DOKUMEN PENDUKUNG */}

            {dokumenPendukung && (
              <TouchableOpacity
                style={
                  styles.removeSupportButton
                }
                onPress={
                  handleHapusDokumenPendukung
                }
                activeOpacity={0.7}>

                <Text
                  style={
                    styles.removeButtonText
                  }>
                  Hapus dokumen pendukung
                </Text>

              </TouchableOpacity>
            )}

            {/* CATATAN */}

            <View
              style={
                styles.warningBox
              }>

              <Text
                style={
                  styles.warningIcon
                }>
                ✓
              </Text>

              <Text
                style={
                  styles.warningText
                }>
                Pastikan dokumen yang diunggah terbaca
                dengan jelas, masih dalam masa berlaku, dan
                nama tertera identik dengan profil badan usaha.
              </Text>

            </View>

          </View>

          {/* =====================================================
              INFORMASI VERIFIKASI
          ===================================================== */}

          <View style={styles.infoBox}>

            <View style={styles.infoHeader}>

              <View
                style={
                  styles.infoIconCircle
                }>

                <Text
                  style={
                    styles.infoIcon
                  }>
                  i
                </Text>

              </View>

              <Text style={styles.infoTitle}>
                Informasi Verifikasi
              </Text>

            </View>

            <Text style={styles.infoText}>
              Setelah seluruh data dan dokumen dikirim, Admin
              POLAR akan melakukan pemeriksaan keabsahan.
              Anda akan menerima pemberitahuan melalui email
              setelah hasil verifikasi tersedia (maksimal 1-2 hari
              kerja).
            </Text>

          </View>

          {/* =====================================================
              SUBMIT
          ===================================================== */}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleKirim}
            activeOpacity={0.85}>

            <Text style={styles.submitText}>
              Kirim untuk Verifikasi
            </Text>

            <Text style={styles.submitArrow}>
              →
            </Text>

          </TouchableOpacity>

          <Text
            style={
              styles.bottomDisclaimer
            }>
            Dengan menekan tombol di atas, Anda menyatakan bahwa
            data yang diisi adalah benar dan dapat
            dipertanggungjawabkan.
          </Text>

          <View
            style={
              styles.bottomSpace
            }
          />

        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LengkapiProfilPerusahaan;

// ================================================================
// STYLES
// ================================================================

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F4F8FC',
  },

  keyboardView: {
    flex: 1,
  },

  scrollView: {
    flex: 1,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  // ============================================================
  // HEADER
  // ============================================================

  header: {
    height: 105,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8EE',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingTop: 30,
  },

  backButton: {
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },

  backArrow: {
    color: '#062D47',
    fontSize: 34,
    fontWeight: '600',
    lineHeight: 38,
  },

  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 43,
    height: 43,
    borderRadius: 10,
    backgroundColor: '#0A3D5C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  logoP: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
  },

  logoText: {
    color: '#062D47',
    fontSize: 23,
    fontWeight: '800',
    letterSpacing: 0.3,
  },

  // ============================================================
  // INTRO
  // ============================================================

  pageIntro: {
    paddingHorizontal: 47,
    paddingTop: 25,
    paddingBottom: 17,
  },

  pageTitle: {
    color: '#062D47',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
    marginBottom: 6,
  },

  pageSubtitle: {
    color: '#4E5660',
    fontSize: 17,
    lineHeight: 25,
  },

  // ============================================================
  // CARD
  // ============================================================

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 36,
    marginBottom: 20,
    paddingHorizontal: 21,
    paddingTop: 23,
    paddingBottom: 22,
  },

  cardTitle: {
    color: '#062D47',
    fontSize: 22,
    fontWeight: '800',
    lineHeight: 28,
  },

  cardDescription: {
    color: '#505861',
    fontSize: 16,
    lineHeight: 22,
    marginTop: 2,
    marginBottom: 18,
  },

  // ============================================================
  // FORM
  // ============================================================

  label: {
    color: '#122B3D',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    marginTop: 14,
  },

  labelNoMargin: {
    color: '#122B3D',
    fontSize: 18,
    fontWeight: '700',
  },

  required: {
    color: '#C52D2D',
  },

  input: {
    height: 64,
    backgroundColor: '#EAF3FD',
    borderRadius: 15,
    paddingHorizontal: 18,
    color: '#172F42',
    fontSize: 17,
  },

  addressInput: {
    height: 118,
    paddingTop: 16,
    paddingBottom: 16,
    lineHeight: 24,
  },

  selectInput: {
    height: 64,
    backgroundColor: '#EAF3FD',
    borderRadius: 15,
    paddingHorizontal: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  selectText: {
    color: '#172F42',
    fontSize: 17,
    flex: 1,
  },

  placeholderText: {
    color: '#7D8793',
  },

  chevron: {
    color: '#44515C',
    fontSize: 27,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: -7,
  },

  phoneInput: {
    height: 64,
    backgroundColor: '#EAF3FD',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  countryCode: {
    color: '#343D45',
    fontSize: 17,
    fontWeight: '600',
    marginRight: 13,
  },

  phoneTextInput: {
    flex: 1,
    height: 64,
    color: '#172F42',
    fontSize: 17,
  },

  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
    marginBottom: 8,
  },

  registeredBadge: {
    backgroundColor: '#CDE8FF',
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },

  registeredText: {
    color: '#4D5B66',
    fontSize: 14,
    fontWeight: '700',
  },

  emailInput: {
    height: 64,
    backgroundColor: '#DCECFB',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 18,
    paddingRight: 16,
  },

  emailTextInput: {
    flex: 1,
    color: '#4B5661',
    fontSize: 17,
  },

  lockIcon: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  lockText: {
    color: '#4C5963',
    fontSize: 21,
  },

  helperText: {
    color: '#5B636B',
    fontSize: 15,
    lineHeight: 21,
    marginTop: 7,
  },

  websiteLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 8,
  },

  optionalText: {
    color: '#555E66',
    fontSize: 15,
    marginLeft: 5,
  },

  // ============================================================
  // DOCUMENT
  // ============================================================

  documentTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 2,
    marginBottom: 10,
  },

  documentLabel: {
    color: '#122B3D',
    fontSize: 18,
    fontWeight: '700',
  },

  documentExamples: {
    color: '#28658D',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
  },

  uploadMain: {
    height: 158,
    backgroundColor: '#EAF3FD',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  uploadSelected: {
    backgroundColor: '#DDEFFF',
  },

  uploadIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#A9D9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  uploadIcon: {
    color: '#2C658C',
    fontSize: 29,
    fontWeight: '800',
  },

  fileIconCircle: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#A9D9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  fileIcon: {
    color: '#28658D',
    fontSize: 28,
    fontWeight: '900',
  },

  uploadTitle: {
    color: '#062D47',
    fontSize: 19,
    fontWeight: '800',
  },

  uploadSubtitle: {
    color: '#535D66',
    fontSize: 16,
    marginTop: 4,
  },

  selectedFileTitle: {
    color: '#062D47',
    fontSize: 17,
    fontWeight: '800',
    maxWidth: '90%',
  },

  selectedFileSubtitle: {
    color: '#535D66',
    fontSize: 14,
    marginTop: 5,
  },

  removeButton: {
    alignSelf: 'center',
    marginTop: 8,
    paddingVertical: 4,
  },

  removeSupportButton: {
    alignSelf: 'flex-end',
    marginTop: 7,
    paddingVertical: 3,
    paddingHorizontal: 4,
  },

  removeButtonText: {
    color: '#B52D2D',
    fontSize: 14,
    fontWeight: '700',
  },

  supportTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 22,
    marginBottom: 9,
    paddingHorizontal: 7,
  },

  supportLabel: {
    color: '#122B3D',
    fontSize: 18,
    fontWeight: '700',
    lineHeight: 25,
  },

  supportExamples: {
    color: '#4F565E',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 21,
    textAlign: 'right',
  },

  uploadSupport: {
    minHeight: 84,
    backgroundColor: '#E5F2FF',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },

  supportIconBox: {
    width: 49,
    height: 49,
    borderRadius: 13,
    backgroundColor: '#D0E8FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  supportIcon: {
    color: '#28658D',
    fontSize: 25,
    fontWeight: '700',
  },

  supportTextContainer: {
    flex: 1,
  },

  supportUploadTitle: {
    color: '#062D47',
    fontSize: 17,
    fontWeight: '800',
  },

  supportUploadSubtitle: {
    color: '#535D66',
    fontSize: 14,
    marginTop: 2,
  },

  warningBox: {
    backgroundColor: '#DDEFFF',
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  warningIcon: {
    color: '#28658D',
    fontSize: 21,
    fontWeight: '800',
    marginRight: 11,
    marginTop: 1,
  },

  warningText: {
    flex: 1,
    color: '#4D5963',
    fontSize: 15,
    lineHeight: 23,
  },

  // ============================================================
  // INFO VERIFIKASI
  // ============================================================

  infoBox: {
    marginHorizontal: 42,
    backgroundColor: '#D7ECFF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginBottom: 25,
  },

  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  infoIconCircle: {
    width: 31,
    height: 31,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#2B678E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  infoIcon: {
    color: '#2B678E',
    fontSize: 19,
    fontWeight: '800',
  },

  infoTitle: {
    color: '#062D47',
    fontSize: 19,
    fontWeight: '800',
  },

  infoText: {
    color: '#4D5963',
    fontSize: 16,
    lineHeight: 25,
    paddingLeft: 43,
  },

  // ============================================================
  // SUBMIT
  // ============================================================

  submitButton: {
    height: 64,
    marginHorizontal: 42,
    backgroundColor: '#003B59',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },

  submitArrow: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '900',
    marginLeft: 12,
  },

  bottomDisclaimer: {
    color: '#555E66',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    paddingHorizontal: 55,
  },

  bottomSpace: {
    height: 35,
  },

});