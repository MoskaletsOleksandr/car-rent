import styled from '@emotion/styled';

export const ContentWrapper = styled.div``;

export const RentalButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 44px;
  background-color: #3470ff;
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  transition: background-color 0.3s, color 0.3s;

  &:hover,
  :focu {
    background-color: #0b44cd;
    outline: none;
  }
`;

export const CarImage = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;

  @media (max-width: 519px) {
    width: 275px;
    height: 148px;
  }
`;

export const CarInfoWrapper = styled.div``;

export const CarTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CarMake = styled.span``;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarYear = styled.span``;

export const CarInfo = styled.p`
  font-size: 12px;
  line-height: calc(18 / 12);
  font-weight: 400;
  color: #12141780;

  @media (max-width: 519px) {
    display: ${({ hiddenForMob }) => (hiddenForMob ? 'none' : 'block')};
  }
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

export const CarDescription = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 400;
  color: #121417;

  @media (max-width: 519px) {
    display: none;
  }
`;

export const CarHeader = styled.h4`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #121417;

  @media (max-width: 519px) {
    display: ${({ hiddenForMob }) => (hiddenForMob ? 'none' : 'block')};
  }
`;

export const CarConditionsWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const CarConditionWrapper = styled.div`
  padding: 7px 14px;
  background-color: #f9f9f9;
  border: none;
  border-radius: 35px;
`;

export const ConditionText = styled.span`
  font-size: 12px;
  font-weight: ${({ isNumber }) => (isNumber ? '600' : 'inherit')};
  color: ${({ isNumber }) => (isNumber ? '#3470FF' : 'inherit')};
`;
