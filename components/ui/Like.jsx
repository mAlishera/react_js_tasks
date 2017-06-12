class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: props.count };
    this.handleClick = bind(this.handleClick, this);
  }

  handleClick(e) {
    this.setState({ count: this.state.count + 1});
  }

  render() {
    return (
      <div className='count'>
        <p>Like: {this.state.count}</p>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}

Like.propTypes = {
  count: PropTypes.number
}

Like.defaultProps = {
  count: 0
}
