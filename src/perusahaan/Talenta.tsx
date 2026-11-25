import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';

import PerusahaanHeader from './PerusahaanHeader';
import PerusahaanNavbar from './PerusahaanNavbar';

// =====================================================
// ASSETS
// =====================================================

// Filter dan icon
const iconSearch = require('../assets/perusahaan/iconSearch.png');
const iconFilter = require('../assets/perusahaan/iconFilter.png');
const iconVerified = require('../assets/perusahaan/iconVerified.png');
const iconTopTalenta = require('../assets/perusahaan/iconTopTalenta.png');
const iconPorto = require('../assets/perusahaan/iconPorto.png');
const iconRating = require('../assets/perusahaan/iconRating.png');
const iconLoc = require('../assets/perusahaan/iconLoc.png');
const iconOffer = require('../assets/perusahaan/iconOffer.png');

// Foto kandidat
const avaBagusPratama = require('../assets/kandidat/avaBagusPratama.png');
const avaSitiRahmawati = require('../assets/kandidat/avaSitiRahmawati.png');
const avaDaniGragas = require('../assets/kandidat/avaDaniGragas.png');

// =====================================================
// DATA KANDIDAT
// =====================================================

const kandidatData = [
  {
    id: '1',
    nama: 'Bagus Pratama',
    foto: avaBagusPratama,
    jurusan: 'D4 Rekayasa Perangkat Lunak',
    semester: 'Smt 7',
    badge: 'Top Talenta (IPK 3.82)',
    status: 'Siap Magang / Freelance',
    ipk: '3.82',
    skills: ['React.js', 'Tailwind CSS', 'TypeScript', 'Figma'],
    portfolio:
      'Aplikasi Rekam Medis RS Polinela (Juara 1 KMI PN V)',
    rating: '4.9',
    proyek: '12 Proyek',
    lokasi: 'Bandar Lampung',
  },
  {
    id: '2',
    nama: 'Siti Rahmawati',
    foto: avaSitiRahmawati,
    jurusan: 'D3 Manajemen Informatika',
    semester: 'Smt 6',
    badge: 'UI/UX Designer & Frontend',
    status: 'IPK 3.78',
    ipk: '3.78',
    skills: ['Figma', 'User Research', 'Vue.js', 'Design System'],
    portfolio: 'Redesain Portal Akademik Polinela',
    portfolioExtra: '14 Screens',
    rating: '5.0',
    proyek: '8 Klien',
    lokasi: 'Siap Remote / Hybrid',
  },
  {
    id: '3',
    nama: 'DANI GRAGAS',
    foto: avaDaniGragas,
    jurusan: 'D3 Manajemen Informatika',
    semester: 'Smt 6',
    badge: 'UI/UX Designer & Frontend',
    status: 'IPK 3.78',
    ipk: '3.78',
    skills: ['Figma', 'User Research', 'Vue.js', 'Design System'],
    portfolio: 'Redesain Portal Akademik Polinela',
    portfolioExtra: '14 Screens',
    rating: '5.0',
    proyek: '8 Klien',
    lokasi: 'Siap Remote / Hybrid',
  },
];

// =====================================================
// COMPONENT CHIP
// =====================================================

const Chip = ({
  title,
  selected = false,
  onPress,
  light = false,
}: any) => (
  <TouchableOpacity
    activeOpacity={0.8}
    onPress={onPress}
    style={[
      styles.chip,
      selected ? styles.chipActive : styles.chipInactive,
      light && styles.chipLight,
    ]}>
    <Text
      style={[
        styles.chipText,
        selected ? styles.chipTextActive : styles.chipTextInactive,
      ]}>
      {title}
    </Text>
  </TouchableOpacity>
);

// =====================================================
// SCREEN TALENTA
// =====================================================

const Talenta = ({navigation}: any) => {
  const [search, setSearch] = useState('');
  const [filterOpen, setFilterOpen] = useState(true);

  const [selectedProgram, setSelectedProgram] =
    useState('Semua Jurusan');

  const [selectedSkills, setSelectedSkills] =
    useState(['React.js', 'UI/UX Design']);

  const [selectedSemesters, setSelectedSemesters] =
    useState(['Semester 6', 'Semester 7', 'Semester 8']);

  const [selectedLocations, setSelectedLocations] =
    useState(['Remote']);

  const [applied, setApplied] = useState(true);

  const toggleItem = (
    item: string,
    list: string[],
    setter: (value: string[]) => void,
  ) => {
    if (list.includes(item)) {
      setter(list.filter(value => value !== item));
    } else {
      setter([...list, item]);
    }
  };

  const resetFilter = () => {
    setSelectedProgram('Semua Jurusan');
    setSelectedSkills([]);
    setSelectedSemesters([]);
    setSelectedLocations([]);
    setSearch('');
  };

  const filteredCandidates = kandidatData.filter(item => {
    const keyword = search.toLowerCase();

    const matchSearch =
      item.nama.toLowerCase().includes(keyword) ||
      item.skills.some(skill =>
        skill.toLowerCase().includes(keyword),
      ) ||
      item.jurusan.toLowerCase().includes(keyword);

    const matchSkills =
      !applied ||
      selectedSkills.length === 0 ||
      item.skills.some(skill => {
        const normalized = skill.toLowerCase();

        return selectedSkills.some(selected => {
          if (selected === 'UI/UX Design') {
            return normalized === 'figma';
          }

          return normalized === selected.toLowerCase();
        });
      });

    return matchSearch && matchSkills;
  });

  const showProfile = (nama: string) => {
    Alert.alert(
      'Profil Kandidat',
      `Profil ${nama} akan ditampilkan setelah route detail profil kandidat tersedia.`,
    );
  };

  const offerCandidate = (nama: string) => {
    Alert.alert(
      'Tawarkan Kandidat',
      `Apakah lo ingin menawarkan posisi kepada ${nama}?`,
      [
        {text: 'Batal', style: 'cancel'},
        {
          text: 'Ya, Tawarkan',
          onPress: () =>
            Alert.alert(
              'Berhasil',
              `Tawaran untuk ${nama} siap diproses.`,
            ),
        },
      ],
    );
  };

  // =====================================================
  // RENDER KARTU KANDIDAT
  // =====================================================

  const renderCandidate = (item: any) => (
    <View key={item.id} style={styles.candidateCard}>
      {/* FOTO DAN NAMA */}

      <View style={styles.candidateHeader}>
        <View style={styles.avatarContainer}>
          <Image
            source={item.foto}
            style={styles.avatar}
            resizeMode="cover"
          />

          <View style={styles.onlineDot} />
        </View>

        <View style={styles.candidateIdentity}>
          <View style={styles.nameRow}>
            <Text style={styles.candidateName}>
              {item.nama}
            </Text>

            <Image
              source={iconVerified}
              style={styles.verifiedIcon}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.candidateMajor}>
            {item.jurusan} • {item.semester}
          </Text>
        </View>
      </View>

      {/* BADGE */}

      <View style={styles.badgeRow}>
        <View style={styles.candidateBadge}>
          <Image
            source={iconTopTalenta}
            style={styles.smallBadgeIcon}
            resizeMode="contain"
          />

          <Text style={styles.candidateBadgeText}>
            {item.badge}
          </Text>
        </View>

        {item.id === '1' && (
          <View style={styles.candidateBadge}>
            <View style={styles.blueDot} />

            <Text style={styles.candidateBadgeText}>
              {item.status}
            </Text>
          </View>
        )}
      </View>

      {/* SKILLS */}

      <View style={styles.skillsRow}>
        {item.skills.map((skill: string, index: number) => (
          <View key={index} style={styles.skillTag}>
            <Text style={styles.skillText}>
              {skill}
            </Text>
          </View>
        ))}
      </View>

      {/* PORTFOLIO */}

      <View style={styles.portfolioBox}>
        <Image
          source={iconPorto}
          style={styles.portfolioIcon}
          resizeMode="contain"
        />

        <View style={styles.portfolioContent}>
          {item.id === '1' && (
            <Text style={styles.portfolioLabel}>
              HIGHLIGHT PORTOFOLIO
            </Text>
          )}

          <Text style={styles.portfolioTitle}>
            {item.portfolio}
          </Text>
        </View>

        {item.portfolioExtra && (
          <Text style={styles.portfolioExtra}>
            {item.portfolioExtra}
          </Text>
        )}
      </View>

      {/* RATING DAN LOKASI */}

      <View style={styles.ratingRow}>
        <Image
          source={iconRating}
          style={styles.ratingIcon}
          resizeMode="contain"
        />

        <Text style={styles.ratingNumber}>
          {item.rating}
        </Text>

        <Text style={styles.projectText}>
          ({item.proyek})
        </Text>

        <View style={styles.separatorDot} />

        <Text style={styles.locationText}>
          {item.lokasi}
        </Text>
      </View>

      {/* ACTION BUTTON */}

      <View style={styles.actionRow}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.profileButton}
          onPress={() => showProfile(item.nama)}>
          <Text style={styles.profileButtonText}>
            Lihat Profil
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.offerButton}
          onPress={() => offerCandidate(item.nama)}>
          <Image
            source={iconOffer}
            style={styles.offerIcon}
            resizeMode="contain"
          />

          <Text style={styles.offerButtonText}>
            Tawarkan
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  // =====================================================
  // MAIN RETURN
  // =====================================================

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* HEADER TETAP DI ATAS */}

      <View style={styles.headerWrapper}>
        <PerusahaanHeader
          navigation={navigation}
          title="Talenta"
        />
      </View>

      {/* KONTEN YANG BISA DI-SCROLL */}

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scrollContent}>

        {/* SEARCH DAN FILTER */}

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Image
              source={iconSearch}
              style={styles.searchIcon}
              resizeMode="contain"
            />

            <TextInput
              value={search}
              onChangeText={setSearch}
              placeholder="Cari nama, keahlian (React, ...)"
              placeholderTextColor="#7D8790"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.filterButton}
            onPress={() => setFilterOpen(!filterOpen)}>
            <Image
              source={iconFilter}
              style={styles.filterIcon}
              resizeMode="contain"
            />

            <Text style={styles.filterButtonText}>
              Filter
            </Text>

            <View style={styles.filterCount}>
              <Text style={styles.filterCountText}>
                {selectedSkills.length +
                  selectedSemesters.length +
                  selectedLocations.length}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* FILTER AKTIF */}

        <View style={styles.activeFilterRow}>
          <Text style={styles.activeLabel}>▽ Aktif:</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={styles.activeChip}>
              <Text style={styles.activeChipText}>
                React.js / UI Design
              </Text>

              <TouchableOpacity
                onPress={() =>
                  setSelectedSkills(
                    selectedSkills.filter(
                      item =>
                        item !== 'React.js' &&
                        item !== 'UI/UX Design',
                    ),
                  )
                }>
                <Text style={styles.closeChip}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.activeChip}>
              <Text style={styles.activeChipText}>
                Semester 6 - 8
              </Text>

              <TouchableOpacity
                onPress={() => setSelectedSemesters([])}>
                <Text style={styles.closeChip}>×</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.activeChip}>
              <Text style={styles.activeChipText}>
                Siap Magang
              </Text>
            </View>
          </ScrollView>

          <TouchableOpacity onPress={resetFilter}>
            <Text style={styles.resetText}>Reset</Text>
          </TouchableOpacity>
        </View>

        {/* PROGRAM STUDI */}

        <View style={styles.programSection}>
          <View style={styles.sectionHeading}>
            <Text style={styles.sectionTitle}>
              Pilih Program Studi
            </Text>

            <Text style={styles.swipeHint}>
              Geser ke arah kanan
            </Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}>
            <View style={styles.programRow}>
              {[
                'Semua Jurusan',
                'D4 TRPL (Perangkat Lunak)',
                'D3 Manajemen Informatika',
              ].map(item => (
                <Chip
                  key={item}
                  title={item}
                  selected={selectedProgram === item}
                  onPress={() => setSelectedProgram(item)}
                />
              ))}
            </View>
          </ScrollView>
        </View>

        {/* FILTER LANJUTAN */}

        <View style={styles.advancedFilter}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.advancedHeader}
            onPress={() => setFilterOpen(!filterOpen)}>
            <Image
              source={iconFilter}
              style={styles.advancedIcon}
              resizeMode="contain"
            />

            <Text style={styles.advancedTitle}>
              Filter Lanjutan
            </Text>

            <Text style={styles.collapseIcon}>
              {filterOpen ? '⌃' : '⌄'}
            </Text>
          </TouchableOpacity>

          {filterOpen && (
            <View>
              {/* KEAHLIAN */}

              <Text style={styles.filterLabel}>
                Keahlian Populer
              </Text>

              <View style={styles.optionWrap}>
                {[
                  'React.js',
                  'Flutter',
                  'UI/UX Design',
                  'Laravel',
                  'Python',
                  'Machine Learning',
                  'Node.js',
                ].map(item => (
                  <Chip
                    key={item}
                    title={item}
                    selected={selectedSkills.includes(item)}
                    onPress={() =>
                      toggleItem(
                        item,
                        selectedSkills,
                        setSelectedSkills,
                      )
                    }
                  />
                ))}
              </View>

              {/* SEMESTER */}

              <Text style={styles.filterLabel}>
                Semester Mahasiswa
              </Text>

              <View style={styles.optionWrap}>
                {[
                  'Semester 5',
                  'Semester 6',
                  'Semester 7',
                  'Semester 8',
                  'Alumni Baru',
                  'Semua',
                ].map(item => (
                  <View key={item} style={styles.semesterItem}>
                    <Chip
                      title={item}
                      selected={
                        selectedSemesters.includes(item) ||
                        (item === 'Semua' &&
                          selectedSemesters.length === 0)
                      }
                      onPress={() => {
                        if (item === 'Semua') {
                          setSelectedSemesters([]);
                        } else {
                          toggleItem(
                            item,
                            selectedSemesters,
                            setSelectedSemesters,
                          );
                        }
                      }}
                    />
                  </View>
                ))}
              </View>

              {/* LOKASI */}

              <Text style={styles.filterLabel}>
                Lokasi & Sistem Kerja
              </Text>

              <View style={styles.optionWrap}>
                {[
                  '📍 On-site Lampung',
                  '🏢 Jakarta & Sekitar',
                  '🌐 Remote',
                ].map(item => (
                  <Chip
                    key={item}
                    title={item}
                    selected={selectedLocations.includes(item)}
                    onPress={() =>
                      toggleItem(
                        item,
                        selectedLocations,
                        setSelectedLocations,
                      )
                    }
                  />
                ))}
              </View>

              {/* BUTTON FILTER */}

              <View style={styles.filterActionRow}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.clearButton}
                  onPress={resetFilter}>
                  <Text style={styles.clearButtonText}>
                    Hapus Pilihan
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.applyButton}
                  onPress={() => setApplied(true)}>
                  <Text style={styles.applyButtonText}>
                    Terapkan (48 Hasil)
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>

        {/* DAFTAR KANDIDAT */}

        <View style={styles.candidateSection}>
          <View style={styles.candidateSectionHeading}>
            <Text style={styles.sectionTitle}>
              Daftar Kandidat Terpilih
            </Text>

            <View style={styles.resultCount}>
              <Text style={styles.resultCountText}>
                48
              </Text>
            </View>
          </View>

          {filteredCandidates.length > 0 ? (
            filteredCandidates.map(item => renderCandidate(item))
          ) : (
            <View style={styles.emptyResult}>
              <Text style={styles.emptyText}>
                Kandidat tidak ditemukan.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>

      {/* NAVBAR TETAP DI BAWAH */}

      <PerusahaanNavbar
        navigation={navigation}
        activeScreen="Talenta"
      />
    </View>
  );
};

export default Talenta;

// =====================================================
// STYLESHEET
// =====================================================

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // HEADER DITURUNKAN
  headerWrapper: {
    marginTop: 35,
  },

  scrollContent: {
    paddingBottom: 15,
  },

  // SEARCH

  searchRow: {
    flexDirection: 'row',
    marginHorizontal: 19,
    marginTop: 13,
    gap: 8,
  },

  searchBox: {
    flex: 1,
    height: 52,
    backgroundColor: '#EAF4FE',
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
  },

  searchIcon: {
    width: 19,
    height: 19,
    marginRight: 11,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#18374D',
    paddingVertical: 0,
  },

  filterButton: {
    width: 111,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#173D59',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },

  filterIcon: {
    width: 19,
    height: 19,
    tintColor: '#FFFFFF',
  },

  filterButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  filterCount: {
    width: 21,
    height: 21,
    borderRadius: 11,
    backgroundColor: '#A9DFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  filterCountText: {
    color: '#205477',
    fontSize: 11,
    fontWeight: '800',
  },

  // ACTIVE FILTER

  activeFilterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 19,
    marginTop: 8,
    gap: 6,
  },

  activeLabel: {
    color: '#49545D',
    fontSize: 11,
    fontWeight: '600',
  },

  activeChip: {
    backgroundColor: '#E2F1FF',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6,
  },

  activeChipText: {
    color: '#183D57',
    fontSize: 11,
    fontWeight: '600',
  },

  closeChip: {
    color: '#607D91',
    fontSize: 15,
    marginLeft: 5,
    lineHeight: 15,
  },

  resetText: {
    color: '#34749A',
    fontSize: 11,
    fontWeight: '600',
  },

  // PROGRAM

  programSection: {
    marginTop: 16,
    marginHorizontal: 20,
  },

  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  sectionTitle: {
    color: '#142E40',
    fontSize: 15,
    fontWeight: '800',
  },

  swipeHint: {
    color: '#626970',
    fontSize: 11,
    fontWeight: '600',
  },

  programRow: {
    flexDirection: 'row',
    gap: 7,
    paddingRight: 20,
  },

  // CHIP

  chip: {
    borderRadius: 16,
    paddingHorizontal: 13,
    paddingVertical: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chipActive: {
    backgroundColor: '#002F49',
  },

  chipInactive: {
    backgroundColor: '#E1F0FF',
  },

  chipLight: {
    backgroundColor: '#DCEEFF',
  },

  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },

  chipTextActive: {
    color: '#FFFFFF',
  },

  chipTextInactive: {
    color: '#17354A',
  },

  // ADVANCED FILTER

  advancedFilter: {
    marginTop: 27,
    marginHorizontal: 19,
    paddingBottom: 17,
  },

  advancedHeader: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13,
  },

  advancedIcon: {
    width: 19,
    height: 19,
    marginRight: 10,
  },

  advancedTitle: {
    color: '#142F43',
    fontSize: 15,
    fontWeight: '800',
    flex: 1,
  },

  collapseIcon: {
    color: '#58616A',
    fontSize: 22,
    fontWeight: '600',
  },

  filterLabel: {
    color: '#454E56',
    fontSize: 13,
    marginBottom: 9,
    marginTop: 7,
  },

  optionWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 11,
  },

  semesterItem: {
    width: '31.5%',
  },

  // FILTER ACTION

  filterActionRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 13,
  },

  clearButton: {
    flex: 1,
    height: 47,
    backgroundColor: '#E0EFFF',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  clearButtonText: {
    color: '#17354A',
    fontSize: 13,
    fontWeight: '600',
  },

  applyButton: {
    flex: 1,
    height: 47,
    backgroundColor: '#002F49',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  applyButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  // CANDIDATE SECTION

  candidateSection: {
    marginHorizontal: 19,
    marginTop: 7,
  },

  candidateSectionHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    gap: 7,
  },

  resultCount: {
    width: 25,
    height: 25,
    borderRadius: 13,
    backgroundColor: '#DCEEFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  resultCountText: {
    color: '#225D82',
    fontSize: 11,
    fontWeight: '800',
  },

  // CANDIDATE CARD

  candidateCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 12,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#F0F2F4',
  },

  candidateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  avatarContainer: {
    width: 51,
    height: 51,
    marginRight: 12,
    position: 'relative',
  },

  avatar: {
    width: 51,
    height: 51,
    borderRadius: 12,
  },

  onlineDot: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 9,
    backgroundColor: '#61D3D2',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    bottom: -1,
    right: -2,
  },

  candidateIdentity: {
    flex: 1,
  },

  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },

  candidateName: {
    color: '#102D42',
    fontSize: 16,
    fontWeight: '800',
  },

  verifiedIcon: {
    width: 17,
    height: 17,
  },

  candidateMajor: {
    color: '#525C65',
    fontSize: 12,
    marginTop: 2,
  },

  // BADGES

  badgeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 9,
  },

  candidateBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCEEFF',
    borderRadius: 14,
    paddingHorizontal: 9,
    paddingVertical: 5,
    gap: 4,
  },

  smallBadgeIcon: {
    width: 13,
    height: 13,
  },

  candidateBadgeText: {
    color: '#235574',
    fontSize: 10,
    fontWeight: '700',
  },

  blueDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#326B89',
  },

  // SKILLS

  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginBottom: 11,
  },

  skillTag: {
    backgroundColor: '#EAF4FE',
    borderRadius: 7,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },

  skillText: {
    color: '#17364C',
    fontSize: 11,
    fontWeight: '500',
  },

  // PORTFOLIO

  portfolioBox: {
    minHeight: 54,
    backgroundColor: '#EAF4FE',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  portfolioIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },

  portfolioContent: {
    flex: 1,
  },

  portfolioLabel: {
    color: '#5C6670',
    fontSize: 10,
    marginBottom: 2,
  },

  portfolioTitle: {
    color: '#19364B',
    fontSize: 12,
    fontWeight: '500',
  },

  portfolioExtra: {
    color: '#28678C',
    fontSize: 11,
    fontWeight: '700',
    marginLeft: 5,
  },

  // RATING

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },

  ratingIcon: {
    width: 15,
    height: 15,
    marginRight: 4,
  },

  ratingNumber: {
    color: '#17364A',
    fontSize: 12,
    fontWeight: '800',
  },

  projectText: {
    color: '#4F5B64',
    fontSize: 11,
    marginLeft: 4,
  },

  separatorDot: {
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#B8C0C6',
    marginHorizontal: 12,
  },

  locationText: {
    color: '#34749A',
    fontSize: 11,
    flex: 1,
  },

  // BUTTONS

  actionRow: {
    flexDirection: 'row',
    gap: 8,
  },

  profileButton: {
    flex: 1,
    height: 47,
    borderRadius: 9,
    backgroundColor: '#E0EFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  profileButtonText: {
    color: '#15364C',
    fontSize: 13,
    fontWeight: '700',
  },

  offerButton: {
    flex: 1,
    height: 47,
    borderRadius: 9,
    backgroundColor: '#002F49',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },

  offerIcon: {
    width: 18,
    height: 18,
    tintColor: '#FFFFFF',
  },

  offerButtonText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  emptyResult: {
    padding: 30,
    alignItems: 'center',
  },

  emptyText: {
    color: '#65727C',
    fontSize: 13,
  },
});