import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState(['Buy milk', 'Buy bread', 'Buy eggs']);

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>My Todo List</Text>
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={GlobalStyles.todoItem}>
            <Text style={GlobalStyles.todoText}>{item}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={GlobalStyles.addButton}
        onPress={() => navigation.navigate('AddTodo')}
      >
        <Icon name="plus" size={20} color="#fff" />
        <Text style={GlobalStyles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
