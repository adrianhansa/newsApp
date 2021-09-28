export const getNewsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_NEWS_REQUEST":
      return { loading: true };
    case "GET_NEWS_SUCCESS":
      return { loading: false, success: true, news: action.payload };
    case "GET_NEWS_FAIL":
      return { laoding: false, success: false, error: action.payload };
    default:
      return state;
  }
};
