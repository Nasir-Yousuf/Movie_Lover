import { useState, useEffect } from "react";

export function useLocalStorageState(intialState, key) {
  const [value, setValue] = useState(function () {
    const stroedValue = localStorage.getItem("key");
    return stroedValue ? JSON.parse(stroedValue) : intialState;
  });

  useEffect(
    function () {
      localStorage.setItem("key", JSON.stringify(value));
    },
    [value, key],
  );

  return [value, setValue];
}
