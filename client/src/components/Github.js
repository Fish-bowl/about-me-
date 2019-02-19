import React from 'react'
import axios from 'axios'
import {
  Card, 
} from 'semantic-ui-react'

class Github extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    // axios({
    //   method: 'post',
    //   url: 'https://api.github.com/?access_token=OAUTH-TOKEN',
    // })
    //   .then(res => {
    //     debugger
    //   })
    axios({
      method: 'get',
      url: 'https://api.github.com/users/Fish-bowl/repos',
      headers: '*'
      
    })
    .then(res => {
      debugger
        this.setState({ repos: res.data })
      })
  }

  getRepos = () => {
    const { repos } = this.state
    return (
      repos.map((repo, id) => {
        return (
          <Card
            key={repo.id}
            target='_blank'
            href={repo.html_url}
            header={repo.full_name}
            description={repo.description}
            meta={repo.language}
          />
        )
      })
    )
  }
 
  render() {
    return(
        <Card.Group centered itemsPerRow={4} stackable style={styles.cardGroup} >
          {this.getRepos()}
        </Card.Group>
    )
  }
}

const styles = {
  cardGroup: {
    display: 'flex',
  }
}

export default Github
