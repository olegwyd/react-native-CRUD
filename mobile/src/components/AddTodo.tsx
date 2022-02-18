import React from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import todoService from '../service/todo.service';
import { ITodo } from '../../../server/src/models/Todo';
import { Form } from './Form';

type RootStackParamList = {
  TodoList: object | undefined;
};

const AddTodo: React.FC = () => {
  const queryClient = useQueryClient();
  const route = useRoute();
  const todo: any = {
    title: '',
    description: '',
    year: '',
    public: false,
    completed: false,
  };

  const { mutateAsync } = useMutation(todoService.addTodo.bind(todoService));
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = async (data: ITodo) => {
    await mutateAsync({ ...data });
    queryClient.invalidateQueries('todos');
    navigation.navigate('TodoList');
  };
  return <Form todo={todo} onSubmit={onSubmit} route={route} />;
};

export default AddTodo;
