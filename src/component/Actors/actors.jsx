import React from "react";
import { useParams } from "react-router-dom";
import { useGetActorsQuery } from "../../services/TMDB.js";
import { Grid, Typography } from "@mui/material";

import useStyles from "./styles.js";

const Actors = () => {
  const { id } = useParams();
  const { data, isFetching } = useGetActorsQuery(id);
  console.log("Actors");

  console.log(data);

  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.containerSpaceAround}>
      <Grid item lg={5} xl={4}>
        <img
          src={`https://images.tmdb.org/t/p/w500/${data?.profile_path}`}
          alt={data?.name}
          className={classes.image}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {data?.name}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Actors;
