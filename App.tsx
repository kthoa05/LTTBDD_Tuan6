// Đề Lab06 · Bài 2 — Gắn API vào Bài 1 (mở thẳng vào Bài 2; Bài 1 nằm trong SelectPhoneApi)
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SelectPhoneApi } from './src/ex1/SelectPhoneApi';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Bài 2 · 2.1: tải dữ liệu từ EXPO_PUBLIC_API_URL (mockapi), rồi hiện Bài 1 */}
        <SelectPhoneApi />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
