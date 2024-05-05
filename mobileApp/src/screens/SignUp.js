import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import authService from '../services/auth.service';  

function SignUp({ navigation }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (name, value) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSignup = async () => {
        try {
            const response = await authService.signup(formData.email, formData.password);
            console.log('Signup successful:', response);
            Alert.alert("Signup Success", "You have registered successfully!", [
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ]);
        } catch (error) {
            console.error('Signup failed:', error);
            Alert.alert("Signup Failed", error.message || "An error occurred during signup.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
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
            <Button title="Sign Up" onPress={handleSignup} color="#4CAF50" />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.linkText}>Already have an account? Log in</Text>
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

export default SignUp;

