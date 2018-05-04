import actions from './actions';

const DEFAULT_STATE = {
  theme: 'default',
};

const setTheme = (state, action) => Object.assign({}, state, { theme: action.payload });

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case actions.SET_THEME:
      return setTheme(state, action);
    default:
      return state;
  }
};

export default rootReducer;
