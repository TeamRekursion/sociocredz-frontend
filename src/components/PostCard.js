import React from 'react'
import api from "../utils/apiCalls";

class PostCard extends React.Component {
    state = {
        photoURL: '',
        title: '',
        desc: '',
    }
  constructor (props) {
    super(props)
  }

    fetchLast = async () => {
        let response = await api.FetchPosts(this.state.token)
        let { data }  = response;
        let top = data[0];
        this.setState({
            title: top.postTitle,
            desc: top.postDescription,
            photoURL: top.postPhotoUrl
        })
    }
    async componentDidMount () {
        let token = localStorage.getItem("token")
        this.setState({
            token,
        }, async () => {
            await this.fetchLast();
        })
    }

  render () {
    return (
      <div>
        <h3 style={{color:"#A41BE4"}}>Your Posts</h3>
            <h6 className="him">Here are your recent posts.</h6>
        <div className="card-post">
            <h1>{this.state.title}</h1>

            <img src={this.state.photoURL} style={{
                maxHeight: '60%',
                maxWidth:'80%',
                alignSelf: 'center'
            }} />

            <h6>Description</h6>
            <h3 className="kam"><span>{this.state.desc}</span></h3>
        </div>
      </div>
    )
  }
}
export default PostCard;