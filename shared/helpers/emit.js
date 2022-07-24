/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export const emit = (event) => () => {
    window.dispatchEvent(event)
  };
  