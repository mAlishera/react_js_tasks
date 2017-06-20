import React, { DOM } from 'react';
import _ from 'lodash';

import BlogItem from './BlogItem';
import PropTypes from 'prop-types';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;
    const { incrementLikes } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem, { post: post, key: post.id, incrementLikes: () => incrementLikes(post.id) })
        )
      )
    )
  }
}

export default BlogList;
