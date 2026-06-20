//hook to get form input value

import { useState } from "react";

const UseCustomFormHook = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const manageValue = (e) => {
    setValue(e.target.value);
  };

  return [value, manageValue];
};

export default UseCustomFormHook;
