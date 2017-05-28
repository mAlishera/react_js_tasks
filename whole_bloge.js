// http://jsbin.com/pizowob/edit?html,js,output

const DOM = React.DOM;

const Image = (props) => (
  DOM.img(
   {
      src: props.src || 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
      alt: 'alt text',
      width: '200px',
      height: '200px',
    }
  )
);

const TextBox = ({ string }) => (
  DOM.span(null, string || 'default text')
);

const BlogItem = (props) => (
  DOM.div(
    { },
    React.createElement(Image, {src: props.src}),
    React.createElement(TextBox, {string: props.text}),
  )
);

const blogs = [
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 1'
  },
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 2'
  },
  {
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 3'
  }
];

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

ReactDOM.render(
  React.createElement(BlogList, { blogs }),
  document.getElementById('app')
);
