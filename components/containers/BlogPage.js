import React, {DOM} from 'react';

import BlogList from '../ui/BlogList';

const posts = [
  {
    id: 0,
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 1',
    meta: {
      author: "author 1",
      createdAt: "2017-05-06",
      updatedAt: "2017-05-06",
      likes: 1
    }
  },
  {
    id: 1,
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 2',
    meta: {
      author: "author 2",
      createdAt: "2017-05-06",
      updatedAt: "2017-05-06",
      likes: 2
    }
  },
  {
    id: 2,
    image: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
    text: 'text 3',
    meta: {
      author: "author 3",
      createdAt: "2017-05-06",
      updatedAt: "2017-05-06",
      likes: 3
    }
  }
];

class BlogPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts };
  }

  render() {

    return DOM.div(
      { },
      React.createElement(BlogList, { posts: this.state.posts })
    );
  }
}

export default BlogPage;
