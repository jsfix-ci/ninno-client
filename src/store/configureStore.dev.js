import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import saga from '../reducers/saga';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const configureStore = (preloadedState) => {
    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(
                thunk,
                sagaMiddleware,
                createLogger(),
            ),
            DevTools.instrument(),
        ),
    );

    sagaMiddleware.run(saga);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            /* eslint-disable global-require */
            const nextRootReducer = require('../reducers').default;
            /* eslint-enable global-require */
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
};

export default configureStore;
