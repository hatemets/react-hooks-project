const randomId = require('random-id')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, {title: action.post.title,
      body: action.post.body,
      id: randomId(10, '0')}]
    case 'REMOVE_POST':
      return state.filter(post => Number(post.id) !== action.id)
    default:
      return state;
  }
}

export default rootReducer