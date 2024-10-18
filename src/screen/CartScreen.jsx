import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Header from '../components/Header';
import CartCard from '../components/CartCard';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';

const CartScreen = () => {
    return (
        <LinearGradient
            colors={['#FDF0F3', '#FFFBFC']}
            style={styles.container}>
            <View style={styles.headerContainer}>
                <Header isCart={true} />
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={CartCard}
                ListFooterComponent={
                    <>
                        <View style={styles.priceContainer}>
                            <View style={styles.priceAndShipping}>
                                <Text style={styles.text}>Total:</Text>
                                <Text style={styles.text}>100000 VND</Text>
                            </View>
                            <View style={styles.priceAndShipping}>
                                <Text style={styles.text}>Shipping:</Text>
                                <Text style={styles.text}>25000 VND</Text>
                            </View>

                        </View>
                        <View style={styles.divider} />
                        <View style={styles.priceAndShipping}>
                            <Text style={styles.text}>Total Price:</Text>
                            <Text style={[styles.text, { color: "black", fontWeight: "700" }]}>125000 VND</Text>
                        </View>
                    </>
                }
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            />

            <TouchableOpacity style={styles.checkoutContainer}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </LinearGradient>

    )
}

export default CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    headerContainer: {
        marginBottom: 20
    },
    priceAndShipping: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginVertical: 5
    },
    text: {
        color: "#757575",
        fontSize: 15
    },
    priceContainer: {
        marginTop: 20
    },
    divider: {
        borderWidth: 0.5,
        marginVertical: 10,
        color: "#E0E0E0"
    },
    checkoutContainer: {
        backgroundColor: "#E96E6E",
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        color: "white",
        textAlign: "center",
        fontSize: 16
    }
})