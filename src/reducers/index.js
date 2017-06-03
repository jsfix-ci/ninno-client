import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import form from './form';
import generator from './generator';
import validator from './validator';
import datePicker from './datePicker';

const rootReducer = combineReducers({
    generator,
    form,
    validator,
    datePicker,
    routing,
});

export default rootReducer;
