export default function nestTokens (tokens) {
  let result = []
  let sections = []
  let collector = result
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]

    switch(token[0]) {
      case '#':
        collector.push(token)
        sections.push(token)
        collector = token[2] = []
        break
      case '/':
        sections.pop()
        collector = sections.length > 0 ? sections[sections.length - 1][2] : result
        break
      default:
        collector.push(token)
    }
  }

  return  result
}
