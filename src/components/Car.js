import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import Chip from "@mui/material/Chip";
import { Container } from "@mui/system";

// // import MUI components here //
// // Container, Paper, Chip //

const Car = (props) => {
  //   console.log(useParams());
  const { carId } = useParams();

  console.log(carId);

  const selectedCar = cars.find((car) => car.id == carId);
  //   console.log(selectedCar);

  const {
    id,
    Name,
    Miles_per_Gallon,
    Cylinders,
    Displacement,
    HorsePower,
    Weight_in_lbs,
    Acceleration,
    Year,
    Origin,
  } = selectedCar;

  
  
  const keys = Object.keys(selectedCar)

  return (
    <div>
      <Container>
        {keys.map((key, index) => (
          <Chip label={`${key}: ${selectedCar[key]}`}></Chip>
        ))}
      </Container>
    </div>
  );
};
export default Car;

