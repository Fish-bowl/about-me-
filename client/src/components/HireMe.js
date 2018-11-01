import React from 'react'
import {
  Rail, 
  Button,
  Sticky,
} from 'semantic-ui-react'

const styles = {
  container: {
    position: 'absolute',
    minHeight: '100%',
  },
  sticky: {
    position: 'relative',
    right: '90%',
    minHeight: '100%'
  },
  button: {
    position: 'relative',
  }
}
// style = { styles.rail }
class HireMe extends React.Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state
    return (
      <Rail style={styles.container} >
        <Sticky 
          context={contextRef}
          offset={25}
        >
          <Button
            circular
            size='big'
            animated='fade'
            style={styles.button}
          >
            <Button.Content visible >Hire Me</Button.Content>
            <Button.Content hidden >please</Button.Content>
          </Button>
        </Sticky>
      </Rail>
    )
  }
}

export default HireMe
