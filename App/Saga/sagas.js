import {
  put,
  call,
  takeLatest,
} from "redux-saga/effects";
import API_CONST from "../Constants/APIConstants";
import ACTION_TYPES from "../Action/ActionsType";
// import RNFetchBlob from "react-native-fetch-blob";

//Call for fetching data from api
const _apiCall = (url, data) => {
  return fetch(url, data)
    .then(res => {
      return { res: res, res_json: res.json() };
    })
    .catch(e => {
      throw e;
    });
};

//Call for fetching blob data from api
// const _blobApiCall = (baseUrl, tokenId) => {
//   // send http request in a new thread (using native code)
//   return (
//     RNFetchBlob.fetch("GET", baseUrl, {
//       tokenId: tokenId
//       // more headers  ..
//     })
//       // when response status code is 200
//       .then(res => {
//         return res.base64();
//       })
//       // Status code is not 200
//       .catch((errorMessage, statusCode) => {
//         console.log("errorMessage", errorMessage);
//         // error handling
//         return errorMessage;
//       })
//   );
// };

//get response json
const _extJSON = p => {
  return p.then(res => res);
};

//getMovieList
function* getMovieList(action) {
  let { url, method } = action.data;

  try {
    let response = yield call(_apiCall, url, {
      method,
    });

    let responseJSON = yield call(_extJSON, response.res_json);
    let responseData = {
      data: responseJSON,
      headerResponse: response.res
    };

    yield put({
      type: ACTION_TYPES.GET_MOVIE_LIST,
      payload: responseData
    });
  } catch (e) {
    console.log("Error: " + e);
    let responseData = {
      isError: true,
      data: "" + e
    };
    yield put({
      type: ACTION_TYPES.GET_MOVIE_LIST,
      payload: responseData
    });
  }
}

function* rootSaga() {
  yield takeLatest(API_CONST.N_GET_MOVIE_LIST, getMovieList);
}

export default rootSaga;
