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
        [id]: { id, telephones: [], state: "active", tags: [""] },
        ...s[config.feature.name].list
      }
    }
  }));
  store.emit(`${config.feature.name}.create.click`, { id });
};
