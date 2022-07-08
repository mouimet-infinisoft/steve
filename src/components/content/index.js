/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from "react";
import { Outlet } from "react-router-dom";

const Content = (props) => {
  return (
    <main>
      <Outlet />
    </main>
  );
};
export default Content;
