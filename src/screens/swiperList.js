import {useRef, useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const colors = ['tomato', 'orange', 'green', 'gold', 'purple', 'lime'];

const SwiperList = () => {
  const [images, setImages] = useState([
    require('../assets/images/image1.jpg'),
    require('../assets/images/image2.jpeg'),
    require('../assets/images/image3.jpg'),
    require('../assets/images/image4.jpg'),
    require('../assets/images/image5.jpg'),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <SafeAreaView style={styles.centerView}>
      <View style={styles.container}>
        <SwiperFlatList
          ref={ref}
          autoplayLoop={false}
          showPagination={true}
          paginationActiveColor="red"
          paginationStyleItemActive={{width: 30, height: 8}}
          paginationStyleItemInactive={{width: 8, height: 8, borderRadius: 4}}
          paginationDefaultColor="black"
          paginationStyle={{position: 'absolute', top: 5, right: 5, gap: -15}}
          data={images}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          renderItem={({item, index}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={item}
                key={index}
                style={{
                  width: width,
                  height: 300,
                  borderRadius: 5,
                  resizeMode: 'contain',
                }}
              />
            </View>
          )}
        />
        <View style={styles.touchView}>
          {currentIndex == 0 ? null : (
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                setCurrentIndex(currentIndex - 1);
                ref.current.scrollToIndex({
                  index: parseInt(currentIndex) - 1,
                });
              }}>
              <Text style={styles.txt}>Previous</Text>
            </TouchableOpacity>
          )}

          <View style={styles.centerView}></View>

          {currentIndex == images.length - 1 ? null : (
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                setCurrentIndex(currentIndex + 1);
                ref.current.scrollToIndex({
                  index: parseInt(currentIndex) + 1,
                });
              }}>
              <Text style={styles.txt}>Next 1</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  child: {width, justifyContent: 'center'},
  txt: {color: 'black', fontSize: 15},
  buttons: {
    width: 100,
    height: 40,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  touchView: {flexDirection: 'row', height: 50},
  centerView: {flex: 1},
});
export default SwiperList;
