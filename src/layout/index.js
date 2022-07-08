import React from "react";

const Header = React.lazy(() =>
  import(/* webpackChunkName: 'Header' */ "../components/header")
);
const Content = React.lazy(() =>
  import(/* webpackChunkName: 'Content' */ "../components/content")
);
const Footer = React.lazy(() =>
  import(/* webpackChunkName: 'Footer' */ "../components/footer")
);

const Layout = () => {
  return (
    <>
      <Header />

      <Content />

      <Footer />
    </>
  );
};

export default Layout;
