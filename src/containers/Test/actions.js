// action types
export const actionTypes = {
  API_CALL_REQUEST: "API_CALL_REQUEST",
  API_CALL_SUCCESS: "API_CALL_SUCCESS",
  API_CALL_FAIL: "API_CALL_FAIL"
};

export const actionCreators = {
  fetchDogStart: () => ({ type: actionTypes.API_CALL_REQUEST }),
  fetchDogSuccess: dog => ({ type: actionTypes.API_CALL_SUCCESS, dog }),
  fetchDogFail: error => ({ type: actionTypes.API_CALL_FAIL, error })
};
