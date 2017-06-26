import React, { DOM } from 'react';
import PropTypes from 'prop-types';

import Image from './Image';
import TextBox from './TextBox';
import Meta from './Meta.jsx';
import Like from './Like.jsx';

const BlogItem = ({post, incrementLikes}) => (
  DOM.div(
    { },
    React.createElement(Image, {src: post.image.src}),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Meta, post.meta),
    React.createElement(Like,
      { count: post.meta.likes, postId: post.id, incrementLikes })
  )
);

BlogItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    meta: PropTypes.shape({
      author: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      likes: PropTypes.number
    }),
    image: PropTypes.shape(Image.propTypes)
  })
};

export default BlogItem;
