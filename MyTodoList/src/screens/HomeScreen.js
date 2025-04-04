import React, { useState, useEffect } from 'react';
import { 
  View, Text, TouchableOpacity, FlatList, Alert, ToastAndroid 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GlobalStyles from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({ navigation }) {
  const [todos, setTodos] = useState([]);

  // Load todos from AsyncStorage on app launch
  useEffect(() => {
    const loadTodos = async () => {
      const storedTodos = await AsyncStorage.getItem('todos');
      if (storedTodos) {
        setTodos(JSON.parse(storedTodos));
      }
    };
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever they change
  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  // Toggle expanded view
  const toggleExpand = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].expanded = !updatedTodos[index].expanded;
    setTodos(updatedTodos);
  };

  // Mark as finished
  const markAsFinished = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isFinished = true;
    setTodos(updatedTodos);
  };

  // Delete a todo
  const deleteTodo = (index) => {
    Alert.alert(
      'Delete Todo', 
      'Are you sure you want to delete this todo?', 
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', onPress: () => {
          const updatedTodos = todos.filter((_, i) => i !== index);
          setTodos(updatedTodos);
          ToastAndroid.show('Todo Deleted', ToastAndroid.SHORT);
        }}
      ]
    );
  };

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>My Todo List</Text>

      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={GlobalStyles.todoItem}>
            {/* Title Row */}
            <TouchableOpacity onPress={() => toggleExpand(index)} style={GlobalStyles.titleRow}>
              <Text style={[GlobalStyles.todoText, item.isFinished && GlobalStyles.finishedText]}>
                {item.title}
              </Text>
              <View style={{ flex: 1 }} /> 
              <Icon name={item.expanded ? 'chevron-up' : 'chevron-down'} size={16} />
            </TouchableOpacity>

            {item.expanded && (
              <View>
                <Text>{item.description}</Text>
                <View style={GlobalStyles.controlPanel}>
                    {!item.isFinished ? (
                      <>
                        <TouchableOpacity onPress={() => markAsFinished(index)}>
                          <Icon name="check" size={20} color="green" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => deleteTodo(index)}>
                          <Icon name="trash" size={20} color="red" />
                        </TouchableOpacity>
                      </>
                    ) : (
                      <TouchableOpacity onPress={() => deleteTodo(index)}>
                        <Icon name="trash" size={20} color="red" />
                      </TouchableOpacity>
                    )}
                  </View>


              </View>
            )}
          </View>
        )}
      />

      {/* Add Todo Button */}
      <TouchableOpacity
        style={GlobalStyles.addButton}
        onPress={() => navigation.navigate('AddTodo', { addTodo })}
      >
        <Icon name="plus" size={20} color="#fff" />
        <Text style={GlobalStyles.addButtonText}>Add New Todo</Text>
      </TouchableOpacity>
    </View>
  );
}
