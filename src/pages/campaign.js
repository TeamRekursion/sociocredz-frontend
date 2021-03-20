import React from 'react'
import Dashnav from '../components/dashnav';
import Campcard from '../components/campcard';
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
            <h6 className="him">Campaigns allow you to crowdfund your charity events.</h6>
            <form>
              <label className='loglab'>
                Campaign Title
              </label>
              <input className='logpu'/>
              <br/>
              <br/>
              <label className='loglab'>
                Campaign Tagline
              </label>
              <input className='logpu'/>
              <br/>
              <br/>
              <label className='loglab'>
                Campaign Description
              </label>
              <input className='logpu'/>
              <br/>
              <br/>
              <label className='loglab'>
                Target money to be raised
              </label>
              <input className='logpu'/>
              <button type="submit">
                Start Campaign
              </button>
            </form>
          </div>
          <div className="rightg">
            <Campcard/>
          </div>
        </div>
      </div>
    )
  }
}
export default Landingpage