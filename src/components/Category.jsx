import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[
                styles.categoryText,
                selectedCategory === item
                && { color: 'white', backgroundColor: '#E96E6E' },]}>{item}</Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 16,
        marginTop: 25,
        fontWeight: '500',
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        textAlign: 'center',
        marginHorizontal: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 16,
        overflow: 'hidden',
    }
})