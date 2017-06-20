import React, { DOM } from 'react';
import PropTypes from 'prop-types';

const TextBox = (props) => (
  DOM.span({}, props.children )
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

TextBox.defaultProps = {
  children: 'default text'
}

export default TextBox;
