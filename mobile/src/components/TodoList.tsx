import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { Link } from '@react-navigation/native';

import todoService from '../service/todo.service';
import { styles } from '../styles/TodoList';

import Todo from './Todo';

const TodoList: React.FC = () => {
  const { data } = useQuery('todos', () => todoService.getAllTodos());
  return (
    <View style={styles.container}>
      <Link
        style={styles.button}
        to={{
          screen: 'AddTodo',
        }}
      >
        Create new Task
      </Link>
      <Text style={styles.tittle}>Tasks:</Text>

      {data && (
        <>
          <View style={styles.itemWrapper}>
            <FlatList
              data={data}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <Todo
                  title={item.title}
                  description={item.description}
                  id={item._id}
                  year={item.year}
                  completed={item.completed}
                  isPublic={item.public}
                />
              )}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default TodoList;
