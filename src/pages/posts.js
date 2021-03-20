import React from 'react'
import Dashnav from '../components/dashnav';
import Campcard from '../components/campcard';
import api from '../utils/apiCalls';
import PostCard from "../components/PostCard";
// import Democarasol from '../components/caraso/l'

class Posts extends React.Component {
  state = {
    title: '',
    desc: '',
    postPhotoUrl: 'https://penji.co/wp-content/uploads/2019/08/red-cross-uganda-non-profit-posters.jpg',
    token: ''
  }
  constructor (props) {
    super(props)
  }

  // fetchLast = () => {
  //   api.FetchCampaigns
  // }


  componentDidMount () {
    let token = localStorage.getItem("token")
    this.setState({
      token,
    })
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    let response = await api.CreatePost(this.state.token, this.state.title, this.state.desc, this.state.postPhotoUrl)
    if (response.code == 201) {
      alert("Post created!")
    } else {
      alert("Post Creation Failed!")
    }
  }
  render () {
    return (
      <div>
        <Dashnav/>
        <div className="grid-set">
          <div className="leftg">
            <h3 style={{color:"#fc7b22"}}>Make a post</h3>
            <h6 className="him">Campaigns allow you to crowdfund your charity events.</h6>
            <form>
              <label className='loglab'>
                Post Title
              </label>
              <input className='logpu' value={this.state.title} onChange={(e) => this.setState({
                title: e.target.value,
              })}/>
              <br/>
              <br/>
              <label className='loglab'>
                Post Description
              </label>
              <input className='logpu' value={this.state.desc} onChange={(e) => this.setState({
                desc: e.target.value,
              })}/>

              <button type="submit" onClick={this.handleSubmit}>
                Publish the post
              </button>
            </form>
          </div>
          <div className="rightg">
            <PostCard/>
          </div>
        </div>
      </div>
    )
  }
}
export default Posts