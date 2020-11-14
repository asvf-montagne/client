function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

const FormHelper = {
  /**
   * react-final-form detect that we can't reset form in submit method and
   * suggest itself to use setTimeout to reset the form after submitting.
   *
   * @param values FormValues
   * @param form FormApi
   */
  reset(values, form) {
    setTimeout(() => {
      Object.keys(values).forEach((key) => {
        form.resetFieldState(key)
      })
      form.reset()
    })
  },

  navigateToNextInput(event, refNext, keycode) {
    if (event.keyCode === keycode) {
      refNext.current.focus()
      event.preventDefault()
    }
  },

  withKeyCode(event, keycode, f) {
    if (event.keyCode === keycode) {
      f()
    }
  },

  async fakeDelay(f, delay = 500) {
    const now = new Date()
    const res = await f()
    console.log(new Date() - now)
    const canReturn = new Date() - now > 1500
    if (!canReturn) await wait(delay)

    return res
  },
}

export default FormHelper
