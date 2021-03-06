import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE,
  } from "../constants/orderConstants";
import axios from 'axios'

  export const createOrder = (order) => async (dispatch, getState) => {
    try {
  
  
      dispatch({
        type: ORDER_CREATE_REQUEST,
      });
  
      const { userLogin: { userInfo } } = getState();  

      const config = {
        header: {
          'Content-Type': 'application/json',
           Authorization: `Bearer ${userInfo.token}`,
        },
      }
              
      //  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  
      const { data } = await axios.post(`/api/orders`, order, config);
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      });
      
    } catch (error) {
      dispatch({
        type: ORDER_CREATE_FAILURE,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
  