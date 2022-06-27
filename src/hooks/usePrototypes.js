import AppStateContext from "../contexts/appStateContext";
import { useContext } from "react";

export default function usePrototypes() {
  const { prototypes } = useContext(AppStateContext);

  return prototypes;
}
