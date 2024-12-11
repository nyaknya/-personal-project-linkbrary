import classNames from "classnames/bind";
import { useState } from "react";

import Button from "@/components/Common/Button";
import useModal from "@/hooks/useModal";

import styles from "./Titlebar.module.scss";

const cn = classNames.bind(styles);

export default function Titlebar() {
  const { openModal } = useModal();
  const [url, setUrl] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleAddClick = () => {
    if (!url.trim()) {
      alert("URL을 입력해주세요.");
      return;
    }

    openModal({ type: "linkFolderAdd", props: { linkUrl: url } });
  };

  return (
    <section className={cn("title-bar")}>
      <div className={cn("link-add-bar")}>
        <input
          type="text"
          placeholder="링크를 추가해 보세요"
          value={url}
          onChange={handleInputChange}
        />
        <Button onClick={handleAddClick}>추가하기</Button>
      </div>
    </section>
  );
}
