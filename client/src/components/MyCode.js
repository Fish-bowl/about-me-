import React from 'react'
import axios from 'axios'

class MyCode extends React.Component {

  state = { repos: [] }

  componentDidMount() {
    axios.get('https://github.com/Fish-bowl/repos')
      .then( res => {
        console.log(res)
        debugger
      })
      // .catch((error){
        //   console.log(err)
        // })
      }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default MyCode 
