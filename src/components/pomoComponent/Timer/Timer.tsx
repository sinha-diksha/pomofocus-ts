import { useEffect } from "react";
import styles from "./Timer.module.css";
import Tags from "../Tags/Tags";
import { TimerMode, useTodos } from "../../../store/StateProvider";

interface TimerConfig {
  buttonClass: string;
  initialTime: number;
}

const TIMER_CONFIG: Record<TimerMode, TimerConfig> = {
  [TimerMode.POMODORO]: {
    buttonClass: styles.pomodoroButton,
    initialTime: 25 * 60,
  },
  [TimerMode.SHORT]: {
    buttonClass: styles.shortBreakButton,
    initialTime: 5*60,
  },
  [TimerMode.LONG]: {
    buttonClass: styles.longBreakButton,
    initialTime: 15 * 60,
  },
};

const Timer = () => {
  const { time, setTime, isActive, setIsActive, activeTag } = useTodos();

  const currentConfig = TIMER_CONFIG[activeTag];
  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
    if (time === 0) {
      setTime(currentConfig.initialTime);
      setIsActive(false);
    }
  }, [time, isActive, setTime, currentConfig.initialTime]);

  const getTime = (time: number): string => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const toggleButton = () => {
    setIsActive(!isActive);
  };
  return (
    <div className={styles.pomodoroTimer}>
      <div className={styles.timerButtons}>
        <Tags />
      </div>
      <div className={styles.timerDisplay}>{getTime(time)}</div>
      <button
        className={`${styles.timerButton} ${currentConfig.buttonClass}`}
        onClick={toggleButton}
      >
        {isActive ? "PAUSE" : "START"}
      </button>
    </div>
  );
};

export default Timer;
