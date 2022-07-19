import * as S from './styles';

import { Menu as MenuIcon } from '@styled-icons/material-rounded/Menu';
import { Close as CloseIcon } from '@styled-icons/material/Close';
import { useEffect, useRef, useState } from 'react';
import { Avatar } from 'components/Avatar';
import { ListItem } from 'components/ListItem';
import { data } from './mock';
import { Button } from 'components/Button';

type MenuProps = {
  isAuthenticated: boolean;
  username: string;
  avatar: {
    src: string;
    alt: string;
  };
};

export function Menu({ isAuthenticated, username, avatar }: MenuProps) {
  const [itsOpen, setItsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        setItsOpen(false);
        buttonRef.current.focus();
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
        isAuthenticated={isAuthenticated}
        ref={buttonRef}
      >
        {itsOpen ? <CloseIcon /> : <MenuIcon />}
      </S.ButtonMenu>

      <S.Menu id="menu" itsOpen={itsOpen} isAuthenticated={isAuthenticated}>
        <S.Header>
          {isAuthenticated ? (
            <Avatar src={avatar.src} alt={avatar.alt} />
          ) : (
            <Avatar />
          )}

          <S.Welcome>
            Olá. {isAuthenticated ? username : <a href="#">Faça seu login</a>}
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
          </S.List>
          {!!main && <S.Diviser />}
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
          </S.List>
          {!!highlights && <S.Diviser />}
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
          </S.List>
          {!!tags && <S.Diviser />}

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
            <Button size="large" variant="secondary" as="a" href="#">
              Sair
            </Button>
          ) : (
            <>
              <Button size="large" variant="secondary" as="a" href="#">
                Login
              </Button>
              <Button size="large" variant="primary" as="a" href="#">
                Cadastro
              </Button>
            </>
          )}
        </S.Footer>
      </S.Menu>

      {itsOpen && <S.Overlay onClick={() => setItsOpen(!itsOpen)} />}
      {itsOpen && (
        <S.CloseOverlayWrapper
          type="button"
          onClick={() => setItsOpen(!itsOpen)}
          aria-label="Fechar overlay"
        >
          <CloseIcon />
        </S.CloseOverlayWrapper>
      )}
    </>
  );
}
