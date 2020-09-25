import React from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import {getUsers} from '../actions/users.actions';
import {connect} from 'react-redux';
import {IUser} from '../interfaces/IUser';
import UserCard from '../components/user-card';

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const renderItem = ({item}) => (
      <UserCard
        name={item.name}
        email={item.email}
        onSelect={(): void => {
          this.props.navigation.navigate('details', {
            userDetails: item,
            title: 'Custom',
          });
        }}
      />
    );
    return (
      <View>
        <FlatList
          data={this.props.users}
          renderItem={renderItem}
          keyExtractor={(item: IUser): string => item.id.toString()}
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
