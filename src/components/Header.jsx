import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HOME_STACK')} style={styles.iconlist}>
                {
                    isCart ? <Ionicons name='chevron-back' color={'#E96E6E'} size={20} /> :
                        <Entypo style={styles.icon} name='list' size={25} color={'black'} />
                }

            </TouchableOpacity>
            {isCart && <Text style={styles.myCart}>My Cart</Text>}

            <Image source={require('../assets/avatar_default.jpg')} style={styles.avatar} />
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    avatar: {
        height: 44,
        width: 44,
        borderRadius: 22
    },
    iconlist: {
        height: 44,
        width: 44,
        backgroundColor: 'white',
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        textAlign: 'center'
    },
    myCart: {
        fontSize: 20,
        color: 'black'
    }
})