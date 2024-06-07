// Write your code here
import {Component} from 'react'
import './index.css'

export default class LanguageFilterItem extends Component {
  render() {
    const {item, selectedId, changeLanguageFunc} = this.props
    const {id, language} = item

    const changeLang = () => {
      changeLanguageFunc(id)
    }

    const isSelected = id === selectedId

    return (
      <li className="list-container" id={id}>
        <button
          className={`button ${isSelected ? 'border' : ''}`}
          type="button"
          onClick={changeLang}
        >
          {language}
        </button>
      </li>
    )
  }
}
