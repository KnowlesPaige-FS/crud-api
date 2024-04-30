import React from "react";
import { View, ImageBackground, StyleSheet } from 'react-native';

const MovieHeader = ({ backgroundImage }) => {
    return (
        <ImageBackground 
            source={{ uri: backgroundImage }}
            style={styles.header}
            imageStyle={styles.backgroundImage}
        >
            <View style={styles.overlay}></View>
        </ImageBackground>
    );
};

export default MovieHeader;

const styles = StyleSheet.create({
    header: {
        height: '200px', 
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width: '100%', 
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(56, 50, 48, 0.7)',
    },
});
