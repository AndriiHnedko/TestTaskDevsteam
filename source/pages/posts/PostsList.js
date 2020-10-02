import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import PostItem from './PostItem';

class PostsList extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <View>
        <FlatList data={props.posts} renderItem={this._renderItem} />
      </View>
    );
  }
  _renderItem = ({ item }) => {
    return (
      <PostItem post={item} key={item.id} navigation={this.props.navigation} />
    );
  };
}

const mapStateToProps = (state) => ({
  posts: state.posts.data,
});

export default connect(mapStateToProps)(PostsList);
