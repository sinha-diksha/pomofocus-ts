import AddTodo from "./AddTodo";
import TodoHead from "./TodoHead";
import AddIndividualTask from "./AddIndividualTask";

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
