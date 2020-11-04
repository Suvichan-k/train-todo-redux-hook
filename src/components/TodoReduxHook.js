import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Action from "../actions";

const TodoReduxHook = () => {
  const [term, setTerm] = useState();
  const [search, setSearch] = useState();

  const todos = useSelector((state) => state.addTodo);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <form className="App">
          <h1>search</h1>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </form>
      </div>
      <form
        className="App"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch({
            type: Action.ADDTODO,
            text: term,
          });
        }}
      >
        <h1>Add</h1>
        <input value={term} onChange={(event) => setTerm(event.target.value)} />
        <button>Add</button>
      </form>
      <div>
        Filter
        {todos.text
          .filter((todo) => todo.includes(search))
          .map((t, index) => (
            <tb>
              <li>{t}</li>
            </tb>
          ))}
      </div>
      <div>
        <li>Find</li>
        {todos.text.find((todo) => {
          return todo == search;
        })}
      </div>
    </div>
  );
};

export default TodoReduxHook;
