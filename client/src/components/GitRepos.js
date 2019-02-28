import React from 'react'
import axios from 'axios'
import {
  Container,
  Card,
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

  render(){
    return(
      <Container style={styles.container} >
        <Card.Group style={styles.card} >
          {this.getRepos()}
        </Card.Group>
      </Container>
    )
  }
}

const styles = {
  container: {
    display: 'flex'
  },
  card: {
    justifyContent: 'center'
  },
}

export default GitRepos
