import React from 'react';
import {connect} from 'react-redux'
import Todo from './Todo'
import {fetchTodos} from './actions/fetchTodos'

class Todos extends React.Component {

  componentDidMount() {
    this.props.fetchTodos()
  }

  render() {
    return (
      <div>
        <div>{this.props.loading ? <h2>Loading todos!!!</h2> : null}</div>
        {this.props.todos.map(todo => <Todo key={todo.id} todo={todo}/>)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {todos: state.todos, loading: state.loading}
}

export default connect(mapStateToProps, {fetchTodos})(Todos);
