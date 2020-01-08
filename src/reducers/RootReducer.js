const randomId = require('random-id')

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      let id = action.post.id ? action.post.id : randomId(10, '0');
      console.log(action.post.date);
      return [...state, {title: action.post.title,
      body: action.post.body,
      id,
      date: action.post.date}]
    case 'REMOVE_POST':
      return state.filter(post => Number(post.id) !== action.id)
    case 'CHANGE_THEME':
      let {isLight, light, dark} = state;
      if (action.color === 'dark') {var lightTheme = false} else {var lightTheme = true}
      return {isLight: lightTheme,
              light, dark};
    default:
      return state;
  }
}

export default rootReducer