import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import useAlan from "../Alan";

import useStyles from "./styles";

import { Actors, MovieInformation, Movies, NavBar, Profile } from ".";

const App = () => {
  const classes = useStyles();
  const alanButtonContainer = useRef();

  useAlan();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" exact element={<Movies />} />
          <Route path="/approved" exact element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/actors/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
      <div ref={alanButtonContainer} />
    </div>
  );
};

export default App;
