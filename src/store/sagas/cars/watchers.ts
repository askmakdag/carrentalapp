import {takeLatest} from 'redux-saga/effects';
import {setCarsHandler} from "./workers";
import {setCars} from "../../state/cars";

export function* setCarsWatcher() {
    yield takeLatest(setCars, setCarsHandler);
}
