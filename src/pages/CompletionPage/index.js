import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import congrats from "../../assets/congrats.png";
import reload from "../../assets/reload.png";
import Button from "../../components/Button";
import { useSurveyId } from "../../hooks/useSurveyId";

const CompletionPage = () => {
  const surveyId = useSurveyId();
  const navigate = useNavigate();

  return (
    <CompletionPageWrapper>
      <img src={congrats} alt="congrats" width="100" />
      <Midtext>설문을 완료했습니다.</Midtext>
      <ReloadButton
        type="TERTIARY"
        onClick={() => {
          navigate(`/survey/${surveyId}/0`);
        }}
      >
        <img src={reload} alt="reload" width="24" height="24" />
        새로운 응답 제출하기
      </ReloadButton>
    </CompletionPageWrapper>
  );
};

const CompletionPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
const Midtext = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 56px;
`;
const ReloadButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
`;

export default CompletionPage;
