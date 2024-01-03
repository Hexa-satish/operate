import {useContext} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Context} from '../context/BlogContext';
import Feather from 'react-native-vector-icons/Feather';

const IndexScreen = ({navigation}) => {
  const {state, deleteBlogPost} = useContext(Context);
  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(item, index) => item?.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item?.id})}>
              <View style={styled.row}>
                <Text style={styled.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item?.id)}>
                  <Feather name="trash" style={styled.icon} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styled = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
