import React from 'react';

import '../css/search.css';

export const Search = () => {
    const  test=()=>{

    }

    return (
        <div className='search'>
            <input 
                className = 'cir'
                placeholder='搜尋'
                onChange={test()}
            >
            </input>
        </div>
    )
}