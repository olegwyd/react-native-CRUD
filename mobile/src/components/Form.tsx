import React from 'react';
import { Formik } from 'formik';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { ParamListBase, RouteProp } from '@react-navigation/native';

import { ITodo } from '../../../server/src/models/Todo';
import SharedTextInput from './TextInput';
import { scheme } from '../validation/todoFormValidation';
import { FormFieldsData } from './TextInput';
import { styles } from '../styles/form';

type Props = {
  todo: ITodo;
  onSubmit: () => void;
  route: RouteProp<ParamListBase>;
};

export const Form: React.FC<Props> = ({ route, todo, onSubmit }) => {
  return (
    <View>
      <Text style={styles.title}>
        {route.params ? 'Edit Task' : 'Create new Task'}
      </Text>
      <Formik
        initialValues={todo}
        validationSchema={scheme}
        onSubmit={onSubmit}
      >
        {({ handleSubmit, ...formik }) => (
          <View>
            {FormFieldsData.map(({ name, label }) => (
              <SharedTextInput
                error={false}
                name={name}
                key={name}
                text={label}
                {...formik}
              />
            ))}
            <CheckBox
              center
              title='Public'
              checked={formik.values.public}
              onPress={() =>
                formik.setFieldValue('public', !formik.values.public)
              }
            />
            <CheckBox
              center
              title='Completed'
              checked={formik.values.completed}
              onPress={() =>
                formik.setFieldValue('completed', !formik.values.completed)
              }
            />
            <TouchableOpacity
              disabled={!formik.isValid}
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
