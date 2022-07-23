import { config } from "@/config/index";
import { generateId } from "@/core/helpers";


export const onCreate = (store, post) => () => {
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

  post?.(id);
};
