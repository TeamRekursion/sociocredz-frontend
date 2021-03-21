import React from 'react';
import postNgoUpdate from '../utils/postNgoUpdate'
// import Navbar from '../components/navbar';
// import Democarasol from '../components/carasol';
import bgc from '../Assets/leftside.png'

class More extends React.Component{
    state = {
        ngoName: '',
        ngoDesc: '',
        token: ''
    }
      constructor(props) {
        super(props);
      }

      handleSubmit = async (e) => {
          e.preventDefault();
          let response = await postNgoUpdate.UpdateNGODetails(this.state.token, this.state.ngoName, this.state.ngoDesc);
          console.log(response)
          if (response.code == 200) {
              console.log("update success!")
          } else {
              console.log("update fail")
          }
      }

      updateNGOName = (e) => {
        console.log(e.target.value)
        this.setState({ngoName: e.target.value})
      }
    updateNGODesc = (e) => {
        console.log(e.target.value)
        this.setState({ngoDesc: e.target.value})
    }

      componentDidMount() {
        let token = localStorage.getItem("token");
        this.setState({
            token,
        })
      }
      render() {
        return(
            <div className="logcont">
                <div className='left' style={{
                    backgroundImage: `url(${bgc})`,
                    backgroundSize: 'contain'
                }}></div>
              <div className="righ">
                  <h1>Tell us more about your NGO!</h1>
                  <br/>
                  <form>
                      <label className="loglab">NGO Name</label>
                      <input className="logpu" value={this.state.ngoName} onChange={this.updateNGOName}/>
                      <br/>
                      <br/>
                      <label className="loglab">Brief description about your NGO.</label>
                      <input type="text-area" className="logput" value={this.state.ngoDesc} onChange={this.updateNGODesc} />
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
                          <button className="bott" onClick={this.handleSubmit}>
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