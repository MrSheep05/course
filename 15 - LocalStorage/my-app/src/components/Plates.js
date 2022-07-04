import CheckListItem from "./CheckListItem";
import { AppState } from "../App";
import { useContext } from "react";

const Plates = () => {
  const { state, dispatch } = useContext(AppState);
  const { tapas = [] } = state;


  const onClick = (event, index, tapa) => {
    dispatch({
      type: "checkTapas",
      payload: {
        checked: !tapa.checked,
        index,
      },
    });
  };
  const renderTapas = () => {
    return tapas.map((tapa, index) => (
      <CheckListItem
        text={tapa.value}
        id={`checklistitem-${index}`}
        key={`checklistitem-${index}`}
        checked={tapa.checked}
        onClick={(event) => onClick(event, index, tapa)}
      />
    ));
  };

  return <ul class="plates">{renderTapas()}</ul>;
};

export default Plates;
