import React, {Component} from 'react';
import Axios from 'axios'
import MoviePoster from './MoviePoster';

export default class Home extends Component{

    constructor(...args) {
        super(...args)
        this.state = {
            posters: []
        }
    }
    componentDidMount() {
        Axios.get(`http://localhost:10010/movies/landing/?genre=Action`)
            .then(res => {
            const posters = res.data;
            this.setState({ posters });
            })
        }

    render() {
        const {posters} = this.state;
        return(
        <div>
            {posters.map(
                ({poster}) => 
                    <MoviePoster url={`${poster}`}/> 
            )}   
        </div>         
        )
    }

}

