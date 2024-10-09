import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconlist}>
                <Entypo style={styles.icon} name='list' size={25} color={'black'} />
            </View>

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
        alignItems:'center'
    },
    icon: {
        textAlign: 'center'
    }
})