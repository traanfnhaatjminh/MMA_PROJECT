import { StyleSheet, Text, View, TextInput, SafeAreaView, FlatList } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';  // Use Expo's version
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto'
import Category from '../components/Category';

const categories = ['ALL', 'T-SHIRT', 'JEANS', 'SHORTS', 'PANTS'];
const HomeScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
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
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <Category
                        item={item}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                )}
                keyExtractor={(item) => item}
                horizontal={true}
                showsHorizontalScrollIndicator={false}/>
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
