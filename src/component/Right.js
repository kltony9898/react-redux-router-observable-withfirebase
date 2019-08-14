import { Card ,Carousel} from 'antd';
import React, { Component } from 'react';
import logo from '../pic/logo.png';
import facebook from '../pic/facebook.jpg';
import twitter from '../pic/twitter.png';
import '../css/Right.css';
//右邊那條  暫時還沒用到什麼東西目前只有丟view
class Right extends Component {

  render() {
     const { Meta } = Card;
      const style = {
      
      }
      const Logo = () => {
        return <img src={logo} alt="Logo" className='img' />;
      } 
      const Facebook = () => {
          return <img src = {facebook} alt='facebook' className='img'/>
      }
      const Twitter = () => {
        return <img src = {twitter} alt='Twitter' className='img' />
    }
    return (
    <div style={{width:'100%',height:'100%'}}>
        <Card title="Facebook" extra={<a href="https://facebook.com">刊登廣告</a>} className='ad1'>
            <Facebook />
        </Card>
        <Card size="small" title="爆料公社" extra={<a href="https://twitter.com/?lang=zh-tw">刊登廣告</a>} className='ad1'>
            <Logo />
        </Card>
        <Card size="small" title="Slinding widow" extra={<a href="https://web.bc3ts.com/">刊登廣告</a>} style={{width:'90%',marginBottom:'100px' }}>
            <Carousel autoplay style = {{style}}>
                <div>
                  <Logo />
                </div>
                <div>
                   <Facebook />
                </div>
                <div>
                    <Twitter />
                </div>
            </Carousel>
        </Card>
        <Card
          hoverable
          style={{ width:'90%',height:'auto' }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Card版面" description="https://web.bc3ts.com/" />
        </Card>
      </div>
    );
  }
}
export default Right;