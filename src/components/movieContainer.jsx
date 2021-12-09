import react from "react";
import React, { Component } from "react";
import { getMovies } from "./fakeMovieService";
class displayMovie extends React.Component {
  state = {
    movie: getMovies(),
  };
  deleteMovie(temp){
      let newMovieList=this.state.movie.filter((key)=>key._id!==temp)
      this.setState({movie:newMovieList});
  }
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <h1 id="head-text">My fav Movie list</h1>
          {this.state.movie.map((temp)=>(<div className="movieList">
              <div className="title">{temp.title}</div>
              <div className="genre">{temp.genre.name}</div>
              <div onClick={()=>this.deleteMovie(temp._id)} className="delete">Delete</div>
         </div>))}
        </div>
      </React.Fragment>
    );
  }
}

export default displayMovie;
