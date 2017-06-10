import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        undefined,
        compose(
            applyMiddleware(
                thunk,
                createLogger(),
            ),
            DevTools.instrument(),
        ),
    );

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
