import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addCreateFormDataAsync} from '../store/formSlice';

const HomeScreen = (props: any) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const generateUniqueId = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  };
  const submitPressed = () => {
    if (title.length === 0 || content.length === 0) {
      return null;
    } else {
      const id = generateUniqueId();
      const formData = {id, title, content};
      dispatch(addCreateFormDataAsync(formData))
        .then(() => {
          setTitle('');
          setContent('');
          setTimeout(() => {
            props.navigation.navigate('Show');
          }, 100);
        })
        .catch((error: any) => {
          console.error('Failed to save form data:', error);
        })
        .finally(() => {});
    }
  };

  return (
    <View>
      <View>
        <Text style={styled.label}>Enter Title:</Text>
        <TextInput
          style={styled.input}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Text style={styled.label}>Enter Content:</Text>
        <TextInput
          style={styled.input}
          value={content}
          onChangeText={text => setContent(text)}
        />
        <Button
          title="Save Blog Post"
          onPress={() => {
            submitPressed();
          }}
        />

        <Button
          title="dataShow"
          onPress={() => {
            props.navigation.navigate('Show');
          }}
        />
      </View>
    </View>
  );
};

const styled = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default HomeScreen;
