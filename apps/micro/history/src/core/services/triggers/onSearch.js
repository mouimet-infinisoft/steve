import { config } from "@/config/index";


export const onSearch = ({ value, store }) => store.emit(`${config.feature.name}.search`, {
  term: value
});
