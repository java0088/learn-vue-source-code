import Observer from './observer'
export function defindReactive(data, key, val, enumerable = false) {
  if (arguments.length === 2) {
    val = data[key]
  }
  Object.defineProperty(data, key, {
    enumerable,
    get() {
      console.log(`您试图访问${key}属性，值为：${val}`)
      return val
    },
    set(newValue) {
      val = newValue
    }
  })
}

export function observer(value) {
  if (typeof value !== 'object') return
  let ob
  if (value.__ob__ ) {
    ob = value.__ob__
  } else {
    ob = new Observer(value)
  }
  return ob
}

function createArrayMethods() {
  const defaultMethods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
  ]
  const arrayProto = Array.prototype
  const arrayMethods = Object.create(arrayProto)
  defaultMethods.forEach(methodName => {
    const original = arrayMethods[methodName]
    defindReactive(arrayMethods, methodName, function(...args) {
      const result = original.apply(this, args)
      console.log(this, '我的数据被改变了，视图该更新啦')
      return result
    }, false)
  })
  return arrayMethods
}

export const arrayMethods = createArrayMethods()



