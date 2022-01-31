import read from "./reader";
import json from "./parser";

class GameSaving {
  constructor({id, created, userInfo} = items) {
    this.id = id
    this.created = created
    this.userInfo = userInfo
  }
}

export default class GameSavingLoader {
  static load() {
    return (async() => {
      try {
        const data = await read()
        const obj = await json(data)
        return new GameSaving(JSON.parse(obj))
      } catch (e) {
        throw e
      }
    })
  }
}