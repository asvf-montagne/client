const FormUtil = {
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
        form.resetFieldState(key);
      });
      form.reset();
    });
  },

  navigateToNextInput(event, refNext, keycode) {
    if (event.keyCode === keycode) {
      refNext.current.focus();
      event.preventDefault();
    }
  },
};

export { FormUtil };
