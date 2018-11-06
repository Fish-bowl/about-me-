import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'



class MyPassions extends React.Component {
  render() {
    return(
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
          On top of being extremely passionate about code, I am an avid snowboarder who enjoys the solitide of the backcountry. In addition to that, I also build and maintain my own cars, occasionally I take those cars out to drift events. I also write and produce my own music that can be found <nbs />
           <a target='_blanck' href='https://soundcloud.com/max-whitaker-807575387' >here</a> 
        </Header>
      </Segment>
    )
  }
}

export default MyPassions
