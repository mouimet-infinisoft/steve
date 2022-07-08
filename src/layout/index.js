import { Container, CssBaseline } from "@mui/material";
import React from "react";

const Header = React.lazy(() =>
  import(/* webpackChunkName: 'Header' */ "../components/header")
);
const Content = React.lazy(() =>
  import(/* webpackChunkName: 'Content' */ "../components/main")
);
const Footer = React.lazy(() =>
  import(/* webpackChunkName: 'Footer' */ "../components/footer")
);

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Header />

      <Content />

      <Footer />
    </Container>
  );
};

export default Layout;
