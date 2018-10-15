import axios from "axios";

import { RECEIVE_PRODUCTS } from "./types";

export const getAllProducts = () => async dispatch => {    
    const res = await axios.get("/api/products");

    console.log(res);
    dispatch({ type: RECEIVE_PRODUCTS, payload: res.data });
};