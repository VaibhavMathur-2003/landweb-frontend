// store.js
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

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

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const AuthProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AuthProvider;