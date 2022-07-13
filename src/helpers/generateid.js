/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export const generateId = (salt) => {
    return String(new Date().getTime().toFixed(0) + salt).replace('.','');
  };
  