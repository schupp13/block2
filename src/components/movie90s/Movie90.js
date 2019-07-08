import React, { Component } from "react";
import axios from "axios";
import data from "./movieData";
import "./movie90s.css";
import MovieButtons from "../MovieButtons/MovieButtons"
class Movie90 extends Component {
  constructor() {
    super();
    this.state = {
      imdbID: data,
      key: "579b4fff",
      movies: [],
      addMovieInput: '',
    };
    console.log(data);
  }

  addMovieInput = (e) =>{
    // console.log(e.target.value);
    this.setState({addMovieInput: e.target.value});
    console.log(this.state.addMovieInput);
  }

  addMovieButton = () =>{
    this.setState({imdbID: [...this.state.imdbID, this.state.addMovieInput]});
    console.log(this.state.imdbID);
  }

  urlBuilder = () => {
    let url = this.state.imdbID.map(e => {
      return axios.get(`http://www.omdbapi.com/?i=${e}&apikey=579b4fff`);
    });
    return url;
  };

  movieBuilder = () => {
    let urls = this.urlBuilder();
    Promise.all(urls).then(results => {
      const movies = results.map(result => result.data);
      this.setState({ movies });
      
    }).catch(error => {
      console.log(error)
  });
    
  };

  componentDidMount() {
    this.movieBuilder(); 
  }

  componentDidUpdate(){
    this.movieBuilder();
  }

  render() {
    const movies = this.state.movies;
    let movieBlock =  movies.map(e => {
      return (<div key={e.imdbID}className="movie"><h1>{e.Title}</h1> <img src={e.Poster} alt={e.Title}/><div><MovieButtons key={e.imdbID} plot={e.Plot} actors={e.Actors} awards={e.Awards} runtime={e.Runtime} genre={e.Genre} ratings={e.Ratings} /></div></div>)
    });

    return (
      <div className="movies90">
        <div>
          <div className="topicDiv">
          <h1 className="topic">Top 90s</h1>
          </div>
          <div className="movies">
             {movieBlock}      
          </div>
       
        </div>
        <div className="buttonDiv">
         <input placeholder="Enter Imdb number" onChange={this.addMovieInput}></input>
         <button onClick={this.addMovieButton}>Add a Movie</button>
         </div>
      </div>
    );
  }
}

export default Movie90;
