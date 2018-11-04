import React from 'react'
import {
  Grid,
  Icon,
  Image,
} from 'semantic-ui-react'
import FilesSVG from '../images/sql.svg'
import RailsPNG from '../images/rails.png'

class Icons extends React.Component {
  render() {
    return(
      <Grid.Row divided centered columns={7} style={styles.iconRow}  >
        <Grid.Column style={styles.icons} >
          <Icon
            color='orange'
            size='huge'
            name='html5'
            inverted
          />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Icon
            color='blue'
            size='huge'
            name='css3'
            inverted
          />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Icon color='yellow' size='huge' name='js square' inverted />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Icon color='red' size='huge' name='gem outline' inverted />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Image
            alt='ruby on rails'
            src={RailsPNG}
            style={styles.iconFakes}
          />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Icon
            color='grey'
            size='huge'
            name='github'
            inverted
          />
        </Grid.Column>
        <Grid.Column style={styles.icons} >
          <Image
            alt='sql stack'
            src={FilesSVG}
            style={styles.iconFakes}
          />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const styles = {
  iconRow: {
    display: 'flex',
    justifyContent: 'space-around'
  },

  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  },

  iconFakes: {
    height: '56px',
    width: '66px',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
}

export default Icons 
