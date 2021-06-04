import React from 'react';
import { useHistory } from 'react-router';
import Destination from '../Destination/Destination';
import './Card.css'

const Card = ({eachRide}) => {
    const {id,img,name} = eachRide;
    const history = useHistory();
    const handleCard = (id) => {
        history.push(`/destination/${id}`)
    }
    return (
        <div onClick={() => handleCard (id)} className='card-design card-responsive'>
           
            <img src={img} style={{height:'90px' , margin: ' 15px'} } alt="" srcset=""/>
         
            <h2> {name}</h2>
 
        </div>
    );
};

export default Card;