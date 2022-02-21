import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import EditTodo from '../components/EditTodo';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';
import StartingPage from '../pages/StartingPage';
import Registration from '../pages/Registration';
import Autorization from '../pages/Autorization';

type RootStackParamList = {
  TodoList: undefined;
  AddTodo: undefined;
  EditTodo: undefined;
  StartingPage: undefined;
  Registration: undefined;
  Autorization: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='StartingPage' component={StartingPage} />
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='Autorization' component={Autorization} />
        <Stack.Screen name='TodoList' component={TodoList} />
        <Stack.Screen name='AddTodo' component={AddTodo} />
        <Stack.Screen name='EditTodo' component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
