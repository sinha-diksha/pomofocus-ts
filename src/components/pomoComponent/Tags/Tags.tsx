import styles from "./Tags.module.css";
import { TimerMode, useTodos } from "../../../store/StateProvider";

interface TimerConfig {
  title: string;
}

const TIMER_CONFIGS: Record<TimerMode, TimerConfig> = {
  [TimerMode.POMODORO]: {
    title: "Pomodoro",
  },
  [TimerMode.SHORT]: {
    title: "Short Break",
  },
  [TimerMode.LONG]: {
    title: "Long Break",
  },
};

const Tags = () => {
  const { activeTag, setActiveTag, setIsActive } = useTodos();

  const handleOnClick = (mode: TimerMode): void => {
    setIsActive(false);
    setActiveTag(mode);
  };
  const enumValues = Object.values(TimerMode);

  return (
    <>
      {enumValues.map((mode) => (
        <button
          key={mode}
          className={`${styles.btn} ${
            activeTag === mode ? styles.activeTag : styles.inactiveTag
          }`}
          onClick={() => handleOnClick(mode as TimerMode)}
        >
          {TIMER_CONFIGS[mode].title}
        </button>
      ))}
    </>
  );
};

export default Tags;