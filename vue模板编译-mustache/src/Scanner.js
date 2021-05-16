export default class Scanner {
  constructor(templateStr) {
    this.pos = 0
    this.tail = templateStr
    this.templateStr = templateStr
  }
  // 走过指定的位置
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  // 让指针去扫描
  scanUtil(stopTag) {
    const pos_backup = this.pos
    while(this.tail.indexOf(stopTag) !== 0 && this.eos()) {
      this.pos++
      this.tail = this.templateStr.substring(this.pos)
    }

    return this.templateStr.substring(pos_backup, this.pos)
  }

  eos() {
    return this.pos <= this.templateStr.length
  }
}