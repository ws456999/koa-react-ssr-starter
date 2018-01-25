import { types } from 'mobx-state-tree'

const Test = types
  .model({
    number: types.number
  })
  .actions(self => ({
    add(i) {
      self.number += i
    }
  }))

export default Test
