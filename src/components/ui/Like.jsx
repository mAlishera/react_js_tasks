import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = ({postId, count, incrementLikes}) => (
  <div className='count'>
    <p>Like: {count}</p>
    <Button onClick={() => incrementLikes(postId)}>+</Button>
  </div>
);

Like.propTypes = {
  count: PropTypes.number,
  postId: PropTypes.number,
  incrementLikes: PropTypes.func
};

Like.defaultProps = {
  count: 0
};

export default Like;
