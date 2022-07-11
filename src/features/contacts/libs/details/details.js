import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { useSubscribe } from "@/core/hooks";
import { useMicroState } from "@/core/state";
import DetailsCard from "./card";

export default function ContactDetails() {
  const anchor = "right";

  const [visible, setVisible] = React.useState();
  const selectedId = useMicroState((s) => s.contacts.selectedId);
  const contact = useMicroState((s) => s.contacts.list[selectedId]);
// remove below if memo not required anymopre
  // const { name, email, avatar, address, telephones } = React.useMemo(
  //   () => contact ?? {},
  //   [contact]
  // );

  useSubscribe({
    event: "contact.click",
    handler: () => {
      React.startTransition(() => {
        setVisible(true);
      });
    }
  });

  return (
    <Drawer
      anchor={anchor}
      open={visible}
      onClose={() => setVisible(false)}
      sx={{
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.8)"
        }
      }}
      PaperProps={{
        style: {
          backgroundImage: "none",
          backgroundColor: "transparent",
          display: "flex",
          justifyContent: "center"
        }
      }}
    >
      <DetailsCard {...contact} />
    </Drawer>
  );
}
