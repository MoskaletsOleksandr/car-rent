import styled from '@emotion/styled';

export const CarCard = styled.li`
  position: relative;
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContent = styled.div``;

export const CarImage = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
`;

export const CarTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CarTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CarMake = styled.span``;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarYear = styled.span``;

export const CarRentalPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const CarInfo = styled.p`
  font-size: 12px;
  line-height: calc(18 / 12);
  font-weight: 400;
  color: #12141780;
`;

export const CarDetail = styled.span`
  display: inline-block;
  margin-right: 16px;

  position: relative;

  &:not(:last-child)::after {
    content: '';

    position: absolute;
    right: -8px;
    height: 16px;
    width: 1px;
    background: #12141720;
  }
`;

export const CarButton = styled.button`
  width: 274px;
  height: 44px;
  padding-top: 12px;
  padding-bottom: 12px;

  font-size: 14px;
  font-weight: 600;
  color: #fff;

  border: none;
  border-radius: 12px;
  background-color: #3470ff;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    background-color: #0b44cd;
    outline: none;
  }
`;

export const FavouriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 18px;
  height: 18px;

  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.3);
    outline: none;
  }
`;

export const FavouriteIcon = styled.svg`
  width: 18px;
  height: 18px;
`;
