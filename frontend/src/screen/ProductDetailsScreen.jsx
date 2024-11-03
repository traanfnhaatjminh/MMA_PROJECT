import { Image, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';

const sizes = ['M', 'L', 'XL'];

const ProductDetailsScreen = () => {
    const navigation = useNavigation();
    const { addToCart } = useContext(CartContext);
    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(null);
    const handleAddToCart = (item) => {
        item.size = selectedSize;
        addToCart(item);
        navigation.navigate("CART");
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <LinearGradient
                    colors={['#FDF0F3', '#FFFBFC']}
                    style={styles.innerContainer}
                >
                    <View style={styles.headerContainer}>
                        <Header />
                    </View>
                    <Image source={{ uri: item.image }} style={styles.coverImage} />
                    <View style={styles.contentContainer}>
                        <Text style={styles.title}>{item.name}</Text>
                        <Text style={[styles.price, styles.title]}>{item.sale_price} VND</Text>
                    </View>
                    <Text style={styles.description}>{item.describe}</Text>
                    <Text style={[styles.sizeText, styles.title]}>Size</Text>
                    <View style={styles.sizeContainer}>
                        {sizes.map((size, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.sizeValueContainer, selectedSize === size && { backgroundColor: '#E55B5B' }]}
                                    onPress={() => setSelectedSize(size)}
                                >
                                    <Text style={[styles.sizeValue, selectedSize === size && { color: 'white' }]}>{size}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </LinearGradient>
                <TouchableOpacity style={styles.button} onPress={() => { handleAddToCart(item) }}>
                    <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
            </ScrollView>

        </SafeAreaView>
    )
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBFC',
    },
    scrollContainer: {
        paddingBottom: "5%",
    },
    innerContainer: {
        flex: 1,
    },
    headerContainer: {
        padding: 20,
    },
    coverImage: {
        width: "100%",
        height: 420,
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20,
    },
    title: {
        fontSize: 15,
        color: "#444444",
        fontWeight: '500',
        width: "75%",
    },
    price: {
        color: "#4D4C4C",
    },
    description: {
        fontSize: 15,
        color: "#444444",
        fontWeight: '500',
        marginHorizontal: 20,
        marginBottom: 15,
    },
    sizeText: {
        marginHorizontal: 20,
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20,
        marginVertical: 10
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        backgroundColor: "white",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
    },
    sizeValue: {
        fontSize: 15,
        fontWeight: "400",
    },
    button: {
        backgroundColor: "#E96E6E",
        padding: 20,
        borderRadius: 30,
        marginHorizontal: 30,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: "center",
    },
});
