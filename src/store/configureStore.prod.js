import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '~/reducers';

import { loadState, saveState } from './localStorage';

const configureStore = () => {
    const preloadedState = loadState();

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk),
    );

    store.subscribe(() => {
        saveState(store.getState());
    });

    return store;
};

export default configureStore;
