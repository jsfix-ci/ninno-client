import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import form from './form';
import validator from './validator';

const rootReducer = combineReducers({
    form,
    validator,
    routing,
});

export default rootReducer;
