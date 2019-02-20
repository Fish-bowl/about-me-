import React from 'react'
import MeJPG from '../images/gangsta_me.jpg'
import {Image} from 'semantic-ui-react'

class MyPhoto extends React.Component {
  render() {
    return(
      <Image style={styles.image} src={MeJPG}>
        
      </Image>
    )
  }
}

const styles = {
  image: {
    width: '101%',
    height: '600px'
  }
}

export default MyPhoto
