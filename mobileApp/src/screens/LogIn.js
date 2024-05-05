import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import authService from '../services/auth.service'; 

function LogIn({ navigation }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleLogin = async () => {
        try {
            const response = await authService.login(formData.email, formData.password);
            console.log('Login successful:', response);
            Alert.alert(
                "Login Success",
                "You have logged in successfully!",
                [{ text: "OK", onPress: () => navigation.navigate('Home') }]
            );
        } catch (error) {
            console.error('Login failed:', error);
            Alert.alert("Login Failed", error.message || "An error occurred during login.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={formData.email}
                onChangeText={text => handleInputChange('email', text)}
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={formData.password}
                onChangeText={text => handleInputChange('password', text)}
                secureTextEntry
            />
            <Button title="Log In" onPress={handleLogin} color="#4CAF50" />
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 50,
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    linkText: {
        marginTop: 20,
        color: '#0066CC',
    }
});

export default LogIn;


