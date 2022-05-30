import styled from "styled-components";

/*
    status 
    1. pending: 아직 질문에 대한 답변을 받지 못한 상태
    2. in-progress: 값을 입력중인 상태
    3. done: 값을 모두 입력한 상태
*/

const Bar = styled.div`
  height: 8px;
  width: 120px;
  border-radius: 16px;
  background-color: ${({ status }) => {
    if (status === "pending") {
      return "#E3E2E7";
    } else if (status === "in-progress") {
      return "#6542F1";
    } else if (status === "done") {
      return "#BAA9FF";
    }
  }};
`;

export default Bar;
