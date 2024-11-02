import { LinkDataType } from '../../../types';
import Card from '../Card';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface CardListProps {
  data: LinkDataType[];
}

export default function CardList({ data }: CardListProps) {
  return (
    <div className={`container ${cn('card-list-box')}`}>
      <ul>
        {data.map((link) => {
          return (
            <li key={link.id}>
              <Card link={link} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
