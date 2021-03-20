import React from 'react';

class Loginpage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
      }
      render() {
        return(
          <div className="logcont">
              <div className="left">left column</div>
              <div className="rig">
                  <h2>Sign in to Sociocredz!</h2>
                  <br/>
                  <button className="signu">G<span style={{color:"#FC9F25"}}>......</span>|<span style={{color:"#FC9F25"}}>.....</span>    Sign in with Google</button>
                  <div className="or">OR</div>
                  <form>
                      <label className="loglab">Email ID</label>
                      <br/>
                      <input className="logpu"/>
                      <br/>
                      <br/>
                      <label className="loglab">Password</label>
                      <br/>
                      <input type="password" className="logpu"/>
                      <button className="formb">Login</button>
                  </form>
              </div>

          </div>
              )
      }
}
export default Loginpage;