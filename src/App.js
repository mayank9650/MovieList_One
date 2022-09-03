import React,{useState} from 'react';

import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import { useEffect } from 'react';
import MovieDetail from './Components/MovieDetail/MovieDetail';

function App() {
  let [movieList, setMovieList] = useState([]);
  let url ='https://bestonlinecenter.com/technical-assessment/movies.json'
  useEffect(()=>{
    fetch(url).then((res)=>{
      return res.json();
    }).then((data)=>{
      console.log(data.movies);
      setMovieList(data.movies)
    }).catch(err =>{
      console.log('Something went wrong')
    })
  },[url])
  
  return (
     <Router>
          <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home movieList={movieList}/>
          </Route>
          <Route exact path="/movieDetails/:movieId">
            <MovieDetail movieList={movieList}/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
