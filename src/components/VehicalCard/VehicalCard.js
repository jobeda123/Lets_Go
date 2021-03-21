import React from 'react';
import { Link } from 'react-router-dom';
import './VehicalCard.css';

const VehicalCard = (props) => {
    console.log(props.vehical);
    const {vehicalType, image} = props.vehical;
    return (
        
            <div className="vehicalCard">
                <Link to={`/search/${vehicalType}`}>
                    <img src={image} alt=""/>
                </Link>
            </div>
        
    );
};

export default VehicalCard;