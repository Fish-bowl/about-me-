import React from 'react'
import {
  Card,
  Grid,
  Segment,
} from 'semantic-ui-react'

class BottomSkills extends React.Component {
  bottomSkills = [
    {
      name: 'efficiency',
      desc: 'keeping things simple, easy to maintain, and scaleable'
    },
    {
      name: 'design',
      desc: "your website is only as good as it looks, and while design isn't particularly my strong suit. I work hard to ensure each product is up to industry and user standards"
    },
  ]

  getSkills = () => {
    return (
      this.bottomSkills.map(skill => (
        <Card>
          <Card.Header as='h2' >{skill.name}</Card.Header>
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

export default BottomSkills
