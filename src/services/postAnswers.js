import mainApi from "./apis/mainApi";

export function postAnswers({ surveyId, data }) {
  return mainApi.post("/answers", { surveyId, data });
}
