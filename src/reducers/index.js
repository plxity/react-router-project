import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostData from './reducerpost';
const rootReducer = combineReducers({
posts :PostData,
form: formReducer
});

export default rootReducer;
