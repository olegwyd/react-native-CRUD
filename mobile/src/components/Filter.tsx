import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import { useSearchParams } from 'react-router-native';
import { useQueryClient } from 'react-query';

import todoService from '../service/todo.service';

const Filter = () => {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState({ name: '', description: '' });
  const find = async () => {
    const res = await todoService.getAllFiltered(search);
    queryClient.setQueriesData('todos', { res });
    setSearchParams(search);
  };
  useEffect(() => {
    const name = searchParams.get('name');
    const description = searchParams.get('description');
    name && setSearch({ ...search, name: name });
    description && setSearch({ ...search, description: description });
    const res = todoService.getAllFiltered(search);
    queryClient.setQueriesData('todos', res);
  }, []);
  return (
    <View>
      <View>
        <Text>Find by title</Text>
        <TextInput
          value={search.name}
          onChangeText={(text) => setSearch({ ...search, name: text })}
          placeholder='title'
        />
      </View>
      <View>
        <Text>Find by description</Text>
        <TextInput
          value={search.description || ''}
          onChangeText={(text) => setSearch({ ...search, description: text })}
          placeholder='text'
        />
      </View>
      <View>
        <Button title='Find' onPress={find} />
      </View>
    </View>
  );
};

export default Filter;
