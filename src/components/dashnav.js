import React from 'react';
import Logo from '../Assets/SOCIOCREDZ_LOGO.svg';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
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
HandleLogout = () => {
      localStorage.removeItem("token")
      window.location.href = "/login"
}
      componentDidMount() {
      }
      render() {
        return(
            <Router>
                <div className="coom">
                    <img src={Logo} alt="logo" className="logo"/>
                <div>
            <ul className="menu-dropdown" >
                {/*<a href={"/home"} className= "gg" activeClassName="active">*/}
                {/*        <li><span className="icon"><img src={home} className="log" alt="home"/>*/}
                {/*        <img src={homea} className="log-active" alt="home"/></span>Home</li>*/}
                {/*</a>*/}

                <a href="/campaign" className= "gg" activeClassName="active" style={{
                    textDecoration: 'none'
                }}>

                    <table>
                        <tr> <td>
                            <img src={campaigns} className="log" alt="home"/>
                        </td>
                            <td>
                                Campaigns
                            </td>
                        </tr>
                    </table>

                </a>

                <a href="/posts" className= "gg" activeClassName="active" style={{
                    textDecoration: 'none'
                }}>
                    <table>
                        <tr> <td>
                            <img src={home} className="log" alt="home"/>
                        </td>
                            <td>
                                Create a Post
                            </td>
                        </tr>
                    </table>
                </a>

                <a href="/donations" className= "gg" activeClassName="active" style={{
                    textDecoration: 'none'
                }}>
                    <table>
                        <tr> <td>
                            <img src={campaigns} className="log" alt="home"/>
                        </td>
                            <td>
                                Donations
                            </td>
                        </tr>
                    </table>

                </a>
            </ul>
              </div>
                    <div style={{
                        paddingLeft: '22%'
                    }}>
                        <button style={{
                            width: '215.46px',
                            height: '63px',
                            background: '#A41BE4',
                            borderRadius: '44.1px',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '24px',
                            lineHeight: '36px',
                            /* identical to box height */


                            color: '#FFFFFF',
                        }} onClick={this.HandleLogout}>
                            Logout
                        </button>
                    </div>
          </div>

          </Router>
              )
      }
}
export default Dashnav
