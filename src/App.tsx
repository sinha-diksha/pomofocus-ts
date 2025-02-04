import "./App.css";
import Header from "./components/pomoComponent/Header";
import Timer from "./components/pomoComponent/Timer";

import Tasks from "./components/taskComponent/Tasks";
import { StateProvider } from "./store/StateProvider";

function App() {
  return (
    <center className="container">
      <StateProvider>
        <Header />
        <Timer />
        <Tasks />
      </StateProvider>
    </center>
  );
}

export default App;
