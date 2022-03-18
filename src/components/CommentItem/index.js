// Write your code here
import {formatDistanceToNow} from 'date-fns'

import {Component} from 'react'

import './index.css'

class CommentItem extends Component {
  state = {isLiked: false}

  onClickLikeComment = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  render() {
    const {commentItem, deleteComment} = this.props
    const {isLiked} = this.state
    const {id, name, comment, date} = commentItem

    const onDeleteComment = () => {
      deleteComment(id)
    }

    const imgUrl = isLiked
      ? ' https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
    return (
      <li className="comment-item">
        <div className="comment-header">
          <h1 className="profile-image">{name[0].toUpperCase()}</h1>
          <h1>{name}</h1>
          <p>{formatDistanceToNow(new Date(date))} ago</p>
        </div>
        <p>{comment}</p>
        <div className="button-container">
          <div className="button">
            <button type="button" onClick={this.onClickLikeComment}>
              <img src={imgUrl} alt="like" />
            </button>
            <p>Like</p>
          </div>
          <div className="button">
            <button type="button" onClick={onDeleteComment} testid="delete">
              <img
                src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
                alt="delete"
              />
            </button>
          </div>
        </div>
      </li>
    )
  }
}
export default CommentItem
