import React from "react";

export const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className = 'pa2'>

            <input
             className='pa3 ba b--green bg-lightest-blue tc'
              type='search'
               placeholder='search robots'
                onChange={searchChange}
                />



        </div>
    );
}