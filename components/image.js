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
