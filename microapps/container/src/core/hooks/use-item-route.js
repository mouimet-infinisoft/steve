/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useLocation, matchPath } from "react-router-dom";
import { useItem } from "./useitem";

/**
 * CRUD Item in list
 * @param id Item id
 * @returns Mutators, item, factory
 */
export const useItemRoute = (feature) => {
  const pathname = useLocation()?.pathname;
  const query = matchPath(`${feature}/:id/*`, pathname);
  const item = useItem({ id: query?.params?.id, feature });

  return { ...item };
};
