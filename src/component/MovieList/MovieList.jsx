import React from "react";
import { Grid } from "@mui/material";

import useStyles from "./styles";
import { Movie } from "..";

const MovieList = ({ movies, numberOfMovies, excludeFrom }) => {
  console.log("MovieList");

  console.log(movies);

  const startsFrom = excludeFrom ? 1 : 0;

  const classes = useStyles();

  return (
    <Grid container className={classes.moviesContainer}>
      {movies.results.slice(startsFrom, numberOfMovies).map((movie, index) => (
        <Movie key={index} movie={movie} index={index} />
      ))}
    </Grid>
  );
};

export default MovieList;
