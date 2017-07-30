import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from 'semantic-ui-react';
import Link from '../elements/Link';
import { postsPath } from 'helpers/routes/index';
import Meta from './Meta.jsx';
import Like from './Like.jsx';

const BlogItem = ({post, incrementLikes}) => (
  <Item>
    <Image {...post.image} />
    <Item.Content>
      <Link to={postsPath(post.id)}>{post.text}</Link>
      <Meta {...post.meta} />
      <Like postId={post.id} count={post.meta.likes} incrementLikes={incrementLikes} />
    </Item.Content>
  </Item>
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
  }),
  incrementLikes: React.PropTypes.func
};

export default BlogItem;
