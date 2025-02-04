import styles from "./TodoHead.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

const TodoHead = () => {
  return (
    <div className={styles.container}>
      <div className={styles.tasksName}>Tasks</div>
      <div className={styles.ThreeDots}>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
};

export default TodoHead;
