import React from 'react';
import { Link } from 'react-router-dom';
import SearchResult from '../SearchResult/SearchResult';
import './SearchField.css';

const SearchField = () => {
    let isSearch = true;
    const handleSearch =() => {
        console.log("click");
        isSearch = false;
    }
    return (
        <div>
            <h1>Hi</h1>
            
                { isSearch ?
                <div className="form-area">
                    <form>
                        <label htmlFor="pickFrom">Pick Form</label>
                        <br/>
                        <input type="text" name="source" id="" placeholder="Source Location"/>
                        <br/>
                        <label htmlFor="pickTo">Pick To</label>
                        <br/>
                        <input type="text" name="destination" id="" placeholder="Destination Location"/>
                        <br/>
                        <button onClick={handleSearch}>Search</button>
                    </form>
                    </div>
                   : <SearchResult></SearchResult>
                }
            
        </div>
    );
};

export default SearchField;