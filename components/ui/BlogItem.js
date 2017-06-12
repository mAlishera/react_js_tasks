const BlogItem = ({post}) => (
  DOM.div(
    { },
    React.createElement(Image, {src: post.image.src}),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Meta, post.meta),
    React.createElement(Like,
 { count: post.meta.likes })
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
}
