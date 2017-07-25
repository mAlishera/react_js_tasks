import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from '../ui/BlogItem';
import request from 'superagent';

import _ from 'lodash';

import { apiPath } from 'helpers/routes/api';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { post: { meta: {} } };
    this.incrementLikes = _.bind(this.incrementLikes, this);
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    const postId = this.props.id;
    const self = this;
    request.get(
      `${apiPath}/posts/${postId}`
    ).end(function(err, res) {
      self.setState({ post: res.body });
    });
  }

  incrementLikes() {
    const { post } = this.state;
    this.setState({ post: { ...post, meta: { ...post.meta, likes: ++post.meta.likes }}});
  }

  render() {
    const { post } = this.state;
    return (
      React.createElement(BlogItem, { post, key: post.id, incrementLikes: () => this.incrementLikes })
    );
  }
}

Post.propTypes = {
  id: PropTypes.string,
  match: PropTypes.object
};

export default Post;
