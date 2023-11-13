import PropTypes from 'prop-types';
import { Modal } from 'components/common/Modal';
import {
  ContentWrapper,
  CarInfoWrapper,
  CarImage,
  CarDescription,
  RentalButton,
  CarTitle,
  CarMake,
  CarModel,
  CarYear,
  CarInfo,
  CarDetail,
  CarHeader,
  CarConditionsWrapper,
  CarConditionWrapper,
  ConditionText,
} from './CarDetailsModal.styled';

export const CarDetailsModal = ({ closeModal, car }) => {
  const contactPhoneNumber = '+380730000000';

  const addressParts = car.address.split(',');
  const city = addressParts[1].trim();
  const country = addressParts[2].trim();

  const conditionsArray = car.rentalConditions.split('\n');

  return (
    <Modal onClose={closeModal}>
      <ContentWrapper>
        <CarInfoWrapper>
          <CarImage src={car.img} alt={`${car.make} ${car.model}`} />
          <CarTitle>
            <CarMake>{car.make}</CarMake>{' '}
            <CarModel>{car.model || car.make},</CarModel>{' '}
            <CarYear>{car.year}</CarYear>
          </CarTitle>
          <CarInfo>
            <CarDetail>{city}</CarDetail> <CarDetail>{country}</CarDetail>{' '}
            <CarDetail>Id: {car.id}</CarDetail>{' '}
            <CarDetail>Year: {car.year}</CarDetail>{' '}
            <CarDetail>Type: {car.type}</CarDetail>
          </CarInfo>
          <CarInfo>
            <CarDetail>Fuel Consumption: {car.fuelConsumption}</CarDetail>{' '}
            <CarDetail>Engine Size: {car.engineSize}</CarDetail>{' '}
          </CarInfo>
          <CarDescription>{car.description}</CarDescription>
        </CarInfoWrapper>

        <CarHeader hiddenForMob={true}>
          Accessories and functionalities:
        </CarHeader>
        <CarInfo hiddenForMob={true}>
          {car.accessories.map((accessor, index) => (
            <CarDetail key={index}>{accessor}</CarDetail>
          ))}
        </CarInfo>
        <CarInfo hiddenForMob={true}>
          {car.functionalities.map((functionality, index) => (
            <CarDetail key={index}>{functionality}</CarDetail>
          ))}
        </CarInfo>
        <CarHeader>Rental Conditions:</CarHeader>
        <CarConditionsWrapper>
          {conditionsArray.map((condition, index) => (
            <CarConditionWrapper key={index}>
              {condition.split(' ').map((word, i) => (
                <ConditionText key={i} isNumber={/\d+/.test(word)}>
                  {i > 0 ? ' ' : ''}
                  {word}
                </ConditionText>
              ))}
            </CarConditionWrapper>
          ))}
          <CarConditionWrapper>
            <ConditionText>Mileage: </ConditionText>
            <ConditionText isNumber={/\d+/.test(car.mileage)}>
              {car.mileage.toLocaleString('en-US')}
            </ConditionText>
          </CarConditionWrapper>
          <CarConditionWrapper>
            <ConditionText>Price: </ConditionText>
            <ConditionText isNumber={/\d+/.test(car.rentalPrice)}>
              {car.rentalPrice}
            </ConditionText>
          </CarConditionWrapper>
        </CarConditionsWrapper>

        <RentalButton href={`tel:${contactPhoneNumber}`}>
          Rental Car
        </RentalButton>
      </ContentWrapper>
    </Modal>
  );
};

CarDetailsModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  car: PropTypes.object.isRequired,
};
