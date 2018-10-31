import React, { Component } from 'react';
import { 
  Header, 
  Segment, 
  Divider,
  Grid, 
  Image,
  Icon,
  Container,
} from 'semantic-ui-react';
import FilesSVG from '../images/sql.svg'
import RailsPNG from '../images/rails.png'

const styles = {
  container: {
    marginBottom: '10%'
  },

  header: {
    color: 'white',
    textAlign: 'center',
    posistion: 'absolute',
  },

  paragraphs: {
    color: 'white',
    fontSize: '1.5em',
  },
  
  grid: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    right: '5%',
    left: '5%',
  },  
  gridRow: {
    display: 'flex',
    justifyContent: 'center',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  bottomRow: {
    marginBottom: '20px'
  },
  titleImage: {
    posistion: 'absolute',
    height: '300px',
    width: '100%',
    marginTop: '45px',
  },
  iconFakes: {
    height: '56px',
    width: '66px',
    paddingLeft: '10px',
    paddingRight: '10px',
  }, 
  test: {
    border: 'red 3px solid'
  }
}

// style = { styles.grid }
// style = { styles.titleImage }
// style = { styles.header }

class Home extends Component {
  render() {
    return (
      <>
        <Segment basic style={styles.titleImage} >
          <Header 
            style={styles.header} 
            as='h1'
          >
            this is gonna be a pic of me the whole page width
          </Header>
        </Segment>
        <Container style={styles.container}>
          <Grid style={styles.grid} >
            <Grid.Row columns={1} >
              <Grid.Column width={16}  >
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row columns={2} >
              <Grid.Column width={8}  >
                <Segment basic  >
                  <Header
                    style={styles.header}
                    as='h1'
                  >
                    My Mission Statement
                  </Header>
                  <p style={styles.paragraphs} >
                    Tempor irure Lorem voluptate cillum labore voluptate cillum dolor reprehenderit. Laboris velit Lorem sunt ipsum. Minim tempor amet tempor do fugiat pariatur culpa cillum culpa. Deserunt sint fugiat irure mollit reprehenderit ipsum exercitation irure exercitation labore. Sit adipisicing in officia nisi. Ut velit aute Lorem irure et irure commodo irure ea fugiat.
                  </p>
                </Segment>
              </Grid.Column>
              <Grid.Column width={8}  >
                <Segment basic  >
                  <Header
                    style={styles.header}
                    as='h1'
                  >
                    My Passions
                  </Header>
                  <p style={styles.paragraphs} >
                    Tempor irure Lorem voluptate cillum labore voluptate cillum dolor reprehenderit. Laboris velit Lorem sunt ipsum. Minim tempor amet tempor do fugiat pariatur culpa cillum culpa. Deserunt sint fugiat irure mollit reprehenderit ipsum exercitation irure exercitation labore. Sit adipisicing in officia nisi. Ut velit aute Lorem irure et irure commodo irure ea fugiat.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row columns={1} >
              <Grid.Column width={16}>
                <Segment basic >
                  <Header as='h1' style={styles.header}>A Little About Myself</Header>
                  <p style={styles.paragraphs}>
                    Dolor reprehenderit minim eu aute nostrud ea officia sunt est irure sint velit. Cupidatat deserunt sit veniam qui ullamco ut deserunt Lorem esse commodo enim. Aliquip do est occaecat qui nostrud irure enim Lorem non. Anim qui adipisicing aute minim laboris anim dolore in eiusmod nostrud cillum culpa. Fugiat cillum anim labore consequat aliqua laborum aliqua consequat.
                  </p>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row columns={3} >
              <Grid.Column width={4} >
                <Segment basic  >
                  <Header style={styles.header} as='h1'>this will be one 'skill card'</Header>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} >
                <Segment basic  >
                  <Header style={styles.header} as='h1'>this will be one 'skill card'</Header>
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} >
                <Segment basic  >
                  <Header style={styles.header} as='h1'>this will be one 'skill card'</Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row style={styles.bottomRow} columns={1} >
              <Grid.Column width={14} >
                <Segment basic >
                  <Grid columns={10} divided >
                    <Grid.Row divided style={styles.iconRow} >
                      <Icon color='grey' size='huge' name='github' inverted />
                      <Icon color='orange' size='huge' name='html5' inverted />
                      <Icon color='blue' size='huge' name='css3' inverted />
                      <Icon color='yellow' size='huge' name='js square' inverted />
                      <Icon color='red' size='huge' name='gem outline' inverted />
                      <Image 
                        alt='ruby on rails'
                        src={RailsPNG}
                        style={styles.iconFakes}
                      />            
                      <Image
                        alt='sql stack'
                        src={FilesSVG}
                        style={styles.iconFakes}
                      />
                    </Grid.Row>
                    <Divider />
                  </Grid>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </>
    );
  }
}

export default Home;
