
export const addTodo = (todo) => {

  return (dispatch) => {
      fetch('http://localhost:3005/api/v1/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(todo => dispatch({
        type: 'ADD_TODO', payload: todo
      }))
  }
}


export const deleteTodo = (todoId) => {
  fetch(`http://localhost:3005/api/v1/todos/${todoId}`, {
    method: 'DELETE'
  })

}
