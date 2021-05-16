import { renderTemplate } from './renderTemplate'

import parseTemplateToTokents from './parseTemplateToTokents'
window.SSG_TemlateEngine = {
  render(templateStr, data) {
    const tokens = parseTemplateToTokents(templateStr)
    const resultStr = renderTemplate(tokens, data)
    return resultStr
  }
}
