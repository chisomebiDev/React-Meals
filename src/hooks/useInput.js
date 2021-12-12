import { useState } from "react";

function useInput(validateValue) {
  const [value, setValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid = validateValue(value);
  const hasError = !valueIsValid && valueIsTouched;

  function valueChangeHandler(e) {
    setValue(e.target.value);
    setValueIsTouched(true);
  }

  function valueBlurHandler() {
    setValueIsTouched(true);
  }

  function onSubmit() {
    if (hasError) return;
    setValueIsTouched(false);

    setValue("");
    setValueIsTouched(false);
  }

  return {
    value,
    valueIsValid,
    valueIsTouched,
    hasError,
    changeHandler: valueChangeHandler,
    blurHandler: valueBlurHandler,
    onSubmit,
  };
}

export default useInput;
