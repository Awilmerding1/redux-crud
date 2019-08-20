
export default function todoReducer(state ={loading:false, todos: []}, action) {

  console.log(action)
  switch (action.type) {
    case 'FETCH_TODOS':
      return {...state, todos: action.payload}
    case 'ADD_TODO':
        return {...state, todos: [...state.todos, action.payload]}
    default:
      return state;
    }
}
