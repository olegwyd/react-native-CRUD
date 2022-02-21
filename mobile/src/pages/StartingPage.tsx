import React from 'react';
import { Link } from '@react-navigation/native';
import { styles } from '../styles/startingPage';
import { View } from 'react-native';

const StartingPage = () => {
  return (
    <View style={styles.container}>
      <Link
        style={styles.button}
        to={{
          screen: 'Registration',
        }}
      >
        Registration
      </Link>
      <Link
        style={styles.button}
        to={{
          screen: 'Autorization',
        }}
      >
        Autorization
      </Link>
    </View>
  );
};

export default StartingPage;
