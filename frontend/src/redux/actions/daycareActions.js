import {
  DAYCARE_LIST_REQUEST,
  DAYCARE_LIST_SUCCESS,
  DAYCARE_LIST_FAIL,
  DAYCARE_DETAILS_FAIL,
  DAYCARE_DETAILS_REQUEST,
  DAYCARE_DETAILS_SUCCESS
} from '../constants/daycareConstants';
import axios from 'axios';

export const listDaycares = () => async (dispatch) => {
  try {
    dispatch({ type: DAYCARE_LIST_REQUEST });

    const { data } = await axios.get('/api/daycares');

    dispatch({
      type: DAYCARE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DAYCARE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDaycareDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DAYCARE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/daycares/${id}`);

    dispatch({
      type: DAYCARE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DAYCARE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
