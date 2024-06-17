import React from 'react';
import { RxMixerHorizontal } from 'react-icons/rx';

const SearchBar = () => {
    return (
        <form className="d-flex justify-content-start align-items-center" role="search">
            <div className="input-group input-group-small">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-orange" type="submit">Search</button>
            </div>
            <div className="icon-container"> 
                <RxMixerHorizontal  size={24} />
            </div>
        </form>
    );
};

export default SearchBar;
