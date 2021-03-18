import { MovieCard } from "./MovieCard"
import { Header } from "./Header"
import '../styles/content.scss';

interface ContentProps{
  movies: Array<{
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }>
  selectedGenre: string;
};

export function Content( { movies, selectedGenre } : ContentProps) {
  return(
  <div className="container">
    <Header title={selectedGenre}/>

    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  </div>
  )
}