/**
 * Created by MJ on 2020-07-08.
 */

import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.number.isRequired,
    summary:PropTypes.number.isRequired,
    poster:PropTypes.number.isRequired
};

export default Movie;