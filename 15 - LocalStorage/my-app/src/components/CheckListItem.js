import Input from "./Input";

const CheckListItem = ({ text, id, onClick, checked = false }) => {
  return (
    <li onClick={onClick}>
      <Input type="checkbox" id={id} checked={checked}></Input>
      <label htmlFor={id}>{text}</label>
    </li>
  );
};
export default CheckListItem;
