const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, {src: props.src}),
    React.createElement(TextBox, {}, props.text),
  )
);
