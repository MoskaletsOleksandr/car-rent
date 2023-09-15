import styled from '@emotion/styled';

export const CarCard = styled.li`
  width: calc(25% - 16px);
`;

export const CarImage = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;
`;

export const CarMake = styled.div`
  font-weight: bold;
  margin-top: 8px;
`;

export const CarModel = styled.div`
  color: blue; /* Синій колір для моделі */
  margin-top: 4px;
`;

export const CarYear = styled.div`
  margin-top: 4px;
`;

export const CarRentalPrice = styled.div`
  margin-top: 4px;
`;

export const CarDetailsWrapper = styled.div`
  margin-top: 8px;
`;

export const CarDetail = styled.div`
  margin-top: 4px;
`;

export const CarButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 16px;
  margin-top: 8px;
  cursor: pointer;
`;

export const CarItemWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  text-align: center;
`;
