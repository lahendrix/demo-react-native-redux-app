import React from 'react';
import {View, Text} from 'react-native';

class UserDetails extends React.Component {
  render() {
    const {userDetails} = this.props.route.params;

    return (
      <View>
        <Text>Details Screen</Text>
        <Text>{userDetails.name}</Text>
        <Text>{userDetails.email}</Text>
        <Text>{userDetails.username}</Text>
        <Text>{userDetails.website}</Text>
      </View>
    );
  }
}

export default UserDetails;
