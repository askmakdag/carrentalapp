import {all, call, spawn} from 'redux-saga/effects';
import {setCarsWatcher} from "./cars/watchers";

export function* rootSaga() {
    const carSagas = [setCarsWatcher];

    yield all(
        [...carSagas].map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {}
                }
            }),
        ),
    );
}
