import React from 'react'
import {
  Rail, 
  Button,
  Sticky,
} from 'semantic-ui-react'

const styles = {
  sticky: {
    position: 'absolute',
    left: '90%'
  },
}
// style = { styles.rail }
class HireMe extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (
      <Sticky 
        style={styles.sticky}  
        context={contextRef}
        offset='25'
      >
        <Button
          circular
          size='big'
          animated='fade'
        >
          <Button.Content visible >Hire Me</Button.Content>
          <Button.Content hidden >please</Button.Content>
        </Button>
      </Sticky>
    )
  }
}

export default HireMe
