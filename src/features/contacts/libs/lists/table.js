import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import { useMicroContext } from "@/core/state";
import { onSelect } from "../../services";

const ContactListItem = React.lazy(() =>
  import(
    /* webpackChunkName: 'ContactListItem' */ "@/components/contact-list/ContactListItem"
  )
);

export default function Table({ list = [] }) {
  const { store } = useMicroContext();

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
                handleClick={onSelect({ store, id: props?.id })}
              />
            ))}
        </List>
      </Grid>
    </Box>
  );
}
