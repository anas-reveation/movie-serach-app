type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string | null;
};

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg";

  return (
    <div className="border rounded shadow p-4 flex flex-col">
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-auto rounded mb-3"
      />
      <h3 className="text-lg font-semibold mb-1">{movie.title}</h3>
      <p className="text-sm text-gray-700">
        {movie.overview ? movie.overview.slice(0, 100) + "..." : "No summary"}
      </p>
    </div>
  );
}
