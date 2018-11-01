import React from 'react'
import Github from './Github'
import {
  Container,
  Header,
  Divider,
  Segment,
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
            </Grid.Column>
          </Grid.Row>
          <Grid.Row style={styles.gridContainer} columns={1} >
            <Grid.Column width={14} >
              <Segment style={styles.segment} inverted >
                <Header>this will be the github green squares page</Header>
              </Segment>
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

  segment: {
    minHeight: '300px',
    textAlign: 'center',
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
}

export default MyCode 
