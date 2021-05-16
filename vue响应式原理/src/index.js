import { observer } from './utils'

const obj = {
  name: '小黄',
  age: 12,
  other: {
    name: '123',
    cc: 'cc'
  }
}

const arr = ['123',1]
const res = observer(arr)
arr.push('啦啦啦啦')
console.log(res);
console.log(arr)

// observer(obj)
// console.log(obj);