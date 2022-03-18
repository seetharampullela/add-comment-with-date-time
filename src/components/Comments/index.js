import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {
    CommentList: [],
    name: '',
    comment: '',
    count: 0,
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
    }
    if (newComment.name !== '') {
      this.setState(prevState => ({
        CommentList: [...prevState.CommentList, newComment],
        name: '',
        comment: '',
        count: prevState.count + 1,
      }))
    }
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  deleteComment = id => {
    const {CommentList} = this.state
    const filteredComments = CommentList.filter(each => each.id !== id)
    this.setState(prevState => ({
      CommentList: filteredComments,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {CommentList, count, name, comment} = this.state

    return (
      <div className="bg-container">
        <div className="form-image">
          <form onSubmit={this.onAddComment} className="input-container">
            <h1> Comments </h1>
            <p>Say something about 4.0 technologies </p>
            <input
              type="text"
              placeholder="Your Name"
              className="input-text"
              onChange={this.onChangeName}
              value={name}
            />
            <textarea
              value={comment}
              placeholder="Your Comment"
              rows="6"
              cols="60"
              className="textarea"
              onChange={this.onChangeComment}
            />
            <div>
              <button type="submit">Add Comment </button>
            </div>
            <p>{count} Comment</p>
          </form>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <div>
          {CommentList.map(eachComment => (
            <ul className="list-container" key={eachComment.id}>
              <CommentItem
                commentItem={eachComment}
                bgColor={initialContainerBackgroundClassNames}
                deleteComment={this.deleteComment}
              />
            </ul>
          ))}
        </div>
      </div>
    )
  }
}
export default Comments
