const posts = [
  {
    id: 0,
    image: {
      src: 'https://assets-cdn.github.com/images/modules/logos_page/Octocat.png',
      alt: 'alt text',
      width: '200px',
      height: '200px'
    },
    text: 'text 1',
    meta: {
      author: 'author 1',
      createdAt: '2017-05-06',
      updatedAt: '2017-05-06',
      likes: 1
    }
  },
  {
    id: 1,
    image: {
      src: 'https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.2-hp.gif',
      alt: 'alt text',
      width: '200px',
      height: '200px'
    },
    text: 'text 2',
    meta: {
      author: 'author 2',
      createdAt: '2017-05-06',
      updatedAt: '2017-05-06',
      likes: 2
    }
  },
  {
    id: 2,
    image: {},
    text: 'text 3',
    meta: {
      author: 'author 3',
      createdAt: '2017-05-06',
      updatedAt: '2017-05-06',
      likes: 3
    }
  }
];

export default posts;
