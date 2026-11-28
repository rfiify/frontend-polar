import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  StatusBar,
  KeyboardAvoidingView,
} from 'react-native';

type Props = {
  navigation?: any;
  route?: any;
};

type MessageItem = {
  id: string;
  sender: 'client' | 'me';
  text: string;
  time: string;
  extraTime?: string;
  showAvatar?: boolean;
};

const INITIAL_MESSAGES_KEMARIN: MessageItem[] = [
  {
    id: '1',
    sender: 'client',
    text: 'Halo mas Rayhan, selamat siang. Bagaimana perkembangan revisi visual untuk hero section destinasi Pahawang?',
    time: '14:15',
    showAvatar: true,
  },
  {
    id: '2',
    sender: 'client',
    text: 'Fokuskan visual hero banner pada keindahan bawah air Pahawang dan kemudahan alur booking boat bagi wisatawan lokal yang baru pertama kali berkunjung ya mas.',
    time: '14:20',
    showAvatar: false,
  },
  {
    id: '3',
    sender: 'me',
    text: 'Selamat siang Pak Hendra! Siap pak, untuk eksplorasi hero section sudah saya selaraskan dengan brand guidelines dan asset photo official. Alur booking kapal cepat juga sudah kami sederhanakan menjadi 3 langkah ringkas.',
    time: '15:02',
    extraTime: '15:03',
  },
];

const INITIAL_MESSAGES_HARI_INI: MessageItem[] = [
  {
    id: '4',
    sender: 'client',
    text: 'Mantap sekali mas Rayhan! Desainnya terlihat sangat segar dan informatif. Bolek sekalian dipersiapkan file finalnya untuk submit Milestone 3 sebelum tanggal 28 Okt nanti ya.',
    time: '09:12',
    showAvatar: true,
  },
  {
    id: '5',
    sender: 'me',
    text: 'Baik Pak Hendra, sedang saya rapikan dokumentasi asetnya dan hari ini siap saya submit di Milestone 3. Terima kasih pak!',
    time: '09:25',
  },
];

export default function ChatProyekMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [inputText, setInputText] = useState('');
  const [todayMessages, setTodayMessages] = useState<MessageItem[]>(
    INITIAL_MESSAGES_HARI_INI,
  );

  const clientName = route?.params?.clientName || 'Bpk. Hendra S.';
  const clientOrg = route?.params?.clientOrg || 'Dispar Kab. Pesa';

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    setTodayMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        sender: 'me',
        text: trimmed,
        time: `${hours}:${minutes}`,
      },
    ]);
    setInputText('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Header Bar */}
      <View style={styles.topHeader}>
        <TouchableOpacity
          style={styles.backButton}
          activeOpacity={0.75}
          onPress={() => navigation?.goBack()}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>

        {/* Avatar Bulat Navy + Dot Online */}
        <View style={styles.avatarContainer}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarUserIcon}>👤</Text>
          </View>
          <View style={styles.onlineDot} />
        </View>

        {/* Nama & Instansi Klien */}
        <View style={styles.headerMeta}>
          <Text style={styles.clientNameText} numberOfLines={1}>
            {clientName}
          </Text>
          <Text style={styles.clientSubText} numberOfLines={1}>
            {clientOrg}
          </Text>
        </View>
      </View>

      {/* Banner Proyek di Bawah Nama Chat */}
      <View style={styles.projectBannerWrapper}>
        <View style={styles.projectBannerCard}>
          <View style={styles.bannerTopRow}>
            <View style={styles.milestonePill}>
              <View style={styles.milestoneDot} />
              <Text style={styles.milestonePillText}>
                Sedang Berjalan • Milestone 3
              </Text>
            </View>
            <Text style={styles.bannerDateText}>📅 28 Okt 2024</Text>
          </View>

          <View style={styles.bannerBottomRow}>
            <View style={styles.bannerTextCol}>
              <Text style={styles.bannerProjectTitle} numberOfLines={1}>
                Redesain UI/UX Landing Page Wisata l
              </Text>
              <Text style={styles.bannerProjectSub} numberOfLines={1}>
                Tahap Akhir • Dinas Pariwisata Kab. Pesawar
              </Text>
            </View>

            <TouchableOpacity
              style={styles.detailChipButton}
              activeOpacity={0.8}
              onPress={() => navigation?.navigate('DetailProyekMahasiswa')}>
              <Text style={styles.detailChipText}>Detail →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Area Chat */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.chatScrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Divider Tanggal: Kemarin, 27 Oktober */}
        <View style={styles.datePillWrapper}>
          <View style={styles.datePill}>
            <Text style={styles.datePillText}>Kemarin, 27 Oktober</Text>
          </View>
        </View>

        {/* Daftar Pesan Kemarin */}
        {INITIAL_MESSAGES_KEMARIN.map(msg =>
          msg.sender === 'client' ? (
            <View key={msg.id} style={styles.clientMsgRow}>
              <View style={styles.clientSmallAvatarCol}>
                {msg.showAvatar ? (
                  <View style={styles.clientSmallAvatar}>
                    <Text style={styles.clientSmallAvatarIcon}>🏛</Text>
                  </View>
                ) : (
                  <View style={styles.clientAvatarSpacer} />
                )}
              </View>

              <View style={styles.clientBubble}>
                <Text style={styles.clientBubbleText}>{msg.text}</Text>
                <Text style={styles.clientTimeText}>{msg.time}</Text>
              </View>
            </View>
          ) : (
            <View key={msg.id} style={styles.myMsgWrapper}>
              <View style={styles.myBubble}>
                <Text style={styles.myBubbleText}>
                  {'      '}
                  {msg.text}
                </Text>
              </View>
              <View style={styles.myTimesCol}>
                <Text style={styles.myTimeText}>{msg.time} ✓✓</Text>
                {msg.extraTime ? (
                  <Text style={styles.myTimeText}>{msg.extraTime} ✓✓</Text>
                ) : null}
              </View>
            </View>
          ),
        )}

        {/* Divider Tanggal: Hari Ini */}
        <View style={styles.datePillWrapper}>
          <View style={styles.datePill}>
            <Text style={styles.datePillText}>Hari Ini</Text>
          </View>
        </View>

        {/* Daftar Pesan Hari Ini */}
        {todayMessages.map(msg =>
          msg.sender === 'client' ? (
            <View key={msg.id} style={styles.clientMsgRow}>
              <View style={styles.clientSmallAvatarCol}>
                {msg.showAvatar ? (
                  <View style={styles.clientSmallAvatar}>
                    <Text style={styles.clientSmallAvatarIcon}>🏛</Text>
                  </View>
                ) : (
                  <View style={styles.clientAvatarSpacer} />
                )}
              </View>

              <View style={styles.clientBubble}>
                <Text style={styles.clientBubbleText}>{msg.text}</Text>
                <Text style={styles.clientTimeText}>{msg.time}</Text>
              </View>
            </View>
          ) : (
            <View key={msg.id} style={styles.myMsgWrapper}>
              <View style={styles.myBubble}>
                <Text style={styles.myBubbleText}>
                  {'      '}
                  {msg.text}
                </Text>
              </View>
              <View style={styles.myTimesCol}>
                <Text style={styles.myTimeText}>{msg.time} ✓✓</Text>
              </View>
            </View>
          ),
        )}
      </ScrollView>

      {/* Input Bar Bawah */}
      <View style={styles.inputBar}>
        <View style={styles.inputPill}>
          <TextInput
            style={styles.textInput}
            placeholder="Tulis pesan ke Bpk. Hendra S..."
            placeholderTextColor="#94A3B8"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
          />
        </View>

        <TouchableOpacity
          style={styles.sendCircleButton}
          activeOpacity={0.85}
          onPress={handleSend}>
          <Text style={styles.sendIcon}>▷</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // TOP HEADER
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop:
      Platform.OS === 'android' ? (StatusBar.currentHeight || 0) + 10 : 14,
    paddingBottom: 10,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    gap: 10,
  },
  backButton: {
    padding: 4,
  },
  backIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#0F172A',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatarCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#0F2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarUserIcon: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#14B8A6',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  headerMeta: {
    flex: 1,
  },
  clientNameText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#0F172A',
  },
  clientSubText: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 1,
  },

  // PROJECT BANNER STICKY
  projectBannerWrapper: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingTop: 6,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  projectBannerCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  bannerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  milestonePill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E6F4F1',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 12,
    gap: 5,
  },
  milestoneDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#0D9488',
  },
  milestonePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10,
    color: '#0F766E',
  },
  bannerDateText: {
    fontFamily: 'Inter-Medium',
    fontSize: 10,
    color: '#475569',
  },
  bannerBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  bannerTextCol: {
    flex: 1,
  },
  bannerProjectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 12.5,
    color: '#0F172A',
  },
  bannerProjectSub: {
    fontFamily: 'Inter-Regular',
    fontSize: 10.5,
    color: '#64748B',
    marginTop: 1,
  },
  detailChipButton: {
    backgroundColor: '#E2EDF7',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  detailChipText: {
    fontFamily: 'Inter-Bold',
    fontSize: 11,
    color: '#0F2942',
  },

  // CHAT AREA
  chatScrollContent: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 20,
  },
  datePillWrapper: {
    alignItems: 'center',
    marginVertical: 10,
  },
  datePill: {
    backgroundColor: '#EBF4FA',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  datePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10.5,
    color: '#286184',
  },

  // CLIENT MESSAGE
  clientMsgRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
    gap: 8,
  },
  clientSmallAvatarCol: {
    width: 24,
    alignItems: 'center',
  },
  clientSmallAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#E2EDF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clientSmallAvatarIcon: {
    fontSize: 11,
  },
  clientAvatarSpacer: {
    width: 24,
    height: 24,
  },
  clientBubble: {
    maxWidth: '78%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderBottomLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  clientBubbleText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#1E293B',
    lineHeight: 18.5,
  },
  clientTimeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    marginTop: 6,
  },

  // MY MESSAGE
  myMsgWrapper: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  myBubble: {
    maxWidth: '80%',
    backgroundColor: '#0A2942',
    borderRadius: 16,
    borderBottomRightRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  myBubbleText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#FFFFFF',
    lineHeight: 19,
  },
  myTimesCol: {
    alignItems: 'flex-end',
    marginTop: 4,
    gap: 2,
  },
  myTimeText: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
  },

  // INPUT BAR BOTTOM
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    gap: 10,
  },
  inputPill: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    height: 42,
    justifyContent: 'center',
  },
  textInput: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#0F172A',
    paddingVertical: 0,
  },
  sendCircleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#0A2942',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});