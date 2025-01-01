import { applyMiddleware, combineReducers, createStore } from 'redux';
import { portfolioReducer } from './reducers/portfolioReducer';
import { toDoListReducer } from './reducers/toDoListReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
	portfolioRed: portfolioReducer,
	toDoListRed: toDoListReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

// export const store = createStore(rootReducer);
// window.store = store;
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './reducers';
// import thunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))) // Подключение thunk
// );

// export default store;
