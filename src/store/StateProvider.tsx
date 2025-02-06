import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

export type TodosProviderProps = {
  children: ReactNode;
};

export enum TimerMode {
  POMODORO = "pomodoro",
  SHORT = "shortbreak",
  LONG = "longbreak",
}

export type TodosContext = {
  activeTag: TimerMode;
  setActiveTag: React.Dispatch<React.SetStateAction<TimerMode>>;
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [activeTag, setActiveTag] = useState<TimerMode>(TimerMode.POMODORO);
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [todoItems, setTodoItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

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
      case TimerMode.POMODORO:
        setTime(25 * 60);
        break;
      case TimerMode.SHORT:
        setTime(5 * 60);
        break;
      case TimerMode.LONG:
        setTime(15 * 60);
        break;
    }
  }, [activeTag, setTime]);

  return (
    <StateContext.Provider
      value={{
        activeTag,
        setActiveTag,
        time,
        setTime,
        isActive,
        setIsActive,
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
