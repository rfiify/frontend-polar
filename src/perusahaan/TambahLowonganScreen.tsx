import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  Switch,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

/* =================================================
   ASSETS PERUSAHAAN
   Semua icon/logo dari file PNG
   Folder:
   src/assets/perusahaan/
   ================================================= */

const iconCompany = require('../assets/perusahaan/iconCompany.png');
const iconVerified = require('../assets/perusahaan/iconVerified.png');

const iconClose = require('../assets/iconClose.png');

const iconTech = require('../assets/perusahaan/iconTech.png');
const iconDesign = require('../assets/perusahaan/iconDesign.png');
const iconManufacturing = require('../assets/perusahaan/iconManufacturing.png');
const iconAgriculture = require('../assets/perusahaan/iconAgriculture.png');
const iconFinance = require('../assets/perusahaan/iconFinance.png');

const iconOffline = require('../assets/perusahaan/iconOffline.png');
const iconOnline = require('../assets/perusahaan/iconOnline.png');

const iconLocation = require('../assets/perusahaan/iconLocation.png');
const iconSalary = require('../assets/perusahaan/iconSalary.png');
const iconCalendar = require('../assets/perusahaan/iconCalendar.png');

const iconAdd = require('../assets/perusahaan/iconAdd.png');
const iconTagClose = require('../assets/perusahaan/iconTagClose.png');

const iconPriority = require('../assets/perusahaan/iconPriority.png');

const iconArrow = require('../assets/perusahaan/iconArrow.png');


const TambahLowonganScreen = ({navigation}: any) => {
  const [jobTitle, setJobTitle] = useState(
    'Frontend Web Developer (React / Tailwind)',
  );

  const [selectedCategory, setSelectedCategory] = useState(
    'Teknologi Informasi & Software',
  );

  const [workSystem, setWorkSystem] = useState('Offline');
  const [workLocation, setWorkLocation] = useState('Kantor Perusahaan');

  const [salaryFormat, setSalaryFormat] = useState('min');

  const [location, setLocation] = useState(
    'Bandar Lampung / Jakarta Selatan (Kantor Cabang)',
  );

  const [tagInput, setTagInput] = useState('');

  const [tags, setTags] = useState([
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'Git & GitHub',
    'REST API',
    'Figma Dasar',
  ]);

  const [description, setDescription] = useState(
    'Kami mencari talenta mahasiswa/lulusan baru Polinela yang antusias membangun antarmuka web modern, responsif, dan berkinerja tinggi bersama tim engineering kami.',
  );

  const [requirements, setRequirements] = useState(
    '• Mahasiswa aktif D3 / D4 Teknik Informatika atau Manajemen Informatika Polinela minimal semester 5 atau fresh graduate.\n• Memiliki portofolio mandiri atau tugas kuliah berbasis web application.',
  );

  const [deadline, setDeadline] = useState('30 November 2024');

  const [publishDirectly, setPublishDirectly] = useState(true);

  const categories = [
    {
      name: 'Teknologi Informasi & Software',
      icon: iconTech,
    },
    {
      name: 'Desain & Kreatif',
      icon: iconDesign,
    },
    {
      name: 'Teknik & Manufaktur',
      icon: iconManufacturing,
    },
    {
      name: 'Agribisnis & Pertanian',
      icon: iconAgriculture,
    },
    {
      name: 'Akuntansi & Keuangan',
      icon: iconFinance,
    },
  ];

  const addTag = () => {
    const newTag = tagInput.trim();

    if (!newTag) {
      return;
    }

    if (!tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }

    setTagInput('');
  };

  const removeTag = (tag: string) => {
    setTags(tags.filter(item => item !== tag));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F8FAFD"
        translucent={false}
      />

      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        <View style={styles.container}>

          {/* HEADER */}

          <View style={styles.header}>

            <TouchableOpacity
              style={styles.closeButton}
              activeOpacity={0.7}
              onPress={() => navigation.goBack()}>

              <Image
                source={iconClose}
                style={styles.closeImage}
                resizeMode="contain"
              />

            </TouchableOpacity>

            <Text style={styles.headerTitle}>
              Tambah Lowongan
            </Text>

            <View style={styles.headerSpace} />

          </View>


          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">


            {/* COMPANY CARD */}

            <View style={styles.companyCard}>

              <View style={styles.companyLogo}>

                <Image
                  source={iconCompany}
                  style={styles.companyLogoImage}
                  resizeMode="contain"
                />

              </View>


              <View style={styles.companyInformation}>

                <View style={styles.companyNameRow}>

                  <Text style={styles.companyName}>
                    PT Nusantara Digital Raya
                  </Text>


                  <View style={styles.verifiedBadge}>

                    <Image
                      source={iconVerified}
                      style={styles.verifiedImage}
                      resizeMode="contain"
                    />

                  </View>

                </View>


                <Text style={styles.companyDetail}>
                  Mitra Industri Resmi Polinela • ID: IND
                </Text>

              </View>


              <View style={styles.companyRoleBadge}>

                <Text style={styles.companyRoleText}>
                  Perusahaan
                </Text>

              </View>

            </View>


            <Text style={styles.introduction}>
              Isi formulir berikut untuk mempublikasikan lowongan kerja
              atau magang baru ke talenta mahasiswa vokasi Polinela.
            </Text>


            {/* SECTION A */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="A"
                title="Informasi Dasar Lowongan"
              />


              <Text style={styles.sectionDescription}>
                Identifikasi posisi peran dan kategori vokasi Polinela.
              </Text>


              <FieldLabel required>
                Judul Posisi / Pekerjaan
              </FieldLabel>


              <TextInput
                value={jobTitle}
                onChangeText={setJobTitle}
                style={styles.input}
                placeholder="Masukkan judul posisi"
                placeholderTextColor="#8995A3"
              />


              <Text style={styles.helperText}>
                Gunakan nama posisi yang spesifik dan mudah dipahami
                mahasiswa.
              </Text>


              <FieldLabel required>
                Kategori Lowongan
              </FieldLabel>


              <View style={styles.categoryContainer}>

                {categories.map((category, index) => {

                  const selected =
                    selectedCategory === category.name;

                  return (
                    <TouchableOpacity
                      key={category.name}
                      activeOpacity={0.8}
                      onPress={() =>
                        setSelectedCategory(category.name)
                      }
                      style={[
                        styles.categoryChip,
                        selected &&
                          styles.categoryChipActive,
                        index === 0 &&
                          styles.categoryFull,
                      ]}>

                      <Image
                        source={category.icon}
                        style={[
                          styles.categoryImage,
                          selected &&
                            styles.categoryImageActive,
                        ]}
                        resizeMode="contain"
                      />


                      <Text
                        style={[
                          styles.categoryText,
                          selected &&
                            styles.categoryTextActive,
                        ]}>

                        {category.name}

                      </Text>

                    </TouchableOpacity>
                  );
                })}

              </View>


              <FieldLabel>
                Sistem Kerja
              </FieldLabel>


              <View style={styles.optionRow}>

                <OptionButton
                  image={iconOffline}
                  title="Offline"
                  selected={workSystem === 'Offline'}
                  onPress={() =>
                    setWorkSystem('Offline')
                  }
                />


                <OptionButton
                  image={iconOnline}
                  title="Online"
                  selected={workSystem === 'Online'}
                  onPress={() =>
                    setWorkSystem('Online')
                  }
                />

              </View>

            </View>


            {/* SECTION B */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="B"
                title="Lokasi Penempatan Kerja"
              />


              <OptionButton
                image={iconCompany}
                title="Kantor Perusahaan"
                selected={
                  workLocation ===
                  'Kantor Perusahaan'
                }
                onPress={() =>
                  setWorkLocation(
                    'Kantor Perusahaan',
                  )
                }
              />


              <View style={styles.optionSingle}>

                <OptionButton
                  image={iconOnline}
                  title="Penuh Daring / Remote"
                  selected={
                    workLocation ===
                    'Penuh Daring / Remote'
                  }
                  onPress={() =>
                    setWorkLocation(
                      'Penuh Daring / Remote',
                    )
                  }
                />

              </View>


              <FieldLabel>
                Kota / Alamat Penempatan
              </FieldLabel>


              <View style={styles.inputWithIcon}>

                <Image
                  source={iconLocation}
                  style={styles.inputIconImage}
                  resizeMode="contain"
                />


                <TextInput
                  value={location}
                  onChangeText={setLocation}
                  style={styles.iconInput}
                  placeholder="Masukkan kota / alamat"
                  placeholderTextColor="#8995A3"
                  numberOfLines={1}
                />

              </View>

            </View>


            {/* SECTION C */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="C"
                title="Kompensasi & Fasilitas"
              />


              <FieldLabel>
                Format Kompensasi
              </FieldLabel>


              <View style={styles.salaryFormatRow}>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    setSalaryFormat('min')
                  }
                  style={[
                    styles.salaryFormatButton,
                    salaryFormat === 'min' &&
                      styles.salaryFormatButtonSelected,
                  ]}>

                  <Text
                    style={[
                      styles.radio,
                      salaryFormat === 'min' &&
                        styles.radioSelected,
                    ]}>

                    ●

                  </Text>


                  <Text style={styles.salaryFormatText}>
                    Rentang Gaji (Min)
                  </Text>

                </TouchableOpacity>


                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    setSalaryFormat('max')
                  }
                  style={[
                    styles.salaryFormatButton,
                    salaryFormat === 'max' &&
                      styles.salaryFormatButtonSelected,
                  ]}>

                  <Text
                    style={[
                      styles.radio,
                      salaryFormat === 'max' &&
                        styles.radioSelected,
                    ]}>

                    ○

                  </Text>


                  <Text style={styles.salaryFormatText}>
                    Rentang Gaji (Max)
                  </Text>

                </TouchableOpacity>

              </View>


              <FieldLabel>
                Nominal Gaji / Uang Saku Bulanan
              </FieldLabel>


              <View style={styles.inputWithIcon}>

                <Image
                  source={iconSalary}
                  style={styles.moneyImage}
                  resizeMode="contain"
                />


                <Text style={styles.salaryValue}>
                  Rp 2.500.000 - Rp 3.800.000 / bulan
                </Text>

              </View>

            </View>


            {/* SECTION D */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="D"
                title="Tag yang Dibutuhkan"
              />


              <FieldLabel>
                Tambah Tag Keahlian / Tech Stack
              </FieldLabel>


              <View style={styles.tagInputRow}>

                <TextInput
                  value={tagInput}
                  onChangeText={setTagInput}
                  style={styles.tagInput}
                  placeholder="Ketik keahlian lalu tekan tambah."
                  placeholderTextColor="#A2AAB4"
                  onSubmitEditing={addTag}
                  returnKeyType="done"
                />


                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.addTagButton}
                  onPress={addTag}>

                  <Image
                    source={iconAdd}
                    style={styles.addTagImage}
                    resizeMode="contain"
                  />


                  <Text style={styles.addTagText}>
                    Tambah
                  </Text>

                </TouchableOpacity>

              </View>


              <Text style={styles.selectedTagTitle}>
                Tag Terpilih ({tags.length})
              </Text>


              <View style={styles.tagsContainer}>

                {tags.map(tag => (

                  <View
                    key={tag}
                    style={styles.tagChip}>

                    <Text style={styles.tagText}>
                      {tag}
                    </Text>


                    <TouchableOpacity
                      onPress={() =>
                        removeTag(tag)
                      }
                      activeOpacity={0.7}>

                      <Image
                        source={iconTagClose}
                        style={styles.tagCloseImage}
                        resizeMode="contain"
                      />

                    </TouchableOpacity>

                  </View>

                ))}

              </View>

            </View>


            {/* SECTION E */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="E"
                title="Deskripsi & Persyaratan"
              />


              <FieldLabel required>
                Deskripsi Pekerjaan
              </FieldLabel>


              <TextInput
                value={description}
                onChangeText={setDescription}
                multiline
                textAlignVertical="top"
                style={[
                  styles.textArea,
                  styles.descriptionArea,
                ]}
                placeholder="Tuliskan deskripsi pekerjaan"
                placeholderTextColor="#8995A3"
              />


              <FieldLabel required>
                Persyaratan Mahasiswa / Kualifikasi
              </FieldLabel>


              <TextInput
                value={requirements}
                onChangeText={setRequirements}
                multiline
                textAlignVertical="top"
                style={[
                  styles.textArea,
                  styles.requirementArea,
                ]}
                placeholder="Tuliskan persyaratan mahasiswa"
                placeholderTextColor="#8995A3"
              />

            </View>


            {/* SECTION F */}

            <View style={styles.sectionCard}>

              <SectionHeader
                letter="F"
                title="Pengaturan Publikasi"
              />


              <FieldLabel required>
                Batas Akhir Pendaftaran
              </FieldLabel>


              <View style={styles.inputWithIcon}>

                <Image
                  source={iconCalendar}
                  style={styles.calendarImage}
                  resizeMode="contain"
                />


                <TextInput
                  value={deadline}
                  onChangeText={setDeadline}
                  style={styles.iconInput}
                  placeholder="DD MMMM YYYY"
                  placeholderTextColor="#8995A3"
                />

              </View>


              <View style={styles.publishSetting}>

                <View style={styles.publishSettingText}>

                  <Text style={styles.publishTitle}>
                    Langsung Publikasikan ke Portal
                    Mahasiswa
                  </Text>


                  <Text style={styles.publishSubtitle}>
                    Lowongan akan segera tayang
                  </Text>

                </View>


                <Switch
                  value={publishDirectly}
                  onValueChange={setPublishDirectly}
                  trackColor={{
                    false: '#C7D4E1',
                    true: '#063C59',
                  }}
                  thumbColor="#FFFFFF"
                  ios_backgroundColor="#C7D4E1"
                />

              </View>


              <View style={styles.priorityInfo}>

                <Image
                  source={iconPriority}
                  style={styles.priorityImage}
                  resizeMode="contain"
                />


                <Text style={styles.priorityText}>
                  Lowongan dari Mitra Terverifikasi akan otomatis
                  mendapat lencana prioritas kurikulum POLAR
                </Text>

              </View>

            </View>


            <View style={styles.bottomSpace} />


            {/* BOTTOM ACTION */}

            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.publishButton}
              onPress={() =>
                navigation.navigate(
                  'LowonganBerhasil',
                )
              }>

              <Text style={styles.publishButtonText}>
                Publikasikan{'\n'}Lowongan
              </Text>


              <Image
                source={iconArrow}
                style={styles.publishArrowImage}
                resizeMode="contain"
              />

            </TouchableOpacity>


            <View style={styles.afterPublishSpace} />

          </ScrollView>

        </View>

      </KeyboardAvoidingView>

    </SafeAreaView>
  );
};


/* =================================================
   SECTION HEADER
   ================================================= */

const SectionHeader = ({
  letter,
  title,
}: {
  letter: string;
  title: string;
}) => {
  return (
    <View style={styles.sectionHeader}>

      <View style={styles.sectionLetter}>

        <Text style={styles.sectionLetterText}>
          {letter}
        </Text>

      </View>


      <Text style={styles.sectionTitle}>
        {title}
      </Text>

    </View>
  );
};


/* =================================================
   FIELD LABEL
   ================================================= */

const FieldLabel = ({
  children,
  required = false,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => {
  return (
    <Text style={styles.fieldLabel}>

      {children}

      {required && (
        <Text style={styles.required}>
          {' '}*
        </Text>
      )}

    </Text>
  );
};


/* =================================================
   OPTION BUTTON
   ================================================= */

const OptionButton = ({
  image,
  title,
  selected,
  onPress,
}: {
  image: any;
  title: string;
  selected: boolean;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.optionButton,
        selected &&
          styles.optionButtonSelected,
      ]}>

      <Image
        source={image}
        style={[
          styles.optionImage,
          selected &&
            styles.optionImageSelected,
        ]}
        resizeMode="contain"
      />


      <Text
        style={[
          styles.optionText,
          selected &&
            styles.optionTextSelected,
        ]}>

        {title}

      </Text>

    </TouchableOpacity>
  );
};


/* =================================================
   STYLES
   ================================================= */

const styles = StyleSheet.create({

  /* SAFE AREA */

  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFD',
  },

  keyboard: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#F8FAFD',
  },


  /* HEADER */

  header: {
    height: 92,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#EDF1F5',
  },

  closeButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeImage: {
    width: 24,
    height: 24,
  },

  headerTitle: {
    flex: 1,
    color: '#102A3D',
    fontSize: 21,
    fontWeight: '800',
    marginLeft: 5,
  },

  headerSpace: {
    width: 42,
  },


  /* SCROLL */

  scroll: {
    flex: 1,
  },

  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 28,
  },


  /* COMPANY */

  companyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    minHeight: 72,
    marginHorizontal: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EEF2F6',
  },

  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 9,
    backgroundColor: '#DCEEFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  companyLogoImage: {
    width: 31,
    height: 31,
    tintColor: '#164C6A',
  },

  companyInformation: {
    flex: 1,
    minWidth: 0,
  },

  companyNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  companyName: {
    color: '#102A3D',
    fontSize: 17,
    fontWeight: '800',
    flexShrink: 1,
  },

  verifiedBadge: {
    marginLeft: 5,
    width: 19,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },

  verifiedImage: {
    width: 19,
    height: 19,
  },

  companyDetail: {
    color: '#687582',
    fontSize: 12.5,
    marginTop: 2,
  },

  companyRoleBadge: {
    backgroundColor: '#BFE2F8',
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
    marginLeft: 7,
  },

  companyRoleText: {
    color: '#326B8B',
    fontSize: 12,
    fontWeight: '700',
  },

  introduction: {
    color: '#5F6871',
    fontSize: 15,
    lineHeight: 22,
    marginTop: 13,
    marginBottom: 16,
  },


  /* SECTION */

  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EEF2F6',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },

  sectionLetter: {
    width: 34,
    height: 34,
    borderRadius: 18,
    backgroundColor: '#CFE8FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },

  sectionLetterText: {
    color: '#153E58',
    fontSize: 17,
    fontWeight: '700',
  },

  sectionTitle: {
    color: '#102A3D',
    fontSize: 19,
    fontWeight: '800',
    flexShrink: 1,
  },

  sectionDescription: {
    color: '#68727C',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },

  fieldLabel: {
    color: '#102A3D',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 8,
    marginTop: 2,
  },

  required: {
    color: '#C63737',
  },

  helperText: {
    color: '#69737D',
    fontSize: 14,
    lineHeight: 19,
    marginTop: 5,
    marginBottom: 15,
  },


  /* INPUT */

  input: {
    minHeight: 58,
    backgroundColor: '#EAF4FF',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#173248',
    fontSize: 17,
  },


  /* CATEGORY */

  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 18,
  },

  categoryChip: {
    minHeight: 38,
    paddingHorizontal: 12,
    borderRadius: 9,
    backgroundColor: '#DCEEFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  categoryFull: {
    width: 'auto',
  },

  categoryChipActive: {
    backgroundColor: '#103F5D',
  },

  categoryImage: {
    width: 19,
    height: 19,
    marginRight: 6,
  },

  categoryImageActive: {
    tintColor: '#FFFFFF',
  },

  categoryText: {
    color: '#183247',
    fontSize: 15,
    fontWeight: '600',
  },

  categoryTextActive: {
    color: '#FFFFFF',
  },


  /* OPTIONS */

  optionRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 9,
  },

  optionSingle: {
    marginTop: 9,
    marginBottom: 16,
  },

  optionButton: {
    minHeight: 45,
    paddingHorizontal: 13,
    borderRadius: 10,
    backgroundColor: '#DCEEFF',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },

  optionButtonSelected: {
    backgroundColor: '#103F5D',
  },

  optionImage: {
    width: 19,
    height: 19,
    marginRight: 7,
  },

  optionImageSelected: {
    tintColor: '#FFFFFF',
  },

  optionText: {
    color: '#183247',
    fontSize: 16,
    fontWeight: '600',
  },

  optionTextSelected: {
    color: '#FFFFFF',
  },


  /* ICON INPUT */

  inputWithIcon: {
    minHeight: 56,
    backgroundColor: '#EAF4FF',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  inputIconImage: {
    width: 23,
    height: 23,
    marginRight: 8,
    tintColor: '#174C69',
  },

  moneyImage: {
    width: 23,
    height: 23,
    marginRight: 9,
    tintColor: '#174C69',
  },

  calendarImage: {
    width: 23,
    height: 23,
    marginRight: 9,
    tintColor: '#174C69',
  },

  iconInput: {
    flex: 1,
    color: '#183247',
    fontSize: 17,
    paddingVertical: 0,
  },


  /* SALARY */

  salaryFormatRow: {
    flexDirection: 'row',
    gap: 9,
    marginBottom: 17,
  },

  salaryFormatButton: {
    flex: 1,
    minHeight: 48,
    borderRadius: 10,
    backgroundColor: '#DCEEFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },

  salaryFormatButtonSelected: {
    backgroundColor: '#DCEEFF',
  },

  radio: {
    color: '#183247',
    fontSize: 19,
    marginRight: 7,
  },

  radioSelected: {
    color: '#0B3957',
  },

  salaryFormatText: {
    color: '#183247',
    fontSize: 15,
    fontWeight: '700',
    flexShrink: 1,
  },

  salaryValue: {
    color: '#183247',
    fontSize: 17,
  },


  /* TAG */

  tagInputRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: 8,
  },

  tagInput: {
    flex: 1,
    minHeight: 53,
    backgroundColor: '#EAF4FF',
    borderRadius: 10,
    paddingHorizontal: 13,
    color: '#183247',
    fontSize: 15,
  },

  addTagButton: {
    width: 116,
    minHeight: 53,
    borderRadius: 10,
    backgroundColor: '#063C59',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  addTagImage: {
    width: 20,
    height: 20,
    marginRight: 6,
  },

  addTagText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '800',
  },

  selectedTagTitle: {
    color: '#596570',
    fontSize: 14,
    marginTop: 14,
    marginBottom: 8,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },

  tagChip: {
    minHeight: 35,
    paddingHorizontal: 12,
    borderRadius: 18,
    backgroundColor: '#CFE8FF',
    flexDirection: 'row',
    alignItems: 'center',
  },

  tagText: {
    color: '#183247',
    fontSize: 15,
  },

  tagCloseImage: {
    width: 15,
    height: 15,
    marginLeft: 7,
  },


  /* TEXT AREA */

  textArea: {
    backgroundColor: '#EAF4FF',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingTop: 13,
    paddingBottom: 13,
    color: '#183247',
    fontSize: 16,
    lineHeight: 27,
  },

  descriptionArea: {
    minHeight: 180,
    marginBottom: 17,
  },

  requirementArea: {
    minHeight: 155,
  },


  /* PUBLICATION */

  publishSetting: {
    minHeight: 96,
    backgroundColor: '#EAF4FF',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  publishSettingText: {
    flex: 1,
    paddingRight: 12,
  },

  publishTitle: {
    color: '#102A3D',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
  },

  publishSubtitle: {
    color: '#687581',
    fontSize: 13,
    marginTop: 4,
  },

  priorityInfo: {
    minHeight: 65,
    backgroundColor: '#DCEEFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  priorityImage: {
    width: 24,
    height: 24,
    marginRight: 9,
  },

  priorityText: {
    flex: 1,
    color: '#183247',
    fontSize: 14,
    lineHeight: 20,
  },


  /* BOTTOM */

  bottomSpace: {
    height: 20,
  },

  afterPublishSpace: {
    height: 20,
  },

  publishButton: {
    minHeight: 57,
    backgroundColor: '#103F5D',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  publishButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '800',
    textAlign: 'center',
  },

  publishArrowImage: {
    position: 'absolute',
    right: 17,
    width: 25,
    height: 25,
  },

});

export default TambahLowonganScreen;