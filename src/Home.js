import React from 'react';
import MovieIcon from './Components/MovieList/MovieIcon'
import styles from './Home.module.css'
function Home({movieList}){
    return (
    <div className={styles.movieContainer}>
        <div className={styles.wrapper}>
        {movieList?.map(function(movie, index){
            return <MovieIcon key={index} movieDetail={movie}></MovieIcon>

        })}         

        </div>
    </div>
    )
}

export default Home;