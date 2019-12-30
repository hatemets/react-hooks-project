const randomId = require('random-id')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      let id = randomId(10, '0')
      return [...state, {title: action.title,
      body: action.body,
      id}]
    case 'REMOVE_POST':
      return state.filter(post => post.id !== action.id)
    default:
      return state;
  }
}

export default rootReducer