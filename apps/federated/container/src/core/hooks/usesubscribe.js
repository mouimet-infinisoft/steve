import { useMicroContext } from "@/core/state";
import { useEffect } from "react";

/**
 * Short Hook Helper to Subscribe on specific event
 * @param {*} event 
 * @param {*} handler 
 */
export const useSubscribe = ({event, handler}) => {
  const { store } = useMicroContext();
  useEffect(() => store.subscribe(handler, { filter: new RegExp(event) }), [event, handler, store]);
};
