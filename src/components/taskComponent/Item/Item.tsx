import styles from "./Item.module.css";
import { useTodos } from "../../../store/StateProvider";
import { useState } from "react";
import { ItemProps } from "../../interfaces";

const Item = ({ item }: ItemProps) => {
  const { deleteTodoItems } = useTodos();
  const [isCompleted, setIsCompleted] = useState(false);
  const toggleCompletion = () => {
    setIsCompleted((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={toggleCompletion}
          className={styles.checkbox}
        />

        <span
          className={`${isCompleted ? styles.completed : ""} ${
            styles.itemText
          }`}
        >
          {item}
        </span>
      </div>

      <button
        className={styles.deleteBtn}
        onClick={() => deleteTodoItems(item)}
      >
        Delete
      </button>
    </div>
  );
};

export default Item;
