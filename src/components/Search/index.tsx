import { useState } from 'react';

import * as S from './styles';

import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { SearchCustomIcon } from 'components/Icons/SearchCustomIcon';

type SearchProps = {
  ariaLabel?: string;
  placeholder?: string;
  minCharacters?: number;
  maxCharacters?: number;
  haveButton?: boolean;
  isAuthenticated: boolean;
};

export function Search({
  ariaLabel = 'Buscar produtos',
  placeholder = 'Busque aqui',
  minCharacters = 2,
  maxCharacters = 200,
  haveButton = true,
  isAuthenticated,
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
    <S.Form onSubmit={handleSubmit} role="search">
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

      {!isAuthenticated && (
        <S.List>
          <S.ListItem>
            <S.ListLink href="#">Playstation 5</S.ListLink>
          </S.ListItem>
          <S.ListItem>
            <S.ListLink href="#">i9 extreme</S.ListLink>
          </S.ListItem>
          <S.ListItem>
            <S.ListLink href="#">Gtx 3090</S.ListLink>
          </S.ListItem>
        </S.List>
      )}

      {haveButton && (
        <S.Button type="submit" aria-label="Buscar">
          <SearchIcon />
          <SearchCustomIcon />
        </S.Button>
      )}
    </S.Form>
  );
}
