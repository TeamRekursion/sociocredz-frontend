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
      </div>
    )
  }
}
export default Campcard;