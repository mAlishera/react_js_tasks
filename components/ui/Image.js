const Image = ({src, width, height, alt}) => (
  React.createElement(
    'img',
    { src, width, height, alt }
  )
);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
}

Image.defaultProps = {
  src: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
  alt: 'alt text',
  width: '200px',
  height: '200px'
}
