import AddTodo from "./AddTodo/AddTodo";
import TodoHead from "./TodoHead/TodoHead";
import AddIndividualTask from "./AddIndividualTask/AddIndividualTask";

import TodoItems from "./TodoItems";

const Tasks = () => {
  return (
    <div>
      <TodoHead />
      <TodoItems />
      <AddIndividualTask />

      <AddTodo />
    </div>
  );
};

export default Tasks;
