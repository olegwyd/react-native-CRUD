import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import { useQuery } from 'react-query';
import { Link } from '@react-navigation/native';

import todoService from '../service/todo.service';
import { styles } from '../styles/TodoList';
import Todo from './Todo';
import Filter from './Filter';
import { Pagination } from './Pagination';

const TodoList: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data } = useQuery(['todos', page], () =>
    todoService.getAllFiltered({ page }),
  );
  return (
    <View style={styles.container}>
      <Filter page={page} setPage={setPage} />
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
          <Pagination
            page={page}
            setPage={setPage}
            numberOfPage={data.numbeOfPage}
          />
        </>
      )}
    </View>
  );
};

export default TodoList;
