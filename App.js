import React, { useState } from 'react';
import { SafeAreaView, View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';

const App = () => {
  const [luku1, setLuku1] = useState('');
  const [luku2, setLuku2] = useState('');
  const [tulos, setTulos] = useState(null);
  const [history, setHistory] = useState([]);

  const laskeSumma = () => {
    const summa = parseFloat(luku1) + parseFloat(luku2);
    setTulos(summa);
    tallennaHistoria(`${luku1} + ${luku2} = ${summa}`);
    tyhjenna();
  };

  const laskeErotus = () => {
    const erotus = parseFloat(luku1) - parseFloat(luku2);
    setTulos(erotus);
    tallennaHistoria(`${luku1} - ${luku2} = ${erotus}`);
    tyhjenna();
  };

  const tallennaHistoria = (uusiLasku) => {
    setHistory([...history, uusiLasku]);
  };

  const tyhjenna = () => {
    setLuku1('');
    setLuku2('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.inputWithMargin]}
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
      {tulos && (
        <Text style={styles.resultText}>Tulos: {tulos}</Text>
      )}
      
        <View style={styles.historyContainer}>
          <Text style={styles.historyTitle}>History</Text>
          <FlatList
              data={history}
              inverted
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <Text style={styles.historyText}>{item}</Text>}
              style={styles.historyList}
            />
        </View>
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
    paddingHorizontal: 10,
  },
  inputWithMargin: {
    marginLeft: 20,
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
  historyContainer: {
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
  },
  historyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyList: {
    width: '100%',
  },
  historyText: {
    fontSize: 18,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default App;