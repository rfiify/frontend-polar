import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';

const COLORS = {
  background: '#F4F8FC',
  white: '#FFFFFF',
  navy: '#07324D',
  text: '#173247',
  textSecondary: '#5F6F7D',
  border: '#E1E8EF',
  blueSoft: '#E3F1FF',
  cyanSoft: '#E1F7F7',
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
      onPress={onPress}
    >
      <View
        style={[
          styles.roleIcon,
          {
            backgroundColor: iconBackground,
          },
        ]}
      >
        <Text style={styles.roleIconText}>{icon}</Text>
      </View>

      <View style={styles.roleContent}>
        <Text style={styles.roleName}>{title}</Text>

        <Text
          style={styles.roleDescription}
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>

      <View style={styles.arrowCircle}>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function RoleSelectionScreen({ navigation }: any) {
  // ===============================
  // NAVIGASI PILIH ROLE
  // ===============================

  const handleMahasiswa = () => {
    navigation.navigate('LoginMahasiswa');
  };

  const handleClient = () => {
    console.log('Role Client dipilih');
  };

  const handlePerusahaan = () => {
    console.log('Role Perusahaan dipilih');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* ================= HEADER ================= */}

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Text style={styles.logoP}>P</Text>
            </View>

            <Text style={styles.logoText}>
              POLAR
            </Text>
          </View>

          <View style={styles.portalContainer}>
            <View style={styles.portalDot} />

            <Text style={styles.portalText}>
              PORTAL
            </Text>
          </View>
        </View>

        {/* ================= WELCOME ================= */}

        <View style={styles.welcomeCard}>
          <Text style={styles.welcomeTitle}>
            Selamat Datang di POLAR
          </Text>

          <Text style={styles.welcomeDescription}>
            Platform freelance dan peluang kerja untuk
            menghubungkan mahasiswa bertalenta dengan
            ekosistem profesional masa depan.
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
          Pilih jenis akun yang ingin kamu gunakan untuk
          melanjutkan sesi.
        </Text>

        {/* ================= ROLE LIST ================= */}

        <View style={styles.roleList}>

          {/* MAHASISWA */}

          <RoleCard
            title="Mahasiswa"
            description="Temukan peluang kerja proyek, bangun portofolio, dan tawarkan keahlian."
            icon="🎓"
            iconBackground="#DCEEFF"
            onPress={handleMahasiswa}
          />

          {/* CLIENT */}

          <RoleCard
            title="Client"
            description="Temukan mahasiswa dengan keahlian yang terkurasi untuk proyek."
            icon="♙"
            iconBackground="#DDF6F5"
            onPress={handleClient}
          />

          {/* PERUSAHAAN */}

          <RoleCard
            title="Perusahaan"
            description="Akses talenta vokasi siap industri untuk kebutuhan magang, rekrutmen."
            icon="▦"
            iconBackground="#DCEEFF"
            onPress={handlePerusahaan}
          />

        </View>

        {/* ================= HELP ================= */}

        <View style={styles.helpContainer}>
          <Text style={styles.helpText}>
            Butuh bantuan memilih peran?{' '}
            <Text style={styles.helpLink}>
              Pelajari panduan akun
            </Text>
          </Text>

          <Text style={styles.helpLinkCenter}>
            POLAR
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

/* =====================================================
   STYLES
===================================================== */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  scrollContent: {
    paddingBottom: 30,
  },

  /* ================= HEADER ================= */

  header: {
    height: 96,
    paddingHorizontal: 16,
    paddingTop: 27,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoBox: {
    width: 32,
    height: 32,

    borderRadius: 8,

    backgroundColor: COLORS.navy,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 8,
  },

  logoP: {
    color: COLORS.white,
    fontSize: 19,
    fontWeight: '800',
  },

  logoText: {
    color: COLORS.navy,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 0.2,
  },

  portalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  portalDot: {
    width: 7,
    height: 7,

    borderRadius: 4,

    backgroundColor: COLORS.navy,

    marginRight: 6,
  },

  portalText: {
    color: COLORS.textSecondary,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* ================= WELCOME ================= */

  welcomeCard: {
    marginHorizontal: 16,

    paddingHorizontal: 15,
    paddingVertical: 17,

    borderRadius: 11,

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,
  },

  welcomeTitle: {
    color: COLORS.navy,

    fontSize: 23,
    fontWeight: '800',

    marginBottom: 7,
  },

  welcomeDescription: {
    color: COLORS.textSecondary,

    fontSize: 13,
    lineHeight: 20,
  },

  /* ================= ROLE ================= */

  roleHeader: {
    marginTop: 16,
    marginHorizontal: 16,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  roleTitle: {
    color: COLORS.navy,

    fontSize: 18,
    fontWeight: '800',
  },

  stepBadge: {
    backgroundColor: COLORS.blueSoft,

    borderRadius: 13,

    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  stepText: {
    color: '#3D7297',

    fontSize: 10,
    fontWeight: '700',
  },

  roleSubtitle: {
    marginHorizontal: 16,
    marginTop: 6,

    color: COLORS.textSecondary,

    fontSize: 11,
    lineHeight: 17,
  },

  roleList: {
    marginTop: 12,
    marginHorizontal: 16,
  },

  /* ================= ROLE CARD ================= */

  roleCard: {
    minHeight: 82,

    marginBottom: 10,

    paddingHorizontal: 13,
    paddingVertical: 11,

    borderRadius: 12,

    backgroundColor: COLORS.white,

    borderWidth: 1,
    borderColor: COLORS.border,

    flexDirection: 'row',
    alignItems: 'center',
  },

  roleIcon: {
    width: 44,
    height: 44,

    borderRadius: 10,

    alignItems: 'center',
    justifyContent: 'center',

    marginRight: 11,
  },

  roleIconText: {
    fontSize: 22,
  },

  roleContent: {
    flex: 1,
  },

  roleName: {
    color: COLORS.navy,

    fontSize: 15,
    fontWeight: '800',

    marginBottom: 4,
  },

  roleDescription: {
    color: COLORS.textSecondary,

    fontSize: 10.5,
    lineHeight: 16,
  },

  arrowCircle: {
    width: 29,
    height: 29,

    borderRadius: 15,

    backgroundColor: COLORS.blueSoft,

    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 7,
  },

  arrow: {
    color: '#55748A',

    fontSize: 22,
    lineHeight: 23,

    marginTop: -2,
  },

  /* ================= HELP ================= */

  helpContainer: {
    alignItems: 'center',

    marginTop: 10,

    paddingHorizontal: 20,
  },

  helpText: {
    color: '#32627F',

    fontSize: 11,

    textAlign: 'center',

    lineHeight: 16,
  },

  helpLink: {
    fontWeight: '800',
    textDecorationLine: 'underline',
  },

  helpLinkCenter: {
    color: '#32627F',

    fontSize: 11,

    fontWeight: '800',

    textDecorationLine: 'underline',
  },
});