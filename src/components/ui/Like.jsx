/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const Like = () => (
  <div className='count'>
    <p>Like: 1</p>
    <Button onClick={() => console.log("+Like")}>+</Button>
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
