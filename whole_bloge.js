// lesson_one - http://jsbin.com/wezocenici/edit?html,js,output
// lesson_two - http://jsbin.com/yiresin/edit?js,console,output#J:L137
// lesson_tree - http://jsbin.com/bozasij/edit?html,js,console,output

const {DOM, PropTypes} = React;
const {bind} = _;

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
      author: "author 1",
      createdAt: "2017-05-06",
      updatedAt: "2017-05-06",
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
      author: "author 2",
      createdAt: "2017-05-06",
      updatedAt: "2017-05-06",
      likes: 2
    }
  },
  {
    id: 2,
    image: {},
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

  constructor() {
    super();
    this.state = { posts };
    incrementLikes = bind(this.incrementLikes, this);
  }

  incrementLikes(postId) {
    this.setState((prevState, props) =>
      (
        {
          posts: _.map(
            this.state.posts,
            (post, key) => ((post.id === postId) ? {...post, likes: ++post.meta.likes} : post)
          )
        }
      )
    );
  }

  render() {

    return DOM.div(
      { },
      React.createElement(BlogList, { posts: this.state.posts, incrementLikes: incrementLikes }),
      React.createElement(PieChart, { columns:
        _.map(
          this.state.posts,
          (post, key) => (
            [post.meta.author, post.meta.likes]
          )
        )
      })
    );
  }
}

const BlogItem = ({post, incrementLikes}) => (
  DOM.div(
    { },
    React.createElement(Image, {src: post.image.src}),
    React.createElement(TextBox, {}, post.text),
    React.createElement(Meta, post.meta),
    React.createElement(Like,
      { count: post.meta.likes, postId: post.id, incrementLikes })
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

class BlogList extends React.Component {
  render() {
    const { posts } = this.props;
    const { incrementLikes } = this.props;

    return DOM.div(
      null,
      _.map(
        posts,
        (post) => (
          React.createElement(BlogItem, { post: post, key: post.id, incrementLikes: () => incrementLikes(post.id) })
        )
      )
    )
  }
}

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

const Like = ({postId, count, incrementLikes}) => (
  <div className='count'>
    <p>Like: {count}</p>
    <button onClick={() => incrementLikes(postId)}>+</button>
  </div>
)

Like.propTypes = {
  count: PropTypes.number
}

Like.defaultProps = {
  count: 0
}

const Meta = ({author, createdAt, updatedAt}) => (
  <div className='meta'>
    <ul>
      <li>author: { author }</li>
      <li>created at: { createdAt }</li>
      <li>updated at: { updatedAt }</li>
    </ul>
  </div>
);

Meta.propTypes = {
  author: React.PropTypes.string,
  createdAt: React.PropTypes.string,
  updatedAt: React.PropTypes.string
};

Meta.defaultProps = {
  author: "author",
  createdAt: "2017-05-06",
  updatedAt: "2017-05-06"
};

const TextBox = (props) => (
  DOM.span({}, props.children )
);

TextBox.propTypes = {
  children: PropTypes.string.isRequired
}

TextBox.defaultProps = {
  children: 'default text'
}

class PieChart extends React.Component {
  componentDidMount() {
    this.chart = c3.generate(
      {
        bindto: ReactDOM.findDOMNode(this.refs.chart),
        data: {
          columns: this.props.columns,
          type: 'pie'
        }
      }
    )
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({columns: newProps.columns});
  }

  render() {
    return (
      <div ref="chart" />
    );
  }
}

ReactDOM.render(
  React.createElement(BlogPage, { posts }),
  document.getElementById('app')
);
