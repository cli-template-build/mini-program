/*const*/

const UPDATE_COUNT = 'UPDATE_COUNT';
const CLEAR_COUNT = 'CLEAR_COUNT';

const initState = {
  count: 0
};


/*reducer*/
const CountReducers = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_COUNT:
      return {
        ...state,
        count: action.payload
      };
    case CLEAR_COUNT:
      return {
        ...initState
      };
    default:
      return {
        ...state
      }
  }
};

/*action mapper*/
export const updateCountAction = payload => {
  return {
    type: UPDATE_COUNT,
    payload,
  }
};

export default CountReducers;
