import React from 'react';
import {View, Text} from 'react-native';
import styles from './user-details.styles';

class UserDetails extends React.Component {
  render() {
    const {userDetails} = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{userDetails.name}</Text>
        <Text>{userDetails.email}</Text>
        <Text>{userDetails.username}</Text>
        <Text>{userDetails.website}</Text>
      </View>
    );
  }
}

export default UserDetails;
