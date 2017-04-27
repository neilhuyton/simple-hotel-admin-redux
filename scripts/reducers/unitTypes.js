function unitTypes(state = [], action) {
  switch(action.type) {
    case 'ADD_UNIT_TYPE':
      return [...state, {
        name: action.name
      }];
    default:
      return state;
  }
}

export default unitTypes;
