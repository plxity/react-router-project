import _ from 'lodash';
import {FETCH_DATA} from '../actions/index';
import {FETCH_ID} from '../actions/index';
export default function (state={},action){
    switch(action.type){
        case FETCH_ID:
        
            return{...state,[action.payload.data.id] :action.payload.data };

        case FETCH_DATA:
           return _.mapKeys(action.payload.data, 'id');
        default:
        return state;
    }
}