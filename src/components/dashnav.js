import React from 'react';
import Logo from '../Assets/SOCIOCREDZ_LOGO.svg';
import { BrowserRouter as Router, NavLink} from 'react-router-dom';
// import {Link} from 'react-router-dom';
import home from '../Assets/home_unselected.svg';
import homea from '../Assets/home_selected.svg';
import campaigns from '../Assets/campaigns_unselected.svg';
import campaignsA from '../Assets/campaigns_selected.svg';
// import post from '../Assets/post_unselected.svg';
// import postA from '../Assets/post_selected.svg';
// import donation from '../Assets/donations_unselected.svg';
// import campaignsA from '../Assets/campaigns_selected';

class Dashnav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

      componentDidMount() {
      }
      render() {
        return(
            <Router>
                <div className="coom">
                    <img src={Logo} alt="logo" className="logo"/>
                <div>
            <ul className="menu-dropdown">
                <NavLink to="/home" className= "gg" activeClassName="active">
                        <li><span className="icon"><img src={home} className="log" alt="home"/><img src={homea} className="log-active" alt="home"/>Home</span></li>
                        {/* <li>Home</li> */}
                </NavLink>

                <NavLink exact to="/campaigns" className= "gg" activeClassName="active">
                        <li><span className="icon"><img src={campaigns} className="log" alt="home"/><img src={campaignsA} className="log-active" alt="home"/></span>Campaigns</li>
                        {/* <li>Campaigns</li> */}
                </NavLink>

                <NavLink to="/posts" className= "gg" activeClassName="active">
                        <li><span className="icon"><img src={home} className="log" alt="home"/><img src={homea} className="log-active" alt="home"/></span>Create a Post</li>
                        {/* <li>Create a Post</li> */}
                </NavLink>

                <NavLink to="/Donations" className= "gg" activeClassName="active">
                        <li><span className="icon"><img src={campaigns} className="log" alt="home"/><img src={campaignsA} className="log-active" alt="home"/></span>Donations</li>
                        {/* <li>Donations</li> */}
                </NavLink>
            </ul>
              </div>
          </div>
          </Router>
              )
      }
}
export default Dashnav
