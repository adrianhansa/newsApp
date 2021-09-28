import axios from "axios";

export const getNews = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_NEWS_REQUEST" });
    const result = await axios.get("http://mynews.com");
    dispatch({ type: "GET_NEWS_SUCCESS", payload: result.data });
  } catch (error) {
    dispatch({ type: "GET_NEWS_FAIL", payload: error.message });
  }
};
