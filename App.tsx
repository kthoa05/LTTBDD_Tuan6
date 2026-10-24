// Đề Lab06 · Bài 5 — Drawer (mở thẳng vào Bài 5; các bài trước vẫn nằm trong project)
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerApp } from './src/ex5/DrawerApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Bài 5 · 5.1: Drawer gồm Home / Profile / Settings */}
        <DrawerApp />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
