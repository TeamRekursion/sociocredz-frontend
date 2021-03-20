import React from 'react'
import Navbar from '../components/navbar'
import Democarasol from '../components/carasol'

class Landingpage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <Navbar />
        <Democarasol />
        Landing page <br />
      </div>
    )
  }
}
export default Landingpage
