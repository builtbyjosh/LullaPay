import {
  KID_LIST_REQUEST,
  KID_LIST_SUCCESS,
  KID_LIST_FAIL,
  KID_DETAILS_FAIL,
  KID_DETAILS_REQUEST,
  KID_DETAILS_SUCCESS
} from '../constants/kidConstants';
import axios from 'axios';

export const listKids = () => async (dispatch) => {
  try {
    dispatch({ type: KID_LIST_REQUEST });

    const { data } = await axios.get('/api/kids');

    dispatch({
      type: KID_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KID_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listKidDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: KID_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/kids/${id}`);

    dispatch({
      type: KID_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: KID_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
