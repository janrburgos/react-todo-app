import "./App.css";

import TodoAppInput from "./components/TodoAppInput/TodoAppInput";
import TaskTable from "./components/TaskTable/TaskTable";

const App = () => {
  return (
    <div className="App">
      <TodoAppInput />
      <TaskTable status="pending" />
      <TaskTable status="done" />
    </div>
  );
};

export default App;
