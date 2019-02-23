import React from 'react'
import {
  Header,
  Segment,
  Divider,
  Grid,
  Container,
} from 'semantic-ui-react';
import Icons from './Icons'
import MissionStatement from './MissionStatement'
import MyPassions from './MyPassions'
import AboutMe from './AboutMe'
import MyPhoto from './MyPhoto'
import TopSkills from './TopSkills'
import BottomSkills from './BottomSkills1'


class Home extends React.Component {
  render() {
    return(
      <div style={styles.container} >
        {/* <Segment basic style={styles.titleImage} >
          <MyPhoto />
        </Segment> */}
        <Segment basic style={styles.spacer} >

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
            {/* <Grid.Row columns={1} >
              <Grid.Column width={16}>
                <AboutMe />
              </Grid.Column>
            </Grid.Row> */}
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
              <TopSkills />
            </Grid.Row>
            <Divider />
            <Icons />
            <Divider />
            <Grid.Row verticalAlign='center' >
              <BottomSkills />
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

  spacer: {
    height: '500px',
    width: 'auto',
    position: 'inherit'
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
