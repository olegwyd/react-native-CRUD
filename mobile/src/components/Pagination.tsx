import React from 'react';
import { View, Text, Button } from 'react-native';

type Props = {
  page: number;
  setPage: () => void;
  numberOfPage: number;
}

export const Pagination = ({ page, setPage, numberOfPage }: Props) => {
  const nextPage = () => {
    page != numberOfPage ? setPage(page + 1) : null;
  };

  const previousPage = () => {
    page != 1 && setPage(page - 1);
  };

  return (
    <View>
      <Text>Current page: {page}</Text>
      <View>
        <Button title='<' onPress={previousPage} />
        <Button title='>' onPress={nextPage} />
      </View>
    </View>
  );
};
