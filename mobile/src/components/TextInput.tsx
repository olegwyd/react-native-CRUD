import * as React from 'react';
import { TextInput, SafeAreaView, Text } from 'react-native';
import { useField } from 'formik';

import { styles } from '../styles/form';

interface Input {
  name: string;
  text: string;
  [x: string]: any;
  error: boolean;
}

export const FormFieldsData = [
  {
    name: 'title',
    label: 'Title',
  },
  {
    name: 'description',
    label: 'Description',
  },
  {
    name: 'year',
    label: 'Year',
  },
];

const SharedTextInput = ({ name, text, ...formik }: Input) => {
  const title = formik.error || text;
  const [field, meta] = useField(name);

  return (
    <SafeAreaView>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        value={formik.values[name]}
        style={styles.input}
      />
      <Text style={styles.error}>
        {meta.touched || field.checked ? meta.error : null}
      </Text>
    </SafeAreaView>
  );
};

export default SharedTextInput;
