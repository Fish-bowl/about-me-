import React from 'react'
import {
  Segment, 
  Header,
  Grid,
} from 'semantic-ui-react'

class BottomSkills2 extends React.Component {

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
        <Segment inverted>
          <Header as='h2' >{skill.name}</Header>
          <Segment.Content>{skill.desc}</Segment.Content>
        </Segment>
      ))
    )
  }

  render(){
    return (
      <Grid.Column>
          <Segment.Group>
            {this.getSkills()}
          </Segment.Group>
      </Grid.Column>
    )
  }
}

export default BottomSkills2
