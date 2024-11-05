import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';  // Use Expo's version
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import axios from 'axios';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('6727a2167c0055bfe09f2e1b');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Fetch categories
        axios.get('http://192.168.2.104:9999/categories/list')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
        fetchProductsByCategory(selectedCategory);
    }, []);

    useEffect(() => {
        fetchProductsByCategory(selectedCategory);
    }, [selectedCategory]);

    const fetchProductsByCategory = async (categoryId) => {
        try {
            const response = await axios.get(`http://192.168.2.104:9999/products/category/${categoryId}`);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products by category:", error);
        }
    };

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
    };

    return (
        <LinearGradient colors={["#FDF0F3", '#FFFBFC']} style={styles.container}>
            <Header />
            <Text style={styles.matchText}>$MAKER CLOTHING</Text>

            <View style={styles.inputContainer}>
                <Fontisto name='search' size={20} color={'grey'} style={styles.iconContainer} />
                <SafeAreaView>
                    {/* TextInput to handle search */}
                    <TextInput
                        style={styles.textInput}
                        placeholder='search here ...'
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)} // Update search query on input change
                    />
                </SafeAreaView>
            </View>

            {/* Category FlatList moved outside of ListHeaderComponent */}
            <View>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => (
                        <Category
                            item={item}
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />
                    )}
                    keyExtractor={(item) => item._id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            {/* Products FlatList */}
            <FlatList
                numColumns={2}
                data={filteredProducts}
                renderItem={({ item, index }) => (
                    <ProductCard item={item} handleLiked={handleLiked} />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                contentContainerStyle={{
                    paddingBottom: "80%"
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
