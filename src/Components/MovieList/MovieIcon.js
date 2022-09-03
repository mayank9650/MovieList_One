import React from 'react';
import styles from './MovieIcon.module.css'

import { useHistory } from "react-router-dom";

 
// CHECK IF IMAGE EXISTS
export function checkIfImageExists(url) {
    const img = new Image();
    img.src = url;
    
    if (img.complete) {
     return true
    } else {
      img.onload = () => {
        return true
      };
      
      img.onerror = () => {
        return false;
      };
    }
  }
  
  
function MovieIcon({movieDetail}){
    let history = useHistory();
 const MovieDetailsPage = (id) => {
  history.push(`/movieDetails/${id}`);
 }
    return <div className={styles.movieWrapper}>
        <div onClick={()=>{MovieDetailsPage(movieDetail.id)}}>
        {checkIfImageExists(movieDetail.posterUrl) ? <img className={styles.imgWrapper} src={movieDetail.posterUrl} alt='movie'></img> : <img className={styles.imgWrapper} width='300px' height='450px'src='https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279' alt='movie'></img>
}
        </div>
        <div className={styles.movieDesc}>
        <p>{movieDetail.title}</p>
        <p>{movieDetail.year}</p>    
        </div>      
    </div>
}

export default MovieIcon