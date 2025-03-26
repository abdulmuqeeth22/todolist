import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function AddTodoScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View>
      <Text>Add New Todo</Text>

      <Text>Title</Text>
      <TextInput
        placeholder="My new todo title"
        value={title}
        onChangeText={setTitle}
      />

      <Text>Description</Text>
      <TextInput
        placeholder="Description for your todo"
        multiline
        value={description}
        onChangeText={setDescription}
      />
    </View>
  );
}
