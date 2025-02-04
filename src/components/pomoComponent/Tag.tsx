import { TagProps } from "../interfaces";

import styles from "./Tag.module.css";
const Tag = ({ val, index, onTagClicked, activeTag }: TagProps) => {
  const tagClass = activeTag === index ? styles.activeTag : styles.inactiveTag;
  return (
    <button
      className={`${styles.btn} ${tagClass}`}
      onClick={() => onTagClicked(index)}
    >
      {val}
    </button>
  );
};

export default Tag;
