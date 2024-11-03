import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const CartCard = ({ item, deleteItemFromCart }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.image }}
                style={styles.coverImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.price}>{item.sale_price} VND</Text>
                <View>
                    <Text style={styles.size}>{item.size}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { deleteItemFromCart(item) }}>
                <FontAwesome6 name='trash' size={18} color={'#E83636'} />
            </TouchableOpacity>
        </View>
    )
}

export default CartCard

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        flexDirection: 'row'
    },
    coverImage: {
        height: 125,
        width: "35%",
        borderRadius: 10
    },
    cardContent: {
        flex: 1,
        marginHorizontal: 10
    },
    title: {
        fontSize: 15,
        color: '#444444',
        fontWeight: '600'
    },
    price: {
        color: '#444444',
        marginVertical: 10,
        fontSize: 13
    },
    size: {
        color: '#444444',
        fontWeight: '600'
    }
})