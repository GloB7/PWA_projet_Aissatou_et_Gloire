// src/components/MovieList.tsx
import React from 'react';
import { useNowPlayingMovies } from '../services/api';
import { css } from '@emotion/react';
import MovieCard from './MovieCard';

const movieListStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

const MovieList: React.FC = () => {
  const { data, isLoading, isError } = useNowPlayingMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching movies</div>;
  }

  return (
    <div css={movieListStyles}>
      {data.results.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
