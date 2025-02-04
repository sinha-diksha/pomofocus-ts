import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
// Ensure you have the correct path to the CSS module
export type TodosProviderProps = {
  children: ReactNode;
};

export type TodosContext = {
  activeTag: number;
  setActiveTag: React.Dispatch<React.SetStateAction<number>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  workTime: number;
  setWorkTime: React.Dispatch<React.SetStateAction<number>>;
  shortBreakTime: number;
  setShortBreakTime: React.Dispatch<React.SetStateAction<number>>;
  longBreakTime: number;
  setlongBreakTime: React.Dispatch<React.SetStateAction<number>>;
  todoItems: string[];
  setTodoItems: React.Dispatch<React.SetStateAction<string[]>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteTodoItems: (todoItem: string) => void;
  AddTodoItems: (todoItem: string) => void;
  handleAddClick: () => void;
  handleCancelClick: () => void;
};

export const StateContext = createContext<TodosContext | null>(null);

export const StateProvider = ({ children }: TodosProviderProps) => {
  const [workTime, setWorkTime] = useState<number>(25 * 60);
  const [shortBreakTime, setShortBreakTime] = useState<number>(5 * 60);
  const [longBreakTime, setlongBreakTime] = useState<number>(15 * 60);

  const [activeTag, setActiveTag] = useState(0);
  const [time, setTime] = useState(25 * 60);

  const [isActive, setIsActive] = useState(false);
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // const pomodoroTimerElement = document.querySelector(".pomodoroTimer");

  const AddTodoItems = (itemName: string) => {
    const newItems = [...todoItems, itemName];
    setTodoItems(newItems);
  };

  const deleteTodoItems = (itemName: string) => {
    const newItems = todoItems.filter((item) => item !== itemName);
    setTodoItems(newItems);
  };
  const handleAddClick = () => {
    setIsOpen(true);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    switch (activeTag) {
      case 0:
        setTime(workTime);
        document.body.style.backgroundColor = "rgb(186,73,73)";
        // pomodoroTimerElement.style.backgroundColor = "#e37a86";
        break;
      case 1:
        setTime(shortBreakTime);
        document.body.style.backgroundColor = "rgb(56, 133, 138)";
        // pomodoroTimerElement.style.backgroundColor = "#abdbe3";
        break;
      case 2:
        setTime(longBreakTime);
        document.body.style.backgroundColor = "rgb(57, 112, 151)";
        // pomodoroTimerElement.style.backgroundColor = "rgba(24,132,181,255";
        break;
    }
  }, [activeTag]);
  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        time,
        setTime,
        isActive,
        setIsActive,
        workTime,
        setWorkTime,
        shortBreakTime,
        setShortBreakTime,
        longBreakTime,
        setlongBreakTime,
        todoItems,
        setTodoItems,
        isOpen,
        setIsOpen,

        deleteTodoItems,
        AddTodoItems,
        handleAddClick,
        handleCancelClick,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useTodos = () => {
  const todoConsumer = useContext(StateContext);
  if (!todoConsumer) {
    throw new Error("useTodos used outside of Provider");
  }
  return todoConsumer;
};
