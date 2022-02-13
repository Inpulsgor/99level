import { FC, ReactNode } from "react";
import { Container } from "@mui/material";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => {
  return (
    <Container maxWidth="xl" sx={{ height: "100%"}}>
      {children}
    </Container>
  );
};

export default PageWrapper;
