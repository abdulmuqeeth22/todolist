import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [todos, setTodos] = useState(['Buy milk', 'Buy bread', 'Buy eggs']);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item}</Text>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter new todo"
        placeholderTextColor="#555"
        value={newTodo}
        onChangeText={setNewTodo}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTodo}>
        <Text style={styles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 70,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  todoItem: {
    backgroundColor: '#B0E0E6',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  todoText: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20, 
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
