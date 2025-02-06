import styles from "./AddTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";
import { useTodos } from "../../../store/StateProvider";
const AddTodo = () => {
  const { handleAddClick } = useTodos();
  return (
    <div className={styles.AddTodoContainer} onClick={handleAddClick}>
      <IoMdAddCircle className={styles.Icon} />
      <span className={styles.AddTask}>Add Task</span>
    </div>
  );
};

export default AddTodo;
