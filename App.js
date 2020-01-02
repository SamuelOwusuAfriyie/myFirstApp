import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [name, setName] = useState('Sam');
  const [boy, setBoy] = useState('bayan');
  const [age, setAge] = useState(28);
  const clickHandler = () => {
    setName('Rosemond');
    setPerson({name:'Appiah', age: 11});
  }
  const [person, setPerson] = useState({name: 'Seth', age: 18});
  const [people, setPeople] = useState([
   { name: 'Nana Ama', key: 1},
   {name: 'Kofi Sammy', key: 2},
   { name: 'Aba Koomson', key: 3},
   {name: 'Yaw Yevu', key: 4},
   { name: 'Ali Mohamme', key: 5},
   {name: 'Owusu Afriyie', key: 6},
  ]);
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.boldText}>{name}'s First App</Text>
      </View>
      <View style={styles.body}>
        <Text>His name is {person.name} and he is {person.age} years old</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title='update state'  onPress={clickHandler}/>
      </View>
      <Text>Enter name:</Text>
      <TextInput multiline style={styles.input} placeholder='e.g Michael Jackson' onChangeText={(val)=> {setBoy(val)}}/>
      <Text>Enter Age:</Text>
      <TextInput keyboardType='numeric' style={styles.input} placeholder='e.g Michael Jackson' onChangeText={(val)=> {setAge(val)}}/>
      <Text>name: {boy}, age: {age}</Text>
      <View style={styles.box}>
      { people.map((item) => {
        return (
          <View key={item.key}>
            <Text> {item.name} </Text>
            </View>
        )
      })}
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
  box: {
    backgroundColor: 'blue',
    width: 20,
  }
});
