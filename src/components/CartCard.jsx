import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'

const CartCard = () => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: 'https://smakerclothing.com/upload/sanpham/dscf9477-1710.jpg' }}
                style={styles.coverImage} />
            <View style={styles.cardContent}>
                <Text style={styles.title}>$MAKER THINGS TEE IN WHITE</Text>
                <Text style={styles.price}>500000 VND</Text>
                <View>
                    <Text style={styles.size}>XL</Text>
                </View>
            </View>
            <FontAwesome6 name='trash' size={18} color={'#E83636'} />

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
        borderRadius:10
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