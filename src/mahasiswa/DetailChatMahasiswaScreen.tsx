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
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

type Props = {
  navigation?: any;
  route?: any;
};

type ExtraMessage = {
  id: string;
  text: string;
  time: string;
};

export default function DetailChatMahasiswaScreen({
  navigation,
  route,
}: Props) {
  const [inputText, setInputText] = useState('');
  const [extraMessages, setExtraMessages] = useState<ExtraMessage[]>([]);

  // Menangkap seluruh data profil dari PesanMahasiswaScreen
  const chatTitle = route?.params?.title || 'HRD Telkom Witel Lampu';
  const chatSubtitle =
    route?.params?.subtitle || 'Bpk. Dimas Ardiansyah • Mitra Magang\nMBKM';
  const avatarImage = route?.params?.avatarImage;
  const avatarText = route?.params?.avatarText || 'TLK';
  const avatarBg = route?.params?.avatarBg || '#05263B';
  const avatarTextColor = route?.params?.avatarTextColor || '#FFFFFF';
  const isOnline = route?.params?.isOnline ?? true;
  const verifiedType = route?.params?.verifiedType ?? 'badge';

  const myAvatarSource = require('../assets/kandidat/profile-rayhan.png');

  const handleSend = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    setExtraMessages(prev => [
      ...prev,
      {
        id: String(Date.now()),
        text: trimmed,
        time: `${hours}.${minutes} WIB`,
      },
    ]);
    setInputText('');
  };

  // Helper render avatar kecil di sebelah kiri bubble pesan masuk
  const renderIncomingSmallAvatar = () => (
    <View style={[styles.smallAvatarLeft, { backgroundColor: avatarBg }]}>
      {avatarImage ? (
        <Image
          source={avatarImage}
          style={styles.smallAvatarImage}
          resizeMode="cover"
        />
      ) : (
        <Text style={[styles.smallAvatarText, { color: avatarTextColor }]}>
          {avatarText}
        </Text>
      )}
    </View>
  );

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

        {/* Foto Profil Terbawa dari PesanMahasiswaScreen + Dot Online */}
        <View style={styles.avatarContainer}>
          <View style={[styles.avatarCircle, { backgroundColor: avatarBg }]}>
            {avatarImage ? (
              <Image
                source={avatarImage}
                style={styles.avatarImage}
                resizeMode="cover"
              />
            ) : (
              <Text
                style={[styles.avatarCircleText, { color: avatarTextColor }]}>
                {avatarText}
              </Text>
            )}
          </View>
          {isOnline && <View style={styles.onlineDot} />}
        </View>

        {/* Nama & Jabatan Kontak */}
        <View style={styles.headerMeta}>
          <View style={styles.titleVerifiedRow}>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {chatTitle}
            </Text>
            {verifiedType === 'badge' && (
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedCheck}>✓</Text>
              </View>
            )}
            {verifiedType === 'grad' && (
              <Text style={styles.gradIcon}>🎓</Text>
            )}
          </View>
          <Text style={styles.headerSubtitle} numberOfLines={2}>
            {chatSubtitle}
          </Text>
        </View>
      </View>

      {/* Area Chat */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.chatScrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Divider Waktu: Hari Ini • 14:15 WIB */}
        <View style={styles.datePillWrapper}>
          <View style={styles.datePill}>
            <Text style={styles.datePillText}>Hari Ini • 14:15 WIB</Text>
          </View>
        </View>

        {/* Pesan 1 */}
        <View style={styles.incomingRow}>
          {renderIncomingSmallAvatar()}

          <View style={styles.incomingCol}>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Halo Rayhan, selamat siang. Terima kasih sudah mengajukan
                lamaran untuk posisi{' '}
                <Text style={styles.boldText}>
                  Frontend Web Developer Intern
                </Text>{' '}
                di {chatTitle}.
              </Text>
            </View>
            <Text style={styles.incomingTime}>14:15 WIB</Text>
          </View>
        </View>

        {/* Pesan 2 */}
        <View style={styles.incomingRow}>
          {renderIncomingSmallAvatar()}

          <View style={styles.incomingCol}>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Kami sudah meninjau berkas portofolio kamu di POLAR, terutama
                proyek{' '}
                <Text style={styles.blueLinkText}>
                  Web Portal Alumni Polinela
                </Text>{' '}
                dan <Text style={styles.blueLinkText}>IoT Dashboard</Text>.
                Sangat sesuai dengan tech stack kami (
                <Text style={styles.boldText}>Next.js & Tailwind CSS</Text>).
              </Text>
            </View>
            <Text style={styles.incomingTime}>14:18 WIB</Text>
          </View>
        </View>

        {/* Pesan 3: Rayhan */}
        <View style={styles.outgoingRow}>
          <View style={styles.outgoingCol}>
            <View style={styles.outgoingBubble}>
              <Text style={styles.outgoingText}>
                Selamat siang. Terima kasih banyak atas kesempatannya! Saya
                sangat antusias untuk mengikuti tahap selanjutnya. Jadwal
                Kamis, 20 Februari 2025 pukul 10:00 WIB sangat cocok untuk saya.
              </Text>
            </View>
            <Text style={styles.outgoingTime}>14:28 WIB ✓✓</Text>
          </View>

          <Image
            source={myAvatarSource}
            style={styles.smallAvatarRight}
            resizeMode="cover"
          />
        </View>

        {/* Pesan 4 */}
        <View style={styles.incomingRow}>
          {renderIncomingSmallAvatar()}

          <View style={styles.incomingCol}>
            <View style={styles.incomingBubble}>
              <Text style={styles.incomingText}>
                Halo Rayhan, berkas konfirmasi kamu sudah kami terima. Silakan
                persiapkan lingkungan coding lokal dan repositori GitHub yang
                relevan ya. Semangat!
              </Text>
            </View>
            <Text style={styles.incomingTime}>14:45 WIB</Text>
          </View>
        </View>

        {/* Pesan 5: Rayhan */}
        <View style={styles.outgoingRow}>
          <View style={styles.outgoingCol}>
            <View style={styles.outgoingBubble}>
              <Text style={styles.outgoingText}>
                Siap, terima kasih! 👍
              </Text>
            </View>
            <Text style={styles.outgoingTime}>22.48 WIB ✓</Text>
          </View>

          <Image
            source={myAvatarSource}
            style={styles.smallAvatarRight}
            resizeMode="cover"
          />
        </View>

        {/* Pesan Baru yang Dikirim User */}
        {extraMessages.map(msg => (
          <View key={msg.id} style={styles.outgoingRow}>
            <View style={styles.outgoingCol}>
              <View style={styles.outgoingBubble}>
                <Text style={styles.outgoingText}>{msg.text}</Text>
              </View>
              <Text style={styles.outgoingTime}>{msg.time} ✓</Text>
            </View>

            <Image
              source={myAvatarSource}
              style={styles.smallAvatarRight}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>

      {/* Input Bar Bawah */}
      <View style={styles.inputBar}>
        <TouchableOpacity
          style={styles.attachButton}
          activeOpacity={0.75}
          onPress={() =>
            Alert.alert('Lampirkan File', 'Pilih dokumen atau gambar.')
          }>
          <Text style={styles.attachIcon}>📎</Text>
        </TouchableOpacity>

        <View style={styles.inputPill}>
          <TextInput
            style={styles.textInput}
            placeholder={`Tulis pesan ke ${chatTitle}...`}
            placeholderTextColor="#94A3B8"
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSend}
          />
          <TouchableOpacity activeOpacity={0.75}>
            <Text style={styles.emojiIcon}>☺</Text>
          </TouchableOpacity>
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
    paddingBottom: 12,
    paddingHorizontal: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
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
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  avatarCircleText: {
    fontFamily: 'Inter-Bold',
    fontSize: 13,
  },
  onlineDot: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 11,
    height: 11,
    borderRadius: 5.5,
    backgroundColor: '#6EE7B7',
    borderWidth: 1.5,
    borderColor: '#FFFFFF',
  },
  headerMeta: {
    flex: 1,
  },
  titleVerifiedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 14.5,
    color: '#0F172A',
    flexShrink: 1,
  },
  verifiedBadge: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    borderWidth: 1.5,
    borderColor: '#286184',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verifiedCheck: {
    fontFamily: 'Inter-Bold',
    fontSize: 8.5,
    color: '#286184',
  },
  gradIcon: {
    fontSize: 13,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 11,
    color: '#64748B',
    marginTop: 2,
    lineHeight: 15,
  },

  // CHAT SCROLL AREA
  chatScrollContent: {
    paddingHorizontal: 14,
    paddingTop: 12,
    paddingBottom: 24,
  },
  datePillWrapper: {
    alignItems: 'center',
    marginBottom: 16,
  },
  datePill: {
    backgroundColor: '#E2EDF7',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 12,
  },
  datePillText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 10.5,
    color: '#286184',
  },

  // INCOMING MESSAGE (LEFT)
  incomingRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 14,
    gap: 8,
  },
  smallAvatarLeft: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginTop: 2,
  },
  smallAvatarImage: {
    width: '100%',
    height: '100%',
  },
  smallAvatarText: {
    fontFamily: 'Inter-Bold',
    fontSize: 9.5,
  },
  incomingCol: {
    maxWidth: '78%',
  },
  incomingBubble: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderTopLeftRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  incomingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#1E293B',
    lineHeight: 19,
  },
  boldText: {
    fontFamily: 'Inter-Bold',
    color: '#0F172A',
  },
  blueLinkText: {
    fontFamily: 'Inter-SemiBold',
    color: '#286184',
  },
  incomingTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    marginTop: 4,
    marginLeft: 2,
  },

  // OUTGOING MESSAGE (RIGHT)
  outgoingRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginBottom: 14,
    gap: 8,
  },
  outgoingCol: {
    maxWidth: '78%',
    alignItems: 'flex-end',
  },
  outgoingBubble: {
    backgroundColor: '#05263B',
    borderRadius: 16,
    borderTopRightRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  outgoingText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#FFFFFF',
    lineHeight: 19,
  },
  outgoingTime: {
    fontFamily: 'Inter-Regular',
    fontSize: 10,
    color: '#64748B',
    marginTop: 4,
    marginRight: 2,
  },
  smallAvatarRight: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#CBD5E1',
    marginTop: 2,
  },

  // INPUT BAR BOTTOM
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
    gap: 8,
  },
  attachButton: {
    width: 34,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  attachIcon: {
    fontSize: 18,
    color: '#64748B',
  },
  inputPill: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 14,
    height: 44,
  },
  textInput: {
    flex: 1,
    fontFamily: 'Inter-Regular',
    fontSize: 12.5,
    color: '#0F172A',
    paddingVertical: 0,
  },
  emojiIcon: {
    fontSize: 18,
    color: '#94A3B8',
    marginLeft: 6,
  },
  sendCircleButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#05263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendIcon: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#FFFFFF',
  },
});