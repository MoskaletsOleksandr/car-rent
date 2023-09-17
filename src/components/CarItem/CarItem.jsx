import { CarDetailsModal } from 'components/modals';
import React, { useState } from 'react';
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
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavourites, removeFromFavourites } from 'redux/slice';
import { selectFavourites } from 'redux/selectors';

const CarItem = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
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

  const isFavourite = favourites.find(favCar => favCar.id === car.id);

  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFromFavourites(car.id));
    } else {
      dispatch(addToFavourites(car));
    }
  };
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <CarCard>
        <button
          onClick={handleToggleFavourite}
          style={{
            position: 'absolute',
            top: '40',
            right: '40',
          }}
        >
          {isFavourite ? (
            <svg width={24} height={24}>
              <use href={sprite + '#icon-blue-heart'}></use>
            </svg>
          ) : (
            <svg width={24} height={24}>
              <use href={sprite + '#icon-empty-heart'}></use>
            </svg>
          )}
        </button>
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
          <CarButton onClick={toggleModal}>Learn more</CarButton>
        </CarItemWrapper>
      </CarCard>
      {showModal && <CarDetailsModal closeModal={toggleModal} car={car} />}
    </>
  );
};

export default CarItem;
