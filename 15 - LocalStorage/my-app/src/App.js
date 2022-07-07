import "./App.css";
import FishIcon from "./components/FishIcon";
import Tapas from "./components/Tapas";
import { createContext, useReducer, useEffect } from "react";
import { save, retrieve } from "./utils/localStorage";
export const AppState = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "loadTapas":
      return { ...state, tapas: action.payload };
    case "addTapas":
      const tapas = [...state.tapas, action.payload];

      save(tapas);

      return { ...state, tapas };
    case "checkTapas":
      const newTapas = state.tapas.map((tapa, index) => {
        if (action.payload.index !== index) {
          return tapa;
        }
        return { ...tapa, checked: action.payload.checked };
      });
      save(newTapas);

      return { ...state, tapas: newTapas };
    default:
      throw new Error("Unrecognised type");
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, { tapas: [] });

  useEffect(() => {
    const tapas = retrieve();
    if (tapas === null) {
      tapas = { value: "Create some tapas!", checked: true };
    }
    dispatch({
      type: "loadTapas",
      payload: tapas,
    });
  }, []);

  return (
    <div>
      <AppState.Provider value={{ state, dispatch }}>
        <FishIcon />
        <Tapas />
      </AppState.Provider>
    </div>
  );
};

export default App;
