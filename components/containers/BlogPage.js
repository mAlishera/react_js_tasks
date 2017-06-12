class BlogPage extends React.Component {

  constructor() {
    super();
    this.state = { posts };
    this.incrementLikes = this.incrementLikes.bind(this);
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
      React.createElement(BlogList, { posts: this.state.posts, incrementLikes: this.incrementLikes }),
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
