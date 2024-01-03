import {NavigationContainer} from '@react-navigation/native';
import Main from './src/screens/Main';
import { Provider } from './src/context/BlogContext';

const App = () => {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
};

export default () => {
  return <Provider>
     <App/>
  </Provider>
 } 
