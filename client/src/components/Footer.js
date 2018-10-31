import React from 'react'
import {
  Segment,
  Header,
} from 'semantic-ui-react'

const styles = {
  container: {
    minHeight: '100%',
    position: 'relative',
    borderTop: "1px solid #E7E7E7",

  },
  header: {
    padding: '10px',
    textAlign: 'center',
    color: 'white',
  },
  body: {
    margin: '0',
    padding: '0',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100 %',
    height: '60px', 
    background: '#6cf',
  },
}

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.container} >
        <div style={styles.header} >Thank You For Your Time</div>
        <div style={styles.body} >Max Whitaker, 936 s 200 w, Salt Lake City, UT 84101</div>
        <div style={styles.footer} ></div>
      </div>
    )
  }
}

{/* <Segment basic style={styles.container} >
  <Header as='h3' style={styles.header} >Thank You For Your Time</Header>
  <Header
    as='h5'
    style={styles.body}
  >
    Max Whitaker, 936 s 200 w, Salt Lake City, UT 84101
        </Header>
</Segment> */}

export default Footer
