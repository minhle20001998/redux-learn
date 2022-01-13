import { takeLatest } from "@redux-saga/core/effects";
import { GET_USERS } from "../ducks/user";
import { handleGetUsers } from "./handlers/user";

export function* watcherSaga() {
    yield takeLatest(GET_USERS, handleGetUsers)
}