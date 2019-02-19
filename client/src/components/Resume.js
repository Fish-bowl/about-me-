import React from 'react'
import {Link} from 'react-router-dom'
import PDF from '../files/FinalResume.pdf'

import {
  Grid,
  Segment,
  Divider,
  List,
  Image,
  Header,
  Container,
  Button,
} from 'semantic-ui-react'

 class Resume extends React.Component {

  render() {
    return (
      <a style={styles.resume} href={PDF} download >
        <Button circular floated='right' type='download' >Download My Resume</Button>
      </a>
    )
  }
}

const styles = {
  resume: {
    zIndex: '2',
    position: 'absolute',
  },
}

export default Resume
