import { Pagination } from "@mui/material";
import React, { startTransition } from "react";
import { useMicroState } from "@/core/state";


export const usePagination = ({ feature, itemPerPage }) => {
  const list = useMicroState((a) => a?.[feature]?.list);
  const [page, setPage] = React.useState(1);

  const pageCount = React.useMemo(
    () => Math.max(1, Math.ceil((Object.keys(list)?.length ?? 1) / itemPerPage)),
    [itemPerPage, list]
  );
  const pageDataStartIndex = React.useMemo(
    () => (page - 1) * itemPerPage,
    [itemPerPage, page]
  );
  const pageDataEndIndex = React.useMemo(
    () => pageDataStartIndex + itemPerPage,
    [itemPerPage, pageDataStartIndex]
  );

  const pageDataList = React.useMemo(
    () => Object.values(list)?.slice?.(pageDataStartIndex, pageDataEndIndex),
    [list, pageDataEndIndex, pageDataStartIndex]
  );

  const handleChange = (e, newPage) => {
    startTransition(() => {
      setPage(newPage);
    });
  };

  const pageDataMap = React.useMemo(
    () =>
    Object.keys(list)?.slice?.(pageDataStartIndex, pageDataEndIndex)?.reduce(
        (acc, key) => ({ ...acc, [key]: list[key] }),
        {}
      ),
    [list, pageDataEndIndex, pageDataStartIndex]
  );

  const AppPagination = () => (
    pageCount > 1 && <Pagination
      sx={{ display: "block", width: "100%" }}
      count={pageCount}
      page={page}
      onChange={handleChange}
      variant="outlined"
      color="primary"
    />
  );

  return {
    page,
    AppPagination,
    pageDataList,
    pageDataMap
  };
};
