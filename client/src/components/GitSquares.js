import React from 'react'
import {
  Container,
  Segment,
  Header,
  Card,
  Image,
} from 'semantic-ui-react'
import axios from 'axios'

class GitSquares extends React.Component {
  state = {myGit: {}, repos: [],}

  componentDidMount() {
    const {myGit} = this.state
    axios({
      method: 'get',
      url: 'https://api.github.com/users/Fish-bowl',
    })
      .then(response => {
        console.log(response.data)
        this.setState({ myGit: response.data })
      })
  }

  getSquares = () => {
    const { myGit } = this.state
    return (
      <Card 
        target='_blank' 
        rel="noopener noreferrer" 
        href="https://github.com/Fish-bowl" 
      >
        <Image style={styles.image} src={myGit.avatar_url} />
        <Card.Content>
          <Card.Header>{myGit.name}</Card.Header>
          <Card.Meta>{myGit.location}</Card.Meta>
          <Card.Description>Repo Count: {myGit.public_repos}</Card.Description>
        </Card.Content>
      </Card>     
    )
  }

  render() {
    return(
      <Container>
        <Segment style={styles.segment} inverted >
          {this.getSquares()}
        </Segment>
      </Container>
    )
  }
}

const styles = {
  segment: {
    minHeight: '300px',
    textAlign: 'center',
  },
  image: {
    height: '200px',
    width: 'auto',
  },
}

export default GitSquares
