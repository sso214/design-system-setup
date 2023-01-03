/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useSelectBox } from './hooks';
import { StlyedListItem, StlyedListTitle, StlyedSelectWrapper, StyledListWrapper } from './styles';

interface SelectBox {
  items: string[];
  defaultValue: string;
  onChange: (value: string) => void;
}

export default function BaseSelectBox({ items, defaultValue, onChange }: SelectBox) {
  const { isOpen, value, onOpen, onSelect } = useSelectBox();

  useEffect(() => {
    onChange(value);
  }, [value]);

  const handleSelect = <T,>(e: T) => {
    onSelect(e);
    onOpen();
  };

  return (
    <>
      {/* List Title */}
      <StlyedSelectWrapper>
        <StlyedListTitle onClick={onOpen}>{value || defaultValue}</StlyedListTitle>
      </StlyedSelectWrapper>

      {/* List Item */}
      <StyledListWrapper>
        {isOpen &&
          items?.map((item) => (
            <StlyedListItem key={Math.random()} onClick={handleSelect}>
              {item}
            </StlyedListItem>
          ))}
      </StyledListWrapper>
    </>
  );
}
