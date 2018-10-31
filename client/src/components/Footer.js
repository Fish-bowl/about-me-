import React from 'react'
import StickyFooter from 'react-sticky-footer';
import {
  Segment,
  Header,
} from 'semantic-ui-react'

const styles = {
  footer: {
    marginTop: '20%',
    borderTop: "1px solid #E7E7E7",

  },
  header: {
    textAlign: 'center',
    color: 'white',
  },
}

class Footer extends React.Component {
  render() {
    return (
      <Segment basic style={styles.footer} >
        <Header as='h3' style={styles.header} >Thank You For Your Time</Header>
        <Header 
          as='h5' 
          style={styles.header} 
        >
          Max Whitaker, 936 s 200 w, Salt Lake City, UT 84101
        </Header>
      </Segment>
    )
  }
}

export default Footer
