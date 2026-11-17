import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';

const COLORS = {
  background: '#F8FAFC',
  white: '#FFFFFF',
  navy: '#062D47',
  text: '#062D47',
  textSecondary: '#596771',
  border: '#F0F4F8',
  blueSoft: '#EBF4FA',
  cyanSoft: '#E6F7F7',
  accentBlue: '#286184',
  stepBadgeBg: '#D1E8F7',
  stepBadgeText: '#286184',
};

type RoleCardProps = {
  title: string;
  description: string;
  icon: string;
  iconBackground: string;
  onPress: () => void;
};

const RoleCard = ({
  title,
  description,
  icon,
  iconBackground,
  onPress,
}: RoleCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.roleCard}
      onPress={onPress}>

      {/* ICON */}
      <View
        style={[
          styles.roleIconContainer,
          {
            backgroundColor: iconBackground,
          },
        ]}>
        <Text style={styles.roleIconText}>{icon}</Text>
      </View>

      {/* CONTENT */}
      <View style={styles.roleContent}>
        <Text style={styles.roleName}>{title}</Text>

        <Text style={styles.roleDescription} numberOfLines={2}>
          {description}
        </Text>
      </View>

      {/* ARROW */}
      <View style={styles.arrowCircle}>
        <View style={styles.arrowIcon}>
          <View style={styles.arrowLine1} />
          <View style={styles.arrowLine2} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function RoleSelectionScreen({navigation}: any) {

  // =========================
  // MAHASISWA
  // =========================
  const handleMahasiswa = () => {
    navigation.navigate('LoginMahasiswa');
  };

  // =========================
  // CLIENT
  // =========================
  const handleClient = () => {
    navigation.navigate('LoginKlien');
  };

  // =========================
  // PERUSAHAAN
  // =========================
  const handlePerusahaan = () => {
    navigation.navigate('LoginPerusahaan');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.white}
      />

      {/* ================= HEADER ================= */}
      <View style={styles.header}>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <View style={styles.logoBox}>
            <Text style={styles.logoP}>P</Text>
          </View>

          <Text style={styles.logoText}>POLAR</Text>
        </View>

        {/* PORTAL */}
        <View style={styles.portalContainer}>
          <View style={styles.portalDot} />

          <Text style={styles.portalText}>
            PORTAL
          </Text>
        </View>
      </View>

      {/* ================= CONTENT ================= */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">

        {/* ================= WELCOME ================= */}
        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Selamat Datang di POLAR
          </Text>

          <Text style={styles.welcomeDescription}>
            Platform freelance dan peluang kerja untuk menghubungkan
            mahasiswa bertalenta dengan ekosistem profesional masa depan.
          </Text>
        </View>

        {/* ================= ROLE HEADER ================= */}
        <View style={styles.roleHeader}>
          <Text style={styles.roleTitle}>
            Masuk Sebagai
          </Text>

          <View style={styles.stepBadge}>
            <Text style={styles.stepText}>
              Langkah 1/2
            </Text>
          </View>
        </View>

        <Text style={styles.roleSubtitle}>
          Pilih jenis akun yang ingin kamu gunakan untuk melanjutkan sesi.
        </Text>

        {/* ================= ROLE LIST ================= */}
        <View style={styles.roleList}>

          {/* MAHASISWA */}
          <RoleCard
            title="Mahasiswa"
            description="Temukan peluang kerja proyek, bangun portofolio, dan tawarkan keahlian."
            icon="🎓"
            iconBackground="#EBF4FA"
            onPress={handleMahasiswa}
          />

          {/* CLIENT */}
          <RoleCard
            title="Client"
            description="Temukan mahasiswa dengan keahlian yang terkurasi untuk proyek."
            icon="👤"
            iconBackground="#E6F7F7"
            onPress={handleClient}
          />

          {/* PERUSAHAAN */}
          <RoleCard
            title="Perusahaan"
            description="Akses talenta vokasi siap industri untuk kebutuhan magang dan rekrutmen."
            icon="🏢"
            iconBackground="#EBF4FA"
            onPress={handlePerusahaan}
          />

        </View>

        {/* ================= FOOTER ================= */}
        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>
            Butuh bantuan memilih peran? Pelajari panduan akun
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.helpLinkContainer}>

            <Text style={styles.helpLink}>
              POLAR
            </Text>

          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // =====================================================
  // MAIN
  // =====================================================

  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingBottom: 40,
    backgroundColor: COLORS.background,
    flexGrow: 1,
  },

  // =====================================================
  // HEADER
  // =====================================================

  header: {
    height:
      Platform.OS === 'android'
        ? 64 + (StatusBar.currentHeight || 0)
        : 100,

    paddingHorizontal: 20,

    paddingTop:
      Platform.OS === 'android'
        ? StatusBar.currentHeight || 0
        : 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: COLORS.white,

    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 34,
    height: 34,

    borderRadius: 8,

    backgroundColor: COLORS.navy,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 10,
  },

  logoP: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
  },

  logoText: {
    color: COLORS.navy,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  portalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  portalDot: {
    width: 8,
    height: 8,

    borderRadius: 4,

    backgroundColor: COLORS.navy,

    marginRight: 6,
  },

  portalText: {
    color: COLORS.textSecondary,
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },

  // =====================================================
  // WELCOME
  // =====================================================

  welcomeCard: {
    margin: 20,

    padding: 24,

    borderRadius: 16,

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: '#EBF2F7',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,

    elevation: 2,
  },

  welcomeTitle: {
    color: COLORS.navy,
    fontSize: 28,
    fontWeight: 'bold',

    marginBottom: 10,
  },

  welcomeDescription: {
    color: COLORS.textSecondary,
    fontSize: 14,
    lineHeight: 22,
  },

  // =====================================================
  // ROLE HEADER
  // =====================================================

  roleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,

    marginTop: 10,
  },

  roleTitle: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: 'bold',
  },

  stepBadge: {
    backgroundColor: COLORS.stepBadgeBg,

    borderRadius: 8,

    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  stepText: {
    color: COLORS.stepBadgeText,
    fontSize: 11,
    fontWeight: 'bold',
  },

  roleSubtitle: {
    paddingHorizontal: 20,

    marginTop: 8,

    color: COLORS.textSecondary,

    fontSize: 13,
    lineHeight: 20,
  },

  // =====================================================
  // ROLE LIST
  // =====================================================

  roleList: {
    paddingHorizontal: 20,

    marginTop: 20,
  },

  roleCard: {
    height: 100,

    backgroundColor: COLORS.white,

    borderRadius: 16,

    paddingHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',

    marginBottom: 12,

    borderWidth: 1,
    borderColor: COLORS.border,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.03,
    shadowRadius: 8,

    elevation: 1,
  },

  roleIconContainer: {
    width: 56,
    height: 56,

    borderRadius: 12,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 16,
  },

  roleIconText: {
    fontSize: 26,
  },

  roleContent: {
    flex: 1,
  },

  roleName: {
    color: COLORS.navy,

    fontSize: 18,
    fontWeight: 'bold',

    marginBottom: 4,
  },

  roleDescription: {
    color: COLORS.textSecondary,

    fontSize: 12,
    lineHeight: 18,
  },

  // =====================================================
  // ARROW
  // =====================================================

  arrowCircle: {
    width: 32,
    height: 32,

    borderRadius: 16,

    backgroundColor: COLORS.blueSoft,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 10,
  },

  arrowIcon: {
    width: 10,
    height: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowLine1: {
    width: 8,
    height: 2,

    backgroundColor: '#55748A',

    transform: [
      {
        rotate: '45deg',
      },
    ],

    position: 'absolute',

    top: 2,
    right: 0,

    borderRadius: 1,
  },

  arrowLine2: {
    width: 8,
    height: 2,

    backgroundColor: '#55748A',

    transform: [
      {
        rotate: '-45deg',
      },
    ],

    position: 'absolute',

    bottom: 2,
    right: 0,

    borderRadius: 1,
  },

  // =====================================================
  // FOOTER
  // =====================================================

  helpContainer: {
    alignItems: 'center',

    marginTop: 20,

    paddingHorizontal: 40,

    marginBottom: 20,
  },

  helpText: {
    color: COLORS.accentBlue,

    fontSize: 13,

    textAlign: 'center',

    fontWeight: 'bold',

    lineHeight: 20,
  },

  helpLinkContainer: {
    marginTop: 2,
  },

  helpLink: {
    color: COLORS.accentBlue,

    fontSize: 13,

    fontWeight: 'bold',

    textDecorationLine: 'underline',
  },
});