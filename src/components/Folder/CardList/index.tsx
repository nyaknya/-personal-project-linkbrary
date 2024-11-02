import { useState } from 'react';
import { FolderLinksType } from '../../../types';
import Card from '../Card';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

interface CardListProps {
  data: FolderLinksType[];
}

export default function CardList({ data }: CardListProps) {
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleToggleDropdown = (id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  return (
    <section className={`container ${cn('card-list-box')}`}>
      <ul>
        {data.map((link) => (
          <li key={link.id}>
            <Card
              link={link}
              isOpen={openDropdownId === link.id}
              onToggleDropdown={() => handleToggleDropdown(link.id)}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
