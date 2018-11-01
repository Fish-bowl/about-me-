import React from 'react'
import {
  Segment,
  Form,
  Container,
  Button,
  Header,
} from 'semantic-ui-react'

const styles = {
  parentDiv: {
    minHeight: '82vh',
  },
  header: {
    color: 'white',
    textAlign: 'center',
  },
  
}
// style = { styles.rail }
class HireMe extends React.Component {
  render() {
    return (
      <div style={styles.parentDiv} >
        <Container>
          <Header style={styles.header} as='h1'>Want To Hire Me?</Header>
          <Header style={styles.header} as='h3'>fill out the form bellow</Header>
          <Segment inverted >
            <Form inverted >
              <Form.Field>
                <label>First Name</label>
                <input placeholder='First Name' />
              </Form.Field>
              <Form.Field>
                <label>Last Name</label>
                <input placeholder='Last Name' />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input placeholder='Email' />
              </Form.Field>
              <Button type='submit'>Submit</Button>
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default HireMe
