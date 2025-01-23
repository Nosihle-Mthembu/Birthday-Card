import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Text, Alert } from 'react-native';

const CardEditor = () => {
  const [message, setMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [savedCards, setSavedCards] = useState([]); // Array to store saved cards

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.uri);
    }
  };

  const saveCard = () => {
    if (!message && !selectedImage) {
      Alert.alert('Error', 'Please add a message or an image to save the card.');
      return;
    }

    const newCard = { message, image: selectedImage };
    setSavedCards([...savedCards, newCard]); // Save the new card
    Alert.alert('Success', 'Your card has been saved!');

    // Clear fields after saving
    setMessage('');
    setSelectedImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Design Your Card</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your birthday message"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Choose an Image" onPress={pickImage} />
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <View style={styles.cardPreview}>
        <Text style={styles.cardText}>{message}</Text>
        {selectedImage && <Image source={{ uri: selectedImage }} style={styles.imagePreview} />}
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Save Card" onPress={saveCard} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  heading: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  textInput: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  image: { width: 200, height: 200, marginTop: 10, alignSelf: 'center' },
  cardPreview: {
    marginTop: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  cardText: { fontSize: 18, marginBottom: 10, textAlign: 'center' },
  imagePreview: { width: 100, height: 100, alignSelf: 'center' },
  buttonContainer: { marginTop: 20, alignItems: 'center' },
});

export default CardEditor;
