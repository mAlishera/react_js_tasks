import React, { DOM } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import BlogItem from './BlogItem';

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;
    const { incrementLikes } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem, { post, key: post.id, incrementLikes: () => incrementLikes(post.id) })
        )
      )
    );
  }
}

BlogList.propTypes = {
  posts: PropTypes.array,
  incrementLikes: PropTypes.func
};

export default BlogList;
