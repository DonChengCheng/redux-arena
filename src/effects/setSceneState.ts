import { put, call, CallEffect } from "redux-saga/effects";
import getArenaReducerDictEntry from "./getArenaReducerDictEntry";
import { actionTypes } from "../core/actionTypes";

function* _setSceneState(state: any, key: string) {
  let entry = yield getArenaReducerDictEntry(key);
  yield put({
    type: actionTypes.ARENA_SCENE_SET_STATE,
    _sceneReducerKey: entry.reducerKey,
    state
  });
}

export default function setSceneState(state: any, key: string = "_arenaScene") {
  return call(_setSceneState, state, key);
}