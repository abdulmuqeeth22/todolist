import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, Alert 
} from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AddTodoScreen({ navigation, route }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('Validation Error', 'Both Title and Description are required.');
      return;
    }
    if (route.params?.addTodo) {
      route.params.addTodo({ 
        title, 
        description, 
        isFinished: false 
      });
    }

    Alert.alert('Success', 'Todo Added Successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() }
    ]);
    setTitle('');
    setDescription('');
  };

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
          <Icon name="arrow-left" size={20} color="#fff" />
          <Text style={GlobalStyles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[GlobalStyles.saveButton, GlobalStyles.button]}
          onPress={handleSave}
        >
          <Icon name="check" size={20} color="#fff" />
          <Text style={GlobalStyles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
