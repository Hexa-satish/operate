import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {updateBlogPost} from '../store/formSlice';

const EditFormData = ({route, navigation}: any) => {
  const routes = route?.params;
  const {id, title, content} = routes;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const dispatch = useDispatch();

  const submitUpdate = () => {
    dispatch(updateBlogPost({id, title: newTitle, content: newContent}));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Title:</Text>
      <TextInput
        style={styles.input}
        value={newTitle}
        onChangeText={text => setNewTitle(text)}
      />
      <Text style={styles.label}>Edit Content:</Text>
      <TextInput
        style={styles.input}
        value={newContent}
        onChangeText={text => setNewContent(text)}
      />
      <Button title="Save Changes" onPress={submitUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 20,
    padding: 5,
  },
});

export default EditFormData;
