import React from 'react';
import { View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useQueryClient, useMutation, useQuery } from 'react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import todoService from '../service/todo.service';
import { ITodo } from '../../../server/src/models/Todo';
import { Form } from './Form';

type RootStackParamList = {
  TodoList: undefined;
};

const EditTodo: React.FC = () => {
  const queryClient = useQueryClient();
  const route = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { mutateAsync } = useMutation(todoService.editTodo.bind(todoService));

  const id = route.params?.id;

  const { data, isLoading } = useQuery(id, () => todoService.getSingleTodo(id));

  const onSubmit = async (formData: ITodo) => {
    const data = {
      title: formData.title,
      description: formData.description,
      year: formData.year,
      public: formData.public,
      completed: formData.completed,
      id: formData._id,
    };
    await mutateAsync({ ...data });
    queryClient.invalidateQueries();
    navigation.navigate('TodoList');
  };

  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return <Form todo={data} onSubmit={onSubmit} route={route} />;
};

export default EditTodo;
