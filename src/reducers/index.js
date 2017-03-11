import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import form from './form';
import generator from './generator';
import validator from './validator';

const rootReducer = combineReducers({
    generator,
    form,
    validator,
    routing,
});

export default rootReducer;
