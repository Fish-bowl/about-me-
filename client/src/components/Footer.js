import React from 'react'
import StickyFooter from 'react-sticky-footer';
import {
  Segment,
  Divider,
  Header,
} from 'semantic-ui-react'

const styles = {
  footer: {
    marginTop: '50vh',
    borderTop: "1px solid #E7E7E7",

  },

  header: {
    textAlign: 'center',
    color: 'white',
  }
}

class Footer extends React.Component {
  render() {
    return (
      <StickyFooter
        normalStyles={{
          backgroundColor: "black",
          padding: "2rem"
        }}
        stickyStyles={{
          backgroundColor: "rgba(255,255,255,.8)",
          padding: "2rem"
        }}
        >
          <Header as='h4' style={styles.header} >this is my footer</Header>
      </StickyFooter>
    )
  }
}

export default Footer
