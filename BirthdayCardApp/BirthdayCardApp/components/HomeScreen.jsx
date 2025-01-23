import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Birthday Card App</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Create a New Card"
          onPress={() => navigation.navigate('CardEditor')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Saved Cards"
          onPress={() => navigation.navigate('SavedCards')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  buttonContainer: { marginVertical: 10 },
});

export default HomeScreen;
