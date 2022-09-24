import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import { Actors, MovieInformation, Movies, NavBar, Profile } from "./";

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieInformation />} />
        <Route path="/actors/:id" element={<Actors />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </main>
  </div>
);

export default App;
