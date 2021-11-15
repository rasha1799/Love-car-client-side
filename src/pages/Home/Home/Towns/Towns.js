import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Town from './Town/Town';

const Towns = () => {
    const [towns,setTowns]=useState([]);
    useEffect(()=>{

fetch('./cityTour.json').then(res=>res.json()).then(data=>setTowns(data))

    } ,[])
    return (
        <div className="town-container mt-5">
            <h2 style={{fontWeight:'bold'}}>Town Tour Packages</h2>
            <Row xs={1} md={3} className="g-4">
            {
                towns.map(town=><Town town={town}></Town>)
            }
         </Row>
        </div>
    );
};

export default Towns;