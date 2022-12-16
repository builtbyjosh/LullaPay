import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { userLoginReducer } from './redux/reducers/userReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: combineReducers({
    userLogin: userLoginReducer,
  }),
  initialState,
});

export default store;