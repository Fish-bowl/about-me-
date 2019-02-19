import React from 'react'
import axios from 'axios'
import {
  List,
} from 'semantic-ui-react'

class GitRepos extends React.Component{
  state = { repos: [] }
 
  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/Fish-bowl/repos',
      Accept: 'application/vnd.github.v3+json'
    })
      .then(res => {
        console.log(res)
        debugger
        this.setState({ repos: res.data })
      })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
}

export default GitRepos
