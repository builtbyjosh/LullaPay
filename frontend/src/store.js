import { combineReducers, configureStore} from '@reduxjs/toolkit';
import { userLoginReducer, userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userDeleteReducer, userListReducer, userUpdateReducer } from './redux/reducers/userReducer';

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const store = configureStore({
  reducer: combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    
  }),
  preloadedState: initialState,
});

export default store;