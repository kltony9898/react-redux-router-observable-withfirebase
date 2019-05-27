import React, {Component} from 'react';
import firebase from 'firebase';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: ''
    }
    
    this.handleChange = this
      .handleChange
      .bind(this);
      this.handleUpload = this.handleUpload.bind(this);
  }
  componentDidMount=()=>{
    // storage.ref('images').child('aaa').getDownloadURL().then(url => {
    //   console.log(url);
    //   this.setState({url});
    //  }
    // )
  }
  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
  handleUpload = () => {
      const {image} = this.state;
      const uploadTask =firebase.storage.ref('images/aaa.gif').put(image);
      uploadTask.on('state_changed');
  }
  render() {
    const style = {
     float: 'right',
     marginLeft:'600px'
    };
    return (
      <div style={style}>
      <progress value={this.state.progress} max="100"/>
      <br/>
        <input type="file" onChange={this.handleChange}/>
        <button onClick={this.handleUpload}>上傳</button>
        <br/>
        <img 
            src={this.state.url || 'http://via.placeholder.com/400x300'} 
            alt="Uploaded images" 
            height="50px" 
            width="50px"
        />
      </div>
    )
  }
}

export default ImageUpload;