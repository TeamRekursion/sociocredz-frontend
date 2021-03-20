import React from 'react'
import Dashnav from '../components/dashnav'
// import Democarasol from '../components/caraso/l'

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
        <Dashnav/>
        <div className="grid-set">
          <div className="leftg">
            <h3 style={{color:"#fc7b22"}}>Start a Campaign</h3>
            <h6>Campaigns allow you to crowdfund your charity events.</h6>
          </div>
          <div className="rightg">
            right
          </div>
        </div>
      </div>
    )
  }
}
export default Landingpage