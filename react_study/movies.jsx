import React from "react";
import PropTypes from 'prop-types';
import './movies.css'
//yarn add prop-types

function Movie({id, year, title, summary, poster}){
    return(
        <div className="movie">
           <img src={poster} all={title}/>
           <div>
               <h5 className="movie__title">{title}</h5>
               <h5 className="movie__year">{year}</h5>
               <h5 className="movie__summary">{summary}</h5>
           </div>
           
        </div>
    )
}
Movie.prototype = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    poster: PropTypes.number.isRequired,
}

export default Movie;