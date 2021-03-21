import React from 'react'
import api from "../utils/apiCalls";

class Campcard extends React.Component {
    state = {
        moneyRaised: 0,
        moneyRequired: 0,
        title: 0,
        tagline: '',
    }
  constructor (props) {
    super(props)
  }

    fetchLast = async () => {
        let response = await api.FetchCampaigns(this.state.token)
        let { data }  = response;
        let top = data[0];
        if (!top) return;
        this.setState({
            title: top.title,
            tagline: top.tagline,
            moneyRequired: top.moneyRequired,
            moneyRaised: top.moneyRaised
        })
    }
    async componentDidMount () {
        let token = localStorage.getItem("token")
        this.setState({
            token,
        }, async () => {
            await this.fetchLast();
        })
    }

  render () {
    return (
      <div>
        <h3 style={{color:"#A41BE4"}}>Your Campaigns</h3>
            <h6 className="him">Here are your recent campaigns.</h6>
        <div className="card">
            <span>{this.state.title} | <span style={{color:"#a41be4"}}>{this.state.tagline}</span></span>

            <h5 style={{color:"#fc7b22"}}>Raised Credits</h5>
            <h1 className="kam"><span>{this.state.moneyRaised}</span></h1>
            <h6>Pledged Goal</h6>
            <h3 className="kam"><span>{this.state.moneyRequired}</span></h3>
        </div>
      </div>
    )
  }
}
export default Campcard;