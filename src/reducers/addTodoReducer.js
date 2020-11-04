import Action from "../actions";

var initialState = {
  text: ["todo1", "todo2"],
};

function addTodoReducer(state = initialState, action) {
  switch (action.type) {
    case Action.ADDTODO:
      console.log(state);

      return { text: [...state.text, action.text] };

    default:
      return state;
  }
}

export default addTodoReducer;
