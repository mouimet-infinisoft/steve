import { config } from "../config";
import { generateId } from "@/helpers";

export const onCreate = (store) => () => {
  const id = generateId();
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
};

export const onSelect =
  ({ store, id }) =>
  () => {
    store.emit(`${config.feature.name}.click`, { id });
    store.mutate((s) => ({
      ...s,
      [config.feature.name]: { ...s[config.feature.name], selectedId: id }
    }));
  };

export const onSearch = ({ value, store }) =>  
  store.emit(`${config.feature.name}.search`, {
    term: value
  });
