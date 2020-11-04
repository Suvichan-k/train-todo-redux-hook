import React from "react";
import { connect } from "react-redux";
import Action from "../actions";

class TodoRedux extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      search: "",
    };

    <input value={this.state.term} onChange={this.onChange} />;
  }

  onChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onHandleChang = (event) => {
    this.setState({ search: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.term);
    console.log(this.props);
  };

  onSearch = (event) => {
    this.setState({ search: event.target.value });
    this.setState({ term: "" });
  };

  render() {
    return (
      <div>
        <div>
          <form className="App" onSubmit={this.onSearch}>
            <h1>search</h1>
            <input value={this.state.search} onChange={this.onHandleChang} />
          </form>
        </div>
        <form className="App" onSubmit={this.onSubmit}>
          <h1>Add</h1>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add</button>
        </form>
        <div>
          Filter
          {this.props.todos.text
            .filter((todo) => todo.includes(this.state.search))
            .map((t, index) => (
              <tb>
                <li>{t}</li>
              </tb>
            ))}
        </div>
        <div>
          <li>Find</li>
          {this.props.todos.text.find((todo) => {
            return todo == this.state.search;
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  todos: state.addTodo,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (value) => dispatch({ type: Action.ADDTODO, text: value }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoRedux);
