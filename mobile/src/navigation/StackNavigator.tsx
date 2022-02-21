import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import EditTodo from '../components/EditTodo';
import TodoList from '../components/TodoList';
import AddTodo from '../components/AddTodo';

type RootStackParamList = {
  TodoList: undefined;
  AddTodo: undefined;
  EditTodo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TodoList" component={TodoList} />
        <Stack.Screen name="AddTodo" component={AddTodo} />
        <Stack.Screen name="EditTodo" component={EditTodo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
