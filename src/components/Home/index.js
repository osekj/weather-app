import React, { useState } from 'react';

// API
import API from '../../API';

// Components
import SearchBar from '../SearchBar';
import Header from '../Header';
import Info from '../Info';

// Styles
import { Wrapper } from './Home.styles';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');

   return (
        <Wrapper>
            <Header />
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Info cityName={searchTerm}/>
     </Wrapper>
   )
};

export default Home;