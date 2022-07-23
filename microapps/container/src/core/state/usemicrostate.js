/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from "react"
import { useMicroContext } from "./context"

/**
 * Get state
 * @param selector Optional Callback to narrow state
 * @returns State
 */
export const useMicroState = (selector) => {
  const { store } = useMicroContext()
  
  return React.useSyncExternalStore(
      store.subscribe,
      React.useCallback(() => selector ? selector(store?.getState?.()) : store?.getState?.(), [selector, store])
    )
}

