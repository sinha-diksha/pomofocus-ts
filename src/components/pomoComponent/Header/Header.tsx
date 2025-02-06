import styles from "./Header.module.css";
import { FaRegCheckCircle } from "react-icons/fa";

import { BsThreeDotsVertical } from "react-icons/bs";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.Heading}>
        <FaRegCheckCircle className={styles.tick} />
        <div>Pomofocus</div>
      </div>
      <div className={styles.mybtn}>
        <button className={styles.btn}>
          <span className={styles.buttonDiv}>Report</span>
        </button>
        <button className={styles.btn}>
          <span className={styles.buttonDiv}>Setting</span>
        </button>

        <button className={styles.btn}>
          <span className={styles.buttonDiv}>Sign in</span>
        </button>
        <div className={styles.dot}>
          <BsThreeDotsVertical className={styles.ThreeDots} />
        </div>
      </div>
    </div>
  );
};

export default Header;
