import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen';
import CreateScreen from './CreateScreen';
import EditScreen from './EditScreen';
import Feather from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DateTimePickerScreen from './DateTimePickerScreen';
import CustomFlatList2 from './customFlatList2';
import SwiperFlatLists from './swiperFlatList';
import SwiperList from './swiperList';

const Main = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="swipe"
      screenOptions={{
        headerTitle: 'Blog Posts',
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 20, fontWeight: '700'},
      }}>
      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Show"
        component={ShowScreen}
        options={({route}) => ({
          headerRight: () => (
            <ShowScreen.HeaderRightButton id={route.params.id} />
          ),
        })}
      />
      <Stack.Screen name="Create" component={CreateScreen} />
      <Stack.Screen name="Edit" component={EditScreen} />
      <Stack.Screen name="Date" component={DateTimePickerScreen} />
      <Stack.Screen name="swipe" component={SwiperList} />
      <Stack.Screen name="CFL2" component={CustomFlatList2} />
      <Stack.Screen name="Swiper" component={SwiperFlatLists} />
    </Stack.Navigator>
  );
};

export default Main;
