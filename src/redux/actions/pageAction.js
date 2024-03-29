import axios from "axios";

export const TYPES = {
  LIST_PAGE_REQUEST_SEND: "LIST_PAGE_REQUEST_SEND",
  LIST_PAGE_REQUEST_ERROR: "LIST_PAGE_REQUEST_ERROR",
  LIST_PAGE_REQUEST_SUCCESS: "LIST_PAGE_REQUEST_SUCCESS",

  CREATE_PAGE_REQUEST: "CREATE_PAGE_REQUEST",
  CREATE_PAGE_ERROR: "CREATE_PAGE_ERROR",
  CREATE_PAGE_SUCCESS: "CREATE_PAGE_SUCCESS",

  DELETE_PAGE_REQUEST: "DELETE_PAGE_REQUEST",
  DELETE_PAGE_ERROR: "DELETE_PAGE_ERROR",
  DELETE_PAGE_SUCCESS: "DELETE_PAGE_SUCCESS",
};

export const pageLoad = (user) => async (dispatch) => {
  dispatch({ type: TYPES.LIST_PAGE_REQUEST_SEND });
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}pages/`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_SUCCESS, data: response.data });
  } catch (error) {
    dispatch({ type: TYPES.LIST_PAGE_REQUEST_ERROR, error: error });
  }
};

export const createPage = (name, user) => async (dispatch) => {

  dispatch({ type: TYPES.CREATE_PAGE_REQUEST });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}pages/`,
      { name },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    console.log("hi")
    dispatch({ type: TYPES.CREATE_PAGE_SUCCESS, data: response.data });
  } catch (error) {
    dispatch({ type: TYPES.CREATE_PAGE_ERROR, data: error });
  }
};

export const deletePage = (pageId, user) => async (dispatch) => {
  
  dispatch({ type: TYPES.DELETE_PAGE_REQUEST });
  try {
    await axios.delete(`${process.env.REACT_APP_BASE_URL}pages/${pageId}`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    dispatch({ type: TYPES.DELETE_PAGE_SUCCESS, pageId });
  } catch (error) {
    dispatch({ type: TYPES.DELETE_PAGE_ERROR, error });
  }
};
