import React, { useState, useEffect } from 'react';

// Images
import searchIcon from '../../images/search-icon.svg'

// Styles
import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
    const [cityName, setCityName] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          setSearchTerm(cityName);
        }
    }

    return (
        <Wrapper>
            <Content>
                <img src={searchIcon} alt='search-icon'/>
                <input 
                    type = 'text'
                    placeholder= ''
                    value={cityName}
                    onChange={e => setCityName(e.currentTarget.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={() => setSearchTerm(cityName)}>Search</button>
            </Content>
        </Wrapper>
    )
}

export default SearchBar;