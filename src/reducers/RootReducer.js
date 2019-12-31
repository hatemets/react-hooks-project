const randomId = require('random-id')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      let id = action.post.id ? action.post.id : randomId(10, '0');
      console.log(action.post.id);

      return [...state, {title: action.post.title,
      body: action.post.body,
      id}]
    case 'REMOVE_POST':
      return state.filter(post => Number(post.id) !== action.id)
    default:
      return state;
  }
}

export default rootReducer