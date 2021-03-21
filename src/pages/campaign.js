import React from 'react'
import Dashnav from '../components/dashnav';
import Campcard from '../components/campcard';
import api from '../utils/apiCalls';
// import Democarasol from '../components/caraso/l'

class Landingpage extends React.Component {
  state = {
    title: '',
    tagline: '',
    desc: '',
    moneyRaised:'',
    token: '',
  }
  constructor (props) {
    super(props)
  }

  async componentDidMount () {
    let token = localStorage.getItem("token")
    this.setState({
      token,
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await api.CreateCampaign(this.state.token, this.state.tagline,
        this.state.desc, this.state.moneyRaised, this.state.title)
    if (response.code == 201) {
      alert("campaign created!")
    } else {
      alert("Campaign Creation Failed!")
    }
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
              <input className='logpu' value={this.state.title} onChange={(e) => this.setState({
                title: e.target.value,
              })}/>
              <br/>
              <br/>
              <label className='loglab'>
                Campaign Tagline
              </label>
              <input className='logpu'value={this.state.tagline} onChange={(e) => this.setState({
                tagline: e.target.value,
              })}/>
              <br/>
              <br/>
              <label className='loglab'>
                Campaign Description
              </label>
              <input className='logpu' value={this.state.desc} onChange={(e) => this.setState({
                desc: e.target.value,
              })}/>
              <br/>
              <br/>
              <label className='loglab'>
                Target money to be raised
              </label>
              <input className='logpu' type="number" value={this.state.moneyRaised} onChange={(e) => this.setState({
                moneyRaised: e.target.value,
              })}/>
                <br/>
                <br/>
              <div style={{
                paddingLeft: '10%'
              }}>
                <button type="submit" onClick={this.handleSubmit} style={{
                  width: '80%',
                  height: '30%',
                  background: '#A41BE4',
                  borderRadius: '44.1px',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 'bold',
                  fontSize: '90%',
                  lineHeight: '36px',
                  color: '#FFFFFF'
                }}>
                  Start Campaign
                </button>
              </div>
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