import Scanner from './Scanner'
import nestTokens from './nestTokens'
export default function parseTemplateToTokents (templateStr) {
  const scanner = new Scanner(templateStr)
  let word = ''
  let name = ''
  let tokens = []
  while(scanner.eos()) {
    // text文字
    word = scanner.scanUtil('{{')
    if (word) tokens.push(['text', word])
    scanner.scan('{{')
    // 变量文字
    name = scanner.scanUtil('}}')
    if (name) {
      name = name.trim()
      if (name[0] === '#') {
        tokens.push(['#', name.substring(1)])
      } else if (name[0] === '/') {
        tokens.push(['/', name.substring(1)])
      } else {
        tokens.push(['name', name])
      }
    }
    scanner.scan('}}')
  }

  return nestTokens(tokens)
}