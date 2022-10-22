import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";
import { Movie } from "..";

const MovieList = ({ movies, numberOfMovies }) => {
  console.log("MovieList");

  console.log(movies);

  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(1, numberOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
