import React from 'react';
// import Navbar from '../components/navbar';
// import Democarasol from '../components/carasol';

class More extends React.Component{
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
              <div className="righ">
                  <h1>Tell us more about your NGO!</h1>
                  <br/>
                  <form>
                      <label className="loglab">NGO Name</label>
                      <input className="logpu"/>
                      <br/>
                      <br/>
                      <label className="loglab">Brief description about your NGO.</label>
                      <input type="text-area" className="logput"/>
                  </form>
              </div>

          </div>



              )
      }
}
export default More;