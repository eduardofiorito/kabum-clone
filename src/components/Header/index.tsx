import { useState } from 'react';

import { LogoLink } from 'components/LogoLink';
import { Search } from 'components/Search';
import * as S from './styles';

import { LocationOn as LocationIcon } from '@styled-icons/material/LocationOn';
import { KeyboardArrowRight as ArrowRightIcon } from '@styled-icons/material/KeyboardArrowRight';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material/ShoppingCart';
import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { KeyboardArrowDown as ArrowDownIcon } from '@styled-icons/material/KeyboardArrowDown';

import { Notifications as NotificationsIcon } from 'components/Icons/Notifications';

import { Menu } from 'components/Menu';
import { Avatar } from 'components/Avatar';

type HeaderProps = {
  name?: string;
  adress?: string;
  isAuthenticated?: boolean;
  avatar?: {
    src: string;
    alt: string;
  };
};

export function Header({
  name = 'Luis Henrique',
  adress = 'Rua das Hortências, 295 - Boa Vista - Limeira SP',
  isAuthenticated = true,
  avatar = {
    src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=36&q=80',
    alt: '',
  },
}: HeaderProps) {
  const [isShown, setIsShown] = useState(false);

  return (
    <S.Header>
      <S.Container>
        <S.Wrapper>
          <Menu isAuthenticated={isAuthenticated} />

          <LogoLink />

          <S.SearchWrapper isAuthenticated={isAuthenticated}>
            <Search isAuthenticated={isAuthenticated} />
            {isAuthenticated && (
              <S.Shipping hideOnMobo={true}>
                <S.Content>
                  <span>Enviar para: </span>
                  {adress}
                </S.Content>
                <S.ArrowRightIconWrapper>
                  <ArrowRightIcon />
                </S.ArrowRightIconWrapper>
              </S.Shipping>
            )}
          </S.SearchWrapper>

          <S.User>
            {isAuthenticated ? (
              <Avatar src={avatar.src} alt={avatar.alt} />
            ) : (
              <Avatar />
            )}

            <S.UserContent>
              {isAuthenticated ? (
                <S.Username>Olá {name}</S.Username>
              ) : (
                <div>
                  Faça <S.LinkPrimary href="/">Login</S.LinkPrimary> ou
                </div>
              )}

              {isAuthenticated ? (
                <S.LinksAuth>
                  <S.LinkSecondary href="/">Minha Conta</S.LinkSecondary>|
                  <S.LinkSecondary href="/">Sair</S.LinkSecondary>
                </S.LinksAuth>
              ) : (
                <div>
                  crie seu <S.LinkPrimary href="/">Cadastro</S.LinkPrimary>
                </div>
              )}
            </S.UserContent>
          </S.User>

          <S.Icons>
            {isAuthenticated && (
              <S.IconLink className="notifications" href="/" title="SAC">
                <NotificationsIcon width={24} height={24} />
              </S.IconLink>
            )}

            <S.IconLink className="favorite" href="/" title="Favoritos">
              <FavoriteIcon />
            </S.IconLink>

            <S.IconLink className="shopping" href="/" title="Carrinho">
              <ShoppingCartIcon />
            </S.IconLink>
          </S.Icons>
        </S.Wrapper>
      </S.Container>

      {isAuthenticated && (
        <S.NavWrapper>
          <S.Container>
            <S.Nav>
              <S.NavList>
                <S.NavListItem>
                  <div
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setIsShown(false);
                      }
                    }}
                  >
                    <S.ButtonDropdown
                      type="button"
                      onClick={() => setIsShown(!isShown)}
                      aria-label={
                        isShown
                          ? 'Fechar todos os departamentos'
                          : 'Abrir todos os departamentos'
                      }
                      aria-expanded={isShown}
                      aria-controls="dropdown"
                    >
                      Todos os departamentos
                      <S.ArrowDownIconWrapper isShown={isShown}>
                        <ArrowDownIcon />
                      </S.ArrowDownIconWrapper>
                    </S.ButtonDropdown>
                    {isShown && (
                      <S.Dropdown id="dropdown">
                        <S.DropdownList>
                          <li>
                            <S.DropdownLink href="/">
                              Item 1
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                          <li>
                            <S.DropdownLink href="/">
                              Item 2
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                          <li>
                            <S.DropdownLink href="/">
                              Item 3
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                          <li>
                            <S.DropdownLink href="/">
                              Item 4
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                          <li>
                            <S.DropdownLink href="/">
                              Item 5
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                          <li>
                            <S.DropdownLink href="/">
                              Item 6
                              <span>
                                <ArrowRightIcon />
                              </span>
                            </S.DropdownLink>
                          </li>
                        </S.DropdownList>
                      </S.Dropdown>
                    )}
                  </div>
                </S.NavListItem>
                <S.NavListItem>
                  <S.NavLink href="/">Seja prime</S.NavLink>
                </S.NavListItem>
                <S.NavListItem>
                  <S.NavLink href="/">Central de atendimento</S.NavLink>
                </S.NavListItem>
              </S.NavList>
            </S.Nav>
          </S.Container>
        </S.NavWrapper>
      )}

      {isAuthenticated && (
        <S.Shipping hideOnMobo={false}>
          <S.LocationIconWrapper>
            <LocationIcon />
          </S.LocationIconWrapper>
          <S.Content>
            <span>Enviar para: </span>
            {adress}
          </S.Content>
          <S.ArrowRightIconWrapper>
            <ArrowRightIcon />
          </S.ArrowRightIconWrapper>
        </S.Shipping>
      )}
    </S.Header>
  );
}
