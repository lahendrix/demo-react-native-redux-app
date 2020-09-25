import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './user-card.styles';

const UserCard = ({name, email, onSelect}) => (
  <View onPress={onSelect} style={[styles.mainContainer, styles.container]}>
    <TouchableOpacity onPress={onSelect}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </TouchableOpacity>
  </View>
);

export default UserCard;
