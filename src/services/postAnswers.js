import mainApi from "./apis/mainApi";

export function postAnswers({ surveyId, data }) {
  mainApi.post("/answers", { surveyId, data });
}
