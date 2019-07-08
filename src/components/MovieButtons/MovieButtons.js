import React, {Component} from 'react';
import "./MovieButton.css";

class MovieButtons extends Component{
  constructor(){
    super();
    this.state = {
      plotTest: true,
      plotDiv: '',
    }
  }

  plotButton = ()=>{
    if(this.state.plotTest){
      this.setState({plotDiv: <p>{this.props.plot}</p>})
      this.setState({plotButton: !this.state.plotButton});
     }else{
       
      this.setState({plotButton: !this.state.plotButton});
     }
  }

  displayPlot = ()=>{
 
  }

  ratingsFn = ()=>{
   let list= this.props.ratings.map( e =>{
      return <li>{e.Source} - {e.Value}</li>
    })
    return list
  }

  componentDidUpdate(){
    
  }

  render(){

    return(
      <div className="allButtons">
        <button onClick={this.plotButton}>Plot</button>
           
       {this.state.plotDiv}

        <button>Actors</button>
        <p>{this.props.actors}</p>
        <button>Details</button>
        <ul>
        <li>{this.props.runtime}</li>
        <li>{this.props.awards}</li>
        <li>{this.props.genre}</li>
        </ul>
        <button>Ratings</button>
        <ul>
          {this.ratingsFn()}
        </ul>
        
      </div>
    )
  }
}

export default MovieButtons;