import React from 'react';
import SearchResult from './SearchResult';
import { Button } from '@material-ui/core';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="searchPage__info">
                <p>62 stays. 26 august to 30 august . 2 guest</p>
                <h1>Stays nearby</h1>
                <Button
                variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button
                variant="outlined">
                    Type of place
                </Button>
                <Button
                variant="outlined">
                    Price
                </Button>
                <Button
                variant="outlined">
                    Rooms and beds
                </Button>
                <Button
                variant="outlined">
                    More filters
                </Button>
            </div>
            <SearchResult
            img="https://a0.muscache.com/im/pictures/ff33a58f-798f-44c3-96d9-66469a0d6e32.jpg?im_w=720"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest. 1 bedroom. 1 bed. 1.5 shared bathrooms. Wifi. 
            Kitchen. Free parking. Washing Machine"
            star={4.73}
            price="$80/night"
            total="$130 total"
            />
            <SearchResult
            img="https://a0.muscache.com/im/pictures/ff33a58f-798f-44c3-96d9-66469a0d6e32.jpg?im_w=720"
            location="Private room in center of London"
            title="Stay at this spacious Edwardian House"
            description="1 guest. 1 bedroom. 1 bed. 1.5 shared bathrooms. Wifi. 
            Kitchen. Free parking. Washing Machine"
            star={4.73}
            price="$80/night"
            total="$130 total"
            />
        </div>
    )
}

export default SearchPage
