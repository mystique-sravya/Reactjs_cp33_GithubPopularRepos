// Write your code here
import {Component} from 'react'
import './index.css'

export default class RepositoryItem extends Component {
  render() {
    const {item} = this.props
    console.log(item)
    const {avatarUrl, forksCount, id, issuesCount, name, starsCount} = item
    return (
      <li className="list-item-container" id={id}>
        <img src={avatarUrl} alt={name} className="image" />
        <h1 className="item-head">{name}</h1>
        <div className="wrap-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="icon-img"
          />
          <p className="count">{`${starsCount} stars`}</p>
        </div>
        <div className="wrap-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="icon-img"
          />
          <p className="count">{`${forksCount} forks`}</p>
        </div>
        <div className="wrap-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="icon-img"
          />
          <p className="count">{`${issuesCount} open issues`}</p>
        </div>
      </li>
    )
  }
}
