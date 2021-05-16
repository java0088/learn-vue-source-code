
// 在dataObj对象中可以通过 a.b.c的方式获取值
export function lookUp(dataObj, keyName) {
  let result = dataObj
  const keys = keyName.split('.')
  if (keyName === '.') return dataObj[keyName]
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (result[key]) {
      result = result[key]
    }
  }
  return result
}
export function renderTemplate(tokens, data) {
  let resultStr = ''
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    const prop = token[1].trim()
    if (token[0] === 'text') {
      resultStr += token[1]
    } else if(token[0] === 'name') {
      resultStr += lookUp(data, prop)
    } else if (token[0] === '#') {
      resultStr += parseArray(token, data)
    }
  }
  return resultStr
}

export function parseArray (token, data) {
  let v = lookUp(data, token[1])
  let resultStr = ''
  for (let i = 0; i < v.length; i++) {
    const item = v[i];
    resultStr += renderTemplate(token[2], {
      ...item,
      '.': item
    })
  }
  return resultStr
}
