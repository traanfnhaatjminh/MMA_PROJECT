import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import Cart from '../components/CartCard';

const CartScreen = () => {
    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true} />
            </View>

            <Cart />
        </LinearGradient>

    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerContainer:{
        marginBottom:20
    }
})