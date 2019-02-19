import React from 'react'
import {
  Button,
  Segment,
  Header,
  Card,
  Image,
  List,
  Grid,
} from 'semantic-ui-react'
import GitLink from './GitLink'
import axios from 'axios'

class GitSquares extends React.Component {
  state = {myGit: {},}

  componentDidMount() {
    axios({
      method: 'get',
      url: 'https://api.github.com/users/Fish-bowl',
    })
      .then(response => {
        debugger
        console.log(response.data)
        this.setState({ myGit: response.data })
      })
  }

  getUCard = () => {
    const { myGit } = this.state
    return (
      <Card 
        target='_blank' 
        rel="noopener noreferrer" 
        href="https://github.com/Fish-bowl" 
      >
        <Image src={myGit.avatar_url} />
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
      <Grid stackable >
        <Grid.Row columns={2} >
          <Grid.Column style={styles.column} width={6}>
            {this.getUCard()}
          </Grid.Column>
          <Grid.Column width={10} >
            <Header textAlign='center' style={styles.header} as='h3' >
              Click on the links to view my github page. <br/>
              Or you can view some selected data right here on my portfolio page down below
            </Header>
            <Segment basic inverted >
              <List divided inverted >
                <List.Item>
                  <List.Header>Github Bio</List.Header>
                  <List.Content>
                    {this.state.myGit.bio}
                  </List.Content>
                </List.Item>
              </List>
            </Segment>
            <Segment style={styles.btnSeg} basic >
              <Button primary as='h2' style={styles.button} >
                <GitLink />
              </Button>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const styles = {
  segment: {
    display: 'flex',
    minHeight: '300px',
    textAlign: 'center',
  },
  btnSeg: {
    display: 'flex',
    justifyContent: 'center'
  },
  header: {
    color: 'white',
    marginLeft: '30px',
    marginRight: '30px',
  },
  column: {
    display: 'flex',
    justifyContent: 'center',
  },
}

export default GitSquares
