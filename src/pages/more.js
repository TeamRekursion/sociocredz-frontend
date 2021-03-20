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
                      <br/>
                      <div className="fle">
                      <div className="lef">
                      <h4 className="head1">Get your NGO verified.</h4>
                      <h5 className="head2">Upload a valid authentication certificate</h5>
                      </div>
                            <div>
                                <button className="rg">
                                    Upload
                                </button>
                            </div>
                      </div>
                      {/* <div className="bot"> */}
                          <button className="bott">
                              Submit
                          </button>
                      {/* </div> */}
                      
                  </form>
              </div>

          </div>



              )
      }
}
export default More;