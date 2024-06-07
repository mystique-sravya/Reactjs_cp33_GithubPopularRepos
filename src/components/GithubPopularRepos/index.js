import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    selectedId: languageFiltersData[0].id,
    data: [],
    isTrue: true,
    isLoading: true,
  }

  componentDidMount() {
    this.updateState()
  }

  updateState = async () => {
    const {selectedId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${selectedId}`
    const response = await fetch(url)
    console.log(response)
    if (response.ok) {
      const data = await response.json()
      this.setState({
        data: data.popular_repos.map(item => ({
          avatarUrl: item.avatar_url,
          forksCount: item.forks_count,
          id: item.id,
          issuesCount: item.issues_count,
          name: item.name,
          starsCount: item.stars_count,
        })),
        isTrue: true,
        isLoading: false,
      })
    } else {
      this.setState({isTrue: false, isLoading: false})
    }
  }

  changeLanguageFunc = selectedId => {
    this.setState({selectedId, isLoading: true}, this.updateState)
  }

  secondFunc = () => {
    const {isLoading, isTrue, data} = this.state
    console.log(isLoading)
    if (isLoading) {
      return (
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
        </div>
      )
    }
    if (!isTrue) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
            className="url-wrong-img"
          />
          <p className="failure-ele">Something Went Wrong</p>
        </div>
      )
    }
    return (
      <ul className="languages-list-container">
        {data.map(item => (
          <RepositoryItem key={item.id} item={item} />
        ))}
      </ul>
    )
  }

  render() {
    const {selectedId} = this.state
    return (
      <div className="main-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="languages-name-container">
          {languageFiltersData.map(item => (
            <LanguageFilterItem
              key={item.id}
              item={item}
              selectedId={selectedId}
              changeLanguageFunc={this.changeLanguageFunc}
            />
          ))}
        </ul>
        {this.secondFunc()}
      </div>
    )
  }
}

export default GithubPopularRepos
