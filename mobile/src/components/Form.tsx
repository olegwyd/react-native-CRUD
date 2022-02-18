import React from 'react';
import { Formik } from 'formik';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

import { ITodo } from '../../../server/src/models/Todo';
import { styles } from '../styles/form';
import { scheme } from '../validation/todoFormValidation';

type Props = {
  todo: ITodo;
  onSubmit: any;
  route: any;
};

export const Form: React.FC<Props> = ({ route, todo, onSubmit }) => {
  return (
    <View>
      <Text style={styles.title}>
        {route.params ? 'Edit Task' : 'Create new Task'}
      </Text>
      <Formik
        initialValues={todo}
        onSubmit={onSubmit}
        validationSchema={scheme}
      >
        {({
          handleChange,
          handleSubmit,
          values,
          setFieldValue,
          errors,
          setFieldTouched,
          touched,
          isValid,
        }) => (
          <View>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('title')}
              onBlur={() => setFieldTouched('title')}
              value={values.title}
            />
            {touched.title && errors.title && <Text>{errors.title}</Text>}
            <TextInput
              style={styles.textarea}
              multiline
              numberOfLines={4}
              onChangeText={handleChange('description')}
              onBlur={() => setFieldTouched('description')}
              value={values.description}
            />
            {touched.description && errors.description && (
              <Text>{errors.description}</Text>
            )}
            <TextInput
              style={styles.input}
              onChangeText={handleChange('year')}
              onBlur={() => setFieldTouched('year')}
              value={values.year}
            />
            {touched.year && errors.year && <Text>{errors.year}</Text>}
            <CheckBox
              center
              title="Public"
              checked={values.public}
              onPress={() => setFieldValue('public', !values.public)}
            />
            <CheckBox
              center
              title="Completed"
              checked={values.completed}
              onPress={() => setFieldValue('completed', !values.completed)}
            />
            <TouchableOpacity
              disabled={!isValid}
              style={styles.button}
              onPress={() => handleSubmit()}
            >
              <Text style={styles.buttonText}>
                {route.params ? 'Save' : 'Add'}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};
