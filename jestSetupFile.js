/* eslint-disable no-undef */
import 'react-native-gesture-handler/jestSetup';

// Mock async-storage
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock react-navigation stack navigator
jest.mock('@react-navigation/stack', () => {
  return {
    createStackNavigator: jest.fn().mockReturnValue({
      Navigator: jest.fn(({children}) => children),
      Screen: jest.fn(({children}) => children),
    }),
  };
});
jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon');
jest.mock('react-native-gesture-handler', () => {
  return {
    TouchableOpacity: jest.fn(({children}) => children),
  };
});

jest.mock('react-native/Libraries/Utilities/BackHandler', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
});

jest.mock('redux-persist/lib/integration/react', () => ({
  PersistGate: ({children}) => children,
}));
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    NavigationContainer: ({children}) => children,
  };
});
