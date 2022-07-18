import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { useMicroContext } from "@/core/state";
import { config } from "../../config";

const ContactListItem = React.lazy(() => import(/* webpackChunkName: 'ContactListItem' */ '@/components/contact-list/ContactListItem'))

export default function Table({ list = [] }) {
  const { store } = useMicroContext();

  const handleClick = (id) => () => {
    store.mutate((s) => ({
      ...s,
      [config.feature.name]: { ...s[config.feature.name], selectedId: id }
    }));
    store.emit(`${config.feature.name}.click`, { id });
  };

  return (
    <Box
      sx={{ flexGrow: 1, maxWidth: 752, display: { xs: "block", md: "none" } }}
    >
      <Grid item xs={12} md={6}>
        <List>
          {list
            ?.filter?.((i) => i?.state === "active")
            ?.map((props) => (
              <ContactListItem
                key={props?.id}
                {...props}
                handleClick={handleClick(props?.id)}
              />
            ))}
        </List>
      </Grid>
    </Box>
  );
}



