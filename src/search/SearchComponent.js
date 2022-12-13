import React from "react";
import SearchBar from "./search-bar"

const SearchComponent = () => {
    return(
        <div>
            <h1>Search</h1>
            <div className="row">
                <div className="col-2">

                </div>
                <div className="col">
                    <SearchBar/>
                </div>
                <div className="col-2">

                </div>

            </div>



        </div>
    );

}

export default SearchComponent;