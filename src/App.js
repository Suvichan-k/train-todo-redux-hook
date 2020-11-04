import "./App.css";
import TodoRedux from "./components/TodoRedux";
import TodoReduxHook from "./components/TodoReduxHook";

const App = () => {
  return (
    <div className="App">
      {/* <TodoRedux /> */}
      <TodoReduxHook />
    </div>
  );
};

export default App;
