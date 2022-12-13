import React from "react";
import SearchBar from "./search-bar"

const style ={
    'background': 'linear-gradient(rgba(184, 231, 154, 0.9),rgba(255, 255, 255, 0.1)'
}
const SearchComponent = () => {
    return(
        <div style={style}>
            <div className="row p-5">
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