import React from 'react';
import { Link } from 'react-router-dom';
import './VehicalCard.css';

const VehicalCard = (props) => {
    console.log(props.vehical);
    const {vehicalType, image} = props.vehical;
    return (
        
            <div className="vehicalCard">
                <Link to={`/destination/${vehicalType}`}>
                    <img src={image} alt=""/>
                </Link>
                <h3>{vehicalType}</h3>
            </div>
        
    );
};

export default VehicalCard;