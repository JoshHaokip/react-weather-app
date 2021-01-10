import React from 'react'
import './Styles/SearchBar.css'


function SearchBar(props) {

    const {search, onFormSubmit, onHandleChange} = props;
 
    return (
        <div className='searchBarContainer'>

            <form className='formStyles' onSubmit={onFormSubmit}>
                <input className='inputStyles' type='text' placeholder="Where are you going today" value={search} onChange={onHandleChange}/>
            </form>

            
        </div>
    )
}


export default SearchBar;