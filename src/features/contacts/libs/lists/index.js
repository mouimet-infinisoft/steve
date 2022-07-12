import { usePagination } from "@/core/hooks";
import React from "react";
const { default: ContactCards } = require("./card");
const { default: ContactList } = require("./list");

const Contacts = (props) => {
  // const [page, setPage] = React.useState(1);

  // const handleChange = (e, newPage) => {
  //   startTransition(() => {
  //     setPage(newPage);
  //   });
  // };

  const { AppPagination, pageDataList=[] } = usePagination({
    feature: "contacts",
    itemPerPage: 2
  });

  return (
    <>
      <ContactList {...props} list={pageDataList} />
      <ContactCards {...props} list={pageDataList} />

      <AppPagination />
      {/* <Pagination count={10} page={page} onChange={handleChange} variant="outlined" color="primary"/> */}
    </>
  );
};

export default Contacts;
