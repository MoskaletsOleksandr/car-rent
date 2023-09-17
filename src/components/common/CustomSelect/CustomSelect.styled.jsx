import styled from '@emotion/styled';

export const CustomSelect = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  border-radius: 14px;
  background-color: #f7f7fb;
  cursor: pointer;
`;

export const SelectedOption = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 14px 18px;
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  height: ${({ selectType }) => (selectType === 'make' ? '272px' : '188px')};
  background-color: #fff;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border-radius: 14px;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  list-style: none;
  padding: 14px 0 14px 0;
  margin: 0;
  overflow: auto;
  z-index: 1;
`;

export const Option = styled.li`
  font-size: 16px;
  font-weight: 600;
  color: rgba(18, 20, 23, 0.2);
  padding: 4px 18px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const InputIconWrapper = styled.div`
  position: absolute;
  top: 14px;
  right: 18px;
`;

export const InputIcon = styled.svg`
  width: 20px;
  height: 20px;
`;
