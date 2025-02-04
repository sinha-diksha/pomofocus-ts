import Tag from "./Tag";

import { useTodos } from "../../store/StateProvider";

const Tags = () => {
  const arr = ["Pomodoro", "Short Break", "Long Break"];
  const { activeTag, setActiveTag } = useTodos();

  const handleOnClick = (index: number): void => {
    setActiveTag(index);
  };

  return (
    <>
      {arr.map((item, i) => (
        <Tag
          key={i}
          val={item}
          index={i}
          onTagClicked={handleOnClick}
          activeTag={activeTag}
        />
      ))}
    </>
  );
};

export default Tags;
