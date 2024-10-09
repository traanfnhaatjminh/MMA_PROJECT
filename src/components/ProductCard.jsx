import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({ item, handleLiked }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.navigate("PRODUCT_DETAILS");
        }} style={styles.container}>
            <Image source={{ uri: item.image }} style={styles.coverImage} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.sale_price} VND</Text>
            </View>
            <TouchableOpacity onPress={() => { handleLiked(item) }} style={styles.likeContainer}>
                {
                    item?.isLiked ? (
                        <AntDesign name={"heart"} size={20} color={'#E55B5B'} />
                    ) : (
                        <AntDesign name={"hearto"} size={20} color={'#E55B5B'} />
                    )
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    coverImage: {
        height: 256,
        width: "90%",
        borderRadius: 20,
        marginVertical: 10,
        marginRight: 10
    },
    title: {
        fontSize: 15,
        color: '#444444',
        fontWeight: '600'
    },
    price: {
        fontSize: 13,
        color: '#9C9C9C',
        fontWeight: '600'
    },
    content: {
        paddingLeft: 10
    },
    likeContainer: {
        height: 34,
        width: 34,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 17,
        position: 'absolute',
        top: 15,
        right: 20
    }
})