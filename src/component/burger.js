
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';
import {logout} from '../action/actiontype';
const drawerWidth = '180px';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop:'10px',
 
  },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   },
//   title: {
//     flexGrow: 1,
//   },
  hide: {
    display: 'none',
  },

  drawerPaper: {
    width: drawerWidth,
  },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: '0 8px',
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-start',
//   },

}));
 const Burger = ({level,gold,diamond,fan,follow,logout})=>{
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  
    function handleDrawerOpen() {
      setOpen(true);
    }
  
    function handleDrawerClose() {
      setOpen(false);
    }
    return(
 
    <div className={classes.root} style={{float:'right',marginRight:'10px'}}>
      {/* <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar> */}
       <IconButton
            
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
        </IconButton>
        {/* </Toolbar>
      </AppBar> */}
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
      </main> */}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {[`等級：${level}`, `金幣：${gold}`, `鑽石：${diamond}`, `粉絲：${fan}` ,`追蹤：${follow}`].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
            <ListItem button component={Link} to="/home">
              <ListItemText > 首頁 </ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/uploadpic">
              <ListItemText  > 改頭貼 </ListItemText>
            </ListItem>
            <ListItem button  onClick={()=>{logout()} } component={Link} to="/">
              <ListItemText > 登出 </ListItemText>
            </ListItem>
        </List>
        {/* <Menu
        theme='#262626'
        mode="horizontal"
        className ='menu'
      > */}
        {/* <div className='menu'>
          <Menu.Item key="1" className='menu-items'><Link to ='/home'>首頁</Link></Menu.Item>
          <Menu.Item key="2" className='menu-items'><Link to ='/uploadpic'>改頭貼</Link></Menu.Item>
          <Menu.Item key="3" className='menu-items' onClick = {()=>{this.props.logout();this.props.push('/');}}  >登出</Menu.Item> */}
          
          {/* </div> */}
         {/* </Menu> */}
      </Drawer>
    </div>
    )
}
const mapStateToProps = (state) => {

    return {
      level:state.showitems.level,
      gold:state.showitems.gold,
      diamond:state.showitems.diamond,
      fan:state.showitems.fan,
      follow:state.showitems.follow,
      uid:state.getuid.uid,
      
    }
    
  }

  const mapDispatchToProps = {
    // getitems
    logout

  }
  export default connect(
         mapStateToProps,
         mapDispatchToProps
  )(Burger);