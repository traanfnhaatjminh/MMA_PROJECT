import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';

const sizes = ['M', 'L', 'XL'];
const ProductDetailsScreen = () => {
    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}
        >
            <View style={styles.headerContainer}>
                <Header />
            </View>
            <Image source={{ uri: "https://smakerclothing.com/upload/sanpham/dscf9477-1710.jpg" }}
                style={styles.coverImage} />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>$MAKER THINGS TEE IN WHITE</Text>
                <Text style={[styles.price, styles.title]}>500000 VND</Text>
            </View>
            <Text style={[styles.title, styles.description]}>Unisex,Oversize,100% Cotton,In nổi,Model wears size L</Text>
            <Text style={[styles.sizeText, styles.title]}>Size</Text>
            <View style={styles.sizeContainer}>
                {
                    sizes.map((size) => {
                        return (
                            <TouchableOpacity style={styles.sizeValueContainer}>
                                <Text style={styles.sizeValue}>{size}</Text>
                            </TouchableOpacity>
                        );
                    })
                }
            </View>
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
        fontWeight: '500'
    },
    price: {
        color: "#4D4C4C"
    },
    description: {
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
        marginHorizontal:10
    },
    sizeValue: {
        fontSize: 15,
        fontWeight:"400"
    }
})