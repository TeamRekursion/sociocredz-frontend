import React from 'react'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
  }

  render () {
    return (
      <div className='navbar'>
        <div className='logo'>
          <img src={1} alt='logo' />
        </div>
        <div className='links'>
          <a href={1} className='navlinks'>Home</a>
          <a href={1} className='navlinks'>About Us</a>
          <a href={1} className='navlinks'>Contact Us</a>
          <button className='navlinks logibut' style={{ color: 'white' }}>Login</button>
        </div>
      </div>
    )
  }
}
export default Navbar
