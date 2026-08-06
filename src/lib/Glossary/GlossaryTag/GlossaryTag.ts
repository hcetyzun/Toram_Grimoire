class GlossaryTag {
  name: string
  rows: GlossaryTagRow[]

  constructor(name: string) {
    this.name = name
    this.rows = []
  }

  appendRow(type: string, value: string): GlossaryTagRow {
    const frame = new GlossaryTagRow(type, value)
    this.rows.push(frame)
    return frame
  }
}

class GlossaryTagRow {
  type: string
  value: string[]

  constructor(type: string, value: string) {
    this.type = type
    this.value = [value]
  }

  appendValue(value: string): void {
    if (value) {
      this.value.push(value)
    }
  }
}

export { GlossaryTag, GlossaryTagRow }
