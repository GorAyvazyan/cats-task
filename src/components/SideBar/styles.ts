import styled from "styled-components";

export const StyledSideBar = styled.div`
  margin: 16px 8px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button`
  border-radius: 4px;
  background: lightblue;
  border: none;
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  cursor: pointer;
  &:hover {
    background: white;
  }
`;

export const StyledSideBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #f1f1f1;
  min-width: 250px;
  max-width: 250px;
  height: 100%;
`;
