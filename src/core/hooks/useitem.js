/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useMicroContext, useMicroState } from "@/core/state";
import { useCallback } from "react";

/**
 * CRUD Item in list
 * @param id Item id
 * @returns Mutators, item, factory
 */
export const useItem = ({ id, feature }) => {
  const { store } = useMicroContext();
  // const item = useMicroState(selector)
  const item = useMicroState((a) => a?.[feature]?.list?.[id]);

  /**
   * onChange handler
   * @param field Field name
   * @returns Mutation handler
   */
  const onMutation = (field) => (newValue) => {
    mutation(field, newValue);
  };

  /**
   * Field mutation inside item
   * @param field     Field name
   * @param newValue  New value
   */
  const mutation = (field, newValue) => {
    store.mutate((prev) => {
      return {
        ...prev,
        [feature]: {
          ...prev?.[feature],
          list: {
            ...prev?.[feature]?.list,
            [id]: {
              ...prev?.[feature]?.list?.[id],
              [field]: newValue
            }
          }
        }
      };
    });
  };

  /**
   * Remove object from list
   */
  const remove = () => {
    store.mutate((prev) => {
      let copy = Object.assign({}, prev?.[feature]?.list);
      delete copy[id];
      return {
        ...prev,
        [feature]:{
          ...prev?.[feature],
        list: {
          ...copy
        }
      }
      };
    });
  };

  /**
   * List mutators factory
   * @param field Target Array
   * @returns Array field mutators
   */
  const listMutatorsFactory = (field) => {
    const arrayField = item?.[field];

    const add = (newValue) => {
      if (!Array.isArray(arrayField) || !newValue) return;

      mutation(field, [newValue, ...arrayField]);
    };

    const update = (index, newValue) => {
      if (!Array.isArray(arrayField) || !newValue) return;

      mutation(
        field,
        arrayField.map((item, _idx) => (index === _idx ? newValue : item))
      );
    };

    const remove = (index) => {
      if (!Array.isArray(arrayField)) return;

      mutation(
        field,
        arrayField.filter((_, _idx) => index !== _idx)
      );
    };

    return {
      add,
      update,
      remove
    };
  };

  /**
   * Input Field onChange Handler
   * @param field Target field name
   * @returns Field mutator
   */
  const InputMutator = (field) =>
    useCallback((e) => mutation(field, e?.target?.value), [field]);

  return {
    item,
    InputMutator,
    listMutatorsFactory,
    mutation,
    onMutation,
    remove
  };
};
