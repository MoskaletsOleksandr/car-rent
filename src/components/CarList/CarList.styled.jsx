import styled from '@emotion/styled';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
  justify-content: start;
`;

export const LoadMoreBtn = styled.button`
  margin-top: 100px;

  background-color: transparent;
  border: none;

  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  color: #3470ff;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover,
  :focus {
    color: #0b44cd;
    outline: none;
  }
`;
