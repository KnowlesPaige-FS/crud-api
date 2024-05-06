import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import authService from '../services/auth.service';

function Settings({ navigation }) {
    const handleLogout = async () => {
        const success = await authService.logout();
        if (success) {
            Alert.alert("Logged Out", "You have been logged out successfully.", [
                { text: "OK", onPress: () => navigation.navigate('LogIn') }
            ]);
        } else {
            Alert.alert("Logout Error", "Failed to log out. Please try again.");
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Log Out" onPress={handleLogout} color="#611E17" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Settings;

