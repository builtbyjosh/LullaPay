import {
  DAYCARE_LIST_REQUEST,
  DAYCARE_LIST_SUCCESS,
  DAYCARE_LIST_FAIL,
  DAYCARE_DETAILS_FAIL,
  DAYCARE_DETAILS_REQUEST,
  DAYCARE_DETAILS_SUCCESS
} from '../constants/daycareConstants';

export const daycareListReducer = (state = { daycares: [] }, action) => {
  switch (action.type) {
    case DAYCARE_LIST_REQUEST:
      return { loading: true, daycares: [] };
    case DAYCARE_LIST_SUCCESS:
      return { loading: false, daycares: action.payload };
    case DAYCARE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const daycareDetailsReducer = (state = { daycare: {reviews: []} }, action) => {
  switch (action.type) {
    case DAYCARE_DETAILS_REQUEST:
      return { loading: true, ...state};
    case DAYCARE_DETAILS_SUCCESS:
      return { loading: false, daycare: action.payload };
    case DAYCARE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};