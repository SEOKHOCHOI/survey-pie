import { useRecoilState } from "recoil";

import answersState from "../stores/answers/atom";

export function useAnswers() {
  return useRecoilState(answersState);
}
