const BlogList = ( { blogs } ) => (
  DOM.div(
    { },
    _.map(
      blogs,
      (blog, key) => (
        React.createElement(BlogItem, { src: blog.image, text: blog.text })
      )
    )
  )
);
