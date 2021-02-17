export const initialState = {
  current: '#FF0000',
  before: [],
  after: []
};

export default function reducer(state, action) {
  switch(action.type) {
    case 'CURRENT_CHANGE':
      return {
        ...state,
        before: [...state.before, state.current],
        current: action.payload
      };
    case 'UNDO':
      return {
        ...state,
        current: state.before[state.before.length - 1] || ['#FFFF00'],
        after: [state.current, ...state.after],
        before: state.before.slice(0, -1) 
      };
    case 'REDO':
      return {
        ...state,
        before: [...state.before, state.current],
        current: state.after[0],
        after: state.after.slice(-1)
      };
  }
}
