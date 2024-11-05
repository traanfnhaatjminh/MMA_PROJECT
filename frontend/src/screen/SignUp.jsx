import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default SignUpView = () => {

    const [gender, setGender] = useState('');

    showAlert = viewId => Alert.alert('Alert', 'Button pressed ' + viewId)

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <AntDesign style={[styles.inputIcon, {marginTop: '3%'}]} name='user' size={20} />
                <TextInput
                    style={styles.inputs}
                    placeholder="User name"
                />
            </View>
            <View style={styles.inputContainer}>
                <MaterialCommunityIcons style={[styles.inputIcon, {marginTop: '3%'}]} name='gender-male-female' size={25} />
                <Picker
                    selectedValue={gender}
                    style={styles.inputs}
                    onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                >
                    <Picker.Item label="Select Gender" value="" />
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>
            </View>
            <View style={styles.inputContainer}>
                <Entypo style={[styles.inputIcon, {marginTop: '3%'}]} name='address' size={20} />
                <TextInput
                    style={styles.inputs}
                    placeholder="Address"
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome style={[styles.inputIcon, {marginTop: '3%'}]} name='phone' size={20} />
                <TextInput
                    style={styles.inputs}
                    placeholder="Phone number"
                />
            </View>
            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                />
            </View>

            <View style={styles.inputContainer}>
                <Image
                    style={styles.inputIcon}
                    source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
                />
                <TextInput
                    style={styles.inputs}
                    placeholder="Password"
                />
            </View>

            <TouchableOpacity
                style={[styles.buttonContainer, styles.loginButton]}
                onPress={() => showAlert('Sign Up')}>
                <Text style={styles.loginText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: '#00b5ec',
    },
    loginText: {
        color: 'white',
    },
})
