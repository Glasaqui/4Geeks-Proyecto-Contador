import React from 'react';
import PropTypes from "prop-types";

const Card = (props) =>{
    return (
        <div className="Card">
            <div className="Number"></div>
            <h1>{props.unidad}</h1>  
          </div>
           );
                }

    Card.PropTypes = {
        unidad:PropTypes.number,
    }

export default Card;

