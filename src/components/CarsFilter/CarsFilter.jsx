import React, { useState, useEffect } from 'react';
import {
  FilterInputWrapper,
  FilterWrapper,
  StyledInput,
  StyledSelect,
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
      <FilterInputWrapper>
        <label htmlFor="make">Make:</label>
        <StyledSelect
          id="make"
          //   value={selectedMake}
          onChange={handleMakeChange}
        >
          {makes.map(make => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </StyledSelect>
      </FilterInputWrapper>

      <FilterInputWrapper>
        <label htmlFor="priceRange">Price Range:</label>
        <StyledSelect
          id="priceRange"
          //   value={selectedPriceRange}
          onChange={handlePriceRangeChange}
        >
          {priceRanges.map(range => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </StyledSelect>
      </FilterInputWrapper>

      <FilterInputWrapper>
        <label htmlFor="minMileage">Min Mileage:</label>
        <StyledInput
          type="number"
          id="minMileage"
          name="minMileage"
          value={minMileage}
          onChange={handleMinMileageChange}
          placeholder="Min Mileage"
        />
      </FilterInputWrapper>

      <FilterInputWrapper>
        <label htmlFor="maxMileage">Max Mileage:</label>
        <StyledInput
          type="number"
          id="maxMileage"
          name="maxMileage"
          value={maxMileage}
          onChange={handleMaxMileageChange}
          placeholder="Max Mileage"
        />
      </FilterInputWrapper>

      <button
        onClick={() => {
          handleApplyMileageFilter(minMileage, maxMileage);
        }}
        disabled={isButtonDisabled}
      >
        Apply Mileage Filter
      </button>
    </FilterWrapper>
  );
};
