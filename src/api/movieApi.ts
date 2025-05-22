import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}

interface MovieResponse {
  page: number;
  total_pages: number;
  results: Movie[];
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, { query: string; page?: number }>({
      query: ({ query, page = 1 }) => ({
        url: "search/movie",
        params: {
          api_key: API_KEY,
          query,
          page,
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery } = movieApi;
