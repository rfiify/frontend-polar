import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

/* =========================================================
  ASSETS CHAT DETAIL
  ========================================================= */

// FOTO KANDIDAT
const avaBagusPratama = require('../assets/kandidat/avaBagusPratama.png');

// KEMITRAAN RESMI
const iconVerifiedCampus =
  require('../assets/perusahaan/iconVerifiedCampus.png');

// LOWONGAN
const iconLowonganCode =
  require('../assets/perusahaan/iconLowonganCode.png');

// JADWAL
const iconCalendar =
  require('../assets/perusahaan/iconCalendar.png');

// CHAT
const iconAttachment =
  require('../assets/perusahaan/iconAttachment.png');

const iconSendMessage =
  require('../assets/perusahaan/iconSendMessage.png');

// AKSI CEPAT HRD
const iconContract =
  require('../assets/perusahaan/iconContract.png');

const iconSchedule =
  require('../assets/perusahaan/iconSchedule.png');


const ChatDetailScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F7F9FC"
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

        {/* =================================================
            HEADER
        ================================================= */}

        <View style={styles.header}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.backButton}
            onPress={() => navigation.goBack()}>

            <Text style={styles.backIcon}>
              ‹
            </Text>

          </TouchableOpacity>


          <Image
            source={avaBagusPratama}
            style={styles.headerAvatar}
          />


          <View style={styles.headerInfo}>

            <Text style={styles.headerName}>
              Bagus Pratama
            </Text>

            <Text style={styles.headerSubtitle}>
              Pelamar Frontend Web
            </Text>

          </View>


          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.moreButton}>

            <Text style={styles.moreIcon}>
              ⋮
            </Text>

          </TouchableOpacity>

        </View>


        {/* =================================================
            CHAT CONTENT
        ================================================= */}

        <ScrollView
          style={styles.chatScroll}
          contentContainerStyle={styles.chatContent}
          showsVerticalScrollIndicator={false}>

          {/* =================================================
              KEMITRAAN RESMI KAMPUS
          ================================================= */}

          <View style={styles.verifiedCard}>

            <View style={styles.verifiedIconBox}>

              <Image
                source={iconVerifiedCampus}
                style={styles.verifiedIcon}
                resizeMode="contain"
              />

            </View>


            <View style={styles.verifiedContent}>

              <View style={styles.verifiedTitleRow}>

                <Text style={styles.verifiedTitle}>
                  Kemitraan Resmi Kampus
                </Text>

                <View style={styles.verifiedBadge}>

                  <Text style={styles.verifiedBadgeText}>
                    Verified POLAR
                  </Text>

                </View>

              </View>


              <Text style={styles.verifiedDescription}>
                Percakapan resmi terproteksi etika kampus & diawasi
                Career Center Polinela.
              </Text>

            </View>

          </View>


          {/* =================================================
              LOWONGAN
          ================================================= */}

          <View style={styles.jobCard}>

            <View style={styles.jobIconBox}>

              <Image
                source={iconLowonganCode}
                style={styles.jobIcon}
                resizeMode="contain"
              />

            </View>


            <View style={styles.jobInfo}>

              <Text style={styles.jobTitle}>
                Frontend Web Dev (React.js)
              </Text>


              <View style={styles.jobBottomRow}>

                <Text style={styles.jobCampus}>
                  D4 Rekayasa Perangkat Lunak
                </Text>


                <View style={styles.jobDivider} />


                <View style={styles.ipkBox}>

                  <Text style={styles.ipkLabel}>
                    IPK
                  </Text>

                  <Text style={styles.ipkValue}>
                    3.82
                  </Text>

                </View>

              </View>

            </View>


            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.detailButton}>

              <Text style={styles.detailButtonText}>
                Detail
              </Text>

              <Text style={styles.detailArrow}>
                ›
              </Text>

            </TouchableOpacity>

          </View>


          {/* =================================================
              TANGGAL PENAWARAN
          ================================================= */}

          <View style={styles.datePill}>

            <Text style={styles.dateIcon}>
              ◈
            </Text>

            <Text style={styles.dateText}>
              Hari ini • Penawaran Resmi POLAR #POL-8921
            </Text>

          </View>


          {/* =================================================
              PESAN BAGUS 1
          ================================================= */}

          <View style={styles.incomingRow}>

            <Image
              source={avaBagusPratama}
              style={styles.messageAvatar}
            />


            <View style={styles.incomingMessage}>

              <Text style={styles.messageText}>
                Selamat siang Bapak/Ibu HRD PT Nusantara Digital Raya.
                Terima kasih banyak atas tawaran kerja sama magang
                bersertifikat untuk posisi Frontend Web Developer.
                Saya sangat antusias untuk bergabung!
              </Text>


              <Text style={styles.messageTime}>
                10:24 WIB
              </Text>

            </View>

          </View>


          {/* =================================================
              PESAN HRD
          ================================================= */}

          <View style={styles.outgoingRow}>

            <View style={styles.outgoingMessage}>

              <Text style={styles.outgoingText}>
                Selamat siang Bagus. Kami sangat terkesan dengan
                portofolio aplikasi rekam medis klinik dan proyek
                e-commerce Tefamu. Sesuai penawaran, kami
                mengundangmu untuk sesi diskusi awal teknis daring.
              </Text>


              <View style={styles.outgoingMeta}>

                <Text style={styles.outgoingTime}>
                  10:28 WIB
                </Text>

                <Text style={styles.checkIcon}>
                  ✓✓
                </Text>

              </View>

            </View>

          </View>


          {/* =================================================
              PESAN BAGUS 2
          ================================================= */}

          <View style={styles.incomingRow}>

            <Image
              source={avaBagusPratama}
              style={styles.messageAvatar}
            />


            <View style={styles.incomingMessage}>

              <Text style={styles.messageText}>
                Baik Bapak/Ibu, jadwal Rabu jam 14:00 WIB sangat cocok
                dengan jadwal perkuliahan saya di Polinela. Saya siap
                menghadiri sesi wawancara daring tersebut tepat waktu.
              </Text>


              <View style={styles.messageBottomRow}>

                <View style={styles.scheduleBadge}>

                  <Image
                    source={iconCalendar}
                    style={styles.scheduleIcon}
                    resizeMode="contain"
                  />

                  <Text style={styles.scheduleText}>
                    Jadwal Disetujui
                  </Text>

                </View>


                <Text style={styles.messageTime}>
                  10:32 WIB
                </Text>

              </View>

            </View>

          </View>


          {/* =================================================
              STATUS AKTIF
          ================================================= */}

          <View style={styles.activeStatus}>

            <View style={styles.activeDot} />

            <Text style={styles.activeStatusText}>
              Bagus Pratama sedang aktif di POLAR
            </Text>

          </View>


          {/* =================================================
              AKSI CEPAT HRD
          ================================================= */}

          <View style={styles.quickActionSection}>

            <View style={styles.quickHeader}>

              <Text style={styles.quickTitle}>
                ⚡ Aksi Cepat HRD
              </Text>


              <TouchableOpacity activeOpacity={0.7}>

                <Text style={styles.templateText}>
                  Lihat Template
                </Text>

              </TouchableOpacity>

            </View>


            <View style={styles.quickActions}>

              {/* KONTRAK */}

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.quickAction}>

                <Image
                  source={iconContract}
                  style={styles.quickActionIcon}
                  resizeMode="contain"
                />

                <Text style={styles.quickActionText}>
                  Kirim Draf Kontrak MBKM
                </Text>

              </TouchableOpacity>


              {/* JADWAL */}

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.quickAction}>

                <Image
                  source={iconSchedule}
                  style={styles.quickActionIcon}
                  resizeMode="contain"
                />

                <Text style={styles.quickActionText}>
                  Atur Ulang Wawancara
                </Text>

              </TouchableOpacity>

            </View>

          </View>

        </ScrollView>


        {/* =================================================
            INPUT CHAT
        ================================================= */}

        <View style={styles.inputArea}>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.attachmentButton}>

            <Image
              source={iconAttachment}
              style={styles.attachmentIcon}
              resizeMode="contain"
            />

          </TouchableOpacity>


          <TextInput
            style={styles.messageInput}
            placeholder="Tulis pesan ke Bagus Pratama..."
            placeholderTextColor="#8B969D"
            returnKeyType="send"
          />


          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.sendButton}>

            <Image
              source={iconSendMessage}
              style={styles.sendIcon}
              resizeMode="contain"
            />

          </TouchableOpacity>

        </View>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


/* =========================================================
  STYLES
  ========================================================= */

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },

  container: {
    flex: 1,
  },


  /* ================= HEADER ================= */

  header: {
    height: 120,
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
  },

  backButton: {
    width: 32,
    height: 42,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  backIcon: {
    fontSize: 34,
    lineHeight: 38,
    color: '#102E43',
    fontWeight: '300',
  },

  headerAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 9,
  },

  headerInfo: {
    flex: 1,
    marginLeft: 0,
  },

  headerName: {
    color: '#102E43',
    fontSize: 15.5,
    fontWeight: '800',
  },

  headerSubtitle: {
    color: '#657079',
    fontSize: 10.5,
    marginTop: 2,
  },

  moreButton: {
    width: 42,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },

  moreIcon: {
    color: '#15506E',
    fontSize: 30,
    lineHeight: 34,
    fontWeight: '900',
  },


  /* ================= CHAT ================= */

  chatScroll: {
    flex: 1,
  },

  chatContent: {
    paddingHorizontal: 18,
    paddingTop: 4,
    paddingBottom: 18,
  },


  /* ================= VERIFIED ================= */

  verifiedCard: {
    width: '100%',
    minHeight: 72,
    backgroundColor: '#D5EBFF',
    borderRadius: 12,
    paddingHorizontal: 11,
    paddingVertical: 10,
    flexDirection: 'row',
    marginBottom: 10,
  },

  verifiedIconBox: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#005F66',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  verifiedIcon: {
    width: 19,
    height: 19,
  },

  verifiedContent: {
    flex: 1,
  },

  verifiedTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  verifiedTitle: {
    flex: 1,
    color: '#123247',
    fontSize: 12.5,
    fontWeight: '800',
    marginRight: 6,
  },

  verifiedBadge: {
    backgroundColor: '#004C4E',
    paddingHorizontal: 7,
    paddingVertical: 4,
    borderRadius: 10,
  },

  verifiedBadgeText: {
    color: '#FFFFFF',
    fontSize: 7,
    fontWeight: '800',
  },

  verifiedDescription: {
    color: '#465761',
    fontSize: 9.5,
    lineHeight: 13,
    marginTop: 4,
  },


  /* ================= JOB ================= */

  jobCard: {
    width: '100%',
    minHeight: 65,
    backgroundColor: '#FFFFFF',
    borderRadius: 11,
    borderWidth: 1,
    borderColor: '#E9EEF2',
    paddingHorizontal: 10,
    paddingVertical: 9,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  jobIconBox: {
    width: 34,
    height: 34,
    borderRadius: 8,
    backgroundColor: '#CDEBFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 9,
  },

  jobIcon: {
    width: 19,
    height: 19,
  },

  jobInfo: {
    flex: 1,
  },

  jobTitle: {
    color: '#173247',
    fontSize: 12.5,
    fontWeight: '800',
    marginBottom: 4,
  },

  jobBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  jobCampus: {
    flex: 1,
    color: '#58636B',
    fontSize: 9.5,
  },

  jobDivider: {
    width: 1,
    height: 22,
    backgroundColor: '#D9E0E5',
    marginHorizontal: 8,
  },

  ipkBox: {
    width: 35,
  },

  ipkLabel: {
    color: '#43515A',
    fontSize: 9,
  },

  ipkValue: {
    color: '#00636D',
    fontSize: 10.5,
    fontWeight: '700',
  },

  detailButton: {
    height: 27,
    paddingHorizontal: 9,
    borderRadius: 15,
    backgroundColor: '#DCEFFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },

  detailButtonText: {
    color: '#246184',
    fontSize: 9,
    fontWeight: '700',
  },

  detailArrow: {
    color: '#246184',
    fontSize: 15,
    marginLeft: 2,
  },


  /* ================= DATE ================= */

  datePill: {
    alignSelf: 'center',
    maxWidth: '92%',
    minHeight: 22,
    paddingHorizontal: 9,
    borderRadius: 12,
    backgroundColor: '#D9EDFC',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  dateIcon: {
    color: '#316A89',
    fontSize: 9,
    marginRight: 4,
  },

  dateText: {
    color: '#34576B',
    fontSize: 8.5,
    fontWeight: '600',
  },


  /* ================= MESSAGE ================= */

  incomingRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 13,
    paddingRight: 24,
  },

  messageAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 7,
  },

  incomingMessage: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 14,
    borderBottomRightRadius: 14,
    borderBottomLeftRadius: 14,
    borderWidth: 1,
    borderColor: '#EDF0F2',
    paddingHorizontal: 13,
    paddingVertical: 11,
  },

  messageText: {
    color: '#243B4A',
    fontSize: 12.5,
    lineHeight: 21,
  },

  messageTime: {
    alignSelf: 'flex-end',
    color: '#8A9399',
    fontSize: 8.5,
    fontWeight: '600',
    marginTop: 6,
  },


  /* ================= OUTGOING ================= */

  outgoingRow: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 13,
  },

  outgoingMessage: {
    width: '83%',
    backgroundColor: '#173F5A',
    borderRadius: 15,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },

  outgoingText: {
    color: '#FFFFFF',
    fontSize: 12.5,
    lineHeight: 21,
  },

  outgoingMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 5,
  },

  outgoingTime: {
    color: '#BBD0DD',
    fontSize: 8.5,
    fontWeight: '600',
  },

  checkIcon: {
    color: '#BBD0DD',
    fontSize: 9,
    marginLeft: 3,
    fontWeight: '700',
  },


  /* ================= SCHEDULE ================= */

  messageBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7,
  },

  scheduleBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDF2FC',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 3,
  },

  scheduleIcon: {
    width: 10,
    height: 10,
    marginRight: 3,
  },

  scheduleText: {
    color: '#22627C',
    fontSize: 7.5,
    fontWeight: '700',
  },


  /* ================= ACTIVE ================= */

  activeStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
    marginBottom: 20,
  },

  activeDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#008B82',
    marginRight: 5,
  },

  activeStatusText: {
    color: '#5E686F',
    fontSize: 10.5,
    fontWeight: '600',
  },


  /* ================= QUICK ACTION ================= */

  quickActionSection: {
    marginTop: 0,
    marginBottom: 8,
  },

  quickHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingHorizontal: 1,
  },

  quickTitle: {
    color: '#52606A',
    fontSize: 10.5,
    fontWeight: '800',
  },

  templateText: {
    color: '#2C6B8D',
    fontSize: 9.5,
    fontWeight: '700',
  },

  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quickAction: {
    width: '49%',
    minHeight: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },

  quickActionIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },

  quickActionText: {
    flex: 1,
    color: '#2A526B',
    fontSize: 10,
    fontWeight: '600',
  },


  /* ================= INPUT ================= */

  inputArea: {
    height: 68,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEF1F4',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
  },

  attachmentButton: {
    width: 42,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },

  attachmentIcon: {
    width: 23,
    height: 23,
  },

  messageInput: {
    flex: 1,
    height: 46,
    backgroundColor: '#EDF4FA',
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 0,
    color: '#203A4C',
    fontSize: 13,
    marginHorizontal: 5,
  },

  sendButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#073852',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 4,
  },

  sendIcon: {
    width: 22,
    height: 22,
  },

});

export default ChatDetailScreen;