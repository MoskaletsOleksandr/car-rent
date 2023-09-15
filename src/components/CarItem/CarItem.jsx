import React from 'react';
import {
  CarImage,
  CarMake,
  CarModel,
  CarYear,
  CarRentalPrice,
  CarDetailsWrapper,
  CarDetail,
  CarButton,
  CarItemWrapper,
  CarCard,
} from './CarItem.styled';

const CarItem = ({ car }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    carType,
    id,
    functionalities,
  } = car;

  return (
    <CarCard>
      <CarItemWrapper>
        <CarImage src={img} alt={`${make} ${model}`} />
        <CarMake>{make}</CarMake>
        <CarModel>{model || make}</CarModel>
        <CarYear>{year}</CarYear>
        <CarRentalPrice>${rentalPrice}</CarRentalPrice>
        <CarDetailsWrapper>
          <CarDetail>{address}</CarDetail>
          <CarDetail>{rentalCompany}</CarDetail>
          <CarDetail>{carType}</CarDetail>
          <CarDetail>{id}</CarDetail>
          <CarDetail>{functionalities[0]}</CarDetail>
        </CarDetailsWrapper>
        <CarButton>Learn more</CarButton>
      </CarItemWrapper>
    </CarCard>
  );
};

export default CarItem;
