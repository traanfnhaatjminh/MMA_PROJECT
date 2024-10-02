import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';  // Use Expo's version
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const HomeScreen = () => {
    return (
        <LinearGradient colors={["#FDF0F3", '#FFFBFC']} style={styles.container}>
            <Header />
            <Text style={styles.matchText}>Match Your Style</Text>
            <View style={styles.inputContainer}>
                <Fontisto name='search' size={20} color={'grey'} style={styles.iconContainer} />
                <SafeAreaView>
                    <TextInput style={styles.textInput} placeholder='search here ...' />
                </SafeAreaView>
            </View>
        </LinearGradient>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    matchText: {
        fontSize: 20,
        marginTop: 20,
        fontWeight: '500',
        fontFamily: 'sans-serif'
    },
    inputContainer: {
        backgroundColor: 'white',
        height: 40,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    textInput: {
        flex: 1
    },
    iconContainer: {
        marginHorizontal: 15
    }
});
