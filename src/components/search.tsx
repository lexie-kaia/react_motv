import React, { FormEvent, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosSearch } from 'react-icons/io';

type Props = {
  searchByTerm: (term: string) => void;
};

const Form = styled.form`
  position: relative;
  padding: 0 1rem;
`;

const Input = styled.input`
  width: 14rem;
  border-bottom: 1px solid #757575;
  transition: border-bottom 200ms;

  &::placeholder {
    color: #757575;
    transition: color 200ms;
  }

  & + svg {
    position: absolute;
    top: 1px;
    right: 1rem;
    color: #757575;
    transition: color 200ms;
  }

  &:focus {
    border-bottom: 1px solid #212121;
  }

  &:focus::placeholder {
    color: #212121;
  }

  &:focus + svg {
    color: #212121;
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
  const { ref, value, onChange } = useInput();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchByTerm(value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        ref={ref}
        value={value}
        onChange={onChange}
        placeholder="Search Movies or TV Shows"
      />
      <IoIosSearch />
    </Form>
  );
};

export default Search;
