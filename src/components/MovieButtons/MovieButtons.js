import React, {Component} from 'react';
import "./MovieButton.css";

class MovieButtons extends Component{
  constructor(){
    super();
    this.state = {
      plotTest: false,
      actorsTest: false,
      detailsTest: false,
      ratingsTest: false,
      masterTest: false
    }
  }
  masterButton=()=>{
    this.setState({
      plotTest: false,
      actorsTest: false,
      detailsTest: false,
      ratingsTest: false,
    masterTest: !this.state.masterTest});
  }

  plotButton = ()=>{
      this.setState({plotTest: !this.state.plotTest});
      console.log(this.state.plotTest);
  }
  actorsButton = ()=>{
    this.setState({actorsTest: !this.state.actorsTest});
    console.log(this.state.plotTest);
}

detailsButton = ()=>{
  this.setState({detailsTest: !this.state.detailsTest});
  console.log(this.state.plotTest);
}

ratingsButton = ()=>{
  this.setState({ratingsTest: ! this.state.ratingsTest});
  console.log(this.state.plotTest);
}



  ratingsFn = ()=>{
   let list= this.props.ratings.map( e =>{
      return <li>{e.Source} - {e.Value}</li>
    })
    return list
  }

 

  render(){

    return(
      
      <div className="allButtons">
        <button onClick={this.masterButton}>MOVIE DETAILS</button>
        <div>{this.state.masterTest ? <div> <button onClick={this.plotButton}>Plot</button>
        <div>{this.state.plotTest ? <p>{this.props.plot}</p> : ''}</div>


        <button onClick={this.actorsButton}>Actors</button>
        <div>{this.state.actorsTest ? <p>{this.props.actors}</p> : ''}</div>


        <button onClick={this.detailsButton}>Details</button>
        <div>{this.state.detailsTest ? <ul>
        <li>{this.props.runtime}</li>
        <li>{this.props.awards}</li>
        <li>{this.props.genre}</li>
        </ul> : ''}</div>
        
        <button onClick={this.ratingsButton}>Ratings</button>
        <div>{this.state.ratingsTest ?  <ul>
          {this.ratingsFn()}
        </ul> : ''}</div></div> : ''}
        
       
        
      </div>
      </div>
    )
  }
}

export default MovieButtons;