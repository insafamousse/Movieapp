import React, { Component } from 'react';
import './App.css';
import Movies from './Movies';
import Cover0 from './Cover0.jpg'
import Cover2 from './Cover2.jpg';
import Cover3 from './Cover3.png';
import StarRatingComponent from 'react-star-rating-component';


const tablist = [
  { id: 'inception', rating: '2', imgage: {Cover0}, title: 'Brid Box' }, 
  { id: 'inception', rating: '3', image: {Cover2}, title: 'A Quit place ' },
   { id: 'inception', rating: '5', image: {Cover3}, title: 'dont breath' }
  ]


class App  extends Component {
  constructor(props){ 
  super(props); 
  this.state={ 
    movies:tablist,
    titleFilter:'',
    minRating: 2
   
  }
  }
  onStarClick(nextValue, prevValue, name) {
    this.setState({minRating: nextValue});
  }
  addNewMovie(newMovie) {
    this.setState({
      movies: this.state.movies.concat(newMovie)
    })
  }
  render() {
    return (
    <div className="App">
      <div className="container">
        <div className='row name-rating'>
         <Movies 
         onChange={(newtitleFilter)=>this.setState({titleFilter:newtitleFilter})} 
         value={this.state.titleFilter}/>
         <StarRatingComponent 
                    name="rate1" 
                    starCount={5} 
                    value={this.state.minRating}
                    onStarClick={this.onStarClick.bind(this)}/>
         </div> 
          
      </div>
    </div>)}
}

export default App;
