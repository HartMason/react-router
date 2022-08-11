import React from 'react'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //

// import MUI components here //
// Container, Paper, Chip //

const Car = (props) => {
    const carId = userParams().carId
    const car = cars.find(car.id == carId)

    return (
        <div>
        {cars.map((car, index) => {
            return(
        <h1>{cars.Name}</h1>
            )
       </div>
    )
    }
export default Car