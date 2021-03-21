import React from 'react';
import { Container } from 'react-bootstrap';
import SearchField from '../SearchField/SearchField';
import './Search.css';
import map from '../../images/road-bg.jpg';



const Search = () => {
    return (
        <Container>
            <div className="search">
                <div className="search-field">
                    <h1>Search Field</h1>
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