import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';  // Use Expo's version
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/database.json'

const categories = ['ALL', 'T-SHIRT', 'JEANS', 'SHORTS', 'PANTS'];
const HomeScreen = () => {
    const [products, setProducts] = useState(data.products);
    const [selectedCategory, setSelectedCategory] = useState('ALL');
    const handleLiked = (item) => {
        const newProducts = products.map((prod) => {
            if (prod.id === item.id) {
                return {
                    ...prod,
                    isLiked: !prod.isLiked
                }
            }
            return prod;
        });
        setProducts(newProducts);
    }

    return (
        <LinearGradient colors={["#FDF0F3", '#FFFBFC']} style={styles.container}>
            <Header />
            <FlatList
                numColumns={2}
                data={products}
                ListHeaderComponent={
                    <>
                        <Text style={styles.matchText}>Match Your Style</Text>
                        <View style={styles.inputContainer}>
                            <Fontisto name='search' size={20} color={'grey'} style={styles.iconContainer} />
                            <SafeAreaView>
                                <TextInput style={styles.textInput} placeholder='search here ...' />
                            </SafeAreaView>
                        </View>
                        <FlatList
                            data={categories}
                            renderItem={({ item }) => (
                                <Category
                                    item={item}
                                    selectedCategory={selectedCategory}
                                    setSelectedCategory={setSelectedCategory}
                                />
                            )}
                            keyExtractor={(item) => item}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false} />
                    </>
                }
                renderItem={({ item, index }) => (
                    <ProductCard item={item} handleLiked={handleLiked} />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 55
                }}
            />
        </LinearGradient>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    matchText: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '500',
        fontFamily: 'sans-serif'
    },
    inputContainer: {
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    textInput: {
        flex: 1
    },
    iconContainer: {
        marginHorizontal: 15
    }
});
