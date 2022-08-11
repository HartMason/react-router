import React from 'react'
import cars from '../cars.json'
import {useParams} from "react-router-dom" 

// // import MUI components here //
// // Container, Paper, Chip //

const Car = (props) => {
    const { carId } = useParams();
    console.log(carId)
  


    return (
        <div>
            
        </div>
)
    }
export default Car
