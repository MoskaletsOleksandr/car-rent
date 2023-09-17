import { CarDetailsModal } from 'components/modals';
import React, { useState } from 'react';
import {
  CarImage,
  CarMake,
  CarModel,
  CarYear,
  CarRentalPrice,
  CarDetail,
  CarButton,
  CarCard,
  CarInfo,
  CarTitle,
  CarTitleWrapper,
  FavouriteButton,
  FavouriteIcon,
  CardContent,
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
    type,
    id,
    accessories,
  } = car;

  const addressParts = address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

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
        <CardContent>
          <FavouriteButton onClick={handleToggleFavourite}>
            {isFavourite ? (
              <FavouriteIcon width={24} height={24}>
                <use href={sprite + '#icon-blue-heart'}></use>
              </FavouriteIcon>
            ) : (
              <FavouriteIcon width={24} height={24}>
                <use href={sprite + '#icon-empty-heart'}></use>
              </FavouriteIcon>
            )}
          </FavouriteButton>
          <CarImage src={img} alt={`${make} ${model}`} />
          <CarTitleWrapper>
            <CarTitle>
              <CarMake>{make}</CarMake> <CarModel>{model || make},</CarModel>{' '}
              <CarYear>{year}</CarYear>
            </CarTitle>
            <CarRentalPrice>{rentalPrice}</CarRentalPrice>
          </CarTitleWrapper>
          <CarInfo>
            <CarDetail>{city}</CarDetail> <CarDetail>{country}</CarDetail>{' '}
            <CarDetail>{rentalCompany}</CarDetail>
          </CarInfo>
          <CarInfo>
            <CarDetail>{type}</CarDetail> <CarDetail>{make}</CarDetail>{' '}
            <CarDetail>{id}</CarDetail> <CarDetail>{accessories[0]}</CarDetail>
          </CarInfo>
        </CardContent>
        <CarButton onClick={toggleModal}>Learn more</CarButton>
      </CarCard>
      {showModal && <CarDetailsModal closeModal={toggleModal} car={car} />}
    </>
  );
};

export default CarItem;
