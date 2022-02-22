import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import SharedTextInput from '../components/TextInput';
import userService from '../service/user.service';
import { scheme } from '../validation/register.validation';

type RegForm = {
  userName: string;
  email: string;
  password: string;
  varifyPassword: string;
};

const regForm: RegForm = {
  userName: '',
  email: '',
  password: '',
  varifyPassword: '',
};

const FormFieldsData = [
  {
    name: 'userName',
    label: 'userName',
  },
  {
    name: 'email',
    label: 'Email',
  },
  {
    name: 'password',
    label: 'Password',
  },
  {
    name: 'varifyPassword',
    label: 'Varify Password',
  },
];

type RootStackParamList = {
  TodoList: undefined;
};

const Registration = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSubmit = async (values: RegForm) => {
    const user = await userService.register(values);
    localStorage.setItem('token', user?.data?.token);
    if (user) navigation.navigate('TodoList');
  };
  return (
    <View>
      <Text>Registration</Text>
      <Formik
        onSubmit={onSubmit}
        initialValues={regForm}
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
              <Text>Registration</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Registration;
