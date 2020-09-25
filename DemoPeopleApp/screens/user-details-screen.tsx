import React from 'react';
import {View, Text, Linking, Platform} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './user-details.styles';

class UserDetails extends React.Component {
  dialCall = (phone) => {
    let phoneNumber = '';
    if (Platform.OS !== 'android') {
      phoneNumber = `tel:${phone}`;
    } else {
      phoneNumber = `telprompt:${phone}`;
    }
    return Linking.openURL(phoneNumber);
  };

  openMaps = ({lat, lng, userName}) => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${lat},${lng}`;
    const url = Platform.select({
      ios: `${scheme}${userName}@${latLng}`,
      android: `${scheme}${latLng}(${userName})`,
    });

    return Linking.openURL(url);
  };

  openWebsite = ({website}) => {
    return Linking.openURL(`http://${website}`);
  };

  render() {
    const {userDetails} = this.props.route.params;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{userDetails.name}</Text>
        <Text style={styles.subTitle}>{userDetails.company.name}</Text>
        <Text style={styles.sectionHeader}>Contact Information</Text>
        <Text style={styles.sectionText}>{userDetails.email}</Text>
        <View>
          <TouchableOpacity
            onPress={() => {
              this.openMaps({
                ...userDetails.address.geo,
                userName: userDetails.name,
              });
            }}>
            <Text style={styles.sectionText}>{userDetails.address.street}</Text>
            {userDetails.address.suite && (
              <Text style={styles.sectionText}>
                {userDetails.address.suite}
              </Text>
            )}
            <Text style={styles.sectionText}>
              {userDetails.address.city}, {userDetails.address.zipcode}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.dialCall(userDetails.phone)}>
            <Text style={styles.sectionText}>{userDetails.phone}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionHeader}>Other Information</Text>
        <Text style={styles.sectionText}>Username: {userDetails.username}</Text>
        <TouchableOpacity
          onPress={() => {
            this.openWebsite({website: userDetails.website});
          }}>
          <Text style={styles.sectionText}>Website: {userDetails.website}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default UserDetails;
