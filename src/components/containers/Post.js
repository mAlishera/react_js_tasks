import React from 'react';
import PropTypes from 'prop-types';

import BlogItem from '../ui/BlogItem';
import { Item } from 'semantic-ui-react';

// const Post = ({item, like}) => item ? React.createElement(
//   BlogItem, {...item, like }) : false;

const Post = ({ item }) => (
  <Item.Group>
    {item && (<BlogItem item={item}/>)}
  </Item.Group>
);

Post.propTypes = {
  item: PropTypes.object,
};

export default Post;
