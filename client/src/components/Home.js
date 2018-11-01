import React from 'react'
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

class Home extends React.Component {
  render() {
    return(
      <div style={styles.container} >
        <Segment basic style={styles.titleImage} >
          <Header
            style={styles.header}
            as='h1'
          >
            this is gonna be a pic of me the whole page width
          </Header>
        </Segment>
        <Container>
          <Grid verticalAlign="middle" stackable divided centered style={styles.grid} >
            <Grid.Row>
              <Grid.Column width={8} >
                <Segment basic style={styles.segments} >
                  <Header 
                    as='h1'
                    textAlign='center'
                    inverted                    
                  >
                    Mission Statement
                  </Header>
                  <Header 
                    as='h3'
                    textAlign='center'
                    inverted
                  >
                    Tempor irure Lorem voluptate cillum labore voluptate cillum dolor reprehenderit. Laboris velit Lorem sunt ipsum. Minim tempor amet tempor do fugiat pariatur culpa cillum culpa. Deserunt sint fugiat irure mollit reprehenderit ipsum exercitation irure exercitation labore. Sit adipisicing in officia nisi. Ut velit aute Lorem irure et irure commodo irure ea fugiat.
                  </Header>
                </Segment>
              </Grid.Column>
              <Grid.Column width={8} >
                <Segment basic>
                  <Header
                    as='h1'
                    textAlign='center'
                    inverted
                  >
                    My Passions
                  </Header>
                  <Header
                    as='h3'
                    textAlign='center'
                    inverted
                  >
                    Tempor irure Lorem voluptate cillum labore voluptate cillum dolor reprehenderit. Laboris velit Lorem sunt ipsum. Minim tempor amet tempor do fugiat pariatur culpa cillum culpa. Deserunt sint fugiat irure mollit reprehenderit ipsum exercitation irure exercitation labore. Sit adipisicing in officia nisi. Ut velit aute Lorem irure et irure commodo irure ea fugiat.
                  </Header>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} >
              <Grid.Column width={16}>
                <Segment basic >
                  <Header 
                    as='h1' 
                    style={styles.header}
                  >
                    A Little About Myself
                  </Header>
                  <Header 
                    as='h3' 
                    style={styles.paragraphs}
                  >
                    Dolor reprehenderit minim eu aute nostrud ea officia sunt est irure sint velit. Cupidatat deserunt sit veniam qui ullamco ut deserunt Lorem esse commodo enim. Aliquip do est occaecat qui nostrud irure enim Lorem non. Anim qui adipisicing aute minim laboris anim dolore in eiusmod nostrud cillum culpa. Fugiat cillum anim labore consequat aliqua laborum aliqua consequat.
                  </Header>
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
            <Grid.Row divided centered columns={7} style={styles.iconRow}  >
              <Grid.Column style={styles.icons} >
                <Icon
                  color='orange'
                  size='huge'
                  name='html5'
                  inverted
                />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Icon
                  color='blue'
                  size='huge'
                  name='css3'
                  inverted
                />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Icon color='yellow' size='huge' name='js square' inverted />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Icon color='red' size='huge' name='gem outline' inverted />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Image
                  alt='ruby on rails'
                  src={RailsPNG}
                  style={styles.iconFakes}
                />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Icon
                  color='grey'
                  size='huge'
                  name='github'
                  inverted
                />
              </Grid.Column>
              <Grid.Column style={styles.icons} >
                <Image
                  alt='sql stack'
                  src={FilesSVG}
                  style={styles.iconFakes}
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row style={styles.bottomRow} >
              <Segment basic >
              </Segment>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

{/* <Grid.Row
  divided
  style={styles.iconRow}
  columns={2}
>
  <Grid.Column style={styles.iconRow} verticalAlign='center' largeScreen={8} mobile={16} >
    <Icon
      color='orange'
      size='huge'
      name='html5'
      inverted
    />
    <Icon
      color='blue'
      size='huge'
      name='css3'
      inverted
    />
    <Icon color='yellow' size='huge' name='js square' inverted />
  </Grid.Column>
  <Grid.Column style={styles.iconRow} verticalAlign='center' largeScreen={8} mobile={16} >
    <Icon color='red' size='huge' name='gem outline' inverted />
    <Image
      alt='ruby on rails'
      src={RailsPNG}
      style={styles.iconFakes}
    />
    <Icon
      color='grey'
      size='huge'
      name='github'
      inverted
    />
    <Image
      alt='sql stack'
      src={FilesSVG}
      style={styles.iconFakes}
    />
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
  </Grid.Row> */}

const styles = {
  container: {
    minHeight: '100vh',
  },

  grid: {
    position: 'inherit',
  },
  
  segments: {
    position: 'inherit',
  },
  
  header: {
    color: 'white',
    textAlign: 'center',
    posistion: 'absolute',
  },
  
  titleImage: {
    position: 'inherit',
    height: '300px',
    width: '100%',
    marginTop: '45px',
  },

  paragraphs: {
    color: 'white',
    fontSize: '1.5em',
  },

  iconRow: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  iconFakes: {
    height: '56px',
    width: '66px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },

  bottomRow: {
    marginBottom: '5%',

  },

  test: {
    border: 'solid 3px red',
    color: 'white',
    position: 'absolute'
  }
}

export default Home
