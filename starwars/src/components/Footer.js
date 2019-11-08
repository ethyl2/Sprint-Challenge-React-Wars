import React from 'react';
import { Jumbotron } from 'reactstrap';

const Footer = () => {
    return (
        <Jumbotron className="mt-4 mb-0">
            <p>Card images are by 
                <a href="https://source.unsplash.com/user/danielkcheung"> Daniel Cheung</a> 
            </p>
            <p>Character data is from
                <a href="https://swapi.co/"> SWAPI</a> 
            </p>
            <p>Site is made by Heather Nuffer 2019</p>
        </Jumbotron>
    );

}

export default Footer;