
import { combineReducers, createStore } from 'redux'

import userEventsReducer from './user-events';


// export interface RootState {
//     userEvents: User
// }


const rootReducer = combineReducers({
    userEvents: userEventsReducer
})


export type RootState = ReturnType<typeof rootReducer>;


const store = createStore(rootReducer);

export default store;

