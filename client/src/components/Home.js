import React, { Component } from 'react';
import { Header, Segment, Divider, } from 'semantic-ui-react';

const styles = {
  header: {
    color: 'white',
    textAlign: 'center',
  },
  papaDiv: {
    posistion: 'absolute'
  }
}


class Home extends Component {
  render() {
    return (
      <div style={styles.papaDiv}>
        <Header as='h1' style={styles.header} textAlign='center'>Home Component</Header>
        <Divider/>
      </div>
    );
  }
}

export default Home;
