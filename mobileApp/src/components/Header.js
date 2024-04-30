import React from "react";
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const Header = ({ title, desc, backgroundImage }) => {
    return (
        <ImageBackground 
            source={{ uri: backgroundImage }}
            style={styles.header}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.mainContent}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{desc}</Text>
            </View>
        </ImageBackground>
    );
};

export default Header;

const styles = StyleSheet.create({
    header: {
        height: '200px', 
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%', 
        height: '100%', 
        resizeMode: 'cover', 
    },
    mainContent: {
        width: '85%',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
        padding: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#FFEFCD', 
        textAlign: 'center', 
    }
});
