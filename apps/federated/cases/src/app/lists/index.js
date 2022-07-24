import NoResult from "@/components/no-result";
import { usePagination, useSubscribe } from "@/core/hooks";
import React from "react";
import { config } from "@/config";
import Table from "./table";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

const Lists = (props) => {
  const { pageDataList = [], AppPagination } = usePagination({
    feature: config.feature.name,
    itemPerPage: 8
  });

  const [term, setTerm] = React.useState();
  const loc = useLocation();

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

  console.log(`CASE loc `, loc);

  return (
    <Box>
      {term && list?.length <= 0 && <NoResult />}
      <Table {...props} list={list} />
      {/* <Cards {...props} list={list} /> */}
      <AppPagination />
    </Box>
  );
};

export default Lists;
