import React, { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //
    setValue(e.target.value);
  };

  const onClear = () => {
    //
    setValue("");
  };

  const onError = () => {
    //
    setIsError(!isError);
  };

  return { value, isError, onChange, onClear, onError };
};

export { useInput };
