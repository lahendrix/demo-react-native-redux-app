import React from 'react';
import {View, Text, Button, FlatList, SectionList} from 'react-native';
import {getUsers} from '../actions/users.actions';
import {connect} from 'react-redux';
import {IUser} from '../interfaces/IUser';
import UserCard from '../components/user-card';
import {groupBy} from 'lodash';
import styles from './home-screen.styles';

class Home extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  renderItem = ({item}) => (
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

  renderSectionHeader = ({section: {title}}) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{title}</Text>
      </View>
    );
  };

  render() {
    let groupedUsers = groupBy(this.props.users, (item) =>
      item.name.substr(0, 1).toUpperCase(),
    );

    let sections: Array<{title: string; data: IUser[]}> = Object.keys(
      groupedUsers,
    )
      .sort()
      .map((title: string) => {
        return {title, data: groupedUsers[title]};
      });

    return (
      <View>
        <SectionList
          sections={sections}
          keyExtractor={(item: IUser, index: number) =>
            item.id.toString() + index
          }
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
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
