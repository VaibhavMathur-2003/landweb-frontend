
const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export default authReducer;
