import { config } from "../../../../config";


export const onSearch = ({ value, store }) => store.emit(`${config.feature.name}.search`, {
  term: value
});
