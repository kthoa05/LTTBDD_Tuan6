// Đề Lab06 · Bài 3 — Bottom Tab (mở thẳng vào Bài 3; các bài trước vẫn nằm trong project)
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabApp } from './src/ex3/BottomTabApp';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        {/* Bài 3 · 3.1: Bottom Tab gồm Home / Search / Profile */}
        <BottomTabApp />
        <StatusBar style='auto' />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
