import React from 'react';
import { Text, View, Button } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import todoService from '../service/todo.service';
import { styles } from '../styles/Todo';

interface Props {
  title: string;
  description: string;
  id: string;
  year: string;
  completed: boolean;
  isPublic: boolean;
}

type RootStackParamList = {
  EditTodo: object;
};

const Todo = ({ title, description, completed, isPublic, year, id }: Props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(todoService.deleteTodo.bind(todoService));

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries();
  };
  const editTodo = () => {
    navigation.navigate('EditTodo', {
      title,
      description,
      completed,
      isPublic,
      year,
      id,
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.title}>
            {title}
            <Text style={styles.year}>need to complete in: {year} year</Text>
          </Text>
        </View>
        <Text>Description:</Text>
        <Text style={styles.description}>{description}</Text>
        <Text>{completed ? 'Complited' : 'Complit'}</Text>
        <Text>{isPublic ? 'Public' : 'Private'}</Text>
      </View>

      <View>
        <View style={styles.buttonWrapper}>
          <Button title='Edit' onPress={() => editTodo()} />
          <Button title='Delete' onPress={() => remove()} />
        </View>
      </View>
    </View>
  );
};

export default Todo;
