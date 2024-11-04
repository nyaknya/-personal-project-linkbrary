import { useState } from 'react';
import { FolderLinksType } from '../../../types';
import Card from '../Card';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';
import useSearchStore from '../../../store/useSearchStore';

const cn = classNames.bind(styles);

interface CardListProps {
  data: FolderLinksType[];
}

export default function CardList({ data }: CardListProps) {
  const { searchTerm } = useSearchStore();
  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);

  const handleToggleDropdown = (id: number) => {
    setOpenDropdownId((prevId) => (prevId === id ? null : id));
  };

  const filteredData = searchTerm
    ? data.filter(
        (link) =>
          (link.title &&
            link.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (link.url &&
            link.url.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (link.description &&
            link.description.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    : data;

  return (
    <section className={`container ${cn('card-list-box')}`}>
      <ul>
        {filteredData.map((link) => (
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
