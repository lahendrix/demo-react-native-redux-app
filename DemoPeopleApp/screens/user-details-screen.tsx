import React from 'react';
import {View, Text} from 'react-native';
import styles from './user-details.styles';

class UserDetails extends React.Component {
  render() {
    const {userDetails} = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{userDetails.name}</Text>
        <Text style={styles.subTitle}>{userDetails.company.name}</Text>
        <Text style={styles.subTitle}>Contact Information</Text>
        <Text>{userDetails.email}</Text>
        <View>
          <Text>{userDetails.address.street}</Text>
          {userDetails.address.suite && (
            <Text>{userDetails.address.suite}</Text>
          )}
          <Text>
            {userDetails.address.city}, {userDetails.address.zipcode}
          </Text>
          <Text>{userDetails.phone}</Text>
        </View>

        <Text style={styles.subTitle}>Other Information</Text>
        <Text>Username: {userDetails.username}</Text>
        <Text>Website: {userDetails.website}</Text>
      </View>
    );
  }
}

export default UserDetails;
