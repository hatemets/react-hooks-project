const randomId = require('random-id');

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      let id = action.post.id ? action.post.id : randomId(10, '0');
      let d = new Date();
      return [...state, {title: action.post.title,
      body: action.post.body,
      id,
      date: action.post.date,
      novelty: d.getTime()}]

    case 'REMOVE_POST':
      return state.filter(post => Number(post.id) !== action.id)

    case 'CHANGE_THEME':
      let {light, dark} = state;
      const isLight = (action.color === 'dark') ? false : true;
      return {isLight,
              light, dark};

    default:
      return state;
  }
}

export default rootReducer