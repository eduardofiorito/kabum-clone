import * as S from './styles';

import { User as UserIcon } from '@styled-icons/boxicons-solid/User';
import { Favorite as FavoriteIcon } from '@styled-icons/material/Favorite';
import { ShoppingBasket as ShoppingIcon } from '@styled-icons/material/ShoppingBasket';
import { Category as CategoryIcon } from '@styled-icons/boxicons-solid/Category';
import { TargetLock as TargetIcon } from '@styled-icons/boxicons-regular/TargetLock';
import { LightningChargeFill as LightningIcon } from '@styled-icons/bootstrap/LightningChargeFill';
import { TagFill as TagIcon } from '@styled-icons/bootstrap/TagFill';
import { Notifications } from 'components/Icons/Notifications';
import { Star } from 'components/Icons/Star';
import { CreditCard as CreditCardIcon } from '@styled-icons/material/CreditCard';
import { Pix } from 'components/Icons/Pix';

export type ListItemProps = {
  link: string;
  icon:
    | 'user'
    | 'heart'
    | 'shopping'
    | 'category'
    | 'target'
    | 'lightning'
    | 'tag'
    | 'notifications'
    | 'star'
    | 'credit'
    | 'pix';
  text: string;
};

export function ListItem({ link, icon, text }: ListItemProps) {
  const iconModifier = {
    user: <UserIcon />,
    heart: <FavoriteIcon />,
    shopping: <ShoppingIcon />,
    category: <CategoryIcon />,
    target: <TargetIcon />,
    lightning: <LightningIcon />,
    tag: <TagIcon />,
    notifications: <Notifications />,
    star: <Star />,
    credit: <CreditCardIcon />,
    pix: <Pix />,
  };

  return (
    <S.ListItem>
      <S.ListLink href={link}>
        {iconModifier[icon]}
        <span>{text}</span>
      </S.ListLink>
    </S.ListItem>
  );
}
