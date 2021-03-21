import React from 'react'
import firebase from 'firebase/app'
import 'firebase/auth'
import bgc from '../Assets/leftside.png'

class Loginpage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      idToken: null
    }
  }

  checkIfLogin = (x) => {
    let token = localStorage.getItem("token");
    if (token) {
      if(x)
        this.props.history.push("more");
      else
        this.props.history.push("campaign")
      console.log("pushed to more")
    }
  }
  componentDidMount() {
    this.checkIfLogin(false)
  }

  firebasetoken () {
    const cb = (x) => {
      this.setState({ idToken: x })
      // console.log(this.state.idToken);
    }
    const cb1 =(v) => {
      this.checkIfLogin(v)
    }
    const firebaseConfig = {
      apiKey: 'AIzaSyBLXwEsbaAuOUr9N_Q9kpBVY-vSWEjm8zs',
      authDomain: 'sociocredz.firebaseapp.com',
      projectId: 'sociocredz',
      storageBucket: 'sociocredz.appspot.com',
      messagingSenderId: '89086579919',
      appId: '1:89086579919:web:18b3c28c0aa1e6332653ba',
      measurementId: 'G-R7SDQYPDJR'
    }

    firebase.initializeApp(firebaseConfig)

    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/userinfo.profile')
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const user = result.user
      user.getIdToken().then((data) => {
        cb(data)
        console.log(data)
        postRequest('https://sociocredz.herokuapp.com/api/v1/ngo/login', { idToken: data })
          .then(data => {
            console.log(data)
            localStorage.setItem('token', data.jwt)
            cb1(data.firstLogin)
          }) // Result from the `response.json()` call
          .catch(error => console.error(error))

        function postRequest (url, data) {
          return fetch(url, {
            credentials: 'same-origin', // 'include', default: 'omit'
            method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
            body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
            headers: new Headers({
              'Content-Type': 'application/json'
            })
          })
            .then(response => response.json())
        }
      })
    })
  }

  //   componentDidMount() {
  //   }
  render () {
    return (
      <div className='logcont'>
        <div className='left' style={{
          backgroundImage: `url(${bgc})`,
          backgroundSize: 'contain',
        }}></div>
        <div className='rig'>
          <h2>Sign in to Sociocredz!</h2>
          <button className='signu' onClick={() => this.firebasetoken()}>G<span style={{ color: '#FC9F25' }}>......</span>|<span style={{ color: '#FC9F25' }}>.....</span>    Sign in with Google</button>
          <div className='or'>OR</div>
          <form>
            <label className='loglab'>Email ID</label>
            <br />
            <input className='logpu' />
            <br />
            <br />
            <label className='loglab'>Password</label>
            <br />
            <input type='password' className='logpu' />
            <button className='formb'>Login</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Loginpage
