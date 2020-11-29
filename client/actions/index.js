import {
    FETCH_LIST_FAILURE,
    FETCH_LIST_PENDING,
    FETCH_LIST_SUCCESS
} from "../constants/ActionTypes";

const fetchList = (params = {}) => async (dispatch, getState, { api }) => {
    try {
        dispatch({ type: FETCH_LIST_PENDING });
        const res = await api.get("/launches?limit=100&amp;launch_success=true&amp;lan", {
            params: {
                limit: 100,
                launch_success: true,
                land_success: true,
                ...params
            }
        });
        setTimeout(() => {}, 1000);
        dispatch({
            type: FETCH_LIST_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        console.log(err);
        dispatch({
            type: FETCH_LIST_FAILURE
        });
    }
};

export default fetchList;
