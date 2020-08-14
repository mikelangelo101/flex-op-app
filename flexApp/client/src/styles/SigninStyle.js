import Esite from "../images/gallery-esite.jpg";


const styles = theme => ({
    main: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up("sm")]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      // backgroundColor: theme.palette.secondary.main
      backgroundColor: "#fff",
      width: "240px"
    },
    form: {
      width: "100%",
      marginTop: theme.spacing.unit * 3,
      
    },
    muiFocused: {
        "&:focus": {
           color: "#069c40"
        }
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
      backgroundColor: "#069c40",
      "&:hover" :{
        backgroundColor: "#1ae067",
       }
    }
  });
  export default styles;