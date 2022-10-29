import React, { useEffect, useState } from 'react';
import Movie from '../Movie/Movie';



const Movies = () => {
    const [movie, setMovie] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v2/all')
        .then(res=>res.json())
        .then(data=> setMovie(data))
    },[])
    return (
        <div className='text-center'>
            <h1>Movies</h1>
            <Movie movie={movie}></Movie>
        </div>
    );
};

export default Movies;