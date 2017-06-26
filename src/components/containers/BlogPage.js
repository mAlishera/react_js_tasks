import React, { DOM } from 'react';

import _ from 'lodash';

import posts from 'constants/posts';
import BlogList from '../ui/BlogList';

class BlogPage extends React.Component {
  constructor() {
    super();
    this.state = { posts };
    this.incrementLikes = _.bind(this.incrementLikes, this);
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
