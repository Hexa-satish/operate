import React from 'react';
import {Text, Dimensions, StyleSheet, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

const SwiperFlatLists = () => (
  <View style={styles.container}>
    <SwiperFlatList
      paginationActiveColor="gold"
      paginationStyleItemActive={{width: 50}}
      showPagination>
      <View style={[styles.child, {backgroundColor: 'purple'}]}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'red'}]}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'blue'}]}>
        <Text style={styles.text}>3</Text>
      </View>
      <View style={[styles.child, {backgroundColor: 'orange'}]}>
        <Text style={styles.text}>4</Text>
      </View>
    </SwiperFlatList>
  </View>
);

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  text: {fontSize: width * 0.5, textAlign: 'center'},
});

export default SwiperFlatLists;
