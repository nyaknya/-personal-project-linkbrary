/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import useModal from "@/hooks/useModal";

import styles from "./CardTitlebar.module.scss";

const cn = classNames.bind(styles);

interface CardTitlebarProps {
  folderName: string | null;
}

export default function CardTitlebar({ folderName }: CardTitlebarProps) {
  const { openModal } = useModal();
  const router = useRouter();
  const id = router.query.id;

  const handleShareClick = () => {
    openModal({
      type: "folderShare",
      props: { folderName, id },
    });
  };

  const handleEditClick = () => {
    openModal({
      type: "folderEdit",
      props: { folderName },
    });
  };

  const handleDeleteClick = () => {
    openModal({
      type: "folderDelete",
      props: { folderName },
    });
  };

  return (
    <section className={`container ${cn("card-titlebar")}`}>
      <h2>{folderName}</h2>
      {router.asPath === "/folder" ? null : (
        <div>
          <ul>
            <li onClick={handleShareClick}>
              <Image
                src="/images/share.svg"
                alt="공유 아이콘"
                width={18}
                height={18}
              />
              <span>공유</span>
            </li>
            <li onClick={handleEditClick}>
              <Image
                src="/images/edit.svg"
                alt="이름 변경 아이콘"
                width={18}
                height={18}
              />
              <span>이름 변경</span>
            </li>
            <li onClick={handleDeleteClick}>
              <Image
                src="/images/delete.svg"
                alt="삭제 아이콘"
                width={18}
                height={18}
              />
              <span>삭제</span>
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}
