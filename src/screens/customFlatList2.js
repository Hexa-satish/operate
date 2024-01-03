import {useRef, useState} from 'react';
import {Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';

const CustomFlatList2 = () => {
  const {width, height} = Dimensions.get('window');
  const [data, setData] = useState([1, 1, 1, 1, 1]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{height: height / 2}}>
        <FlatList
          ref={ref}
          horizontal
          keyExtractor={(item, index) => item?.id}
          onScroll={e => {
            const x = e.nativeEvent.contentOffset.x;
            setCurrentIndex((x / width).toFixed(0));
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: width,
                  height: height / 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  disabled={true}
                  style={{
                    width: '90%',
                    height: '90%',
                    backgroundColor: 'green',
                    borderRadius: 10,
                  }}></TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          return (
            <View
              style={{
                width: currentIndex == index ? 50 : 8,
                height: currentIndex == index ? 10 : 8,
                borderRadius: currentIndex == index ? 5 : 4,
                backgroundColor: currentIndex == index ? 'green' : 'gray',
                marginLeft: 5,
              }}></View>
          );
        })}
      </View>

      <View
        style={{
          width: width,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        {currentIndex == 0 ? null : (
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              backgroundColor: 'orange',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setCurrentIndex(currentIndex - 1);
              ref.current.scrollToIndex({
                index: parseInt(currentIndex) - 1,
              });
            }}>
            <Text>Previous</Text>
          </TouchableOpacity>
        )}
        <View
          style={{
            flex: 1,
          }}></View>
        {data.length - 1 == currentIndex ? null : (
          <TouchableOpacity
            style={{
              width: 100,
              height: 40,
              backgroundColor: 'orange',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => {
              setCurrentIndex(currentIndex + 1);
              ref.current.scrollToIndex({
                index: parseInt(currentIndex) + 1,
              });
            }}>
            <Text>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default CustomFlatList2;
