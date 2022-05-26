import { useParams } from "react-router-dom";

export function useSurveyId() {
  const params = useParams();

  return parseInt(params.surveyId);
}
