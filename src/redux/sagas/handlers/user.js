import { call, put } from "@redux-saga/core/effects";
import { getUsersFromAPI } from '../requests/user'
import { setUsers } from '../../ducks/user'
export function* handleGetUsers(action) {
    try {
        const res = yield call(getUsersFromAPI);
        const { data } = res;
        yield put(setUsers(data))
    } catch (error) {
        console.log(error)
    }
}