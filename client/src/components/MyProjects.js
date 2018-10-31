import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Segment,
  Header,
  Container,
  Divider,
} from 'semantic-ui-react'

const styles = {
  papaDiv: {
    position: 'absolute',
    left: '10%',
    right: '10%',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flex: '1',
    justifyContent: 'center',

  },
  header: {
    color: 'white',
  }
}

class MyProjects extends React.Component {
  
  // gameCard = () => {
  //   const { games } = this.state.games
  //   return games.map( (game) => {
  //     return (
  //     <Card>
  //       <Card.Content>
  //         <Card.Header>
  //           {game.name}
  //         </Card.Header>
  //         <Card.Description>
  //           {game.description}
  //         </Card.Description>
  //         <Card.Meta>
  //           {game.link}
  //         </Card.Meta>
  //       </Card.Content>
  //     </Card>
  //     )
  //   })
  // }

  render() {
    return (
    <>
      <div style={styles.papaDiv} >
        <Header style={styles.header} textAlign='center' as='h1'>Games</Header>
        <Divider/>
        <Container style={styles.container} >
            <Card.Group>
            <Card>
              <Card.Header>Flying Flamingo</Card.Header>
              <Card.Description>A shameless flappybird knock off</Card.Description>
              <Card.Meta>Link</Card.Meta>
            </Card>
            <Card>
              <Card.Header>Rock Paper Scissors</Card.Header>
              <Card.Description>on three!</Card.Description>
              <Card.Meta>Link</Card.Meta>
            </Card>
            </Card.Group>
        </Container>
      </div>
    </>
    )
  }
}

export default MyProjects
