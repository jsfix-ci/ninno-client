import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import generator from './generator';
import validator from './validator';
import datePicker from './datePicker';

const rootReducer = combineReducers({
    generator,
    validator,
    datePicker,
    routing,
});

export default rootReducer;
