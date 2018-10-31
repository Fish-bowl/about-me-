import React from 'react'
import axios from 'axios'
import {
  Segment,
  Card, 
  Header,
  Container,
} from 'semantic-ui-react'

class Github extends React.Component {
  state = { repos: {} }

  getrepos = () => {
    axios.get('https://api.github.com/users/Fish-bowl/repos')
      .then( res => {
        this.setState({ repos: res.data })
      })
      .catch(err)
        console.log(err)
      
  }
  // 54510d4f38e184fb20dba1389e13294e97b32f95

  render() {
    return(
      <>
      </>
    )
  }
}
