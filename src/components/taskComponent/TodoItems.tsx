import Item from "./Item";
import { useTodos } from "../../store/StateProvider";

const TodoItems = () => {
  const { todoItems } = useTodos();
  return (
    <>
      {todoItems.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
};

export default TodoItems;
