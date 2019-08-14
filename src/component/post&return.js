import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import logo from '../pic/icLikeDefault.png';
//透過map將已經得到的response 處理完資料每一筆文章資料輸出一個div 
//圖片部分目前寫死尚未做完
// const style = {
//   backgroundColor:'red',
//   'div:hover':{
//     backgroundColor:'green',
//   }
// };
// const Logo = () => {
//   // 左上角logo
//   return <img
//           src={logo} 
//           alt="Logo" 
//           />;

// }

export const post = (response)=>{
const pic = 'https://scontent.frmq2-1.fna.fbcdn.net/v/t1.15752-9/61417654_341395039822421_7431497786744373248_n.jpg?_nc_cat=102&_nc_oc=AQkJ6fldwCOC2OamVgSVstPS2cEaHNkwy_4IDr-FMArHVGmploENnNerv_PynA5OEBA&_nc_ht=scontent.frmq2-1.fna&oh=f89492662e10884217245b198826942a&oe=5D92EDB6'
        if(response){
          return(
          response.map(response =>{
            return (
                <Card key = {response.postId} style={{maxWidth: '100%',marginBottom:'20px'} }>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" style={{ backgroundColor: red[500],}}>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="Settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />
                <CardMedia
                  style={{
                    height: '100%',
                    width:'100%',
                  }}
                  title="Paella dish"
                  image={pic}
                >
                <img alt="pic" style={{width:'100%',height:'100%'}} src={pic} />
                </CardMedia>
                <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                   {response.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                {/* <div style={style}>
                 <Logo />
                  讚
                 </div> */}
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="Share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton>
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Card>
                   )
          })
          )
        }
      }