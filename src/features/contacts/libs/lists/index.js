import NoResult from "@/components/no-result";
import { usePagination, useSubscribe } from "@/core/hooks";
import React from "react";
import {config} from '../../config'
const { default: Cards } = require("./card");
const { default: List } = require("./list");


const Lists = (props) => {
  const { AppPagination, pageDataList = [] } = usePagination({
    feature: config.feature.name,
    itemPerPage: 8
  });

  const [term, setTerm] = React.useState();

  useSubscribe({
    event: `${config.feature.name}.search`,
    handler: (e, s, p) => {
      setTerm(p?.term);
    }
  });

  const list = React.useMemo(
    () =>
      pageDataList.filter((i) =>
        term
          ? JSON.stringify(i)
              .toLocaleLowerCase()
              .includes(term.toLocaleLowerCase())
          : i
      ),
    [pageDataList, term]
  );

  return (
    <>
      {term && list?.length <= 0 && <NoResult />}
      <List {...props} list={list} />
      <Cards {...props} list={list} />
      <AppPagination />
    </>
  );
};

export default Lists;
