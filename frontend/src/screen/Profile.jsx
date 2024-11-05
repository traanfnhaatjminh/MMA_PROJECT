import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>User Profile</Text>
            </View>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: 'data:image/png;base64,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' }} // Replace with actual image URL
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>username</Text>
                <Text style={styles.profileAge}>email</Text>
                <TouchableOpacity style={styles.friendButton}>
                    <Text style={styles.friendButtonText}>View Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.matchButton}>
                    <Text style={styles.matchButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoTitle}>User info</Text>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Gender</Text>
                    <Text style={styles.infoValue}>Male</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Phone number</Text>
                    <Text style={styles.infoValue}>0969177461</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Address</Text>
                    <Text style={styles.infoValue}>Ha noi</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    headerButton: {
        fontSize: 24,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    profileContainer: {
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    profileAge: {
        fontSize: 16,
        color: '#888',
        marginBottom: 20,
    },
    friendButton: {
        backgroundColor: '#E5FFE5',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginBottom: 10,
    },
    friendButtonText: {
        color: '#2ECC71',
        fontSize: 16,
    },
    matchButton: {
        backgroundColor: '#2ECC71',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    matchButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    infoContainer: {
        padding: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        margin: 20,
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    infoLabel: {
        fontSize: 16,
        color: '#888',
    },
    infoValue: {
        fontSize: 16,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    star: {
        fontSize: 16,
        color: '#FFD700',
    },
});

export default ProfileScreen;
