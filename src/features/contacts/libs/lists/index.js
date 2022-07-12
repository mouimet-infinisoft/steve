import NoResult from "@/components/no-result";
import { usePagination, useSubscribe } from "@/core/hooks";
import React from "react";
const { default: ContactCards } = require("./card");
const { default: ContactList } = require("./list");

const Contacts = (props) => {
  const { AppPagination, pageDataList = [] } = usePagination({
    feature: "contacts",
    itemPerPage: 8
  });

  const [term, setTerm] = React.useState();

  useSubscribe({
    event: "contacts.search",
    handler: (e, s, p) => {
      setTerm(p?.term);
    }
  });

  const list = React.useMemo(
    () =>
      pageDataList.filter((i) =>
        term ? JSON.stringify(i).toLocaleLowerCase().includes(term.toLocaleLowerCase()) : i
      ),
    [pageDataList, term]
  );

  return (
    <>
    {term && list?.length <=0 && <NoResult />}
      <ContactList {...props} list={list} />
      <ContactCards {...props} list={list} />
      <AppPagination />
    </>
  );
};

export default Contacts;
