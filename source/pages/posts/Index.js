import React from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../redux/reducers/Posts';
import Preloader from '../../components/preloader/Index';
import PostsList from './PostsList';

class Posts extends React.PureComponent {
  componentDidMount() {
    const { props } = this;
    props.getPosts();
  }
  render() {
    const { props } = this;
    if (props.loading) {
      return <Preloader />;
    }
    if (!props.loading) {
      return <PostsList navigation={props.navigation} />;
    }
  }
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
});

export default connect(mapStateToProps, {
  getPosts,
})(Posts);
