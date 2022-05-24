import { useParams } from "react-router-dom";

export function useStep() {
  const params = useParams();

  return parseInt(params.step);
}
