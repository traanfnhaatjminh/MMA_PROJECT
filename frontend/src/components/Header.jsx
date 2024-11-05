import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Header = ({ isCart }) => {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const handleAvatarPress = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('HOME_STACK')} style={styles.iconlist}>
                {
                    isCart ? <Ionicons name='chevron-back' color={'#E96E6E'} size={20} /> :
                        <Entypo style={styles.icon} name='list' size={25} color={'black'} />
                }
            </TouchableOpacity>
            {isCart && <Text style={styles.myCart}>My Cart</Text>}

            <TouchableOpacity onPress={handleAvatarPress}>
                <Image source={require('../assets/avatar_default.jpg')} style={styles.avatar} />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { navigation.navigate('LOGIN'); handleCloseModal(); }}>
                            <Text style={styles.modalButtonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => { navigation.navigate('SIGN-UP'); handleCloseModal(); }}>
                            <Text style={styles.modalButtonText}>Register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
                            <Text style={styles.modalCloseText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
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
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        width: '100%',
        padding: 15,
        backgroundColor: '#E96E6E',
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    modalButtonText: {
        color: 'white',
        fontSize: 16,
    },
    modalCloseButton: {
        marginTop: 10,
    },
    modalCloseText: {
        color: '#E96E6E',
        fontSize: 16,
    },
})