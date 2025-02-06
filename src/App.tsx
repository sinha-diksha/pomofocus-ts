import Header from "./components/pomoComponent/Header/Header";
import Timer from "./components/pomoComponent/Timer/Timer";
import Tasks from "./components/taskComponent/Tasks";
import { useTodos } from "./store/StateProvider";
import styles from "./App.module.css";

function App() {
  const { activeTag } = useTodos();

  return (
    <div className={`${styles.parentDiv} ${styles[activeTag]}`}>
      <div className={styles.container}>
        <Header />
        <Timer />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
