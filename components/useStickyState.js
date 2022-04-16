import React from "react";
export default function useStickyState(defaultValue, key) {
  React.useEffect(() => {
    const newWindow = window.localStorage;
  });
  const [value, setValue] = React.useState(() => {
    const stickyValue = newWindow.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
