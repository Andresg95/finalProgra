import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosters } from './HomeThunks';
import MoviePoster from './MoviePoster';

export const Home = ({ posters, onFetchPosters }) => {
  useEffect(() => {
    onFetchPosters('Family');
  }, []);

  return (
    <div>
      {posters.map(({ imdbid, poster }) => (
        <MoviePoster key={imdbid} url={`${poster}`} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ home }) => ({
  posters: home.posters,
});

const mapDispatchToProps = dispatch => ({
  onFetchPosters: genre => dispatch(fetchPosters(genre)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
