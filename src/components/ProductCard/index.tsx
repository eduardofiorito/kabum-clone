import { Button } from 'components/Button';
import { SrOnly } from 'components/SrOnly';
import * as S from './styles';

import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material/ShoppingCart';
import { Favorite as FavoriteIcon } from '@styled-icons/material-rounded/Favorite';
import { FavoriteBorder as FavoriteBorderIcon } from '@styled-icons/material-rounded/FavoriteBorder';
import { Star as StarIcon } from '@styled-icons/material/Star';
import { StarOutline as StarOutlineIcon } from '@styled-icons/material/StarOutline';
import { Truck as TruckIcon } from '@styled-icons/boxicons-solid/Truck';

import { useState } from 'react';
import { Box } from 'components/Icons/Box';

import { handlePrice } from 'utils/product';
import { useCart } from 'context/CartContext';

export type ProductCardProps = {
  id: number;
  link: string;
  evaluation?: 0 | 1 | 2 | 3 | 4 | 5 | number;
  imgSrc: string;
  manufacturer: string;
  name: string;
  oldPrice: number;
  price: number;
  freeShipping?: boolean;
  openBox?: boolean;
};

export function ProductCard({
  id,
  link,
  evaluation = 0,
  imgSrc,
  manufacturer,
  name,
  oldPrice,
  price,
  freeShipping = false,
  openBox = false,
}: ProductCardProps) {
  const [favorite, setFavorite] = useState(false);
  const [pressed, setPressed] = useState(false);

  const handleEvaluation = (evaluation: number) => {
    const list: React.ReactNode[] = [];

    for (let i = 0; i < 5; i++) {
      i < evaluation
        ? list.push(<StarIcon key={i} />)
        : list.push(<StarOutlineIcon key={i} />);
    }
    return list;
  };

  const screenReaderDescription = `${name}. De ${handlePrice(
    oldPrice,
  )} R$. Por ${handlePrice(price)}R$.`;

  const { addProduct } = useCart();

  return (
    <S.Wrapper>
      <S.Header>
        {!!evaluation && <S.Stars>{handleEvaluation(evaluation)}</S.Stars>}
        <S.Evaluation>{evaluation}</S.Evaluation>
        <S.FavoriteButton
          onClick={() => setFavorite(!favorite)}
          aria-label={
            !favorite
              ? 'Adicionar a lista de desejos'
              : 'Remover da lista de desejos'
          }
          aria-pressed={favorite ? true : false}
          type="button"
          favorite={favorite}
        >
          {favorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </S.FavoriteButton>
      </S.Header>
      <S.Link href={link}>
        <SrOnly content={screenReaderDescription} />
      </S.Link>
      <S.Main>
        <S.Image src={imgSrc} alt="" />

        <S.Info>
          <S.Manufacturer>{manufacturer}</S.Manufacturer>
          <S.ProductName>{name}</S.ProductName>
          <S.OldPrice>R$ {handlePrice(oldPrice)}</S.OldPrice>
          <S.Price>R$ {handlePrice(price)}</S.Price>
          <S.Pix>À vista no pix</S.Pix>
          {freeShipping || openBox ? (
            <S.Tags>
              {freeShipping && (
                <S.Tag>
                  <TruckIcon size={12} /> Frete grátis
                </S.Tag>
              )}
              {openBox && (
                <S.Tag>
                  <Box size={12} /> Open box
                </S.Tag>
              )}
            </S.Tags>
          ) : null}
        </S.Info>
      </S.Main>

      <S.Footer>
        <Button
          onClick={() => {
            addProduct(id, 1);
            setPressed(!pressed);
          }}
          aria-label={'Adicionar ao carrinho'}
          variant="secondary"
          size="small"
          type="button"
          icon={<ShoppingCartIcon size={20} />}
        >
          Comprar
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
}
