const params = {
  delay: 100,
  jitter: 25
}

const { floor: f, random: r } = Math

const randInRange = (min, max) => f(r() * (max - min + 1)) + min

const getElement = (elm) => {

  if (elm) {

    if (elm instanceof HTMLElement) {
      return elm
    }

    return document.querySelector(elm)
  }

  return false
}

export default class {

  constructor (target, options) {

    this.settings = Object.assign({}, params, options)
    this.isIdle = true
    this.buffer = []
    this.output = ''
    this.target = target
  }

  set target (elm) {

    if (this.isIdle) {
      this.settings.target = getElement(elm)
    }
  }

  get delay () {
    return this.settings.delay
  }

  set delay (time) {

    const delay = parseFloat(time)

    if (delay && delay === delay) {
      this.settings.delay = delay
    }
  }

  get jitter () {
    return this.settings.jitter
  }

  set jitter (time) {

    const jitter = parseFloat(time)

    if (jitter && jitter === jitter) {
      this.settings.jitter = jitter
    }
  }

  typeChar () {

    const { delay, jitter } = this.settings
    const time = randInRange(delay - jitter, delay + jitter)

    setTimeout(() => {

      this.output += this.buffer.shift()

      if (this.target) {
        this.settings.target.innerText = this.output
      }

      if (this.buffer.length) {
        this.typeChar()
      } else {
        this.isIdle = true
      }
    }, time)
  }

  write (text) {

    if (text && this.isIdle) {

      const input = text.trim()

      this.isIdle = false
      this.buffer = input.split('')
      this.output = ''

      if (this.target) {
        this.settings.target.innerText = this.output
      }

      if (this.buffer.length) {
        this.typeChar()
      } else {
        this.isIdle = true
      }
    }
  }

  writeTo (target, text) {

    if (this.isIdle) {
      this.setTarget(target)
      this.write(text)
    }
  }

  clear () {

    this.output = ''

    if (this.target) {
      this.settings.target.innerText = this.output
    }
  }
}
