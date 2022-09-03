import React from 'react';
import styles from './MovieDetail.module.css'
import { useParams } from 'react-router';
import {checkIfImageExists} from '../MovieList/MovieIcon'
function MovieDetail({movieList}){
    const { movieId } = useParams();
    let movie = movieList.find((movie)=>{
      return movie.id == movieId
    })
    
    const getMovieGenre = ()=>{
      let name='';
      for(let i=0;i<movie?.genres?.length;i++){
        console.log(' movie?.genre?.[i]', movie?.genres?.[i])
        name +=`${movie?.genres?.[i]}, `;
      }
      return name;
    }
    let moviegenre = getMovieGenre();

    return (
    <div className={styles.movieContainer}>
      <div className={styles.singleMovieWrapper}>
        <div className={styles.singleMovieLogo}>
        {checkIfImageExists(movie?.posterUrl) ? <img className={styles.imgWrapper} src={movie?.posterUrl} alt='movie'></img> : <img className={styles.imgWrapper} width='300px' height='450px'src='https://s.studiobinder.com/wp-content/uploads/2017/12/Movie-Poster-Template-Dark-with-Image.jpg?x81279' alt='movie'></img>}
        </div>
        <div className={styles.singleMoviedetails} >
          <h2 className={styles.singleMovietitle}>{movie?.title}</h2>
          <div className={styles.singleMovieTime}>
          <p className={styles.singleMoviePlot}>{moviegenre}</p>
          <p className={styles.singleMoviePlot}>Year: {movie?.year}</p>
          <p className={styles.singleMoviePlot}>RunTime: {movie?.runtime}</p>

          </div>
          <div>
          <p className={styles.singleMoviePlot}>{movie?.plot}</p>
          </div>
          <button className={styles.singleMovieButton}> Download </button>
        </div>
      </div>
    </div>
    )
}

export default MovieDetail;