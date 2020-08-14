import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
   delete:{
     color: "white",
     opacity: "0",
     "&:hover" :{
      opacity: "1"
     }
   }
  }),
);

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TitlebarGridList(props) {
  const classes = useStyles();
  const {tileData} = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Site Pictures</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.id}>
            <img src={tile.img} 
                 alt={tile.title} 
                 onClick={() => props.enlargeImage(tile.id)}
                 />
            <GridListTileBar
              title={tile.title}
              subtitle={<span> {tile.author}</span>}
              actionIcon={
                <IconButton 
                    className={classes.icon}
                    onClick={() => props.removeImage(tile.id)}>
                  <DeleteForeverIcon className={classes.delete}/>
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
