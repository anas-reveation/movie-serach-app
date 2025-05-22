import { useState, type ChangeEvent } from "react";
import { useGetMoviesQuery } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import LoadingPage from "../components/LoadingPage";
import ErrorPage from "../components/ErrorPage";

const MOVIES_PER_PAGE = 5;

export default function MovieDisplay() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // RTK Query hook call with query and page params
  const { data, error, isLoading, isError } = useGetMoviesQuery(
    { query, page },
    { skip: query.trim() === "" }
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Movie Search</h1>

      <input
        type="text"
        value={query}
        onChange={handleSearchChange}
        placeholder="Search movies..."
        className="w-full p-3 mb-6 border border-gray-300 rounded"
      />

      {isLoading && <LoadingPage count={MOVIES_PER_PAGE} />}

      {isError && (
        <ErrorPage
          message={typeof error === "string" ? error : "Failed to load movies."}
        />
      )}

      {!isLoading && data && data.results.length === 0 && (
        <p className="text-center text-gray-500">
          No movies found for "{query}"
        </p>
      )}

      {data && data.results.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {data.results.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          <Pagination
            currentPage={page}
            onPageChange={handlePageChange}
            totalPages={data.total_pages}
          />
        </>
      )}
    </div>
  );
}
