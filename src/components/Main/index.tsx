import * as React from "react";
import { ThemeOptions } from "@mui/material";
import { styled } from "@mui/material/styles";

const MainTag = styled("main")(
  ({ theme }) => `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`
);

const MainContainer = styled("div")(
  ({ theme }) => `
  width: 100%;  
  max-width: 1200px;
  height: 48px;
  align-self:flex-start
  `
);

type MainProps = {
  children: React.ReactNode;
};
const Main = ({ children }: MainProps) => {
  return (
    <MainTag>
      <MainContainer>{children}</MainContainer>
    </MainTag>
  );
};

export default Main;
