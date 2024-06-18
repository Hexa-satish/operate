import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteBlogPost} from '../store/formSlice';

const ShowData = (props: any) => {
  const formData = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  const deleteItem = (id: string) => {
    dispatch(deleteBlogPost(id));
  };

  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.view}
        onPress={() => {
          props.navigation.navigate('Edit', {
            id: item.id,
            title: item?.title,
            content: item?.content,
          });
        }}>
        <View style={styles.row}>
          <Text>Id: {item?.id}</Text>
          <Text>Title: {item?.title}</Text>
          <Text>Content: {item?.content}</Text>
        </View>
        <TouchableOpacity
          style={styles.bin}
          onPress={() => {
            deleteItem(item?.id);
          }}>
          <Icon name="trash-o" size={30} color="#900" />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList data={formData.data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  row: {
    width: '90%',
    justifyContent: 'center',
  },
  bin: {
    justifyContent: 'center',
  },
});

export default ShowData;
