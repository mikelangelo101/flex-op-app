import React, { useContext, Component } from 'react';
import axios from "axios";
import clsx from 'clsx';
import { makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import { DrawerContext } from "./contexts/DrawerContext";
import styles from "./styles/MainStyles";
import Container from '@material-ui/core/Container';
import Main from "./Main";
import ProjectNavbar from "./ProjectNavbar";
import ProjectForm from "./ProjectForm";
import ProjectsView from "./ProjectsView";
import SingleProjectNavbar from "./SingleProjectNavbar";
import ProjectOperationView from "./ProjectOperationView";
import ProjectOperationForm from "./ProjectOperationForm";
import TssReportPage from "./TssReportPage";





class Projects extends Component  {
  static defaultProps = {
    ProjectsColumn: ["","Name", "Client", "Scope", "Number of Site", "Location", "Manager", "Start-Date", "End Date(Extimated)", ""],
    ProjectTaskColumn: ["","Site ID", "Operation Type", "Location", "Assinged Staff", "Status", "Operation Date", "Operation Code", ""]  
  };
    constructor(props){
        super(props);

        this.state = {
            page: 0,
            projects: [],
            project: [],
            users:[],
            usersAdoc: [],
            projectTasks: [],
            tssReport:{},
            projectsShow: true,
            singleProjectShow: false
        }
        this.currentPage = this.currentPage.bind(this)
        this.submitProjectForm = this.submitProjectForm.bind(this)
        this.submitOperationForm = this.submitOperationForm.bind(this)
        this.showOperationReport = this.showOperationReport.bind(this)
        this.showProject = this.showProject.bind(this)
        this.getUsers = this.getUsers.bind(this)
        this.getTasks = this.getTasks.bind(this)
    }

    static contextType = DrawerContext;

    componentDidMount(){
      axios.get('/api/regproject/')
      .then((response) => {
        console.log(response);
        this.setState({
          projects: response.data
        }, () => {
          this.getUsers();
        })
      }).catch((error) => {
        console.log(error)
      })
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
      }).catch((error) => {
        console.log(error)
      })    
    }
  
  getTasks(){
    let projectCode = this.state.project.projectCode;
    axios.get("/api/addtask")
    .then((response) => {
       console.log(response);
       let projectTasks = response.data.filter(task => (task.projectCode === projectCode))
       this.setState({
        projectTasks: projectTasks
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }


  currentPage(page){
    console.log("The page: " +page)
    this.setState({
        page: page
      });
  }

  showProject(id){
    console.log(id)
    axios.get(`/api/regproject/${id}`)
    .then((response) => {
      console.log(response);
      let projectCode = response.data.projectCode
      this.setState({
        project: response.data
      }, () => {
        this.getTasks();
      })
    }).catch((error) => {
      console.log(error)
    })
    this.setState({
      singleProjectShow: true,
      projectsShow: false,
      page: 4
    });

  }

  showOperationReport(id){
    console.log(id)
    let task = this.state.projectTasks.filter(task => (task._id === id));
    let data = {
      operationType: task[0].operationType,
      operationCode: task[0].operationCode
    };
    axios({
      method: 'post',
      url: "/api/getTaskReport",
      crossdomain: true, 
      data: data
    })
    .then((response) => {
      console.log(response.data);
       this.setState({
         tssReport: response.data,
         singleProjectShow: true,
         projectsShow: false,
         page: 6
       });	
    })
    .catch((error) => {
    console.log(">>>>>.....>>>>: " + error.message)    
    });
  }


  submitProjectForm(data){
     console.log(data);
     axios({
      method: 'post',
      url: "/api/regproject",
      crossdomain: true, 
      data: data
    })
    .then((response) => {
     console.log(response.data);	
    })
    .catch((error) => {
    console.log(">>>>>.....>>>>: " + error.message)    
    });
  }

  submitOperationForm(data){
     console.log("Before Submission of operation form")
     console.log(data);
     axios({
      method: 'post',
      url: "/api/addtask",
      crossdomain: true, 
      data: data
    })
    .then((response) => {
      console.log("After Submission of operation form Response")
      console.log(response.data);	
      this.getTasks();
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
        {this.state.projectsShow && <ProjectNavbar  currentPage={this.currentPage}/>}
        {this.state.page === 0 && <ProjectsView
                                   projects={this.state.projects}
                                   column={this.props.ProjectsColumn}
                                   tableName="Projects Registered"
                                   showProject={this.showProject} 
                                   currentPage={this.currentPage}/>}
        {this.state.page === 1 && <ProjectForm 
                                    submitProjectForm={this.submitProjectForm}
                                    currentPage={this.currentPage}/>}
        {/* {this.state.page === 2 && <ProjectMonitor />} */}
        {/* {this.state.page === 3 && <ProjectReports />} */}
        {this.state.singleProjectShow && <SingleProjectNavbar  
                                            currentPage={this.currentPage}
                                            project ={this.state.project}/>}
        {this.state.page === 4 && <ProjectOperationView
                                   project={this.state.project}
                                   column={this.props.ProjectTaskColumn}
                                   tableName="Project Tasks"
                                   showOperationReport={this.showOperationReport}
                                   projectTasks={this.state.projectTasks} />}
        {this.state.page === 5 && <ProjectOperationForm
                                   projects={this.state.projects}
                                   users={this.state.users}
                                   usersAdoc={this.state.usersAdoc}
                                   submitOperationForm={this.submitOperationForm} 
                                   currentPage={this.currentPage}/>}
        {this.state.page === 6 && <TssReportPage
                                    siteDetails={this.state.tssReport.siteDetails}
                                    existingSolution={this.state.tssReport.existingSolution}
                                    categorisedTenants={this.state.tssReport.categorisedTenants}
                                    gensetDetails={this.state.tssReport.gensetDetails}
                                    additionalLoad={this.state.tssReport.additionalLoad}
                                    cableRequirement={this.state.tssReport.cableRequirement} 
                                    currentPage={this.currentPage}/>}
      </div>
      </main>
      </Container>
      </>
    );

  }

}

export default withStyles(styles, { withTheme: true })(Projects);