import classNames from "classnames/bind";

import Button from "@/components/Common/Button";
import useModal from "@/hooks/useModal";

import styles from "./Titlebar.module.scss";

const cn = classNames.bind(styles);

export default function Titlebar() {
  const { openModal } = useModal();

  const handleAddClick = () => {
    openModal({ type: "linkFolderAdd", props: { linkUrl: "일단해봐" } });
  };

  return (
    <section className={cn("title-bar")}>
      <div className={cn("link-add-bar")}>
        <input type="text" placeholder="링크를 추가해 보세요" />
        <Button onClick={handleAddClick}>추가하기</Button>
      </div>
    </section>
  );
}
