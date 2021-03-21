import React from 'react';
import { Container } from 'react-bootstrap';
import SearchField from '../SearchField/SearchField';
import './Search.css';
import map from '../../images/map.jpg';
import { useParams } from 'react-router';



const Search = () => {
    const { vehicalType } = useParams();
    console.log("Type",vehicalType);
    return (
        <Container>
            <div className="search">
                <div className="search-field">
                    <SearchField></SearchField>
                </div>

                <div className="map">
                    <img src={map} alt=""/>
                </div>
            </div>
        </Container>
    );
};

export default Search;