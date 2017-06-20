import React from 'react';
import PropTypes from 'prop-types';

const Meta = ({author, createdAt, updatedAt}) => (
  <div className='meta'>
    <ul>
      <li>author: { author }</li>
      <li>created at: { createdAt }</li>
      <li>updated at: { updatedAt }</li>
    </ul>
  </div>
);

Meta.propTypes = {
  author: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

Meta.defaultProps = {
  author: "author",
  createdAt: "2017-05-06",
  updatedAt: "2017-05-06"
};

export default Meta;
