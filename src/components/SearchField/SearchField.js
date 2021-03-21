import React from 'react';
import { Link } from 'react-router-dom';
import './SearchField.css';

const SearchField = () => {
    
    return (
        <div className="form-area">
            <form>
                <label htmlFor="pickFrom">Pick Form</label>
                <br />
                <input type="text" name="source" id="" placeholder="Source Location" />
                <br />
                <label htmlFor="pickTo">Pick To</label>
                <br />
                <input type="text" name="destination" id="" placeholder="Destination Location" />
                <br />
                <Link to="/searchResult">
                    <button>Search</button>
                </Link>
            </form>
        </div>
    );
};

export default SearchField;