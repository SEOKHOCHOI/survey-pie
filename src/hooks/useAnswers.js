import { useRecoilValue } from "recoil";

import answersState from "../stores/answers/atom";

export function useAnswers() {
  return useRecoilValue(answersState);
}
