/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import {useMicroState } from "@/core/state";

/**
 * CRUD Item in list
 * @param id Item id
 * @returns Mutators, item, factory
 */
export const useSelectedItem = ({ feature }) => {
  const item = useMicroState((a) => a?.[feature]?.list?.[a?.[feature]?.selectedId]);

  return {item}
};
