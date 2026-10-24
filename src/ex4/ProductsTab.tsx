// Bài 4 · 4.2 — tab Products: danh sách sản phẩm, bấm một dòng → ProductDetails kèm id
import { FlatList, StyleSheet } from 'react-native';
import { ProductRow } from '../components/ProductRow';
import { PHONES } from '../data/phones';
import { TabProps } from './types';

export function ProductsTab({ navigation }: TabProps<'Products'>) {
  // Bài 4 · 4.2 TODO 3: FlatList data = PHONES; mỗi dòng là ProductRow; bấm → navigate("ProductDetails", { id })
  return (
    <FlatList
      data={PHONES}
      keyExtractor={(p) => p.id}
      contentContainerStyle={styles.list}
      renderItem={({ item }) => (
        <ProductRow
          phone={item}
          onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 10 },
});
