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
