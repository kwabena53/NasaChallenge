import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_ERROR = "GET_DATA_ERROR"


const REACT_APP_NASA_API = process.env.REACT_APP_NASA_API
const REACT_APP_NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY



export const getData = () => {
    return async (dispatch) => {
        dispatch({
            type: GET_DATA_REQUEST,
        });
        
        
        try {
            const { data } = await axios.get(
                `${REACT_APP_NASA_API}?api_key=${REACT_APP_NASA_API_KEY}&start_date=2022-01-1&end_date=2022-01-10`,
            );
            dispatch({
                type: GET_DATA_SUCCESS,
                data
            });
        } catch (error) {
            if (!error.response) {
                dispatch({
                    type: GET_DATA_ERROR,
                    error: "Action failed Check your internet and try again"
                });
                
            } else {
                dispatch({
                    type: GET_DATA_ERROR,
                    error: error?.message
                });
            }
        }
    };
}