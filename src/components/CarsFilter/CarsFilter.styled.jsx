import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: end;
  justify-content: center;
`;

export const MileageInputsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const MileageInputWrapper = styled.div`
  position: relative;

  &:first-of-type {
    /* border-top-left-radius: 14px;
    border-bottom-left-radius: 14px; */
    border-right: 1px solid #ccc;
  }

  &:last-of-type {
    /* border-top-right-radius: 14px;
    border-bottom-right-radius: 14px; */
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #8a8a89;
`;

export const StyledInput = styled.input`
  position: relative;
  padding: ${({ inputType }) =>
    inputType === 'minMileage' ? '14px 0 14px 70px;' : '14px 0 14px 46px;'};
  width: 160px;
  height: 48px;
  font-size: 14px;
  background-color: #f7f7fb;
  font-size: 18px;
  font-weight: 500;
  color: #121417;

  border: none;
  border-radius: ${({ inputType }) =>
    inputType === 'minMileage' ? '14px 0 0 14px' : '0 14px 14px 0'};
`;

export const InputInfo = styled.span`
  position: absolute;
  top: 14px;
  left: 24px;
  font-size: 18px;
  font-weight: 500;
  color: #121417;

  z-index: 1;
`;

export const FilterInputWrapper = styled.div`
  width: 125px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;

  &:first-of-type {
    width: 224px;
  }

  &:last-of-type {
    margin-left: 150px;
    width: 320px;
  }
`;

export const MileageFilterBtn = styled.button`
  transition: transform 0.3s ease-in-out;
  height: 48px;
  padding: 14px 44px;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#3470FF')};
  color: #fff;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover,
  &:focus {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#0B44CD')};
    outline: none;
  }
`;
