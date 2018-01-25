import TestStore from './models/index'
import { getSnapshot, destroy } from 'mobx-state-tree'
import { connectReduxDevtools } from 'mst-middlewares'
import { onSnapshot } from 'mobx-state-tree'

const localStorageKey = 'mst-todomvc-example'

const initialState = {number: 100}
let store = TestStore.create(initialState)
let snapshotListener

function createTodoStore(snapshot) {
  // clean up snapshot listener
  if (snapshotListener) snapshotListener()
  // kill old store to prevent accidental use and run clean up hooks
  if (store) destroy(store)

  // create new one
  store = TestStore.create(snapshot)

  // connect devtools
  connectReduxDevtools(require('remotedev'), store)
  // connect local storage
  snapshotListener = onSnapshot(store, snapshot =>
    localStorage.setItem(localStorageKey, JSON.stringify(snapshot))
  )

  return store
}

export default createTodoStore(initialState)
