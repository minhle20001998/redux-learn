import { combineReducers, createStore, applyMiddleware } from 'redux'
import userReducer from './ducks/user'
import createSagaMiddleware from 'redux-saga'
import { watcherSaga } from './sagas/rootSaga';

const reducers = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]

const store = createStore(reducers, {}, applyMiddleware(...middlewares));

sagaMiddleware.run(watcherSaga)

export default store;