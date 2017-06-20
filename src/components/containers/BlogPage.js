import React from 'react';
import _ from 'lodash';

import posts from 'constants/posts';
import BlogList from '../ui/BlogList';
import PieChart from '../ui/PieChart';

class BlogPage extends React.Component {

  constructor() {
    super();
    this.state = { posts };
    incrementLikes = bind(this.incrementLikes, this);
  }

  incrementLikes(postId) {
    this.setState((prevState, props) =>
      (
        {
          posts: _.map(
            this.state.posts,
            (post, key) => ((post.id === postId) ? {...post, likes: ++post.meta.likes} : post)
          )
        }
      )
    );
  }

  render() {

    return DOM.div(
      { },
      React.createElement(BlogList, { posts: this.state.posts, incrementLikes: incrementLikes }),
      React.createElement(PieChart, { columns:
        _.map(
          this.state.posts,
          (post, key) => (
            [post.meta.author, post.meta.likes]
          )
        )
      })
    );
  }
}

export default BlogPage;
