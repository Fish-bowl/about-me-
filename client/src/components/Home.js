import React from 'react'
import {
  Header,
  Segment,
  Divider,
  Grid,
  Container,
} from 'semantic-ui-react';
import Icons from './Icons'
import SkillCard from './SkillCard'
import MissionStatement from './MissionStatement'
import MyPassions from './MyPassions'

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
          <Grid 
            verticalAlign="middle" 
            stackable 
            divided 
            relaxed
            centered 
            style={styles.grid} 
          >
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
            <Grid.Row>
              <Grid.Column width={8} >
                <MissionStatement />
              </Grid.Column>
              <Grid.Column width={8} >
                <MyPassions />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <SkillCard />
            </Grid.Row>
            <Divider />
            <Icons />
            <Divider />
            <Grid.Row verticalAlign='center' >
              <SkillCard />
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

const styles = {
  container: {
    minHeight: '100%',
    marginBottom: '20px'
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
    // display: 'flex',
    // justifyContent: 'space-around'
  },

  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  iconFakeRow: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: 'auto',
  },

  iconFakes: {
    height: '56px',
    width: 'auto',
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
  },
  button: {
    hidden: {

    },
    visible: {
      position: 'sticky',
      textAlign: 'center',
      top: '90vh',
      left: '1%',
      width: '100%',
    },
  }
}

export default Home
