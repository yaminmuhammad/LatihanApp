import React from "react";

const Searchbar = () => {
    return (
        <div className="searchbar">
            <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif" alt="gif" />
            <div>
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </div>
        </div>
    );
}
export default Searchbar;