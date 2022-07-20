import * as React from "react";
import { useMicroContext, useMicroState } from "@/core/state";
import { config } from "../../config";
import { onSelect } from "../../services";
import { Link } from "react-router-dom";
import { useItemRoute } from "@/core/hooks/use-item-route";

const ContactCard = React.lazy(() =>
  import(/* webpackChunkName: 'ContactCard' */ "@/components/contact-card")
);

export default function Cards({ list = [] }) {
  const { store } = useMicroContext();
  const selectedId = useMicroState((s) => s[config.feature.name].selectedId);

  return list
    ?.filter((i) => i?.state === "active")
    ?.map((item) => (
      <Link to={item.id}>
        <ContactCard
          {...item}
          key={item?.id}
          handleClick={onSelect({ id: item?.id, store })}
          isSelected={selectedId === item?.id}
        />
      </Link>
    ));
}
