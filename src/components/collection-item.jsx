import { Paper } from "@material-ui/core";
import React from "react";
import FavoriteIcon from '@material-ui/icons/Favorite';



const CollectionItem = ({ user, urls, description, likes }) => (
  <Paper elevation={3} style={{ margin: `10px`, height: `240px` }}>
    <img src={urls.thumb} alt={description} style={{
      margin: `10px`,
      borderRadius: `10px`,
    }} />
    <p style={{ textAlign: `right`, color: `rgba(176, 164, 170, 0.8)`, margin: `10px` }}>Taken by {user.name} </p>
    <p style={{ textAlign: `right`, color: `red`, margin: `10px` }}><FavoriteIcon /></p>
    <p style={{ textAlign: `right`, color: `rgba(176, 164, 170, 0.8)`, marginRight: `10px`, marginTop: `-15px`, fontSize: `13px` }}>{likes}</p>
  </Paper>
);

export default CollectionItem;