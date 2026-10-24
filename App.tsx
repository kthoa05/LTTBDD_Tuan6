// Đề Lab06 · Bài 1 — Select Phone (mở thẳng vào Bài 1; các bài khác sẽ thêm sau)
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PHONES } from './src/data/phones';
import { SelectPhoneApp } from './src/ex1/SelectPhoneApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Bài 1 · 1.1: dùng sản phẩm đầu tiên (Joy 3) như đề */}
        <SelectPhoneApp phone={PHONES[0]} />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
