import React, { useState, useEffect } from 'react';
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
} from 'react-native';

type Props = {
  navigation?: any;
  route?: any;
};

export default function DetailProyekMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [hasSubmittedWork, setHasSubmittedWork] = useState(false);

  useEffect(() => {
    if (route?.params?.hasSubmittedWork) {
      setHasSubmittedWork(true);
    }
  }, [route?.params?.hasSubmittedWork]);

  const project = route?.params?.project || {
    status: 'Sedang Berjalan',
    title: 'Redesain UI/UX Landing Page\nWisata\nPahawang',
    category: 'UI/UX Design',
    clientName: 'Bpk. Hendra S.',
    clientOrg: 'Dispar Kab. Pesawaran',
    deadline: '28 Okt 2024',
    remainingText: 'Sisa 3 hari lagi',
  };

  const handleOpenChat = () => {
    navigation?.navigate('ChatProyekMahasiswa', {
      clientName: project.clientName,
      clientOrg: project.clientOrg,
    });
  };

  const handleUpload = () => {
    navigation?.navigate('KirimHasilKerjaMahasiswa', {
      isRevision: hasSubmittedWork,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top App Bar */}
     <View style={styles.topBar}>
             <TouchableOpacity
               style={styles.backButton}
               activeOpacity={0.75}
               onPress={() => navigation?.navigate('ProyekMahasiswa')}>
               <Text style={styles.backIcon}>←</Text>
             </TouchableOpacity>
             <Text style={styles.topBarTitle}>Detail Proyek</Text>
           </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* ==================== HERO CARD PROYEK ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.statusPill}>
            <View style={styles.statusDot} />
            <Text style={styles.statusPillText}>{project.status}</Text>
          </View>

          <Text style={styles.projectTitle}>{project.title}</Text>

          <View style={styles.categoryPill}>
            <Text style={styles.categoryPillText}>{project.category}</Text>
          </View>

          <View style={styles.clientBox}>
            <Image
              source={require('../assets/kandidat/profile-rayhan.png')}
              style={styles.clientAvatar}
              resizeMode="cover"
            />
            <View style={styles.clientInfo}>
              <View style={styles.clientNameRow}>
                <Text style={styles.clientName}>{project.clientName}</Text>
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedCheck}>✓</Text>
                </View>
              </View>
              <Text style={styles.clientOrg}>{project.clientOrg}</Text>
            </View>

            <TouchableOpacity
              style={styles.clientChatCircle}
              activeOpacity={0.8}
              onPress={handleOpenChat}>
              <Text style={styles.clientChatIcon}>💬</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ==================== KARTU TENGGAT WAKTU ==================== */}
        <View style={styles.deadlineCard}>
          <Text style={styles.deadlineHeader}>⏱ TENGGAT WAKTU</Text>
          <Text style={styles.deadlineDate}>{project.deadline}</Text>
          <Text style={styles.deadlineRemaining}>{project.remainingText}</Text>
        </View>

        {/* ==================== PROGRES MILESTONE ==================== */}
        <View style={styles.cardSection}>
          <Text style={styles.sectionTitle}>Progres Milestone</Text>
          <Text style={styles.sectionSubtitle}>2 dari 3 tahap pengerjaan</Text>

          {/* Step 1: Dikerjakan */}
          <View style={styles.milestoneRow}>
            <View style={styles.timelineCol}>
              <View style={styles.stepCircleDone}>
                <Text style={styles.stepCheckText}>✓</Text>
              </View>
              <View style={styles.timelineLineDone} />
            </View>

            <View style={styles.stepContent}>
              <View style={styles.stepTopRow}>
                <Text style={styles.stepTitle}>1. Dikerjakan</Text>
                <Text style={styles.stepDate}>12 Okt</Text>
              </View>
              <Text style={styles.stepApproved}>✓ Disetujui Klien</Text>
            </View>
          </View>

          {/* Step 2: Revisi */}
          <View style={styles.milestoneRow}>
            <View style={styles.timelineCol}>
              <View style={styles.stepCircleDone}>
                <Text style={styles.stepCheckText}>✓</Text>
              </View>
              <View style={styles.timelineLinePending} />
            </View>

            <View style={styles.stepContent}>
              <View style={styles.stepTopRow}>
                <Text style={styles.stepTitle}>2. Revisi</Text>
                <Text style={styles.stepDate}>19 Okt</Text>
              </View>
              <Text style={styles.stepApproved}>✓ Disetujui Klien</Text>
            </View>
          </View>

          {/* Step 3: Selesai (Active) */}
          <View style={[styles.milestoneRow, { marginBottom: 0 }]}>
            <View style={styles.timelineCol}>
              <View style={styles.stepCircleActiveOuter}>
                <View style={styles.stepCircleActiveInner} />
              </View>
            </View>

            <View style={styles.activeStepBox}>
              <Text style={styles.activeStepTitle}>3. Selesai</Text>
              <Text style={styles.activeStepDeadline}>
                ⏱ Batas submit: 28 Okt, 23:59 WIB
              </Text>
            </View>
          </View>
        </View>

        {/* ==================== DOKUMEN TERLAMPIR ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.docHeaderRow}>
            <Text style={styles.sectionTitle}>Dokumen Terlampir</Text>
            <Text style={styles.docCountText}>3 Berkas</Text>
          </View>

          <TouchableOpacity
            style={styles.fileRowBox}
            activeOpacity={0.8}
            onPress={() =>
              Alert.alert('Unduh Berkas', 'Mengunduh Brief_Wisata_Pahawang_v2.pdf')
            }>
            <View style={styles.fileIconPdf}>
              <Text style={styles.fileEmojiPdf}>📄</Text>
            </View>
            <View style={styles.fileMeta}>
              <Text style={styles.fileName} numberOfLines={1}>
                Brief_Wisata_Pahawang_v2.pdf
              </Text>
              <Text style={styles.fileDetail}>
                1.8 MB • Dispar Pesawaran
              </Text>
            </View>
            <Text style={styles.downloadIcon}>⬇</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.fileRowBox}
            activeOpacity={0.8}
            onPress={() =>
              Alert.alert(
                'Unduh Berkas',
                'Mengunduh Asset_Foto_Pahawang_Official.zip',
              )
            }>
            <View style={styles.fileIconZip}>
              <Text style={styles.fileEmojiZip}>🗂</Text>
            </View>
            <View style={styles.fileMeta}>
              <Text style={styles.fileName} numberOfLines={1}>
                Asset_Foto_Pahawang_Official.zip
              </Text>
              <Text style={styles.fileDetail}>24.0 MB • High-res Photos</Text>
            </View>
            <Text style={styles.downloadIcon}>⬇</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.fileRowBox, { marginBottom: 0 }]}
            activeOpacity={0.8}
            onPress={() =>
              Alert.alert(
                'Unduh Berkas',
                'Mengunduh Brand_Guidelines_Pesawaran.pdf',
              )
            }>
            <View style={styles.fileIconPdf}>
              <Text style={styles.fileEmojiPdf}>📄</Text>
            </View>
            <View style={styles.fileMeta}>
              <Text style={styles.fileName} numberOfLines={1}>
                Brand_Guidelines_Pesawaran.pd
              </Text>
              <Text style={styles.fileDetail}>
                3.2 MB • Logo & Warna Resmi
              </Text>
            </View>
            <Text style={styles.downloadIcon}>⬇</Text>
          </TouchableOpacity>
        </View>

        {/* ==================== CATATAN KLIEN TERKINI ==================== */}
        <View style={styles.cardSection}>
          <View style={styles.noteHeaderRow}>
            <Text style={styles.sectionTitle}>Catatan Klien Terkini</Text>
            <Text style={styles.noteTimeText}>Kemarin, 14:20 WIB</Text>
          </View>

          <View style={styles.noteQuoteBox}>
            <View style={styles.noteClientRow}>
              <Text style={styles.noteClientName}>Bpk. Hendra S.</Text>
              <View style={styles.klienBadge}>
                <Text style={styles.klienBadgeText}>Klien</Text>
              </View>
            </View>

            <Text style={styles.noteQuoteText}>
              “Fokuskan visual hero banner pada keindahan bawah air Pahawang dan
              kemudahan alur booking boat bagi wisatawan lokal yang baru pertama
              kali berkunjung.”
            </Text>
          </View>

          <TouchableOpacity
            style={styles.chatRoomButton}
            activeOpacity={0.8}
            onPress={handleOpenChat}>
            <Text style={styles.chatRoomIcon}>💬</Text>
            <Text style={styles.chatRoomText}>Buka Ruang Obrolan Proyek</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* ==================== BOTTOM ACTION BAR ==================== */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomChatButton}
          activeOpacity={0.8}
          onPress={handleOpenChat}>
          <Text style={styles.bottomChatIcon}>💬</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.uploadButton}
          activeOpacity={0.85}
          onPress={handleUpload}>
          <Text style={styles.uploadIcon}>☁</Text>
          <Text style={styles.uploadText}>
            {hasSubmittedWork ? 'Upload Revisi' : 'Upload'}
          </Text>
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
  cardSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
  },
  statusPill: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    gap: 6,
    marginBottom: 10,
  },
  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#286184',
  },
  statusPillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#1D4E6E',
  },
  projectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#0F172A',
    lineHeight: 25,
    marginBottom: 10,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#F1F5F9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginBottom: 14,
  },
  categoryPillText: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#475569',
  },
  clientBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 10,
    gap: 10,
  },
  clientAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#CBD5E1',
  },
  clientInfo: {
    flex: 1,
  },
  clientNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  clientName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  verifiedBadge: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#15344E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 8,
    color: '#15344E',
  },
  clientOrg: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
  },
  clientChatCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E2EDF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientChatIcon: {
    fontSize: 15,
  },
  deadlineCard: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 14,
    minWidth: '52%',
  },
  deadlineHeader: {
    fontFamily: 'Inter-Bold',
    fontSize: 10,
    color: '#DC2626',
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  deadlineDate: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#0F172A',
  },
  deadlineRemaining: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
    color: '#DC2626',
    marginTop: 2,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14.5,
    color: '#0F172A',
  },
  sectionSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11.5,
    color: '#64748B',
    marginTop: 2,
    marginBottom: 16,
  },
  milestoneRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    gap: 12,
  },
  timelineCol: {
    alignItems: 'center',
    width: 28,
  },
  stepCircleDone: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepCheckText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: '#FFFFFF',
  },
  timelineLineDone: {
    width: 2,
    height: 34,
    backgroundColor: '#0F2942',
    marginVertical: 2,
  },
  timelineLinePending: {
    width: 2,
    height: 34,
    backgroundColor: '#CBD5E1',
    marginVertical: 2,
  },
  stepCircleActiveOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  stepCircleActiveInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#0F2942',
  },
  stepContent: {
    flex: 1,
    paddingTop: 2,
  },
  stepTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  stepTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  stepDate: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  stepApproved: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#286184',
    marginTop: 3,
  },
  activeStepBox: {
    flex: 1,
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#DCE9F5',
  },
  activeStepTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 13.5,
    color: '#0F172A',
  },
  activeStepDeadline: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#DC2626',
    marginTop: 4,
  },
  docHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  docCountText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  fileRowBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F4F8FC',
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
  fileEmojiPdf: {
    fontSize: 16,
  },
  fileIconZip: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#DBEAFE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fileEmojiZip: {
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
  fileDetail: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
  },
  downloadIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 15,
    color: '#286184',
  },
  noteHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  noteTimeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
  },
  noteQuoteBox: {
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  noteClientRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  noteClientName: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
    color: '#0F172A',
  },
  klienBadge: {
    backgroundColor: '#DCE9F5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 6,
  },
  klienBadgeText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#1D4E6E',
  },
  noteQuoteText: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'italic',
    fontSize: 12.5,
    color: '#334155',
    lineHeight: 19,
  },
  chatRoomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F8FC',
    borderRadius: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#DCE9F5',
    gap: 8,
  },
  chatRoomIcon: {
    fontSize: 14,
  },
  chatRoomText: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F2942',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    gap: 12,
  },
  bottomChatButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#EBF4FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomChatIcon: {
    fontSize: 18,
  },
  uploadButton: {
    flex: 1,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A2942',
    borderRadius: 12,
    gap: 8,
  },
  uploadIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: '#FFFFFF',
  },
  uploadText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});