import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetActorsQuery,
  useGetActorMoviesQuery,
} from "../../services/TMDB.js";
import { Grid, Typography, Box, Button, CircularProgress } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import MovieList from "../MovieList/MovieList";

import useStyles from "./styles.js";

const Actors = () => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const { data, isFetching, error } = useGetActorsQuery(id);
  console.log("Actors");

  console.log(data);
  const navigate = useNavigate();
  const classes = useStyles();
  const { data: actorMovies } = useGetActorMoviesQuery({ page, id });

  console.log(actorMovies);

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link to="/">Something has gone wrong - Go back.</Link>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3} className={classes.containerSpaceAround}>
        {/* <div className={classes.containerAround}> */}
        <Grid item sm={12} lg={4}>
          <img
            className={classes.image}
            src={`https://images.tmdb.org/t/p/w500/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        <Grid
          item
          lg={7}
          xl={8}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "250px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            {data?.biography}
          </Typography>

          <Box className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              color="primary"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Box>
        </Grid>
        {/* </div> */}
        <Box marginTop="5rem" width="100%">
          <Typography
            variant="h2"
            gutterBottom
            align="center"
            fontFamily="bold"
          >
            Movies
          </Typography>
          {actorMovies ? (
            <MovieList movies={actorMovies} numberOfMovies={12} />
          ) : (
            <Box>Sorry, nothing was found.</Box>
          )}
        </Box>
      </Grid>
    </>
  );
};

export default Actors;
