import { usePagination } from "@/core/hooks";
import React from "react";
const { default: ContactCards } = require("./card");
const { default: ContactList } = require("./list");

const Contacts = (props) => {
  const { AppPagination, pageDataList = [] } = usePagination({
    feature: "contacts",
    itemPerPage: 8
  });

  return (
    <>
      <ContactList {...props} list={pageDataList} />
      <ContactCards {...props} list={pageDataList} />
      <AppPagination />
    </>
  );
};

export default Contacts;
