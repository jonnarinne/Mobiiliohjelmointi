import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, StyleSheet } from 'react-native';

const App = () => {
  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [tulos, setTulos] = useState(null);

  const laskeSumma = () => {
    const summa = parseFloat(luku1) + parseFloat(luku2);
    setTulos(summa);
  };

  const laskeErotus = () => {
    const erotus = parseFloat(luku1) - parseFloat(luku2);
    setTulos(erotus);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Anna ensimmäinen luku"
          value={luku1}
          onChangeText={setLuku1}
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Anna toinen luku"
          value={luku2}
          onChangeText={setLuku2}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={laskeSumma} />
        <Button title="-" onPress={laskeErotus} />
      </View>
      {tulos !== null && (
        <Text style={styles.resultText}>Tulos: {tulos}</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;