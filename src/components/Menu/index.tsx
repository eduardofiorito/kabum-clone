import * as S from './styles';

import { Menu as MenuIcon } from '@styled-icons/material-rounded/Menu';
import { Close as CloseIcon } from '@styled-icons/material/Close';
import { useEffect, useState } from 'react';
import { Avatar } from 'components/Avatar';
import { ListItem } from 'components/ListItem';
import { data } from './mock';
import { Button } from 'components/Button';

type MenuProps = {
  isAuthenticated?: boolean;
  user?: string;
};

export function Menu({
  isAuthenticated = true,
  user = 'Luis Henrique',
}: MenuProps) {
  const [itsOpen, setItsOpen] = useState(false);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        setItsOpen(false);
      }
    }

    itsOpen && document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [itsOpen]);

  const { main, highlights, tags, benefits } = data;

  return (
    <>
      <S.ButtonMenu
        type="button"
        onClick={() => setItsOpen(!itsOpen)}
        aria-label={itsOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={itsOpen}
        aria-controls="menu"
      >
        {itsOpen ? <CloseIcon /> : <MenuIcon />}
      </S.ButtonMenu>

      <S.Menu id="menu" itsOpen={itsOpen}>
        <S.Header>
          {isAuthenticated ? (
            <Avatar
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=36&q=80"
              alt=""
            />
          ) : (
            <Avatar />
          )}

          <S.Welcome>
            Olá. {isAuthenticated ? user : <a href="/">Faça seu login</a>}
          </S.Welcome>
        </S.Header>
        <S.Content>
          <S.List>
            {!!main &&
              main.map((item) => (
                <ListItem
                  key={item.id}
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            {!!main && <S.Diviser />}
          </S.List>
          <S.List>
            {!!highlights &&
              highlights.map((item) => (
                <ListItem
                  key={item.id}
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            {!!highlights && <S.Diviser />}
          </S.List>
          <S.List>
            {!!tags &&
              tags.map((item) => (
                <ListItem
                  key={item.id}
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
            {!!tags && <S.Diviser />}
          </S.List>

          <S.List>
            {!!benefits &&
              benefits.map((item) => (
                <ListItem
                  key={item.id}
                  link={item.link}
                  text={item.text}
                  icon={item.icon}
                />
              ))}
          </S.List>
        </S.Content>
        <S.Footer>
          {isAuthenticated ? (
            <Button size="large" variant="secondary" as={'a'} href="/">
              Sair
            </Button>
          ) : (
            <>
              <Button size="large" variant="secondary" as={'a'} href="/">
                Login
              </Button>
              <Button size="large" variant="primary" as={'a'} href="/">
                Cadastro
              </Button>
            </>
          )}
        </S.Footer>
      </S.Menu>

      {itsOpen && <S.Overlay onClick={() => setItsOpen(!itsOpen)} />}
      {itsOpen && (
        <S.CloseOverlayWrapper
          onClick={() => setItsOpen(!itsOpen)}
          aria-label="Fechar overlay"
        >
          <CloseIcon />
        </S.CloseOverlayWrapper>
      )}
    </>
  );
}
