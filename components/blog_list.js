const BlogList = ( { blogs } ) => (
  DOM.div(
    { },
    _.map(
      blogs,
      (blog) => (
        React.createElement(BlogItem, { src: blog.image, text: blog.text, key: blog.id })
      )
    )
  )
);
