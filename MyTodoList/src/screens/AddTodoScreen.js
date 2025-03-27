import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddTodoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.header}>Add New Todo</Text>

      <Text>Title</Text>
      <TextInput
        style={GlobalStyles.input}
        placeholder="My new todo title"
        value={title}
        onChangeText={setTitle}
      />

      <Text>Description</Text>
      <TextInput
        style={GlobalStyles.descriptionInput}
        placeholder="Description for your todo"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <View style={GlobalStyles.buttonContainer}>
        <TouchableOpacity
          style={[GlobalStyles.cancelButton, GlobalStyles.button]}
          onPress={() => navigation.goBack()}
        >
          <Icon name="times" size={20} color="#fff" />
          <Text style={GlobalStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[GlobalStyles.saveButton, GlobalStyles.button]}
        >
          <Icon name="check" size={20} color="#fff" />
          <Text style={GlobalStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
