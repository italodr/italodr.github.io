import actions from './actions';

export function setTheme(theme) {
  return { type: actions.SET_THEME, payload: theme };
}
