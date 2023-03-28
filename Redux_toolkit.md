Redux/toolkit

```
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";

const initialState = {
  movies: [],
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await movieApi.get("/posts");
  return response.data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: () => {
      console.log("pending");
    },
    [fetchMovies.fulfilled]: (state, { payload }) => {
      return { ...state, movies: payload };
    },
    [fetchMovies.rejected]: (state, { payload }) => {
      console.log("rejected");
    },
  },
});

// export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies;
export default movieSlice.reducer;

```

In home:

```
import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return (
    <div className="banner-img">
      <MovieListing />
    </div>
  );
};

```
