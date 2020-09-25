/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './App.styles';
import {createStore, Store} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store: Store = createStore(rootReducer);
const Stack = createStackNavigator();
const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('details')}
      />
    </View>
  );
};
const Details = () => {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
