import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// reducer import
import authReducer from './authRecucer';

// -----------------------|| COMBINE REDUCER ||-----------------------
const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

//   const authPersistConfig = {
//     key: 'auth',
//     storage: storage,
//     blacklist: ['somethingTemporary']
//   }
const rootReducer = combineReducers({
  auth: authReducer
});

export default persistReducer(rootPersistConfig, rootReducer);