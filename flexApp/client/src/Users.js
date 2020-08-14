import React, { useContext, Component } from 'react';
import axios from "axios";
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { DrawerContext } from "./contexts/DrawerContext";
import styles from "./styles/MainStyles";
import Main from "./Main";
import UsersNavbar from "./UsersNavbar";
import UserForm from "./UserForm";
import UsersView from "./UsersView";
import UsersViewAdoc from "./UsersViewAdoc";




class Users extends Component  {
  static defaultProps = {
    UsersColumn: ["","First Name", "Last Name", "Phone Contact", "Email Address", "Password", "Position", ""]
 
  };
    constructor(props){
        super(props);

        this.state = {
            page: 0,
            users: [],
            usersAdoc: [],
            usersShow: true,
            addUserFormShow: false,
            showDelete: true
        }
        this.currentPage = this.currentPage.bind(this);
        this.submitUserForm = this.submitUserForm.bind(this);
        this.showUserProfile = this.showUserProfile.bind(this);
        this.getUsers = this.getUsers.bind(this);
        this.removeUser = this.removeUser.bind(this);
    }

    static contextType = DrawerContext;

    componentDidMount(){
     this.getUsers();
    }


  getUsers(){
    axios.get("/api/registeruser")
    .then((response) => {
      console.log(response.data);
      let users = response.data.filter(user => user.position !== "Adhoc Staff")
      let usersAdoc = response.data.filter(user => user.position === "Adhoc Staff")
      this.setState({
        users: users,
        usersAdoc: usersAdoc
      })
      this.currentPage(0);
    }).catch((error) => {
      console.log(error)
    })    
  }

   
  removeUser(id){
    console.log(id)
    axios.get(`/api/registeruser/delete/${id}`)
    .then((response) => {
      console.log(response);
      this.getUsers();
    }).catch((error) => {
      console.log(error)
    })
  }

  currentPage(page){
    console.log("The page: " + page)
        this.setState({
            page: page
           });
  }

  showUserProfile(id){
    console.log(id)
    // axios.get(`/api/regproject/${id}`)
    // .then((response) => {
    //   console.log(response);
    //   this.setState({
    //     project: response.data
    //   })
    // }).catch((error) => {
    //   console.log(error)
    // })
    // this.state.projectShow = true;
    
  }


  submitUserForm(data){
     console.log(data);
     axios({
      method: 'post',
      url: "/api/registeruser",
      crossdomain: true, 
      data: data
    })
    .then((response) => {
    console.log(response.data);	
       this.getUsers();
    })
    .catch((error) => {
    console.log(">>>>>.....>>>>: " + error.message)    
    });

  }

  render(){

      const style ={
          flexGrow: 1,
          width: 'auto',
          marginLeft: "240px"
      }

      const {classes }= this.props
      const { open } = this.context
    return (
      <>
      <Main />
      <Container maxWidth="xl">
      <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
              })}
             >
             <div className={classes.drawerHeader} />
      <div style={style}>
        {this.state.usersShow && <UsersNavbar  currentPage={this.currentPage}/>}
        {this.state.page === 0 && <UsersView
                                   users={this.state.users}
                                   column={this.props.UsersColumn}
                                   tableName="FlexApp Staff Users"
                                   showDelete={this.state.showDelete}
                                   removeUser={this.removeUser}
                                   />}
        {this.state.page === 1 && <UsersViewAdoc
                                   users={this.state.usersAdoc}
                                   column={this.props.UsersColumn}
                                   tableName="FlexApp AdocStaff Users"
                                   showDelete={this.state.showDelete}
                                   removeUser={this.removeUser}
                                   />}
        {this.state.page === 2 && <UserForm 
                                     submitUserForm={this.submitUserForm}
                                     users={this.state.users}
                                   />}
        </div>
       </main>
      </Container>
      </>
    );

  }

}

export default withStyles(styles, { withTheme: true })(Users);