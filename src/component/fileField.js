import React,{Component} from 'react';
import firebase from 'firebase';
import {storage} from '../config/config';
import { Upload, Button, Icon } from 'antd';

class FileField extends Component {
    constructor(props) {
        super(props);
        this.state = {
          url: " ",
          fileList: [],
          uploading: false,
        }
        this.handleChange = this
          .handleChange
          .bind(this);
          this.handleUpload = this.handleUpload.bind(this);
      
    }
componentDidMount =()=>{
  firebase.storage().ref('images').child('aaa.gif').getDownloadURL().then(url => {
  
  this.setState({url});
})
}
handleChange = e => {
  if (e.target.files[0]) {
    const image = e.target.files[0];
    this.setState(() => ({image}));
  }
}
//上傳function
handleUpload = () => {
  const { fileList } = this.state;
  this.setState({
    uploading: true,
  });

  //定義uploadTask 將image包成form
  console.log(fileList[0]);
  const uploadTask = storage.ref(`images/aaa.gif`).put(fileList[0]);
  uploadTask.on('state_changed',()=>{
    this.setState({
      uploading: false,
    });
},
(error) => {
          // error function ....
      console.log(error);
      alert(error);
    }, 
  () => {
      // complete function ....
      firebase.storage().ref('images').child('aaa.gif').getDownloadURL().then(url => {
          console.log(url);
          this.setState({url});
      })
  });
    
}
  render(){
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (     
      <div style = {{float :"right",marginLeft:'500px'}}>
            <Upload {...props} >
            <Button style = {{float :"right",marginRight:'70px'}}>
            <Icon type="upload" /> Select File
            </Button>
            </Upload>
            <div />
            <Button
            type="primary"
            onClick={this.handleUpload}
            disabled={fileList.length === 0}
            loading={uploading}
            style={{ marginTop: 16 }}
              >
            {uploading ? 'Uploading' : 'Start Upload'}
            </Button>
            <img 
            src={this.state.url || 'http://via.placeholder.com/400x300'} 
            alt="Uploaded images" 
            height="70px" 
            width="70px"
             />
      </div>
    )
  }
}
export default FileField;