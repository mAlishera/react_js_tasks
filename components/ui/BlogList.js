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
