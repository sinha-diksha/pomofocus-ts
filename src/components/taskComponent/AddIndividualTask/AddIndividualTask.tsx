import { useRef } from "react";
import styles from "./AddIndividualTask.module.css";
import { useTodos } from "../../../store/StateProvider";
const AddIndividualTask = () => {
  const { AddTodoItems, handleCancelClick, isOpen } = useTodos();
  const todoItem = useRef<HTMLInputElement>(null);
  if (!isOpen) {
    return null;
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleTodoNameChange();
    }
  };

  const handleTodoNameChange = () => {
    if (todoItem.current) {
      const todoName = todoItem.current.value;
      AddTodoItems(todoName);
      todoItem.current.value = "";
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputTask}>
        <input
          placeholder="What are you working on"
          className={styles.inputBox}
          ref={todoItem}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className={styles.buttonBox}>
        <button className={styles.cancelButton} onClick={handleCancelClick}>
          Cancel
        </button>
        <button className={styles.saveButton} onClick={handleTodoNameChange}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddIndividualTask;
