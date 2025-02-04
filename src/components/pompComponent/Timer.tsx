import { useEffect } from "react";
import styles from "./Timer.module.css";
import Tags from "./Tags";
import { useTodos } from "../../store/StateProvider";

const Timer = () => {
  const { time, setTime, isActive, setIsActive, activeTag } = useTodos();
  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive]);

  const getTitle = () => {
    switch (activeTag) {
      case 0:
        return "Pomodoro";
      case 1:
        return "Short Break";
      case 2:
        return "Long Break";
      default:
        return "Pomodoro Timer";
    }
  };

  const getTime = (time: number): string => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    const timeString = `${min < 10 ? "0" + min : min}:${
      sec < 10 ? "0" + sec : sec
    }`;
    document.title = `${timeString} - ${getTitle()}`;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const toggleButton = () => {
    setIsActive(!isActive);
  };

  const handleColorChange = () => {
    switch (activeTag) {
      case 0:
        return "rgb(186,73,73)";
      case 1:
        return "rgb(56, 133, 138)";
      case 2:
        return "rgb(57, 112, 151)";
    }
  };
  return (
    <div className={styles.pomodoroTimer}>
      <div className={styles.timerButtons}>
        <Tags />
      </div>
      <div className={styles.timerDisplay}>{getTime(time)}</div>
      <button
        className={styles.timerButton}
        onClick={toggleButton}
        style={{
          color: handleColorChange(),
          transition: "color 0.5s ease-in-out",
        }}
      >
        {isActive ? "PAUSE" : "START"}
      </button>
    </div>
  );
};

export default Timer;
