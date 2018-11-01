import React from 'react'
import axios from 'axios'
import {
  Segment,
  Card, 
  Header,
  Container,
} from 'semantic-ui-react'

class Github extends React.Component {
  state = { repos: [] }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/Fish-bowl/repos',
    })
      .then(res => {
        this.setState({ repos: res.data })
      })
  }

  getRepos = () => {
    const { repos } = this.state
    return (
      repos.map((repo, id) => {
        return (
          <Card>
            <Card.Content>
              <Card.Header as='h1'>{repo.full_name}</Card.Header>
              <Card.Meta as='h2'><a>{repo.html_url}</a></Card.Meta>
            </Card.Content>
          </Card>
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
