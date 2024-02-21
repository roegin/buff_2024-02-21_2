import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';
import userReducer from './reducers/userReducer';
import tradeReducer from './reducers/tradeReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  users: userReducer,
  trades: tradeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;