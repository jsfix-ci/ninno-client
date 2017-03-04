import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

const entities = (state = {}) => state;

const rootReducer = combineReducers({
    entities,
    routing,
});

export default rootReducer;
