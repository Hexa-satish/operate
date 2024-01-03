import {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {useNavigation} from '@react-navigation/native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const ShowScreen = ({route}) => {
  const {state} = useContext(Context);
  const id = route.params.id;

  const blogPost = state.find(blogPost => blogPost.id === id);
  return (
    <View>
      <Text style={styled.ts}>{blogPost?.title}</Text>
      <Text style={styled.ts}>{blogPost?.content}</Text>
    </View>
  );
};

ShowScreen.HeaderRightButton = ({id}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Edit', {id});
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <EvilIcons name="pencil" size={35} />
    </TouchableOpacity>
  );
};

const styled = StyleSheet.create({
  ts: {fontSize: 18, color: 'black', marginHorizontal: 15},
});

export default ShowScreen;
