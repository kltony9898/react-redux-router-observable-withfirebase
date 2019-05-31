import img from '../pic/loading.gif';
import React from 'react';
export const loadingpic = {
    src:img,
      alt: "Logo",
      width:  '800px',
      height: '800px'
    };
    
    
class Loading extends React.Component {
  render(){
    return (
    <div style = {{display: 'flex',justifyContent:'center',alignItems:'center'}}>
    <img
        src={loadingpic.src}
        alt = {loadingpic.alt}
        width = {loadingpic.width}
        height = {loadingpic.height}
    /> 
    </div>
 
    );
  }
}
export default Loading ;