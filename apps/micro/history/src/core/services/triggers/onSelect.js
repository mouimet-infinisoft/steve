import { config } from "../../../../config";


export const onSelect = ({ store, id }) => () => {
  store.emit(`${config.feature.name}.click`, { id });
  store.mutate((s) => ({
    ...s,
    [config.feature.name]: { ...s[config.feature.name], selectedId: id }
  }));
};
