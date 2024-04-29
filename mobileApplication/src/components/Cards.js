import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';

const Cards = props => {
    const navigation = useNavigation();

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        date: props.date,
        title: props.title,
        location: props.location,
        time: props.time,
        eventDesc: props.eventDesc
    });

    const handleChange = (name, value) => {
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        props.onUpdate(props.id, formData);
        setShowModal(false);
    };

    const handleDelete = () => {
        props.onDelete(props.id);
        setShowModal(false);
    };

    return (
        <View style={styles.card}>
            <Text style={styles.date}>{formData.date}</Text>
            <TouchableOpacity style={styles.imageContainer}>
                <View style={styles.overlay} />
                <Text style={styles.title}>{formData.title}</Text>
                <Text style={styles.time}>{formData.time} - {formData.location}</Text>
            </TouchableOpacity>
            <Text style={styles.desc}>{formData.eventDesc}</Text>
            <View style={styles.buttonContainer}>
                <Button title="Edit Event" onPress={() => setShowModal(true)} color="#007BFF" />
                <Button title="View Details" onPress={() => navigation.navigate('Movies', { movieId: props.id })} color="#007BFF" />
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => setShowModal(false)}>
                        <Text style={styles.closeButtonText}>X</Text>
                    </TouchableOpacity>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('date', text)}
                        value={formData.date}
                        placeholder="Date"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('title', text)}
                        value={formData.title}
                        placeholder="Title"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('location', text)}
                        value={formData.location}
                        placeholder="Location"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('time', text)}
                        value={formData.time}
                        placeholder="Time"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => handleChange('eventDesc', text)}
                        value={formData.eventDesc}
                        placeholder="Event Description"
                        multiline
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Save Changes" onPress={handleSubmit} color="#4CAF50" />
                        <Button title="Delete Event" onPress={handleDelete} color="#f44336" />
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default Cards;

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        borderRadius: 8,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        textAlign: 'center'
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        height: 200,
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ccc',
        textAlign: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    time: {
        fontSize: 18,
        color: 'white'
    },
    desc: {
        fontSize: 16,
        marginTop: 10
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    closeButton: {
        alignSelf: 'flex-end',
        backgroundColor: '#ccc',
        borderRadius: 15,
        padding: 5,
        marginTop: -10,
        marginRight: -10,
    },
    closeButtonText: {
        fontSize: 16,
        color: 'white',
    },
    input: {
        width: '80%',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10
    }
});


