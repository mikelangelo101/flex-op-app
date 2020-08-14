import React from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from '@material-ui/core/IconButton';
import PostAddIcon from '@material-ui/icons/PostAdd';




const useToolbarStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: "white"
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }),
);



const StyledTableCell = withStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: "#069c40",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }),
)(TableRow);


// const column = [
//   "Dessert (100g serving)", "Calories", "Fat(g)", "Carbs(g)", "Protein(g)"
// ];





// const rows = [
//   {name: 'Frozen yoghurt', calories:159, fat: 6.0, carbs:24, protein: 4.0 },
//   {name:'Ice cream sandwich', calories: 237, fat: 9.0, carbs:37, protein: 4.3},
//   {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0},
//   {name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
//   {name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9}
// ];



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  // const { numSelected } = props;
  console.log("Table ToolBar@@@@@")
  console.log("genset Name " + JSON.stringify(props.networkName));
  console.log(props.gensets)


  return (
    <Toolbar
      className={classes.root}
    >
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {props.networkName}
        </Typography>
        <Typography >
              Number of Gensets: {props.gensets !== undefined ? props.gensets.length : 0}
        </Typography>

    </Toolbar>
  );
};

export default function CustomizedTables(props) {

  // console.log("from table component "+ JSON.stringify(...props))
  const classes = useStyles();
  const {column, gensets, networkName, showDelete } = props;
    
  const rows = gensets;
  console.log("Rows from GensetTable@@@" + gensets);
  // console.log("Rows from Table" + JSON.stringify(Ttenant.slice(1)));
 
 

  return (
    <div className={classes.root}>
    <Paper className={classes.paper}>
    <EnhancedTableToolbar networkName={networkName} gensets={gensets}/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            {column.map((head, index)=> ( 
               index > 0   
                    ? <StyledTableCell align="right">{head}</StyledTableCell>
                    : <StyledTableCell>{head}</StyledTableCell>      
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.gensetBrand}
              </StyledTableCell>
              <StyledTableCell align="right">{row.controllerModuleModel}</StyledTableCell>
              <StyledTableCell align="right">{row.controllerStatus}</StyledTableCell>
              <StyledTableCell align="right">{row.engineStatus}</StyledTableCell>
              <StyledTableCell align="right">{row.totalRunhour}</StyledTableCell>
              <StyledTableCell align="right">{row.gensetPowerCapacity}</StyledTableCell>
              <StyledTableCell align="right">{row.outputType}</StyledTableCell>
              <StyledTableCell align="right">{row.remoteStartSignalType}</StyledTableCell>
              <StyledTableCell align="right">{row.alarmsOutputType}</StyledTableCell>
              <StyledTableCell>
               {showDelete && <IconButton aria-label="delete">
                 <Tooltip title="Delete"  
                     onClick={() => props.removeLoad(row.id)}>
                    <DeleteForeverIcon />
                 </Tooltip>
                 </IconButton>  }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">

      </Typography>
      <Divider />
    </TableContainer>

    </Paper>
    </div>
  );
}
