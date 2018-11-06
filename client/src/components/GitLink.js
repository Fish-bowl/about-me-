import React from 'react'
import Radium from "radium"

class GitLink extends React.Component {
  render() {
    return (
      <a 
        target='_blank' 
        rel="noopener noreferrer" 
        href="https://github.com/Fish-bowl" 
        style={styles.link}
      >
        Link To My Github
      </a>
    );
  }
}

const styles = {
  link: {
    color: "white",
    textAlign: 'center',
    ":hover": {
      textDecoration: "none",
      color: "red",
    },
  },
}

export default GitLink
