import classNames from "classnames/bind";

import useSearchStore from "@/store/useSearchStore";
import { LinkDataType } from "@/types";

import Card from "../Card";
import styles from "./CardList.module.scss";

const cn = classNames.bind(styles);

interface CardListProps {
  data: LinkDataType[];
}

export default function CardList({ data }: CardListProps) {
  const { searchTerm } = useSearchStore();

  const filteredData = data.filter(
    (link) =>
      (link.title &&
        link.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (link.url && link.url.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (link.description &&
        link.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <section className={`container ${cn("card-list-box")}`}>
      <ul>
        {filteredData.map((link) => (
          <li key={link.id}>
            <Card link={link} />
          </li>
        ))}
      </ul>
    </section>
  );
}
