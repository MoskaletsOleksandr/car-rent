import styled from '@emotion/styled';

export const FilterWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const GroupWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const MileageInputsWrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const MileageInputWrapper = styled.div`
  position: relative;

  &:first-of-type {
    border-right: 1px solid #ccc;
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
    inputType === 'minMileage' ? '14px 0 14px 60px;' : '14px 0 14px 42px;'};
  width: 110px;
  height: 48px;
  font-size: 14px;
  font-weight: 500;
  background-color: #f7f7fb;
  color: #121417;

  border: none;
  border-radius: ${({ inputType }) =>
    inputType === 'minMileage' ? '14px 0 0 14px' : '0 14px 14px 0'};

  @media (min-width: 520px) {
    width: 160px;
    height: 48px;
    font-size: 18px;
    padding: ${({ inputType }) =>
      inputType === 'minMileage' ? '14px 0 14px 70px;' : '14px 0 14px 46px;'};
  }
`;

export const InputInfo = styled.span`
  position: absolute;
  top: 15px;
  left: 24px;
  font-size: 14px;
  font-weight: 500;
  color: #121417;

  z-index: 1;

  @media (min-width: 520px) {
    top: 14px;
    font-size: 18px;
  }
`;

export const FilterInputWrapper = styled.div`
  width: 224px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

export const FilterMileageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: start;
`;

export const MileageFilterBtn = styled.button`
  transition: transform 0.3s ease-in-out;
  height: 48px;
  padding: 10px 20px;
  margin-left: 10px;
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

  @media (min-width: 520px) {
    padding: 14px 20px;
  }

  @media (min-width: 768px) {
    padding: 14px 44px;
  }
`;
