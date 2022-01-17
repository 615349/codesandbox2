import { useState } from "react";

const useBoolean = (defaultValue?: boolean) => {
  const [value, setValue] = useState<boolean>(!!defaultValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue((v) => !v);

  return { value, setTrue, setFalse, toggle };
};

export default useBoolean;

