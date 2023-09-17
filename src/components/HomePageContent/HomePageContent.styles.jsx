import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HomePageWrapper = styled.div`
  text-align: center;
  padding: 20px;
`;

export const HomePageTitle = styled.h2`
  font-size: 30px;
  color: #121417;
  margin-bottom: 20px;
`;

export const HomePageButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export const HomePageLink = styled(Link)`
  background-color: #3470ff;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #2058c5;
  }
`;

export const HomePageText = styled.p`
  font-size: 16px;
  color: #121417;
  text-align: left;
  margin-bottom: 10px;
`;
