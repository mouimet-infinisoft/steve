import { config } from "@/config/index";

export const onUnSelect = ({ store }) => () => {
  store.emit(`${config.feature.name}.unselect`);
  store.mutate((s) => ({
    ...s,
    [config.feature.name]: { ...s[config.feature.name], selectedId: "" }
  }));
};
