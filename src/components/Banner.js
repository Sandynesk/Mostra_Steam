import './homelogin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import bannerImage from './bannerplaceholder.png'; // Importe a imagem

function Banner(){
    return(
        <img src={bannerImage} alt='banner'></img> // altera isso no css :)
    )
}

export default Banner;
