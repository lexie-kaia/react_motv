import React, { FormEvent, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { IoIosSearch } from 'react-icons/io';

type Props = {
  searchByTerm: (term: string) => void;
};

const Form = styled.form`
  position: relative;
  width: 100%;
  height: 2rem;

  @media screen and (min-width: 769px) {
    width: ${({ isFocused }: { isFocused: boolean }) =>
      isFocused ? `24rem` : '16rem'};
    transition: width 200ms ease-out;
  }
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  padding: 0 1rem 0 2rem;
  border: 1px solid white;
  border-radius: 1rem;
  color: white;
  opacity: 0.75;
  transition: opacity 200ms;

  &::placeholder {
    color: white;
  }

  & + svg {
    position: absolute;
    top: 5px;
    left: 9px;
    font-size: 1.2rem;
    color: white;
    opacity: 0.75;
    transition: opacity 200ms;
  }

  &:focus + svg {
    opacity: 1;
  }

  &:focus {
    opacity: 1;
  }
`;

const useInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const onChange = () => {
    if (!ref.current) return;
    setValue(ref.current.value);
  };
  return { ref, value, onChange };
};

const Search = ({ searchByTerm }: Props) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { ref, value, onChange } = useInput();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchByTerm(value);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  return (
    <Form onSubmit={onSubmit} isFocused={isFocused}>
      <Input
        type="text"
        ref={ref}
        value={value}
        placeholder="Search"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <IoIosSearch />
    </Form>
  );
};

export default Search;
