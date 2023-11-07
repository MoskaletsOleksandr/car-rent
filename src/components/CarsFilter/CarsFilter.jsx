import { Select } from 'components/common/CustomSelect';
import React, { useState, useEffect } from 'react';
import {
  FilterInputWrapper,
  FilterWrapper,
  GroupWrapper,
  InputInfo,
  Label,
  MileageFilterBtn,
  MileageInputsWrapper,
  MileageInputWrapper,
  StyledInput,
  FilterMileageWrapper,
} from './CarsFilter.styled';

export const CarsFilter = ({
  filterValues,
  handleMakeChange,
  handlePriceRangeChange,
  handleApplyMileageFilter,
}) => {
  const [minMileage, setMinMileage] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { makes, priceRanges } = filterValues;

  useEffect(() => {
    if (minMileage && maxMileage) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [minMileage, maxMileage]);

  const handleMinMileageChange = event => {
    setMinMileage(event.target.value);
  };

  const handleMaxMileageChange = event => {
    setMaxMileage(event.target.value);
  };

  return (
    <FilterWrapper>
      <GroupWrapper>
        <FilterInputWrapper>
          <Label htmlFor="make">Car brand</Label>
          <Select
            options={makes}
            onSelect={handleMakeChange}
            selectType="make"
          />
        </FilterInputWrapper>

        <FilterInputWrapper>
          <Label htmlFor="priceRange">Price / 1 hour</Label>
          <Select
            options={priceRanges}
            onSelect={handlePriceRangeChange}
            selectType="priceRange"
          />
        </FilterInputWrapper>
      </GroupWrapper>

      <GroupWrapper>
        <FilterMileageWrapper>
          <Label htmlFor="mileage">Car mileage / km</Label>
          <MileageInputsWrapper>
            <MileageInputWrapper>
              <InputInfo>From</InputInfo>
              <StyledInput
                type="number"
                id="mileage"
                name="minMileage"
                value={minMileage}
                onChange={handleMinMileageChange}
                inputType="minMileage"
              />
            </MileageInputWrapper>
            <MileageInputWrapper>
              <InputInfo>To</InputInfo>
              <StyledInput
                type="number"
                id="mileage"
                name="maxMileage"
                value={maxMileage}
                onChange={handleMaxMileageChange}
                inputType="maxMileage"
              />
            </MileageInputWrapper>
            <MileageFilterBtn
              onClick={() => {
                handleApplyMileageFilter(minMileage, maxMileage);
              }}
              disabled={isButtonDisabled}
            >
              Filter by Mileage
            </MileageFilterBtn>
          </MileageInputsWrapper>
        </FilterMileageWrapper>
      </GroupWrapper>
    </FilterWrapper>
  );
};
