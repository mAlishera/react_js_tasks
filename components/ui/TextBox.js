const TextBox = (props) => (
  DOM.span({}, props.children )
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

TextBox.defaultProps = {
  children: 'default text'
}
