import { useState } from 'react';

import * as S from './styles';

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';

type SearchProps = {
  ariaLabel?: string;
  placeholder?: string;
  minCharacters?: number;
  maxCharacters?: number;
  haveButton?: boolean;
};

export function Search({
  ariaLabel = 'Buscar produtos',
  placeholder = 'Busque aqui',
  minCharacters = 2,
  maxCharacters = 200,
  haveButton = true,
}: SearchProps) {
  const [input, setInput] = useState('');

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(input);
    setInput('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input
        autoComplete="off"
        type="text"
        aria-label={ariaLabel}
        placeholder={placeholder}
        minLength={minCharacters}
        maxLength={maxCharacters}
        required
        onChange={handleInput}
        value={input}
      />
      {haveButton && (
        <S.Button type="submit" aria-label="Buscar">
          <SearchIcon />
        </S.Button>
      )}
    </S.Form>
  );
}
