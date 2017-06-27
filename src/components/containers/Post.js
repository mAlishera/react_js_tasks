import React, { PropTypes } from 'react';
import BlogItem from '../ui/BlogItem';
import request from 'superagent';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: {} };
  }

  fetchPosts() {
    request.get(
      `http://localhost:3000/posts/${this.props.id}`,
      {},
      (err, res) => this.setState({ post: res.body })
    );
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    const { post } = this.state;
    return (
      React.createElement(BlogItem, { post, key: post.id })
    );
  }
}

Post.propTypes = {
  id: PropTypes.string
};

export default Post;
