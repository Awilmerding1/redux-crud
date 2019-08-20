
export const fetchTodos = () => {
  debugger
  return (dispatch) => {
    fetch('http://localhost:3005/api/v1/todos')
    .then(response => response.json())
    .then(todos => dispatch({
      type: 'FETCH_TODOS', payload: todos}))
  }
}
