import { defindReactive, observer, arrayMethods } from './utils'
const hasProto = '__proto__' in {}
export default class Observer {
  constructor(value) {
    defindReactive(value, '__ob__', this)
    // 如果是数组
    if (Array.isArray(value)) {
      this.observeArray(value)
    } else {
      // 如果是对象
      this.walk(value)
    }
  }

  walk(value) {
    if (typeof value !== 'object') return
    for(let key in value) {
      if (typeof value[key] === 'object') {
        observer(value[key])
      } else {
        defindReactive(value, key)
      }
    }
  }
  observeArray (value) {
      if (hasProto) {
        this.protoAugment(value, arrayMethods)
      } else {
        this.copyAugment(value, arrayMethods)
      }
  }

  protoAugment (target, src) {
    target.__proto__ = src
  }
  // 复制
  copyAugment (target, src, keys) {
    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]
      defindReactive(target, key, src[key])
    }
  }
}