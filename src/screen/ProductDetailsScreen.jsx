import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import { useRoute } from '@react-navigation/native';

const sizes = ['M', 'L', 'XL'];
const ProductDetailsScreen = () => {
    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(null);
    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: item.image }}
                style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={[styles.price, styles.title]}>{item.sale_price} VND</Text>
            </View>
            <Text style={[styles.description]}>{item.describe}</Text>
            <Text style={[styles.sizeText, styles.title]}>Size</Text>
            <View style={styles.sizeContainer}>
                {
                    sizes.map((size) => {
                        return (
                            <TouchableOpacity style={[styles.sizeValueContainer, selectedSize == size && { backgroundColor: '#E55B5B' }]}
                                onPress={() => {
                                    setSelectedSize(size);
                                }}>
                                <Text style={[styles.sizeValue, selectedSize == size && { color: 'white' }]}>{size}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>ADD TO CART</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    headerContainer: {
        padding: 20
    },
    coverImage: {
        width: "100%",
        height: 420
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    title: {
        fontSize: 15,
        color: "#444444",
        fontWeight: '500',
        width: "75%"
    },
    price: {
        color: "#4D4C4C"
    },
    description: {
        fontSize: 15,
        color: "#444444",
        fontWeight: '500',
        marginHorizontal: 20,
        marginBottom: 15
    },
    sizeText: {
        marginHorizontal: 20
    },
    sizeContainer: {
        flexDirection: "row",
        marginHorizontal: 20
    },
    sizeValueContainer: {
        height: 36,
        width: 36,
        backgroundColor: "white",
        borderRadius: 18,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10
    },
    sizeValue: {
        fontSize: 15,
        fontWeight: "400"
    },
    button: {
        backgroundColor: "#E96E6E",
        padding: 20,
        marginVertical: 10,
        borderRadius: 30,
        marginHorizontal: 30
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white',
        textAlign: "center"
    }
})