import React from 'react'
import {
  Grid, 
  Segment,
  Header,
  Container,
  Divider,
  Button,
} from 'semantic-ui-react'

class MyProjects extends React.Component {
  
  render() {
    return (
    <div>
      <Header style={styles.header} textAlign='center' as='h1'>My Projects</Header>
      <Divider/>
      <Container style={styles.container} >
       <Grid stackable >
        <Grid.Row columns={2} >
          <Grid.Column width={8} style={styles.gridColumn} >
            <Segment inverted style={styles.segment} >
              <Header 
                as='h2' 
                style={styles.header} 
              >
                DevPoint Labs Forums
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} style={styles.gridColumn}>
            <Segment inverted style={styles.segment} >
              <Header
                as='h2'
                style={styles.header}
              >
                The Art of Scotty Soltronic
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={2} >
          <Grid.Column width={8} style={styles.gridColumn} >
            <Segment as='a' href="https://Jenkstars.com" inverted style={styles.segment} >
              <Header
                as='h2'
                style={styles.header}
              >
                Jenkstars
              </Header>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} style={styles.gridColumn}>
            <Segment inverted style={styles.segment} >
              <Header
                as='h2'
                style={styles.header}
              >
                Ilia's apholstry
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
       </Grid>
      </Container>      
    </div>
    )
  }
}

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flex: '1',
    justifyContent: 'center',
    marginTop: '100px',
    marginBottom: '100px'

  },
  gridColumn: {
    display: 'flex',
    justifyContent: 'center',

  },
  segment: {
    height: '400px',
    width: '400px'
  },
  header: {
    color: 'white',
    textAlign: 'center',
  }
}


export default MyProjects
