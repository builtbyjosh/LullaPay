import {
  KID_LIST_REQUEST,
  KID_LIST_SUCCESS,
  KID_LIST_FAIL,
  KID_DETAILS_FAIL,
  KID_DETAILS_REQUEST,
  KID_DETAILS_SUCCESS
} from '../constants/kidConstants';

export const kidListReducer = (state = { kids: [] }, action) => {
  switch (action.type) {
    case KID_LIST_REQUEST:
      return { loading: true, kids: [] };
    case KID_LIST_SUCCESS:
      return { loading: false, kids: action.payload };
    case KID_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const kidDetailsReducer = (state = { kid: {reviews: []} }, action) => {
  switch (action.type) {
    case KID_DETAILS_REQUEST:
      return { loading: true, ...state};
    case KID_DETAILS_SUCCESS:
      return { loading: false, kid: action.payload };
    case KID_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};