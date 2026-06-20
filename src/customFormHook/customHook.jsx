//hook to get form input value

import { useState } from "react";

const customHook = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const manageValue = (e) => {
    setValue(e.target.value);
  };

  return [value, manageValue];
};

export default customHook;
