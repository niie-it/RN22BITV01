// product.tsx

import { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

type RatingItem = {
    rate: number;
    count: number;
};
type ItemData = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingItem;
};
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 20,
    fontSize: 18,
    height: 44,
    borderColor: "#ccc",
    borderWidth: 1,
    alignItems: "center",
  },
});

export const ProductList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return(
        <View>
            <Text>Product List</Text>
            {products.length == 0 ? <Text>No product</Text> : (
                <FlatList
                    data={products}
                    // keyExtractor={(item) => item.id}
                    renderItem={({ item }: {item: ItemData}) => <Text style={styles.item}>{item.title} - ${item.price}</Text>}
                />
            )}
        </View>
    )
};