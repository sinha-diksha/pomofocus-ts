import Item from "./Item/Item";
import { useTodos } from "../../store/StateProvider";

const TodoItems = () => {
  const { todoItems } = useTodos();
  return (
    <>
      {todoItems.map((item) => (
        <Item item={item} key={item} />
      ))}
    </>
  );
};

export default TodoItems;
