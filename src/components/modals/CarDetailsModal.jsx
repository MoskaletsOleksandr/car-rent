import PropTypes from 'prop-types';
import { Modal } from 'components/common/Modal';
import {
  ContentWrapper,
  Title,
  CarInfoWrapper,
  CarImage,
  CarDescription,
  CarSpecsWrapper,
  CarSpec,
  RentPrice,
  RentCompany,
  CarLocation,
  RentalConditions,
  Mileage,
  AccessoriesWrapper,
  Accessory,
  RentalButton,
} from './CarDetailsModal.styled';

export const CarDetailsModal = ({ closeModal, car }) => {
  const contactPhoneNumber = '+380730000000';

  return (
    <Modal onClose={closeModal}>
      <ContentWrapper>
        <CarInfoWrapper>
          <CarImage
            src={car.img}
            width={469}
            height={314}
            alt={`${car.make} ${car.model}`}
          />
          <Title>Do you want to rent this car?</Title>
          <CarDescription>{car.description}</CarDescription>
        </CarInfoWrapper>
        <CarSpecsWrapper>
          <CarSpec>Fuel Consumption: {car.fuelConsumption} L/100km</CarSpec>
          <CarSpec>Engine Size: {car.engineSize}</CarSpec>
        </CarSpecsWrapper>
        <RentPrice>Rental Price: ${car.rentalPrice}/day</RentPrice>
        <RentCompany>Rental Company: {car.rentalCompany}</RentCompany>
        <CarLocation>Address: {car.address}</CarLocation>
        <RentalConditions>
          Rental Conditions: {car.rentalConditions}
        </RentalConditions>
        <Mileage>Mileage: {car.mileage} km</Mileage>
        <AccessoriesWrapper>
          {car.accessories.map((accessory, index) => (
            <Accessory key={index}>{accessory}</Accessory>
          ))}
        </AccessoriesWrapper>
        <RentalButton>
          <a href={`tel:${contactPhoneNumber}`}>Rental Car</a>
        </RentalButton>
      </ContentWrapper>
    </Modal>
  );
};

CarDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
