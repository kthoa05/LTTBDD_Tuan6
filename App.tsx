// Đề Lab06 · Bài 4 — Stack + Tab + Passing Params (mở thẳng vào Bài 4; các bài trước vẫn nằm trong project)
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StackTabApp } from './src/ex4/StackTabApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Bài 4 · 4.2: Stack gồm Home (Tab Products / Favorites) và ProductDetails */}
        <StackTabApp />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
