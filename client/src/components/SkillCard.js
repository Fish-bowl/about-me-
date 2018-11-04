import React from 'react'
import {
  Card,
} from 'semantic-ui-react'


class SkillCard extends React.Component {
  
  skills = [
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
    }
  ]
  
  getSkills = () => {
    return (
    this.skills.map(skill => {
      return (
        <Card>
          <Card.Header>{skill.name}</Card.Header>
          <Card.Description>{skill.desc}</Card.Description>
        </Card>
      )
    })
   )
  }
  render() {
    return (
      <Card.Group>
       ({this.getSkills()})
      </Card.Group>
      )
  }
}

export default SkillCard
