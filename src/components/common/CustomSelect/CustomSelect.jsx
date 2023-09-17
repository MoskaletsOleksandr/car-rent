import React, { useState } from 'react';
import {
  CustomSelect,
  InputIcon,
  InputIconWrapper,
  Option,
  OptionsList,
  SelectedOption,
} from './CustomSelect.styled';
import sprite from '../../../images/sprite.svg';

export const Select = ({ options, onSelect, selectType }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = option => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <CustomSelect onClick={() => setIsOpen(!isOpen)}>
      {selectType === 'make' ? (
        <SelectedOption>
          {selectedOption ? selectedOption : 'Select brand'}
        </SelectedOption>
      ) : (
        <SelectedOption>To {selectedOption}$</SelectedOption>
      )}
      <OptionsList isOpen={isOpen} selectType={selectType}>
        {options.map(option => (
          <Option key={option} onClick={() => handleOptionClick(option)}>
            {option}
          </Option>
        ))}
      </OptionsList>
      <InputIconWrapper>
        <InputIcon width={20} height={20}>
          {!isOpen ? (
            <use href={sprite + '#icon-chevron-down'}></use>
          ) : (
            <use href={sprite + '#icon-chevron-up'}></use>
          )}
        </InputIcon>
      </InputIconWrapper>
    </CustomSelect>
  );
};
