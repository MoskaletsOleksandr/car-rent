import styled from '@emotion/styled';

export const ButtonStyled = styled.button`
height: 44px;
min-width: 168px;
padding: 12px 50px;
border: none;
border-radius: 12px;
background-color: #3470FF;

font-size: 14px;
font-weight: semi-bold;
color: #fff;
cursor: pointer;

transition: transform 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: #0B44CD;
    outline: none;
  }
`;