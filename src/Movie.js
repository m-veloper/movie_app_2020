/**
 * Created by MJ on 2020-07-08.
 */

import React from "react";
import PropTypes from "prop-types";

function Movie({ year, title, summary, poster, genres }) {
    return (
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div class="movie__data">
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="genres">
                        {genres.map((genre, index) => (
                            <li key={index} className="genres__genre">
                                {genre}
                            </li>
                        ))}
                    </ul>
                    <p className="movie__summary">{summary}</p>
                </div>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.number.isRequired,
    summary:PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;