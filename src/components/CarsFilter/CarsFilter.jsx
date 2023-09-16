import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilterValues } from 'redux/selectors';
import {
  FilterInputWrapper,
  FilterWrapper,
  //   StyledInput,
  StyledSelect,
} from './CarsFilter.styled';

export const CarsFilter = ({ handleMakeChange, handlePriceRangeChange }) => {
  const filterValues = useSelector(selectFilterValues);

  const { makes, priceRanges } = filterValues;

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

      {/* <FilterInputWrapper>
        <label htmlFor="minMileage">Min Mileage:</label>
        <StyledInput
          type="number"
          id="minMileage"
          name="min"
          value={mileageRange.min}
          onChange={handleMileageRangeChange}
          placeholder="Min Mileage"
        />
      </FilterInputWrapper>

      <FilterInputWrapper>
        <label htmlFor="maxMileage">Max Mileage:</label>
        <StyledInput
          type="number"
          id="maxMileage"
          name="max"
          value={mileageRange.max}
          onChange={handleMileageRangeChange}
          placeholder="Max Mileage"
        />
      </FilterInputWrapper> */}
    </FilterWrapper>
  );
};
