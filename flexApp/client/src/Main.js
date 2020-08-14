import React, { useContext } from 'react';
import clsx from 'clsx';
import { withStyles } from "@material-ui/core/styles"; 
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
import styles from "./styles/MainStyles";
import { DrawerContext } from "./contexts/DrawerContext";



function Main(props) {
  const {classes }= props
//   const theme = useTheme();
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  
  const { open, setOpen } = useContext(DrawerContext);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, classes.colorPrimary, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={setOpen}
            edge="start"
            className={clsx(classes.menuButton, classes.colorPrimary, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Flex Nigeria
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={setOpen}>
            {open !== 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['TSS', 'Commissioning', 'Projects', 'Site History'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <Link to={`/${text.toLowerCase().replace(/\s+/g, '')}`} >
                   <ListItemText primary={text} /> 
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Users', 'Dashboards', 'News'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <Link to={`/${text.toLowerCase().replace(/\s+/g, '')}`} >
                   <ListItemText primary={text} /> 
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
        >
        <div className={classes.drawerHeader} />
      </main> */}
    </div>
  );
}

export default withStyles(styles, { withTheme: true })(Main);