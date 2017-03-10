import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import saga from '../reducers/saga';
import rootReducer from '../reducers';

const configureStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunk,
            sagaMiddleware,
        ),
    );

    sagaMiddleware.run(saga);

    return store;
};

export default configureStore;
