import { config } from "../config";
import { generateId } from "@/helpers";
import { useNavigate } from "react-router-dom";
import React from "react";

export const useOnCreate = (store) => {
  const navigate = useNavigate();

  const onCreate = () => {
    const id = generateId(Math.random().toString());
    store.mutate((s) => ({
      ...s,
      [config.feature.name]: {
        ...s[config.feature.name],
        selectedId: id,
        list: {
          [id]: {
            id,
            telephones: [],
            state: "active",
            tags: [""],
            __extra__: [],
            __meta__: {},
            __relations__: []
          },
          ...s[config.feature.name].list
        }
      }
    }));
    store.emit(`${config.feature.name}.create.click`, { id });
    navigate(`/${config.feature.name}/${id}`);
  };
  return {
    onCreate
  };
};
