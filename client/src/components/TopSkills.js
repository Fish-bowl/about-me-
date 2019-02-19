import React from 'react'
import {
  Card,
  Grid,
  Segment,
} from 'semantic-ui-react'

class TopSkills extends React.Component{
  topSkills = [
    {
      name: 'Front End',
      desc: 'using React/redux and semantic-ui-react',
    },
    {
      name: 'Back End',
      desc: 'using ruby on rails with a postgresql database',
    },
    {
      name: 'UX',
      desc: 'Focused on an enjoyable and memorable user experience'
    },
  ]

  getSkills = () => {
    return (
      this.topSkills.map(skill => (
        <Card>
          <Card.Header>{skill.name}</Card.Header>
          <Card.Description>{skill.desc}</Card.Description>
        </Card>
      ))
    )
  }

  render() {
    return (
      <Grid.Column>
        <Segment basic textAlign='center' style={styles.segment} >
          <Card.Group style={styles.cardGroup} >
            {this.getSkills()}
          </Card.Group>
        </Segment>
      </Grid.Column>
    )
  }
}

const styles = {
  segment: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  cardGroup: {
    display: 'flex',
    justifyContent: 'center'
  }
}

export default TopSkills
