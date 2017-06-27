import React, { DOM } from 'react';

import request from 'superagent';

import _ from 'lodash';

import BlogList from '../ui/BlogList';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
    this.incrementLikes = _.bind(this.incrementLikes, this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    request.get(
      'http://localhost:3001/',
      {},
      (err, res) => this.setState({ posts: res.body})
    );
  }

  incrementLikes(postId) {
    this.setState((prevState) =>
      ({
        posts: _.map(
          prevState.posts, //prevState, так как this.state может быть модифицирован до вызова этой функции
          (post) => ((post.id === postId) ? {...post, likes: ++post.meta.likes} : post)
        )
      })
    );
  }

  render() {
    return DOM.div(
      null, //можно не создавать пустой объект (операция создания объекта дороже)
      React.createElement(BlogList, { posts: this.state.posts, incrementLikes: this.incrementLikes })
    );
  }
}

export default BlogPage;
