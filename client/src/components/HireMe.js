import React from 'react'
import {
  Segment,
  Form,
  Container,
  Button,
  Header,
  TextArea,
  Input,
  Divider,
} from 'semantic-ui-react'
import Resume from './Resume'

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

  state = {
    first_name: '',
    last_name: '',
    email: '',
    message: ''
  }

//   handleOnSubmit = event => {
//     event.preventDefault();
//     this.props.submitContactReqToServer(‘/contacts’, this.state)
//     this.setState({ name: ‘’, email: ‘’, message: ‘’ })
//  }

//   handleOnChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

render() {
  return (
    <div style={styles.parentDiv} >
        <Container>
          <Resume />
          <Header style={styles.header} as='h1'>Want To Hire Me?</Header>
          <Divider />
          <Header style={styles.header} as='h3'>fill out the form below</Header>
          <Segment inverted >
            <Form inverted >
              <Form.Group widths='equal'>
                <Form.Field
                  id='form-input-control-first-name'
                  control={Input}
                  label='First name'
                  placeholder='First name'
                />
                <Form.Field
                  id='form-input-control-last-name'
                  control={Input}
                  label='Last name'
                  placeholder='Last name'
                />
                <Form.Field
                  id='form-input-control-email'
                  control={Input}
                  label='Email'
                  placeholder='Email'
                />
              </Form.Group>
              <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Message'
                placeholder='Message'
              />
              <Form.Field
                id='form-button-control-public'
                control={Button}
                content='Confirm'
                label='Submit'
              />
            </Form>
          </Segment>
        </Container>
      </div>
    )
  }
}

export default HireMe
