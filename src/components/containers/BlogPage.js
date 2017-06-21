import React, { DOM } from 'react';
// import _ from 'lodash';
// import { bind } from 'lodash';

import posts from 'constants/posts';
import BlogList from '../ui/BlogList';

class BlogPage extends React.Component {

  constructor() {
    super();
    this.state = { posts };
    this.incrementLikes = this.incrementLikes.bind(this);
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
      React.createElement(BlogList, { posts: this.state.posts, incrementLikes: this.incrementLikes }),
    );
  }
}

export default BlogPage;
