import { all, fork } from "redux-saga/effects";
import watcherSaga from "../containers/Test/sagas";

export default function* rootSaga() {
  yield all([fork(watcherSaga)]);
}
