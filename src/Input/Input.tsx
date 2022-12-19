import { SecondButton } from "../Button";
import { useInput } from "./hooks";

export default function Input() {
  const { value, isError, onChange, onClear, onError } = useInput();

  return (
    <>
      <SecondButton size="large" text="clear" />
      <input type="textarea" onChange={onChange} value={value} />
    </>
  );
}
