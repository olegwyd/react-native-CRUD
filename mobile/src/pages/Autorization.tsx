import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SharedTextInput from '../components/TextInput';
import userService from '../service/user.service';
import { scheme } from '../validation/auth.validation';

type AuthForm = {
  email: string;
  password: string;
};

const authForm: AuthForm = {
  email: '',
  password: '',
};

const FormFieldsData = [
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
  },
];

type RootStackParamList = {
  TodoList: undefined;
};

const Autorization = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = async (values: AuthForm) => {
    const user = await userService.login(values);
    localStorage.setItem('token', user.data);
    if (user) navigation.navigate('TodoList');
  };
  return (
    <View>
      <Text>Registration</Text>
      <Formik
        onSubmit={onSubmit}
        initialValues={authForm}
        validationSchema={scheme}
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

            <TouchableOpacity onPress={() => handleSubmit()}>
              <Text>Autorization</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Autorization;
