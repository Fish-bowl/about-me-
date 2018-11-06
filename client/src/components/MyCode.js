import React from 'react'
import Github from './Github'
import GitLink from './GitLink'
import GitSquares from './GitSquares'
import {
  Container,
  Header,
  Divider,
  Segment,
  Button,
  Grid,
} from 'semantic-ui-react'

class MyCode extends React.Component {

  render() {
    return(
      <Container style={styles.container} >
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column width={16}>
              <Header as='h1' style={styles.header} >Check out my code</Header>
              <Segment basic style={styles.link} >
                <Button primary as='h2' style={styles.button} >
                  <GitLink />
                </Button>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row style={styles.gridContainer} columns={1} >
            <Grid.Column width={14} >
              <GitSquares />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Github />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider />
      </Container>
    )
  }
}

{/*
  <Divider />
  <Segment basic >
    <Github />
  </Segment> */}

const styles = {
  container: {
    minHeight: '100%',
  },
  
  gridContainer: {
    display: 'flex',
    justifyContent: 'center'
  },

  header: {
    color: 'white',
    textAlign: 'center',
    posistion: 'absolute',
  },
  anchor: {
    color: 'white',
  },
  link: {
    display: 'flex',
    justifyContent: 'center'
  },
}

export default MyCode 
