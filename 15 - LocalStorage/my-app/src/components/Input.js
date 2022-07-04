const Input = ({
  type = "text",
  placeholder,
  required = false,
  value,
  checked,
  onChange = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      required={required}
      value={value}
      onChange={onChange}
      checked={checked}
    ></input>
  );
};

export default Input;
