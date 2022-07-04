import Input from "./Input";
import { useState, useContext } from "react";
import { AppState } from "../App";

const Form = () => {
  const { dispatch } = useContext(AppState);
  const [value, setValue] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const clearInput = () => {
    setValue("");
  };

  const onClick = (event) => {
    event.preventDefault();
    dispatch({ type: "addTapas", payload: { value, checked: false } });
    clearInput();
  };

  return (
    <form class="add-items">
      <Input
        placeholder="Item Name"
        required={true}
        onChange={onChange}
        value={value}
      />
      <button onClick={onClick}>+ Add Item</button>
    </form>
  );
};
export default Form;
