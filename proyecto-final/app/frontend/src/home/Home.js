import React, { Component } from 'react';
import Axios from 'axios';
import MoviePoster from './MoviePoster';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posters: [],
    };
  }

  componentDidMount() {
    Axios.get(`http://${process.env.API_URL}/movies/landing/?genre=Action`).then((res) => {
      const posters = res.data;
      this.setState({ posters });
    });
  }

  render() {
    const { posters } = this.state;
    return (
      <div>
        {posters.map(({ imdbid, poster }) => (
          <MoviePoster key={imdbid} url={`${poster}`} />
        ))}
      </div>
    );
  }
}
