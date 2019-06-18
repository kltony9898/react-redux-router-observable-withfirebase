import React, { Component } from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';

//左側導覽列
class Sider extends Component {

  render() {
    return (
      <Paper style ={{width:'100%'}}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <Typography variant="inherit">動態</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PriorityHighIcon />
          </ListItemIcon>
          <Typography variant="inherit">小圈圈</Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            歡樂島
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            遊樂場
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <Typography variant="inherit" noWrap>
            好友地圖
          </Typography>
        </MenuItem>
      </MenuList>
    </Paper>
    );
  }
}
export default Sider;