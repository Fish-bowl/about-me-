import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

class MissionStatement extends React.Component {
  render() {
    return(
      <Segment style={{ position: 'inherit'}} basic >
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
          I am a young web developer with a focus on front end design, and improving user interfaces. My goal is to make every project I work on a more enjoyable experience for both the developers and the end user. I enjoy being a member of a team as well as leading one.   
        </Header>
      </Segment>
    )
  }
}

export default MissionStatement
