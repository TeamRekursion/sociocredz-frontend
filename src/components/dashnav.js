import React from 'react';
import Logo from '../Assets/SOCIOCREDZ_LOGO.svg';

class Dashnav extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
      }
      render() {
        return(
          <div className="coom">
              <img src={Logo} alt="logo" className="logo"/>
          </div>
              )
      }
}
export default Dashnav;