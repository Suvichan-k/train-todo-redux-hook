import Action from "./";

export function addTodo(data) {
  console.log("Action");
  return {
    type: Action.ADDTODO,
    text: data,
  };
}
