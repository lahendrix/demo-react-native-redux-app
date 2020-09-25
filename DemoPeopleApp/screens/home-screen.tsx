import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {getUsers} from '../actions/users.actions';
import {connect} from 'react-redux';
import {IUser} from '../interfaces/IUser';
import {TouchableOpacity} from 'react-native-gesture-handler';

const UserCard = ({name, email, onSelect}) => (
  <View onPress={onSelect}>
    <TouchableOpacity onPress={onSelect}>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </TouchableOpacity>
  </View>
);

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const renderItem = ({item}) => (
      <UserCard
        name={item.name}
        email={item.email}
        onSelect={() => {
          console.log('onSelect', item);
          this.props.navigation.navigate('details', {
            userDetails: item,
            title: 'Custom',
          });
        }}
      />
    );
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('details')}
        />
        <FlatList
          data={this.props.users}
          renderItem={renderItem}
          keyExtractor={(item: IUser) => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = {
  getUsers: getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
