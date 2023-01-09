import React, { useState } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = (API) => {
    axios
      .get(API)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return <div>Main</div>;
};

export default Main;
