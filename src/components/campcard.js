import React from 'react'

class Campcard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <h3 style={{color:"#A41BE4"}}>Your Campaigns</h3>
            <h6 className="him">Here are your recent campaigns.</h6>
        <div className="card">
            <span>CampaignTitle | <span style={{color:"#a41be4"}}>#Nox</span></span>

            <h5 style={{color:"#fc7b22"}}>Raised Credits</h5>
            <h1 className="kam"><span>69420</span></h1>
            <h6>Pledged Goal</h6>
            <h3 className="kam"><span>1,00,000 </span></h3>
        </div>
      </div>
    )
  }
}
export default Campcard;