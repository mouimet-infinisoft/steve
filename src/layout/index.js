import React from 'react'

const Header = React.lazy(() => import(/* webpackChunkName: 'Header' */ 'Header'));
const Content = React.lazy(() => import(/* webpackChunkName: 'Content' */ 'Content'))
const Footer = React.lazy(() => import(/* webpackChunkName: 'Footer' */ 'Footer'))

const Layout = () => {
  return (
    <>
       <Header />

        <Content />

        <Footer />
    </>
  );
};

export default Layout
