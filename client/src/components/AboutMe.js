import React from 'react'
import {
  Container,
  Segment,
  Header,
  Grid
} from 'semantic-ui-react'


export default () =>
  <Segment basic >
    {/* <Header
      as='h3'
      style={styles.paragraphs}
    > */}
    <h2 style={styles.hello}>Hello World,</h2>
    <p style={styles.paragraphs} >
      &emsp;&emsp; My name is Max Whitaker, and i'm from Salt lake City, Utah. Coding for me is more than a vocation, It's a passion, and a hobby that I simply enjoy doing.

      </p>
      {/* <p style={{textAlign: 'center', color: 'white',
    fontSize: '1em'}} >
        I created this website using a React.js front, end and a ruby-on-rails back end.
      </p> */}
    {/* </Header> */}
  </Segment>

  const styles = {
    header: {
      color: 'white',
      textAlign: 'center',
      posistion: 'absolute',
    },
    hello: {
      color: 'white',
    },
    paragraphs: {
      color: 'white',
      fontSize: '1.5em',
    },
  }
